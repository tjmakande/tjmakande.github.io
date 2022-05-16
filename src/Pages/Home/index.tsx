import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMe from 'Sections/AboutMe';
import Footer from 'Sections/Footer';
// import LandingPage from 'Sections/LandingPage';
import Works from 'Sections/Works';
import Scrollbar from 'smooth-scrollbar';

import LandingSection from 'Sections/LandingSection';

const HomePage = () => {
    const Containerref = React.createRef<HTMLDivElement>();
    const AboutMeContainerref = React.createRef<HTMLDivElement>();
    const Backgroundref = React.createRef<HTMLDivElement>();
    const Worksref = React.createRef<HTMLDivElement>();
    const Footerref = React.createRef<HTMLDivElement>();
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [screenHeight, setscreenHeight] = useState<number>(window.innerHeight);

    window.addEventListener('resize', (e) => {
      if (window.innerHeight !== screenHeight)
        setscreenHeight(window.innerHeight);

      if (window.innerWidth !== screenWidth)
        setScreenWidth(window.innerWidth);
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const Contactbtn = document.querySelector('.Contactbtn');

        if (Containerref.current){

          // initial setup
            const bodyScrollBar = Scrollbar.init(Containerref.current, {damping: 0.05, renderByPixels: true, delegateTo: document});
            ScrollTrigger.scrollerProxy(".scroller", {
              scrollTop (value: number = 0) {
                if (arguments.length) {
                  bodyScrollBar.scrollTop = value; // setter
                }
                return bodyScrollBar.scrollTop;    // getter
              },
              getBoundingClientRect () {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              }
            });
            bodyScrollBar.addListener(ScrollTrigger.update);
            ScrollTrigger.defaults({scroller: Containerref.current});

            if (Contactbtn) Contactbtn.addEventListener('click', () => {bodyScrollBar.scrollTo(0, screenHeight * 10, 1000); });

            // Background Item;
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

            const LandingTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.LandingSection',
                    start: `top top`,
                    end: `bottom center+=${screenHeight * 0.2}`,
                    pin: false,
                    scrub: 1,
                }
            });

            gsap.to(".LandingText", {
                scrollTrigger: {
                    trigger: '.TextContainer',
                    start: 'bottom bottom',
                    end: 'bottom center',
                    scrub: .2
                },
                yPercent: -40,
                opacity: 0
            });

            LandingTimeline
            .to(".ImageBlock1", {yPercent: -150, duration: 1})
            .to(".ImageBlock2", {yPercent: -150, duration: 1})
            .to(".ImageBlock3", {yPercent: -150, duration: 1})
            .to(".ImageBlock4", {yPercent: -150, duration: 1})
            .to(".ImageBlock5", {yPercent: -150, duration: 1})
            .to(".ImageBlock6", {yPercent: -150, duration: 1})
            .to(".ImageBlock7", {yPercent: -150, duration: 1});

              // change background color approaching bottom
            gsap.to(['.background', '.works_wrapper'], {
                scrollTrigger: {
                  trigger: ".footerwrapper",
                  start: `top bottom`,
                  end: 'max',
                  scrub: .1,
                  onEnter: () => {
                    const Div = document.querySelector('.ScrollNudge') as HTMLDivElement;
                    return Div.style.display = "none";
                  },
                  onLeaveBack: () => {
                    const Div = document.querySelector('.ScrollNudge') as HTMLDivElement;
                    return Div.style.display = "flex";
                  }
                },
                backgroundColor: 'rgb(58, 58, 59)'
              });


            // About me section
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

            const line1 = document.querySelector('.from') as HTMLSpanElement;
            const line2 = document.querySelector('.challenge') as HTMLSpanElement;
            const line3 = document.querySelector('.to') as HTMLSpanElement;
            const line4 = document.querySelector('.solution') as HTMLSpanElement;

            t1.add('start')
            .to('.Othertext', {opacity: 0, duration: 0.2}, 'start')
            .to(line1, {scale: 5, duration: 0.5, y: screenHeight * 0.15 - line1.offsetTop, x: screenWidth / 2 - line1.offsetLeft - line1.clientWidth / 2, color: '#ee9e6d'}, 'start')
            .to(line2, {scale: 5, duration: 0.5, y: screenHeight * 0.35 - line2.offsetTop, x: screenWidth / 2 - line2.offsetLeft - line2.clientWidth / 2, color: '#ee9e6d'}, 'start')
            .to(line3, {scale: 5, duration: 0.5, y: screenHeight * 0.55 - line3.offsetTop, x: screenWidth / 2 - line3.offsetLeft - line3.clientWidth / 2, color: '#ee9e6d'}, 'start')
            .to(line4, {scale: 5, duration: 0.5, y: screenHeight * 0.75 - line4.offsetTop, x: screenWidth / 2 - line4.offsetLeft - line4.clientWidth / 2, color: '#ee9e6d'}, 'start');

            // works wrapper
            const wordSelected = document.querySelector('.word_selected') as HTMLSpanElement;
            const wordWorks = document.querySelector('.word_works') as HTMLSpanElement;


            const t2 = gsap.timeline({
              scrollTrigger: {
                scroller: '.scroller',
                trigger: '.works_wrapper',
                start: 'top top',
                end: `+=${screenHeight * 3}`,
                pin: true,
                pinSpacing: false,
                snap: {
                  snapTo: [0.28, 0.405, 0.565, 0.845],
                  directional: false,
                  duration: {min: 0.2, max:1},
                  delay: 0.
                },
                scrub: 1,
              }
            });

            t2
            .fromTo('.word_selected', {yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1, x: 0, duration: 0.05})
            .fromTo('.word_works', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 0.05})
            .fromTo('.word_selected', {opacity: 1}, {opacity: 0.1, rotationZ: -90, transformOrigin:'left', yPercent: 220, x: -wordSelected.getBoundingClientRect().left * 0.8, duration: 0.05})
            .fromTo('.word_works', {opacity: 1}, {opacity: 0.1, rotationZ: -90, transformOrigin: 'left',yPercent: 10, x: -wordWorks.getBoundingClientRect().left * 0.55, duration: 0.05})
            .fromTo('.Project_wrapper', {x: screenWidth},{
              x: -screenWidth * 3, // 4 projects - 1
              duration: 1
            });
        }
    }, [Containerref, screenWidth, screenHeight, Backgroundref, Footerref]);

    return(
        <div className='scroller' ref={Containerref} style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden'}}>
            <Background className="background" ref={Backgroundref}/>
            <LandingSection />
            <AboutMe ref={AboutMeContainerref} />
            <Works ref={Worksref} />
            <Footer ref={Footerref} />
        </div>
    );
};

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