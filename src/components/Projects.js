// src/components/Projects.js
import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const Projects = () => {
  return (
    <Container id="projects" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <List>
        <ListItem>E-commerce website</ListItem>
        <ListItem>Music Player App</ListItem>
        <ListItem>Chat Application</ListItem>
      </List>
    </Container>
  );
};

export default Projects;
