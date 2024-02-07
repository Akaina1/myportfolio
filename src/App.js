// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import palette from './theme';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import MyPortfolio from './components/MyPortfolio';
import ContactMe from './components/ContactMe';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Provider store={store}>
      
      <div style={{ backgroundColor: palette.background, minHeight: '100vh', margin: 0, padding: 0 }}>
        <NavBar onSectionChange={handleSectionChange} />
        <LandingPage onSectionChange={handleSectionChange} />
        {selectedSection === 'portfolio' && <MyPortfolio/>}
        {selectedSection === 'about' && <AboutMe/>}
        {selectedSection === 'contact' && <ContactMe/>}
        {/* Add other sections as needed */}
      </div>
    </Provider>
  );
};

export default App;