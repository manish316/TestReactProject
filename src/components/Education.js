// src/components/Education.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Education = () => {
  return (
    <Container id="education" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Typography variant="body1">Bachelor's degree in Electronics and Communication Engineering</Typography>
    </Container>
  );
};

export default Education;
