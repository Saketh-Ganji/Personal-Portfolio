const express = require('express');

module.exports = (db) => {
  const router = express.Router();
  const contactCollection = db.collection('contacts');

  router.post('/', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const result = await contactCollection.insertOne({
        name, email, message, createdAt: new Date()
      });
      res.status(200).json({ message: 'Message sent!', id: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  });

  return router;
};
