// src/components/About.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const About = () => {
  return (
    <Container id="about" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">Phone: +918917620004</Typography>
      <Typography variant="body1">Email: manish9864040418@gmail.com</Typography>
      <Typography variant="body1">
        LinkedIn: <Link href="https://www.linkedin.com/in/manish-gupta45/">manish-gupta45</Link>
      </Typography>
    </Container>
  );
};

export default About;
