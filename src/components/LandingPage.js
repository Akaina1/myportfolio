// src/components/LandingPage.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import palette from '../theme';

const LandingPage = () => {
  return (
    <Container style={{ textAlign: 'center'}}>
      <Typography variant="h2" component="h2" gutterBottom>
        Portfolio By Aaron Dost
      </Typography>
      <Typography variant="body1" paragraph>
        Explore my projects and learn more about my skills and experiences.
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item>
          <Button
              variant="contained"
              sx={{
                margin: '5px',
                backgroundColor: palette.tertiary,
                color: palette.accent,
                ':hover': {
                  color: '#fff', // Change to white on hover
                  backgroundColor: '#yourHoverColor', // Specify the desired hover background color
                }}}
            >My Portfolio</Button>
        </Grid>
        <Grid item>
        <Button
              variant="contained"
              sx={{
                margin: '5px',
                backgroundColor: palette.tertiary,
                color: palette.accent,
                ':hover': {
                  color: '#fff', // Change to white on hover
                  backgroundColor: '#yourHoverColor', // Specify the desired hover background color
                }}}
            >Contact Me
          </Button>
        </Grid>
        <Grid item>
        <Button
              variant="contained"
              sx={{
                margin: '5px',
                backgroundColor: palette.tertiary,
                color: palette.accent,
                ':hover': {
                  color: '#fff', // Change to white on hover
                  backgroundColor: '#yourHoverColor', // Specify the desired hover background color
                }}}
            >About Me
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;