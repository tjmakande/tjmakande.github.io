import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LandingPage from 'Sections/LandingPage';
import AboutMe from 'Sections/AboutMe';
import Works from 'Sections/Works';
import Footer from 'Sections/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

const HomePage = () => {
    const LandingSectionref = React.createRef<HTMLDivElement>();
    const Containerref = React.createRef<HTMLDivElement>();
    const AboutMeContainerref = React.createRef<HTMLDivElement>();
    const Backgroundref = React.createRef<HTMLDivElement>();
    const Worksref = React.createRef<HTMLDivElement>();
    const Footerref = React.createRef<HTMLDivElement>();
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [screenHeight, setscreenHeight] = useState<number>(window.innerHeight);

    window.addEventListener('resize', (e) => {
      if(window.innerHeight !== screenHeight)
        setscreenHeight(window.innerHeight);

      if(window.innerWidth !== screenWidth)
        setScreenWidth(window.innerWidth);
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if(Containerref.current){

          //initial setup
            const bodyScrollBar = Scrollbar.init(Containerref.current, {damping: 0.05, renderByPixels: true, delegateTo: document});
            ScrollTrigger.scrollerProxy(".scroller", {
              scrollTop(value:number = 0) {
                if (arguments.length) {
                  bodyScrollBar.scrollTop = value; // setter
                }
                return bodyScrollBar.scrollTop;    // getter
              },
              getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              }
            });
            bodyScrollBar.addListener(ScrollTrigger.update);
            ScrollTrigger.defaults({scroller: Containerref.current});


            //Background Item;
              gsap.to('.background', {
                scrollTrigger: {
                  trigger: '.background',
                  pin: true, 
                  pinSpacing:false,
                  start: 'top top',
                  end: 'max',
                  scrub: .1
                }
              });
            
              gsap.to(['.background', '.works_wrapper'], {
                scrollTrigger: {
                  trigger: ".footerwrapper",
                  start: `top bottom`,
                  end: 'max',
                  scrub: .1
                },
                backgroundColor: 'rgb(58, 58, 59)'
              });


            //About me section
            const t1 = gsap.timeline({
              scrollTrigger: {
                  trigger: '.AM_wrapper',
                  pin: true,
                  pinSpacing:false,
                  start: "top top",
                  end: `+=${screenHeight * 2}`,
                  scrub: .2,
              }
            });

            const line1 = document.querySelector('.challenge') as HTMLSpanElement;
            const line2 = document.querySelector('.to') as HTMLSpanElement;
            const line3 = document.querySelector('.solution') as HTMLSpanElement;

            t1.add('start')
            .to('.Othertext', {opacity: 0, duration: 0.2}, 'start')
            .to(".challenge", {scale: 5, duration: 0.5, y: screenHeight * 0.25 - line1.offsetTop , x: screenWidth/2 - line1.offsetLeft - line1.clientWidth/2}, 'start')
            .to(".to", {scale: 5, duration: 0.5, y: screenHeight * 0.45 - line2.offsetTop,  x: screenWidth/2 - line2.offsetLeft - line2.clientWidth/2 }, 'start')
            .to(".solution", {scale: 5, duration: 0.5, y: screenHeight * 0.65 - line3.offsetTop, x: screenWidth/2 - line3.offsetLeft - line3.clientWidth/2}, 'start')



            //works wrapper
            gsap.to('.works_wrapper', {
              scrollTrigger: {
                trigger: '.works_wrapper',
                start: 'top top',
                end: `+=${screenHeight/2}`,
                pin: true,
                pinSpacing: false,
                scrub: .1,
              }
            });
        }
    }, [Containerref, screenWidth, screenHeight, Backgroundref, LandingSectionref, Footerref])

    
    return(
        <div className='scroller' ref={Containerref} style={{position: 'relative', height: '100vh', width: '100vw'}}>
            <Background className="background" ref={Backgroundref}/>
            <LandingPage ref={LandingSectionref} />
            <AboutMe ref={AboutMeContainerref} />
            <Works ref={Worksref} />
            <Footer ref={Footerref} />
        </div>
    )
}

export default HomePage;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(255, 255, 255);
`;