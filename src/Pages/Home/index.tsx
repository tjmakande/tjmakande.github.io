import React from 'react';
import styled from 'styled-components';

import LandingPage from 'Sections/LandingPage';
import AboutMe from 'Sections/AboutMe';
import Works from 'Sections/Works';
import Footer from 'Sections/Footer';
import {Scrollbar} from 'smooth-scrollbar-react';
import { isVoidExpression } from 'typescript';

const HomePage = () => {
    const LandingSectionref = React.createRef<HTMLDivElement>();
    const AboutMeContainerref = React.createRef<HTMLDivElement>();
    const Backgroundref = React.createRef<HTMLDivElement>();
    const Worksref = React.createRef<HTMLDivElement>();
    const Footerref = React.createRef<HTMLDivElement>();


    const [red, green, blue] = [255, 255, 255];

    return(
        <Scrollbar 
        continuousScrolling={false}
        onScroll={(status) => {
          const scrollY = status.offset.y
          //page background color
           Backgroundref.current && (Backgroundref.current.style.transform = `translateY(${scrollY}px)`);
          //  SectionWrapperref.current && (SectionWrapperref.current.style.visibility = scrollY > window.innerHeight * 0.5 ? 'hidden' : 'visible');

          if(LandingSectionref.current){
            const div = LandingSectionref.current;
            const Logo = div.children[0].children[0] as HTMLImageElement;
            Logo.style.transform =`translateY(${scrollY}px)`;
            Logo.style.width = `${100 - scrollY*0.5 > 10 ? 100 - scrollY*0.5 : 10}%`;
          }

          //About Me Section
          if(AboutMeContainerref.current){
          
          }

          //Work section
          if(Worksref.current){
            if(scrollY > window.innerHeight * 2.3 && scrollY < window.innerHeight * 2.7){
              Worksref.current && (Worksref.current.style.transform = `translateY(${scrollY - window.innerHeight * 2.3}px)`)
            }else if(scrollY > window.innerHeight * 2.7) {
              Worksref.current && (Worksref.current.style.transform = `translateY(${(window.innerHeight * 2.7) - window.innerHeight * 2.3}px)`)
            }
          }

          if(scrollY > window.innerHeight * 3.3){
            const y = 1 + (scrollY - window.innerHeight * 3.3) / 150;
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
        <LandingPage ref={LandingSectionref} />
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