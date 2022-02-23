import React from 'react';
import styled from 'styled-components';
import './App.css';

import LandingPage from './Sections/LandingPage';
import AboutMe from './Sections/AboutMe';
import Navigation from './Components/Navigation';
import Works from './Sections/Works';
import {Scrollbar} from 'smooth-scrollbar-react';

function App() {
  const SectionWrapperref = React.createRef<HTMLDivElement>();
  const AboutMeContainerref = React.createRef<HTMLDivElement>();
  const Backgroundref = React.createRef<HTMLDivElement>();
  const Navigationref = React.createRef<HTMLDivElement>();
  const Worksref = React.createRef<HTMLDivElement>();


  const B2W = (x: number) => {
    if((58 + x) < 229){
      if((58 + x) > 220){
        return 229;
      }
      return (58+x)
    }
  }

  // const W2B = (x: number) => {
  //   if((229/2) - x > 58){
  //     return(229 - x)
  //   }
  // }

  const getStopPosition = (percent: number) => (window.innerWidth - (window.innerWidth * 0.3)) * (percent/100);
  const moveFromLeft = (pos: number) => (window.innerWidth - (pos - window.innerHeight) * 6)

  return (
    <div className="App">
      <Scrollbar 
        onScroll={(status) => {
          const Head = document.getElementById('Name');

          //Navigation
          if(Navigationref.current)
            Navigationref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
          
          //page background color
          if(Backgroundref.current && Head) {
            Backgroundref.current.style.backgroundColor = `rgb(${B2W(status.offset.y)}, ${B2W(status.offset.y)}, ${B2W(status.offset.y)})`;
            Head.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
            Head.style.visibility = `${ ((58 + status.offset.y) / 229) < 1 ? ((58 + status.offset.y) / 229) : 1 }`
          }

           SectionWrapperref.current && (SectionWrapperref.current.style.visibility = status.offset.y > window.innerHeight * 0.5 ? 'hidden' : 'visible');

          //About Me Section
          if(AboutMeContainerref.current){
            if(status.offset.y > window.innerHeight){
               const Parent = AboutMeContainerref.current.children[0]
               const Aboutref = Parent.children[0] as HTMLHeadingElement;
               const Meref = Parent.children[1] as HTMLHeadingElement;

               const TextParent = Parent.children[2];
               const WordIref = TextParent.children[0] as HTMLHeadingElement
               const WordCreateref = TextParent.children[1] as HTMLHeadingElement
               const WordDesignref = TextParent.children[2] as HTMLHeadingElement
               const WordAndref = TextParent.children[3] as HTMLHeadingElement
               const WordMaximizeref = TextParent.children[4] as HTMLHeadingElement
               const WordExperiencesref = TextParent.children[5] as HTMLHeadingElement
              
              Aboutref.style.transform = `rotate(-90deg) translate3d(${-(status.offset.y - window.innerHeight)}px, 0px, 0px)`;
              Meref.style.transform = `rotate(-90deg) translate3d(${-(status.offset.y - window.innerHeight)}px, 0px, 0px)`;

              WordIref.style.transform = `translate3d(${moveFromLeft(status.offset.y) > 0 ? moveFromLeft(status.offset.y) : 0}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordCreateref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 600 > getStopPosition(7) ? moveFromLeft(status.offset.y) + 600 : getStopPosition(7)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordDesignref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 1200 > getStopPosition(30) ? moveFromLeft(status.offset.y) + 1200: getStopPosition(30)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordAndref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 1800 > getStopPosition(55) ? moveFromLeft(status.offset.y) + 1800 : getStopPosition(55)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordMaximizeref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 2000> getStopPosition(62) ? moveFromLeft(status.offset.y)+ 2000 : getStopPosition(62)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordExperiencesref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 2300 > -20 ? moveFromLeft(status.offset.y) + 2300 : -20}px, ${status.offset.y - window.innerHeight}px, 0px)`;
            }
          }
        }} 
        damping={0.033} 
        style={{
          overflow: 'hidden', 
          outline: 'none', 
          height: '100vh'
        }}
      >
        <Navigation ref={Navigationref} />
        <Background ref={Backgroundref}/>
        <LandingPage ref={SectionWrapperref} />
        <AboutMe ref={AboutMeContainerref} />
        <Works ref={Worksref} />
      </Scrollbar>
    </div>
  );
}

export default App;

const Background = styled.div`
  height: 100%;
  width:100vw;
  z-index: -1;
  position: absolute;
  background-color: rgb(58, 58, 58);
`;