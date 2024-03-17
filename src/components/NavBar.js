// src/components/NavBar.js
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Resume from '../IMG/Aaron_Dost_Resume_2(2024).pdf'

const NavBar = ({ onSectionChange }) => {
  const [quickLinksAnchor, setQuickLinksAnchor] = React.useState(null);

  const handleQuickLinksOpen = (event) => {
    setQuickLinksAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setQuickLinksAnchor(null);
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/aarondost/', '_blank');
    handleClose();
  };

  const downloadResume = () => {
    // Replace 'resume.pdf' with the actual file name of your resume
    const resumePath = Resume;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Aaron-Dost-resume.pdf'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const openGitHub = () => {
    window.open('https://github.com/Akaina1', '_blank');
    handleClose();
  };

  return (
    <div>
      {/* Quick Links Dropdown */}
      <IconButton onClick={handleQuickLinksOpen} size="Medium">
        <MenuIcon /> Quick Links  
      </IconButton>
      <Menu
        anchorEl={quickLinksAnchor}
        open={Boolean(quickLinksAnchor)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Quick Links items */}
        <MenuItem onClick={openLinkedIn}>LinkedIn</MenuItem>
        <MenuItem onClick={downloadResume}>Download Resume</MenuItem>
        <MenuItem onClick={openGitHub}>GitHub</MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
