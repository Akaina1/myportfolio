// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Provider store={store}>
        {/* Other components and content */}
        <LandingPage />
    </Provider>
  );
};

export default App;