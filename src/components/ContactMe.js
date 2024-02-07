// src/components/AboutMe.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import palette from '../theme';

const ContactMe = () => {
  return (
<Box sx={{ padding: '5px', backgroundColor: palette.background, borderRadius: '10px', marginTop: '16px', textAlign: 'left', mx: 'auto', maxWidth: '600px' }}>
<Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        Contact Me
      </Typography>
      <hr />
      <Typography variant="body1" paragraph fontSize={'1.3rem'}>
        Contact Email: <a href="mailto:Aaronhdost@gmail.com">Aaronhdost@gmail.com</a>
        <br />
        <br />
        LinkedIn: <a href="https://www.linkedin.com/in/aarondost/">Aaron Dost</a>
      </Typography>
    </Box>
  );
};

export default ContactMe;