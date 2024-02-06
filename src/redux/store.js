// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Create this file later

const store = configureStore({
    reducer: rootReducer,
    // Add other middleware and options if needed
  });

export default store;