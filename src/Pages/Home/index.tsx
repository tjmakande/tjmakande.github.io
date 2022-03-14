import React from 'react';
import styled from 'styled-components';

import LandingPage from 'Sections/LandingPage';
import AboutMe from 'Sections/AboutMe';
import Works from 'Sections/Works';
import Footer from 'Sections/Footer';
import {Scrollbar} from 'smooth-scrollbar-react';

const HomePage = () => {
    const SectionWrapperref = React.createRef<HTMLDivElement>();
    const AboutMeContainerref = React.createRef<HTMLDivElement>();
    const Backgroundref = React.createRef<HTMLDivElement>();
    const Worksref = React.createRef<HTMLDivElement>();
    const Footerref = React.createRef<HTMLDivElement>();

    const [red, green, blue] = [255, 255, 255];

    return(
        <Scrollbar 
        continuousScrolling={false}
        onScroll={(status) => {
          //page background color
           Backgroundref.current && (Backgroundref.current.style.transform = `translateY(${status.offset.y}px)`);
          //  SectionWrapperref.current && (SectionWrapperref.current.style.visibility = status.offset.y > window.innerHeight * 0.5 ? 'hidden' : 'visible');

          //About Me Section
          if(AboutMeContainerref.current){
            //starting point in scroll 130vh && ending point in scroll 350vh
            if(status.offset.y > (window.innerHeight * 1.3) && status.offset.y <= window.innerHeight * 3.5){
            }
          }

          //Work section
          if(Worksref.current){
          
          }

          if(status.offset.y > window.innerHeight * 2.3){
            const y = 1 + (status.offset.y - window.innerHeight * 2.3) / 150;
            const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
            
            Backgroundref.current && (Backgroundref.current.style.backgroundColor = `rgb(${r < 58 ? 58 : r}, ${g < 58 ? 58 : g}, ${b < 58 ? 58 : b} )`);
        } else {
            Backgroundref.current && (Backgroundref.current.style.backgroundColor = `rgb(255, 255, 255)`);
        }

        }} 
        damping={0.033} 
        style={{
          overflow: 'hidden', 
          outline: 'none', 
          height: '100vh',
          position: 'relative'
        }}
      >
        <Background ref={Backgroundref}/>
        <LandingPage ref={SectionWrapperref} />
        <AboutMe ref={AboutMeContainerref} />
        <Works ref={Worksref} />
        <Footer ref={Footerref} />
      </Scrollbar>
    )
}

export default HomePage;

const Background = styled.div`
  height: 100vh;
  width:100vw;
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(255, 255, 255);
`;