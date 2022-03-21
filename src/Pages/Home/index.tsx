import React from 'react';
import styled from 'styled-components';

import LandingPage from 'Sections/LandingPage';
import AboutMe from 'Sections/AboutMe';
import Works from 'Sections/Works';
import Footer from 'Sections/Footer';
import {Scrollbar} from 'smooth-scrollbar-react';
import { isVoidExpression } from 'typescript';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.scrollerProxy('.scroller', {
//   scrollTop(value) {
//     if (arguments.length) {
//       bodyScrollBar.scrollTop = value; // setter
//     }
//     return bodyScrollBar.scrollTop;    // getter
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   }
// });

gsap.to(".solution", {
  scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: '+=100',
      scrub: 1,
  },
  scale: 5,
});

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
        onScroll={(status, Scrollbar) => {
          const scrollY = status.offset.y;

          if(Scrollbar){
            Scrollbar.addListener(ScrollTrigger.update);
            ScrollTrigger.scrollerProxy('.scroller', {
              scrollTop() {
                if (arguments.length) {
                  Scrollbar.scrollTop = 0; // setter
                }
                return Scrollbar.scrollTop;    // getter
              },
              getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              }
            });
          }


          const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrappers",
                start: "top top",
                end: 'center top',
                scrub: .5,
            }
        });

        t1.to(".solution", {scale: 5, duration: 2});
          //page background color
           Backgroundref.current && (Backgroundref.current.style.transform = `translateY(${scrollY}px)`);
          //  SectionWrapperref.current && (SectionWrapperref.current.style.visibility = scrollY > window.innerHeight * 0.5 ? 'hidden' : 'visible');

          if(LandingSectionref.current){
            const Landing = LandingSectionref.current;
            const Logo = Landing.children[0].children[0] as HTMLImageElement;
            Logo.style.transform =`translateY(${scrollY}px)`;
            Logo.style.width = `${100 - scrollY*0.5 > 15 ? 100 - scrollY*0.5 : 15}%`;
          }

          //About Me Section
          if(AboutMeContainerref.current){
            // const Aboutme = AboutMeContainerref.current;
            // const Text = Aboutme.children[0] as HTMLDivElement;
            // const HideText1 = Text.children[0] as HTMLSpanElement;
            // const Solutionwrd = Text.children[1] as HTMLParagraphElement;
            // const Towrd = Text.children[2] as HTMLParagraphElement;
            // const HideText2 =  Text.children[3] as HTMLSpanElement;
            // const Challengewrd = Text.children[4] as HTMLParagraphElement;
            // const HideText3 = Text.children[5] as HTMLSpanElement;

            // const opacitycalc = 1 - ((scrollY - window.innerHeight * 1.1)/100);
            // const opacity = opacitycalc < 0 ? 0 : opacitycalc
            // const scale = ((scrollY - window.innerHeight)/100) * 1.15;
            // const translationBase = scrollY - window.innerHeight * 1.1;

            // if(scrollY > window.innerHeight && scrollY < window.innerHeight * 2){
            //   Aboutme.style.transform = `translateY(${scrollY - window.innerHeight}px)`;

            //   if(scrollY > window.innerHeight * 1.1){
            //     HideText1.style.opacity = `${opacity}`;
            //     HideText2.style.opacity = `${opacity}`;
            //     HideText3.style.opacity = `${opacity}`;

            //     console.log(scale);

            //     Solutionwrd.style.transform = `scale(${scale < 1 ? 1 : scale}, ${scale < 1 ? 1 : scale})`
            //     Towrd.style.transform = `scale(${scale < 1 ? 1 : scale}, ${scale < 1 ? 1 : scale})`
            //     Challengewrd.style.transform = `scale(${scale < 1 ? 1 : scale}, ${scale < 1 ? 1 : scale}) translate3d(${translationBase}px, ${-translationBase}px, 0)`
            //   }

            // }
          }

          //Work section
          if(Worksref.current){
            if(scrollY > window.innerHeight * 3 && scrollY < window.innerHeight * 3.7){
              Worksref.current && (Worksref.current.style.transform = `translateY(${scrollY - window.innerHeight * 3}px)`)
            }else if(scrollY > window.innerHeight * 3.7) {
              Worksref.current && (Worksref.current.style.transform = `translateY(${(window.innerHeight * 3.7) - window.innerHeight * 3}px)`)
            }
          }

          if(scrollY > window.innerHeight * 4.3){
            const y = 1 + (scrollY - window.innerHeight * 4.3) / 150;
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