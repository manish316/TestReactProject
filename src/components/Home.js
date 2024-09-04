// src/components/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container id="home" style={{ marginTop: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        Software Engineer with 4+ years of experience at Highradius in creating dynamic and engaging web applications.
      </Typography>
    </Container>
  );
};

export default Home;
