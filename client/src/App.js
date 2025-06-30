import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from './ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion,useScroll } from 'framer-motion';

import { Link as ScrollLink, Element } from 'react-scroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';

import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';
import MemoryIcon from '@mui/icons-material/Memory';

import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // for Node.js
import AndroidIcon from '@mui/icons-material/Android'; // for Flutter



function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const MotionButton = motion(Button);
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const projects = [
  {
    title: 'Personalized Music Recommender',
    description: 'A TF-IDF and cosine similarity-based music recommendation system built using Streamlit.',
    tech: 'Python, Pandas, Streamlit, NLP',
    link: 'https://github.com/Saketh-Ganji/Personalized-Music-Recommendation-System'
  },
  {
    title: 'Waste Classification CNN',
    description: 'A deep learning model that classifies waste into biodegradable or non-biodegradable.',
    tech: 'Python, TensorFlow, CNN, Google Colab',
    link: 'https://github.com/Saketh-Ganji/Automated-Waste-Classification'
  },
  {
    title: 'Online Learning Platform',
    description: 'A Django-based web platform for students and instructors to manage courses, quizzes, and resources with secure login.',
    tech: 'Django, Python, HTML, CSS, JavaScript, PostgreSQL, JWT, Docker',
    link: 'https://github.com/Saketh-Ganji/Online-Learning-Platform'
  },
  {
    title: 'Full Stack Portfolio Web App',
    description: 'A responsive portfolio application to showcase projects with add/delete features and React routing.',
    tech: 'React.js, Node.js, Express.js, MongoDB, CSS, Axios',
    link: 'https://github.com/Saketh-Ganji/Portfolio-Web-Application'
  }
];


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // show after 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
           <Box
  sx={{
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    backgroundImage: theme.palette.mode === 'dark'
      ? `url('https://www.transparenttextures.com/patterns/ripples.png')`
      : `url('https://www.transparenttextures.com/patterns/ripples.png')`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover'
  }}
>


      <motion.div
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    height: '4px',
    width: '100%',
    zIndex: 9999,
    background: 'linear-gradient(to right, #2196f3, #21cbf3)',
    transformOrigin: '0%',
    scaleX: scrollYProgress
  }}
/>

      {/* Navbar */}
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
  <Typography variant="h6">Saketh Ganji</Typography>

  {/* Scroll Links */}
  <Box>
    {['home', 'about', 'projects', 'contact'].map((section) => (
      <Button key={section} color="inherit">
        <ScrollLink
          to={section}
          smooth={true}
          duration={500}
          offset={-70}
          style={{ textDecoration: 'none' }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </ScrollLink>
      </Button>
    ))}
  </Box>

  {/* Social Media Icons */}
  <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
    <MotionButton
  href="https://github.com/Saketh-Ganji"
  target="_blank"
  color="inherit"
  startIcon={<GitHubIcon />}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  GitHub
</MotionButton>
  <MotionButton
      href="https://www.linkedin.com/in/saketh-ganji-3085b0281/"
      target="_blank"
      color="inherit"
      startIcon={<LinkedInIcon />}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
    LinkedIn
    </MotionButton>

  </Box>

  {/* Dark Mode Toggle Button */}
  <Box>
    <Button
      onClick={colorMode.toggleColorMode}
      color="inherit"
      startIcon={theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    >
      {theme.palette.mode === 'dark' ? 'Light' : 'Dark'}
    </Button>
  </Box>
</Toolbar>

      </AppBar>

      {/* Offset for fixed navbar */}
      <Toolbar />

     {/* Hero Section */}
<Element name="home">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Box sx={{ position: 'relative', pb: 12 }}>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          px: 2
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Hi, I'm Saketh Ganji
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          A Computer Science undergraduate at Sreyas Institute of Engineering and Technology.
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <MotionButton
            variant="contained"
            color="primary"
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </MotionButton>

          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button>View Projects</Button>
          </ScrollLink>
        </Box>
      </Box>

      {/* ✅ Wave background */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      >
        <path
          fill={theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5'}
          fillOpacity="1"
          d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,197.3C1120,213,1280,171,1360,149.3L1440,128V320H0Z"
        />
      </Box>
    </Box>
  </motion.div>
</Element>


      {/* About Section */}
      <Element name="about">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Box
      sx={{
        py: 10,
        bgcolor: theme.palette.background.default,
        textAlign: 'left'
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: theme.palette.text.primary }}
        >
          About Me
        </Typography>

        <Typography
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            textAlign: 'justify'
          }}
        >
          I'm Ganji Saketh Sai, a passionate Computer Science and Engineering undergraduate at
          Sreyas Institute of Engineering and Technology. I love building impactful software and
          continuously explore new technologies.
        </Typography>

        <Typography
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            textAlign: 'justify'
          }}
        >
          My interests span web technologies, computer networks, operating systems, and cloud
          computing. I’ve worked on several projects including an online learning platform, a
          personalized music recommender, and a CNN-based waste classification system.
        </Typography>

        <Typography
          sx={{
            color: theme.palette.text.secondary,
            textAlign: 'justify'
          }}
        >
          I’m proficient in Java, Python, JavaScript, and C, with experience in MySQL and MongoDB.
          Currently enhancing my skills through certifications like DSA by Smart Interviews and
          Cloud Computing via NPTEL.
        </Typography>
      </Container>
    </Box>
  </motion.div>
