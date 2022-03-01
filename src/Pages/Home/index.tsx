import React, {useState} from 'react';
import styled from 'styled-components';
import {
    Link,
  } from "react-router-dom";

import LandingPage from 'Sections/LandingPage';
import AboutMe from 'Sections/AboutMe';
import Works from 'Sections/Works';
import Footer from 'Sections/Footer';
import {Scrollbar} from 'smooth-scrollbar-react';

const HomePage = () => {
    const SectionWrapperref = React.createRef<HTMLDivElement>();
    const AboutMeContainerref = React.createRef<HTMLDivElement>();
    const Backgroundref = React.createRef<HTMLDivElement>();
    // const Professionref = React.createRef<HTMLParagraphElement>();
    const Emailref = React.createRef<HTMLAnchorElement>();
    const WorksLinkref = React.createRef<HTMLAnchorElement>();
    const AboutLinkref = React.createRef<HTMLAnchorElement>();
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

      const W2B = (x: number) => {
        // return(((229/2) - x) + (window.innerHeight * 6.7))
        if(229 - ((x - (window.innerHeight * 6.5)) / 4) > 58){
          return(229 - ((x - (window.innerHeight * 6.5)) / 4))
        } else { return(58)}
      }

      const getStopPosition = (percent: number) => (window.innerWidth - (window.innerWidth * 0.3)) * (percent/100);
      const moveFromLeft = (pos: number) => (window.innerWidth - (pos - window.innerHeight * 1.3) * 6);


    return(
        <Scrollbar 
        continuousScrolling={false}
        onScroll={(status) => {
          const Head = document.getElementById('Name');

          //Navigation

          // Profession && EmailLink
          if(Emailref.current && WorksLinkref.current && AboutLinkref.current) {

            // Professionref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
            Emailref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
            AboutLinkref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
            WorksLinkref.current.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;


            Emailref.current.style.color = `rgb(229, 229, 229)`;
            // Professionref.current.style.color = `rgb(229, 229, 229)`;
            AboutLinkref.current.style.color = `rgb(229, 229, 229)`;
            WorksLinkref.current.style.color = `rgb(229, 229, 229)`;


            if(status.offset.y > (window.innerHeight * 0.2)){
              // Professionref.current.style.color = `rgb(58, 58, 58)`;
              Emailref.current.style.color = `rgb(58, 58, 58)`;
              AboutLinkref.current.style.color = `rgb(58, 58, 58)`;
              WorksLinkref.current.style.color = `rgb(58, 58, 58)`;

            }

            if ( status.offset.y > (window.innerHeight * 7.6)){
              Emailref.current.style.color = `rgb(229, 229, 229)`;
              // Professionref.current.style.color = `rgb(229, 229, 229)`;
              AboutLinkref.current.style.color = `rgb(229, 229, 229)`;
              WorksLinkref.current.style.color = `rgb(229, 229, 229)`;
            }
          }

          
          //page background color
          if(Backgroundref.current && Head) {
            Backgroundref.current.style.backgroundColor = `rgb(${B2W(status.offset.y)}, ${B2W(status.offset.y)}, ${B2W(status.offset.y)})`;
            Head.style.transform = `translate3d(0px, ${status.offset.y}px, 0px)`;
          }
           SectionWrapperref.current && (SectionWrapperref.current.style.visibility = status.offset.y > window.innerHeight * 0.5 ? 'hidden' : 'visible');

          //About Me Section
          if(AboutMeContainerref.current){
            //starting point in scroll 130vh && ending point in scroll 350vh
            if(status.offset.y > (window.innerHeight * 1.3) && status.offset.y <= window.innerHeight * 3.5){
               const Parent = AboutMeContainerref.current;
               const Aboutref = Parent.children[0] as HTMLHeadingElement;
               const Meref = Parent.children[1] as HTMLHeadingElement;

               const TextParent = Parent.children[2];
               const WordIref = TextParent.children[0] as HTMLHeadingElement
               const WordCreateref = TextParent.children[1] as HTMLHeadingElement
               const WordDesignref = TextParent.children[2] as HTMLHeadingElement
               const WordAndref = TextParent.children[3] as HTMLHeadingElement
               const WordMaximizeref = TextParent.children[4] as HTMLHeadingElement
               const WordExperiencesref = TextParent.children[5] as HTMLHeadingElement
              
              Aboutref.style.transform = `rotate(-90deg) translate3d(${-(status.offset.y - window.innerHeight * 1.3)}px, 0px, 0px)`;
              Meref.style.transform = `rotate(-90deg) translate3d(${-(status.offset.y - window.innerHeight * 1.3)}px, 0px, 0px)`;

              WordIref.style.transform = `translate3d(${moveFromLeft(status.offset.y) > 0 ? moveFromLeft((status.offset.y)) : 0}px, ${(status.offset.y) - window.innerHeight * 1.3}px, 0px)`;
              WordCreateref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 600 > getStopPosition(7) ? moveFromLeft(status.offset.y) + 600 : getStopPosition(7)}px, ${status.offset.y - window.innerHeight * 1.3}px, 0px)`;
              WordDesignref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 1200 > getStopPosition(30) ? moveFromLeft(status.offset.y) + 1200: getStopPosition(30)}px, ${status.offset.y - window.innerHeight * 1.3}px, 0px)`;
              WordAndref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 1800 > getStopPosition(55) ? moveFromLeft(status.offset.y) + 1800 : getStopPosition(55)}px, ${status.offset.y - window.innerHeight * 1.3}px, 0px)`;
              WordMaximizeref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 2000> getStopPosition(62) ? moveFromLeft(status.offset.y)+ 2000 : getStopPosition(62)}px, ${status.offset.y - window.innerHeight * 1.3}px, 0px)`;
              WordExperiencesref.style.transform = `translate3d(${moveFromLeft(status.offset.y) + 2300 > -20 ? moveFromLeft(status.offset.y) + 2300 : -20}px, ${status.offset.y - window.innerHeight * 1.3}px, 0px)`;
            }
          }

          //Work section
          if(Worksref.current){
            // 350vh checkmark
            if(status.offset.y > window.innerHeight * 3.5){
              const Parent = Worksref.current.children[0];
              const wordSelected = Parent.children[0] as HTMLHeadingElement;
              const WorksContainer = Parent.children[1] as HTMLDivElement;
              const StripWrapperOne = WorksContainer.children[0] as HTMLDivElement;
              const StripWrapperTwo = WorksContainer.children[1] as HTMLDivElement;
              wordSelected.style.opacity = (1 - ((status.offset.y - ((window.innerHeight * 3.5))) / 100) > 0.05 ? 1 - ((status.offset.y - ((window.innerHeight *3.5))) / 100) : 0.05 ).toString();
              wordSelected.style.transform = `translate3d(0px, ${(status.offset.y - window.innerHeight * 3.5)}px, 0px)`;
              WorksContainer.style.transform = `translate3d(0px, ${(status.offset.y - window.innerHeight * 3.5)}px, 0px)`;
              StripWrapperOne.style.transform = `translate3d(0px, ${(-window.innerHeight * 4) + (1.5 * (status.offset.y - window.innerHeight * 3.5))}px , 0px)`;
              StripWrapperTwo.style.transform = `translate3d(0px, ${(window.innerHeight) + (-1.5 * (status.offset.y - window.innerHeight * 3.5))}px, 0px)`;

              if(status.offset.y > window.innerHeight * 6.5)
                wordSelected.style.opacity = (1 - ((status.offset.y - ((window.innerHeight * 3.5))) / 100) > 0.00 ? 1 - ((status.offset.y - ((window.innerHeight *3.5))) / 100) : 0 ).toString();

            }
          }

          if(TransitionTworef.current && Backgroundref.current){
            if(status.offset.y > window.innerHeight * 5.3) Backgroundref.current.style.backgroundColor = `rgb(${W2B(status.offset.y)}, ${W2B(status.offset.y)}, ${W2B(status.offset.y)})`;
          }

        }} 
        damping={0.033} 
        style={{
          overflow: 'hidden', 
          outline: 'none', 
          height: '100vh',
          backgroundColor: 'rgb(58,58,58)'
        }}
      >
        <EmailLink href="https://www.google.com" ref={Emailref}>Contact</EmailLink>
        {/* <Profession ref={Professionref}>Web Developer</Profession> */}
        <WorksLink to={'/Works'} ref={WorksLinkref}>Works</WorksLink>
        <AboutLink to={'/About'} ref={AboutLinkref}>About Me</AboutLink>
        <Background ref={Backgroundref}/>
        <LandingPage ref={SectionWrapperref} />
        <AboutMe ref={AboutMeContainerref} />
        <Works ref={Worksref} />
        <TransitionTwo ref={TransitionTworef} />
        <Footer ref={Footerref} />
      </Scrollbar>
    )
}

export default HomePage;

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

const EmailLink = styled.a`
    position: absolute;
    font-size: clamp(16px, 2.5vw, 20px);
    top: 93vh;
    right: 2vw;
    z-index: 7;
    text-decoration: underline;
    color: rgb(229, 229, 229);
    font-weight: 600;

    &:hover{
      cursor: pointer;
    }
`;

// const Profession = styled.p`
//   position: absolute;
//   font-size: clamp(16px, 2.5vw, 20px);
//   top: 93vh;
//   right: 2vw;
//   z-index: 7;
//   margin: 0;
//   color: rgb(229, 229, 229);
//   font-weight: 600;
// `;

const AboutLink = styled(Link)`
  position: absolute;
  font-size: clamp(16px, 2.5vw, 20px);
  top: 3vh;
  left: 2vw;
  z-index: 7;
  margin: 0;
  color: rgb(229, 229, 229);
  font-weight: 600;
`;

const WorksLink = styled(Link)`
  position: absolute;
  font-size: clamp(16px, 2.5vw, 20px);
  top: 3vh;
  right: 2vw;
  z-index: 7;
  margin: 0;
  color: rgb(229, 229, 229);
  font-weight: 600;
`;