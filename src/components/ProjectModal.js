// ProjectModal.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

const ProjectModal = ({ project, open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  // Destructure the links object
  const { title, about, keyTakeaways, links } = project;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>{about}</Typography>
        <Typography variant="h6" gutterBottom>Key Takeaways</Typography>
        <Typography variant="body1" paragraph>{keyTakeaways}</Typography>
        <Typography variant="h6" gutterBottom>Links</Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Github:</strong>{' '}
          {links && links.github ? (
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              {links.github}
            </a>
          ) : (
            'Not available'
          )}
          <br />
          <br />
          <strong>Live Demo:</strong>{' '}
          {links && links.liveDemo ? (
            <a href={links.liveDemo} target="_blank" rel="noopener noreferrer">
              {links.liveDemo}
            </a>
          ) : (
            'Not available'
          )}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;