</Element>

      <Element name="tech">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Box sx={{ py: 10, bgcolor: theme.palette.background.default, textAlign: 'center' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Technologies & Tools
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {[
          { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={40} />, label: 'Java' },
          { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={40} />, label: 'Python' },
          { icon: <MemoryIcon fontSize="large" />, label: 'C' },
          { icon: <IntegrationInstructionsIcon fontSize="large" />, label: 'Node.js' },
          { icon: <AndroidIcon fontSize="large" />, label: 'Flutter' },
          { icon: <CodeIcon fontSize="large" />, label: 'JavaScript ' },
          { icon: <SettingsIcon fontSize="large" />, label: 'Express ' },
          { icon: <StorageIcon fontSize="large" />, label: 'MongoDB / SQL' },
          { icon: <CloudIcon fontSize="large" />, label: 'Cloud ' },
          { icon: <CodeIcon fontSize="large" />, label: 'React ' }
        ].map((tech, i) => (
          <Grid key={i} item xs={6} sm={4} md={2}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                color: theme.palette.text.secondary
              }}
            >
              {tech.icon}
              <Typography variant="body2" align="center">
                {tech.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </motion.div>
</Element>


      {/* Projects Section */}
     <Element name="projects">
  <Box sx={{ py: 10, bgcolor: theme.palette.background.default }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
              style={{ borderRadius: '12px' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  transition: 'transform 0.2s ease-in-out',
                  boxShadow: 3,
                  bgcolor: theme.palette.background.paper,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    <strong>Tech:</strong> {project.tech}
                  </Typography>
                </CardContent>
                <CardActions>
                  <MotionButton
                    href={project.link}
                    target="_blank"
                    variant="outlined"
                    fullWidth
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                  </MotionButton>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
</Element>




      {/* Contact Section */}
      <Element name="contact">
         <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
  <Box sx={{ py: 10, bgcolor: theme.palette.background.default }}>

    <Container maxWidth="sm">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Feel free to reach out through the form below.
      </Typography>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
       onSubmit={(e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    })
    .then((resData) => {
      alert("Message sent successfully!");
    })
    .catch((err) => {
      alert("Error sending message.");
      console.error(err);
    });

  e.target.reset(); // optional: reset the form
}}

      >
        <TextField name="name" label="Name" required fullWidth />
        <TextField name="email" label="Email" type="email" required fullWidth />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          required
          fullWidth
        />
        <MotionButton
        variant="contained"
        color="primary"
         whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
          Send
      </MotionButton>

      </Box>
    </Container>
  </Box>
  </motion.div>
</Element>
    {showScrollTop && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    style={{
      position: 'fixed',
      bottom: 30,
      right: 30,
      zIndex: 9999
    }}
  >
    <Button
      variant="contained"
      color="primary"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        borderRadius: '50%',
        minWidth: '50px',
        height: '50px',
        padding: 0
      }}
    >
      <ArrowUpwardIcon />
    </Button>
  </motion.div>
)}
<Box
  sx={{
    py: 4,
    bgcolor: theme.palette.background.paper,
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`
  }}
>
  <Typography
    variant="body1"
    sx={{ color: theme.palette.text.secondary }}
  >
    Feel free to contact at{' '}
    <a
      href="mailto:sakethganji08@gmail.com"
      style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
    >
      sakethganji08@gmail.com
    </a>
  </Typography>
</Box>


    </Box>
    
  );
}

export default App;
