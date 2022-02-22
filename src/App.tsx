import React, { useRef, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';

import LandingPage from './Sections/LandingPage';
import AboutMe from './Sections/AboutMe';
import Navigation from './Components/Navigation';
import {Scrollbar} from 'smooth-scrollbar-react';

function App() {
  const SectionWrapperref = React.createRef<HTMLDivElement>();
  const AboutMeContainerref = useRef<HTMLDivElement | null >(null);
  const Backgroundref = React.createRef<HTMLDivElement>();
  const Navigationref = React.createRef<HTMLDivElement>();

  //About Me section
    const HeaderRef = useRef<HTMLHeadingElement>(null);
    const HeaderAltRef = useRef<HTMLHeadingElement>(null);
    const Iref = useRef<HTMLHeadingElement>(null);
    const Createref = useRef<HTMLHeadingElement>(null);
    const Designref = useRef<HTMLHeadingElement>(null);
    const Andref = useRef<HTMLHeadingElement>(null);
    const Maximizeref = useRef<HTMLHeadingElement>(null);
    const Experiencesref = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
  })

  const B2W = (x: number) => {
    if((58 + x) < 229){
      if((58 + x) >220){
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
  const getStopPosition = (percent: number) => (window.innerWidth - (window.innerWidth * 0.3)) * (percent/100)

  return (
    <div className="App">
      <Scrollbar 
        onScroll={(status) => {
          const Head = document.getElementById('Name');

          if(Navigationref.current)
            Navigationref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;

          if(Backgroundref.current && Head) {
            Backgroundref.current.style.backgroundColor = `rgb(${B2W(status.offset.y)}, ${B2W(status.offset.y)}, ${B2W(status.offset.y)})`;
            Head.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
            Head.style.visibility = `${ ((58 + status.offset.y) / 229) < 1 ? ((58 + status.offset.y) / 229) : 1 }`
          }

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
              // console.log('start: ' + status.offset.y);
              // console.log(getStopPosition());
              WordIref.style.transform = `translate3d(${(window.innerWidth - (status.offset.y - window.innerHeight) * 6) > 0 ? (window.innerWidth - (status.offset.y - window.innerHeight) * 6) : 0}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordCreateref.style.transform = `translate3d(${( window.innerWidth - (status.offset.y - window.innerHeight) * 6) > getStopPosition(7) ? (window.innerWidth - (status.offset.y - window.innerHeight) * 6) : getStopPosition(7)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordDesignref.style.transform = `translate3d(${(window.innerWidth - (status.offset.y - window.innerHeight) * 6) > getStopPosition(30) ? (window.innerWidth - (status.offset.y - window.innerHeight) * 6) : getStopPosition(30)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordAndref.style.transform = `translate3d(${(window.innerWidth - (status.offset.y - window.innerHeight) * 6) > getStopPosition(55) ? (window.innerWidth - (status.offset.y - window.innerHeight) * 6) : getStopPosition(55)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordMaximizeref.style.transform = `translate3d(${(window.innerWidth - (status.offset.y - window.innerHeight) * 6) > getStopPosition(62) ? (window.innerWidth - (status.offset.y - window.innerHeight) * 6) : getStopPosition(62)}px, ${status.offset.y - window.innerHeight}px, 0px)`;
              WordExperiencesref.style.transform = `translate3d(${(window.innerWidth - (status.offset.y - window.innerHeight) * 6) > -20 ? (window.innerWidth - (status.offset.y - window.innerHeight) * 6) : -20}px, ${status.offset.y - window.innerHeight}px, 0px)`;




            }
          }

          // console.log(status.offset.y, window.innerHeight)
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
        {/* <AboutMe ref={AboutMeref} /> */}
        <AboutMe ref={AboutMeContainerref} />


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