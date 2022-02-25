import React from 'react';
import styled from 'styled-components';
import './App.css';

import LandingPage from './Sections/LandingPage';
import AboutMe from './Sections/AboutMe';
import Navigation from './Components/Navigation';
import Works from './Sections/Works';
import Footer from './Sections/Footer';
import {Scrollbar} from 'smooth-scrollbar-react';

function App() {
  const SectionWrapperref = React.createRef<HTMLDivElement>();
  const AboutMeContainerref = React.createRef<HTMLDivElement>();
  const Backgroundref = React.createRef<HTMLDivElement>();
  const Navigationref = React.createRef<HTMLDivElement>();
  const Worksref = React.createRef<HTMLDivElement>();
  const TransitionTworef = React.createRef<HTMLDivElement>();
  const Footerref = React.createRef<HTMLDivElement>();


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

  const W2B = (x: number) => {
    // return(((229/2) - x) + (window.innerHeight * 6.7))
    if(229 - ((x - (window.innerHeight * 6.5)) / 4) > 58){
      return(229 - ((x - (window.innerHeight * 6.5)) / 4))
    } else { return(58)}
  }

  const getStopPosition = (percent: number) => (window.innerWidth - (window.innerWidth * 0.3)) * (percent/100);
  const moveFromLeft = (pos: number) => (window.innerWidth - (pos - window.innerHeight) * 6)

  return (
    <div className="App">
      <Scrollbar 
        continuousScrolling={false}
        onScroll={(status) => {
          const Head = document.getElementById('Name');

          //Navigation
          if(Navigationref.current)
            Navigationref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
          
          //page background color
          if(Backgroundref.current && Head) {
            Backgroundref.current.style.backgroundColor = `rgb(${B2W(status.offset.y)}, ${B2W(status.offset.y)}, ${B2W(status.offset.y)})`;
            Head.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
          }

           SectionWrapperref.current && (SectionWrapperref.current.style.visibility = status.offset.y > window.innerHeight * 0.5 ? 'hidden' : 'visible');

          //About Me Section
          if(AboutMeContainerref.current){
            if(status.offset.y > window.innerHeight && status.offset.y <= window.innerHeight * 2.8){
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

          //Work section
          if(Worksref.current){
            if(status.offset.y > window.innerHeight * 2.8){
              const Parent = Worksref.current.children[0];
              const wordSelected = Parent.children[0] as HTMLHeadingElement;
              const wordWorks = Parent.children[1] as HTMLHeadingElement;
              const WorksContainer = Parent.children[2] as HTMLDivElement;
              const StripWrapperOne = WorksContainer.children[0] as HTMLDivElement;
              const StripWrapperTwo = WorksContainer.children[1] as HTMLDivElement;


              wordSelected.style.opacity = (1 - ((status.offset.y - ((window.innerHeight *2.8))) / 100) > 0.05 ? 1 - ((status.offset.y - ((window.innerHeight *2.8))) / 100) : 0.05 ).toString();
              wordSelected.style.transform = `translate3d(0px, ${(status.offset.y - window.innerHeight * 2.8)}px, 0px)`;
              wordWorks.style.opacity = (1 - ((status.offset.y - ((window.innerHeight *2.8))) / 100) > 0.05 ? 1 - ((status.offset.y - ((window.innerHeight *2.8))) / 100) : 0.05 ).toString();
              wordWorks.style.transform = `translate3d(0px, ${(status.offset.y - window.innerHeight * 2.8)}px, 0px)`;
              WorksContainer.style.transform = `translate3d(0px, ${(status.offset.y - window.innerHeight * 2.8)}px, 0px)`;
              StripWrapperOne.style.transform = `translate3d(0px, ${(-window.innerHeight * 4) + (1.5 * (status.offset.y - window.innerHeight * 2.8))}px , 0px)`;
              StripWrapperTwo.style.transform = `translate3d(0px, ${(window.innerHeight) + (-1.5 * (status.offset.y - window.innerHeight * 2.8))}px, 0px)`;

            }
          }

          if(TransitionTworef.current && Backgroundref.current){
            if(status.offset.y > window.innerHeight * 6.5) Backgroundref.current.style.backgroundColor = `rgb(${W2B(status.offset.y)}, ${W2B(status.offset.y)}, ${W2B(status.offset.y)})`;
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
        <TransitionTwo ref={TransitionTworef} />
        <Footer ref={Footerref} />
      </Scrollbar>
    </div>
  );
}

export default App;

//Transition One is thought in progress
const TransitionTwo = styled.div` 
  height: 25vh;
  width: 100vw;
`;

const Background = styled.div`
  height: 100%;
  width:100vw;
  z-index: -1;
  position: absolute;
  background-color: rgb(58, 58, 58);
`;