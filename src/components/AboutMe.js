// src/components/AboutMe.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import palette from '../theme';

const AboutMe = () => {
  return (
<Box sx={{ padding: '5px', backgroundColor: palette.background, borderRadius: '10px', marginTop: '16px', textAlign: 'left', mx: 'auto', maxWidth: '600px' }}>
    <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        About Me
    </Typography>
      <hr />
      <Typography variant='h4' gutterBottom> Personal Information </Typography>
      <Typography variant="body1" paragraph>
        My name is Aaron, a 28-year-old Canadian Programmer with a passion for code and technology. 
        With a strong foundation in core programming languages such as C++, C#, and JavaScript, 
        I have spent the majority of my time honing my skills during my studies as well as a personal 
        hobby. One of my greatest strengths is my ability to learn and adapt to new situations. 
        <br />
        <br />
        I have spent the last 8 years studying at the college level which has let me develop excellent time 
        management skills and learning habits. I pride myself on my ability to pick up new programming 
        languages and concepts quickly and efficiently. I am self-motivated and excel at my work because 
        coding is more than just a job to me, it is a passion. From my interest in Artificial Inteligence 
        and learning how neuroscience applies to our understanding of how a sythetic mind could be created,
        to my love of video games and the technology that goes into creating something that can be enjoyed
        by millions of people. 
        <br />
        <br />
        I am always looking to learn more and expand my knowledge of programming 
        and technology as a whole. My main focus is on full stack web development and I am currently 
        working on various projects using React, Redux, SASS, Node.js, Express.js, Passport.js, JWT, 
        MongoDB, and Mongoose. I am also focusing on the software production lifecycle and the Agile 
        Development Methodology.
      </Typography>
      <hr />
      <Typography variant='h4' gutterBottom> Education </Typography>
        <Typography variant="body1">
        <ul>
            <li>
            <Typography variant="body1" component="span">
                <strong>Conestoga College - Software Engineering Technology</strong>
                <br />
                September 2020 - April 2024
            </Typography>
            </li>
            <br />
            <li>
            <Typography variant="body1" component="span">
                <strong>Conestoga College - Business Administration: Finance</strong>
                <br />
                September 2016 - April 2019
            </Typography>
            </li>
            <br />
            <li>
            <Typography variant="body1" component="span">
                <strong>Conestoga College - Business Foundations</strong>
                <br />
                September 2015 - August 2016
            </Typography>
            </li>
        </ul>
        </Typography>
        <hr />
        <Typography variant='h4' gutterBottom> Skills </Typography>
        <Typography variant="body1">
            <ul>
                <li>Strong foundation in C, C++, C#, JavaScript, HTML, and CSS.</li>
                <li> Main focus in full-stack web development with React, Node.js, and MongoDB</li>
                <li>Quick learner with the ability to adapt to new programming languages</li>
                <li>Detail-oriented with a keen eye for code quality and optimization</li>
                <li>Independent problem solver with strong troubleshooting skills</li>
                <li>Knowledge of Agile Development and Scrum Methodologies</li>
                <li>Up-to-date with the latest technologies and trends in web development</li>
                <li>Confident in my ability to work in a team environment</li>
            </ul>
        </Typography>
        <hr />
        <Typography variant='h4' gutterBottom> Additional Information </Typography>
        <Typography variant="body1">
            <ul>
                <li>Currently Pursuing my CSM certification through Scrum Alliance</li>
                <li>Passionate about coding and continuous learning</li>
                <li>Willing to relocate for work</li>
                <li>Eager to learn new languages and frameworks or earn certifications as needed</li>
            </ul>
        </Typography>
      {/* Add more information about yourself as needed */}
    </Box>
  );
};

export default AboutMe;