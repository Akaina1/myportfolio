// ProjectCard.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const { image, title, technologies, about, keyTakeaways, links } = project;

  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        style={{
          cursor: 'pointer',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <CardMedia
          component="img"
          height="120"
          image={image}
          alt={title}
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Technologies Used: {technologies.join(', ')}
          </Typography>
        </CardContent>
      </Card>

      <ProjectModal
        project={{
          title,
          about,
          keyTakeaways,
          links,
        }}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProjectCard;