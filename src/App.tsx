import React from 'react';

import './App.css';

import LandingPage from './Sections/LandingPage';
import AboutMe from './Sections/AboutMe';
import Navigation from './Components/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;