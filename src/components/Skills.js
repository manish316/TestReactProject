// src/components/Skills.js
import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const Skills = () => {
  return (
    <Container id="skills" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <List>
        <ListItem>JavaScript, React.js, Node.js</ListItem>
        <ListItem>SQL, Java, Ext JS</ListItem>
        <ListItem>HTML, CSS, Git, AWS</ListItem>
      </List>
    </Container>
  );
};

export default Skills;
