// src/redux/reducers.js
import { combineReducers } from 'redux';
import landingPageReducer from './landingPageReducer';

const rootReducer = combineReducers({
  landingPage: landingPageReducer,
  // Add other reducers here
});

export default rootReducer;