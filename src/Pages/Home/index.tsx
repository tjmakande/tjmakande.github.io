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
import { isMobile } from 'utils/device';


const HomePage = () => {
    const Containerref = React.createRef<HTMLDivElement>();
    const Backgroundref = React.createRef<HTMLDivElement>();
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
                    trigger: '.LandingSection',
                    start: 'bottom bottom',
                    end: 'bottom center',
                    scrub: .2
                },
                yPercent: -screenHeight / 3 ,
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
            gsap.to(['.background', '.works_wrapper', '.worksTexts'], {
                scrollTrigger: {
                  trigger: ".footerwrapper",
                  start: `top bottom`,
                  end: 'max',
                  scrub: .1,
                  onEnter: () => {
                    const Div = document.querySelector('.ScrollNudge') as HTMLDivElement;
                    return Div.style.visibility = "hidden";
                  },
                  onLeaveBack: () => {
                    const Div = document.querySelector('.ScrollNudge') as HTMLDivElement;
                    return Div.style.visibility = "visible";
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
                  scrub: 1,
              }
            });

            const line1 = document.querySelector('.from') as HTMLSpanElement;
            const line2 = document.querySelector('.challenge') as HTMLSpanElement;
            const line3 = document.querySelector('.to') as HTMLSpanElement;
            const line4 = document.querySelector('.solution') as HTMLSpanElement;

            t1.add('start')
            .to('.Othertext', {opacity: 0, duration: 0.2}, 'start')
            .to(line1, {scale: isMobile() ? 3 : 5, duration: 0.5, y: screenHeight * (isMobile() ? 0.35 : 0.15) - line1.offsetTop, x: screenWidth / 2 - line1.offsetLeft - line1.clientWidth / 2, color: '#ee9e6d'}, 'start')
            .to(line2, {scale: isMobile() ? 3 : 5, duration: 0.5, y: screenHeight * (isMobile() ? 0.45 : 0.35) - line2.offsetTop, x: screenWidth / 2 - line2.offsetLeft - line2.clientWidth / 2, color: '#ee9e6d'}, 'start')
            .to(line3, {scale: isMobile() ? 3 : 5, duration: 0.5, y: screenHeight * (isMobile() ? 0.55 : 0.55) - line3.offsetTop, x: screenWidth / 2 - line3.offsetLeft - line3.clientWidth / 2, color: '#ee9e6d'}, 'start')
            .to(line4, {scale: isMobile() ? 3 : 5, duration: 0.5, y: screenHeight * (isMobile() ? 0.65 : 0.75) - line4.offsetTop, x: screenWidth / 2 - line4.offsetLeft - line4.clientWidth / 2, color: '#ee9e6d'}, 'start');

            // works wrapper
            const wordSelected = document.querySelector('.word_selected') as HTMLSpanElement;
            const wordWorks = document.querySelector('.word_works') as HTMLSpanElement;
            const selectedRect = wordSelected.getBoundingClientRect();
            const worksRect = wordWorks.getBoundingClientRect();

            const t2 = gsap.timeline({
              scrollTrigger: {
                scroller: '.scroller',
                trigger: '.works_wrapper',
                start: 'top top',
                end: `+=${screenHeight * 3}`,
                pin: true,
                pinSpacing: false,
                snap: {
                  snapTo: isMobile() ? [0.42, 0.61, 0.8, 0.99 ] : [0.28, 0.52, 0.75, 0.98],
                  directional: false,
                  duration: {min: 0.05, max:0.5},
                  delay: 0,
                },
                scrub: 1,
              }
            });

            if (isMobile()) {
                gsap.set(['.word_selected', '.word_works'], {transformOrigin: 'top left'});

                t2
                .fromTo('.word_selected', {yPercent: -150, opacity: 0}, {yPercent: 0, opacity: 1, x: 0, duration: 0.05})
                .fromTo('.word_works', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 0.05})
                // Move text to left
                .fromTo(['.word_works', '.word_selected'], {opacity: 1}, {opacity: 0.05 })
                .fromTo('.worksTexts', {opacity: 0}, {opacity: 1, duration: 0.1})
                // First Project animation
                .fromTo('.text1', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'cinema')
                .fromTo('.cinema' , { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'cinema')
                .set('.text1', {transformOrigin: '50% 0%'})
                // Second Project animation
                .to('.text1', {yPercent: -12.5, scaleY: 0, opacity: 0}, 'chatbot')
                .fromTo('.text2', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'chatbot')
                .to('.cinema', {y: -screenHeight, opacity: 0}, 'chatbot')
                .fromTo('.chatbot', { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'chatbot')
                .set('.text2', {transformOrigin: '50% 0%'})
                // Thirt Project animation
                .to('.text2', {yPercent: -12.5, scaleY: 0, opacity: 0}, 'cube')
                .fromTo('.text3', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'cube')
                .to('.chatbot', {y: -screenHeight, opacity: 0}, 'cube')
                .fromTo('.cube', { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'cube')
                .set('.text3', {transformOrigin: '50% 0%'})
                // Fourth Project animation
                .to('.text3', {yPercent: -12.5, scaleY: 0, opacity: 0}, 'sdsn')
                .fromTo('.text4', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'sdsn')
                .to('.cube', {y: -screenHeight, opacity: 0}, 'sdsn')
                .fromTo('.sdsn', { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'sdsn');
            } else {
                t2
                .fromTo('.word_selected', {yPercent: -150, opacity: 0}, {yPercent: 0, opacity: 1, x: 0, duration: 0.05})
                .fromTo('.word_works', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 0.05})
                // Move text to left
                .fromTo('.word_selected', {opacity: 1}, {opacity: 0.1, rotationZ: -90, transformOrigin:'left', yPercent: 220, x: -selectedRect.left * 0.8, duration: 0.05})
                .fromTo('.word_works', {opacity: 1}, {opacity: 0.1, rotationZ: -90, transformOrigin:'left',yPercent: 10, x: -worksRect.left * (isMobile() ? 0.8 : 0.55), duration: 0.05})
                .fromTo('.worksTexts', {opacity: 0}, {opacity: 1, duration: 0.1})
                // First Project animation
                .fromTo('.text1', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'cinema')
                .fromTo('.cinema' , { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'cinema')
                .set('.text1', {transformOrigin: '50% 0%'})
                // Second Project animation
                .to('.text1', {yPercent: -12.5, scaleY: 0, opacity: 0}, 'chatbot')
                .fromTo('.text2', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'chatbot')
                .to('.cinema', {y: -screenHeight, opacity: 0}, 'chatbot')
                .fromTo('.chatbot', { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'chatbot')
                .set('.text2', {transformOrigin: '50% 0%'})
                // Thirt Project animation
                .to('.text2', {yPercent: -12.5, scaleY: 0, opacity: 0}, 'cube')
                .fromTo('.text3', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'cube')
                .to('.chatbot', {y: -screenHeight, opacity: 0}, 'cube')
                .fromTo('.cube', { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'cube')
                .set('.text3', {transformOrigin: '50% 0%'})
                // Fourth Project animation
                .to('.text3', {yPercent: -12.5, scaleY: 0, opacity: 0}, 'sdsn')
                .fromTo('.text4', {yPercent: 12.5, scaleY: 0, transformOrigin: '50% 100%', opacity: 0}, {yPercent: 0, scaleY: 1, opacity: 1}, 'sdsn')
                .to('.cube', {y: -screenHeight, opacity: 0}, 'sdsn')
                .fromTo('.sdsn', { opacity: 0, y: screenHeight}, {opacity: 1, y: 0}, 'sdsn');
            }
        }
    }, [Containerref, screenWidth, screenHeight, Backgroundref, Footerref]);

    return(
        <div className='scroller' ref={Containerref} style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden'}}>
            <Background className="background" ref={Backgroundref}/>
            <LandingSection />
            <AboutMe />
            <Works />
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