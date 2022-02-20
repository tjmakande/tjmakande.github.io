import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

import LandingPage from './Sections/LandingPage';
import AboutMe from './Sections/AboutMe';
import Navigation from './Components/Navigation';

function App() {
  const SectionWrapperref = React.createRef<HTMLDivElement>();
  const AboutMeref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(AboutMeref.current)
        AboutMeref.current.style.opacity = (1 - ((window.innerHeight*0.2 - window.scrollY) / (window.innerHeight * 0.2))).toString(10); 
    })
  })

  return (
    <div className="App">
      <Navigation />
      <LandingPage ref={SectionWrapperref} />
      <Transition />
      <AboutMe ref={AboutMeref} />
    </div>
  );
}

export default App;

const Transition = styled.div`
  height: 200vh;
`;