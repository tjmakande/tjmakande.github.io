import React, { useEffect } from 'react';
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if(Containerref.current){
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

            ScrollTrigger.defaults({scroller: Containerref.current})

            const t1 = gsap.timeline({
              scrollTrigger: {
                  trigger: '.wrappers',
                  pin: true,
                  start: "top top",
                  end: `+=${window.innerHeight * 2}`,
                  scrub: .2,
                  markers: true
              }
          });

          if(AboutMeContainerref.current){
            const TextContainer = AboutMeContainerref.current.children[0].children[0];
            const line1 = TextContainer.children[0] as HTMLSpanElement;
            const line2 = TextContainer.children[1] as HTMLSpanElement;
            const line3 = TextContainer.children[2] as HTMLSpanElement;

            console.log(window.screenLeft);
            
            t1.add('start')
            .to('.Othertext', {opacity: 0, duration: 0.2}, 'start')
            .to(".solution", {scale: 5, duration: 0.5, y: .9 * window.innerHeight * .2, x: window.innerWidth * .22}, 'start')
            .to(".to", {scale: 5, duration: 0.5, x: .9 * window.innerWidth * .2 }, 'start')
            .to(".challenge", {scale: 5, duration: 0.5, y: -.2 * window.innerHeight}, 'start');
          }

       
        }
    }, [AboutMeContainerref, Containerref])
    return(
        <div className='scroller' ref={Containerref} style={{position: 'relative', height: '100vh', width: '100vw'}}>
            <Background ref={Backgroundref}/>
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
  width:100vw;
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(255, 255, 255);
`;