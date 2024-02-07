// src/components/MyPortfolio.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard'; // Make sure to import your ProjectCard component
import projects from './Projects'; // Assuming you have a file named Projects.js
import palette from '../theme';

const MyPortfolio = () => {
  return (
<Box sx={{ padding: '5px', backgroundColor: palette.background, borderRadius: '10px', marginTop: '16px', textAlign: 'left', mx: 'auto', maxWidth: '600px' }}>
<Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        My Projects
      </Typography>
      <hr />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {projects.map((project) => (
          <Box key={project.id} sx={{ width: '100%', marginBottom: '20px' }}>
            <ProjectCard project={project} style={{ borderRadius: '8px', padding: '20px' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MyPortfolio;