// src/components/Experience.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Experience = () => {
  return (
    <Container id="experience" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Typography variant="body1">Software Engineer at Highradius</Typography>
      <Typography variant="body1">Associate Software Engineer at Highradius</Typography>
    </Container>
  );
};

export default Experience;
