import {useEffect, useState} from 'react';

import TJImage from 'Assets/AM_landing.JPG';

import SectionWrapper from 'Components/Styled/SectionWrapper';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from 'utils/device';

import Footer from 'Sections/Footer';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';

import Video from './Portfolio_Video.mp4';
import WorldMap from './WorldMap';

const AboutMePage = () => {

    // Starting HERE
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [screenHeight, setscreenHeight] = useState<number>(window.innerHeight);
    window.addEventListener('load', () => document.querySelector('.loader')?.remove());

    useEffect(() => {
        const vid = document.getElementById('Pseudocode') as HTMLVideoElement;
        vid.playbackRate = isMobile() ? 2 : 3;
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const Container = document.querySelector('.Container') as HTMLDivElement;
        const Contactbtn = document.querySelector('.Contactbtn');

        window.addEventListener('resize', () => {
            if (window.innerHeight !== screenHeight)
              setscreenHeight(window.innerHeight);

            if (window.innerWidth !== screenWidth)
              setScreenWidth(window.innerWidth);
          });

        if (Container){
        // initial setup
            const bodyScrollBar = Scrollbar.init(Container, {damping: 0.05, renderByPixels: true, delegateTo: document});
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
            ScrollTrigger.defaults({scroller: Container});

            if (Contactbtn) Contactbtn.addEventListener('click', () => {bodyScrollBar.scrollTo(0, screenHeight * 15, 1000); });

            // Background Item;
            gsap.to('.background', {
                scrollTrigger: {
                trigger: '.background',
                anticipatePin: 1,
                pin: true,
                pinSpacing:false,
                start: 'top top',
                end: 'max',
                scrub: .1
                }
            });


            // disable nudge at this point
            gsap.to('.background', {
                scrollTrigger:{
                    trigger: '.IntroTwoWrapper',
                    start: 'bottom top',
                    end: 'max',
                    scrub: 1,
                    onEnter: () => {
                        const Div = document.querySelector('.ScrollNudge') as HTMLDivElement;
                        return Div.style.visibility = "hidden";
                    },
                    onLeaveBack: () => {
                        const Div = document.querySelector('.ScrollNudge') as HTMLDivElement;
                        return Div.style.visibility = "visible";
                    }
                },
                backgroundColor: 'rgb(58, 58, 58)'
            });

            gsap.to('#Pseudocode', {
                scrollTrigger: {
                    trigger: '.IntroTwoWrapper',
                    start: 'bottom center',
                    end: 'bottom 50px',
                    scrub: 1
                },
                autoAlpha: 0
            });

            // Landing image effect
            gsap.to('.Landing_image', {
                scrollTrigger: {
                    trigger: '.Landing_image',
                    anticipatePin:1,
                    pin: true,
                    start: 'top top',
                    end: screenHeight,
                    scrub: 1
                }
            });

            // section wrapper
            const t1 = gsap.timeline({
                scrollTrigger:{
                    trigger: '.SectionWrapper',
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    start: 'top top',
                    end: `+=${screenHeight * 6}`,
                    // immediateRender: false,
                    scrub: .1
                }
            });

            gsap.set('.flightPath', {strokeDasharray: screenWidth * 0.326, strokeDashoffset:0});

            if (isMobile()) {
                gsap.set('.MapWrapper', {scale: 3, autoAlpha: 0});

                t1
                .fromTo('.DescriptionOne', {y: 200,opacity: 0}, {y: 0,opacity: 1,})
                .fromTo('.DescriptionOne',{opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionTwo', {opacity: 0}, {opacity: 1, duration: 0.05})
                .to('.DescriptionTwo',{y: screenHeight * 0.3 }, 'showMap')
                .to('.MapWrapper', {autoAlpha: 1}, 'showMap')
                .to('.MapWrapper', {scale: 5, xPercent: -35, yPercent: -170, rotation: 0.05}, 'toZimbabwe')
                .fromTo('.Zimbabwe', {fill: '#00800000'}, {fill: '#00800078'}, 'toZimbabwe')
                .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionThree', {y: screenHeight * 0.3, opacity: 0}, {opacity: 1})
                .to('.MapWrapper', {scale: 4, xPercent: -110, yPercent: 40, rotation: 0.01}, 'toChina-=2%')
                .fromTo('.flightPath', {strokeDashoffset: screenWidth * 0.327}, {strokeDashoffset: 0}, 'toChina')
                .fromTo('.China', {fill: '#ff000000'}, {fill: '#ff00009e'}, 'toChina')
                .fromTo('.DescriptionThree', {y: screenHeight * 0.3}, {y: -screenHeight * 0.3}, 'toChina')
                .to(['.DescriptionThree', '.MapWrapper'], {opacity: 0.5});
            } else {
                gsap.set('.MapWrapper', {scale: 1.5, autoAlpha: 0});

                t1
                .fromTo('.DescriptionOne', {y: 200,opacity: 0}, {y: 0,opacity: 1,})
                .fromTo('.DescriptionOne',{opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionTwo', {opacity: 0}, {opacity: 1, duration: 0.05})
                .to('.DescriptionTwo',{x: -screenWidth / 3})
                .to('.MapWrapper', {autoAlpha: 1})
                .to('.MapWrapper', {scale: 3.5, xPercent: -45, yPercent: -150, rotation: 0.05}, 'toZimbabwe')
                .fromTo('.Zimbabwe', {fill: '#00800000'}, {fill: '#00800078'}, 'toZimbabwe')
                .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionThree', {x: -screenWidth / 3, opacity: 0}, {opacity: 1})
                .to('.MapWrapper', {xPercent: -140, yPercent: 10, rotation: 0.01}, 'toChina-=2%')
                .fromTo('.flightPath', {strokeDashoffset: screenWidth * 0.327}, {strokeDashoffset: 0}, 'toChina')
                .fromTo('.China', {fill: '#ff000000'}, {fill: '#ff00009e'}, 'toChina')
                .to('.DescriptionThree', {x: screenWidth / 3}, 'toChina')
                .to(['.DescriptionThree', '.MapWrapper'], {opacity: 0.5});
            }


            // Appear Text
            gsap.to('.IntroTwoWrapper', {
                scrollTrigger:{
                    trigger: '.IntroTwoWrapper',
                    anticipatePin: 1,
                    pin: true,
                    pinSpacing: false,
                    start: 'top top',
                    end: `+=${screenHeight / 2}`,
                    scrub: 1
                }
            });

        }
    }, [screenHeight, screenWidth]);

    return(
        <div className='Container scroller' style={{position: 'relative', width: '100vw', height: `${window.innerHeight}px`}}>
            <HeaderWrapper>
                <div className="Landing_image" style={{height: window.innerHeight, width: '100%', position: 'relative'}}>
                    <LandingImg src={TJImage} />
                </div>
                <div style={{color: 'rgb(229, 229, 229)',display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(2px)', mixBlendMode: 'difference', position: 'absolute', right: isMobile() ? 0 : '5vw', bottom: `${isMobile() ? '7rem' : '4rem'}`, margin: 0, padding: 0, boxSizing: 'border-box', zIndex:3, isolation: 'isolate'}}>
                    <Header>
                        About Me
                    </Header>
                </div>
            </HeaderWrapper>
            <SectionWrapper >
                <Background className="background"></Background>
                <IntroContainer style={{marginBottom: '600vh'}} className="SectionWrapper">
                    <IntroWrapper>
                        <Description className="DescriptionOne"><span>Hi there! <br/>I'm TJ Makande.</span></Description>
                        <Description className="DescriptionTwo"><span>A web developer from Zimbabwe</span></Description>
                        <Description className="DescriptionThree"><span>Currently based in Beijing</span></Description>
                        <MapWrapper className="MapWrapper">
                            <WorldMap />
                        </MapWrapper>
                    </IntroWrapper>
                </IntroContainer>

                <IntroTwoWrapper className='IntroTwoWrapper'>
                    <IntroTwoTextContainer>
                        <DescriptionFour >
                            I'm naturally keen developer with an eye for clean code and designs. I have the MERN stack in my arsenal which enables me to work on all sides of the development cycle.
                        </DescriptionFour>
                        <DescriptionFour>
                            I am very much attracted to challenges and I love to find solutions. I do believe that those two belong together.
                        </DescriptionFour>
                    </IntroTwoTextContainer>

                    <video id={'Pseudocode'} style={{width: isMobile() ? '90vw' : '46vw', margin: isMobile() ? '0 auto' : '0'}} width={isMobile() ? '100%' : '682'} height={isMobile() ? 'auto' : '440'} autoPlay muted preload='auto' playsInline>
                        <source src={Video} type="video/mp4"/>
                    </video>
                </IntroTwoWrapper>
                <Footer />
            </SectionWrapper>
        </div>
    );
};


export default AboutMePage;

const Background = styled.div`
  height: ${window.innerHeight}px;
  width:100vw;
  z-index: -1;
  left: 0;
  position: absolute;
  background-color: #fff;
`;

const IntroContainer = styled.div`
    pointer-events: none;
    width: 100vw;
    height: ${isMobile() ? `${window.innerHeight}px` : '100vh'};
    position: relative;
    overflow-x: hidden;
`;

const IntroWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    will-change: transform;
`;

const IntroTwoWrapper = styled(IntroWrapper)`
    padding: 0 5vw;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: ${isMobile() ? 'center' : 'space-between'};
    align-items: center;
    margin-bottom: 50vh;

    ${
        isMobile() && `
            flex-direction: column;
        `
    }
`;

const IntroTwoTextContainer = styled.div`
    width: 40vw;

    ${
        isMobile() && `
            width: 88vw;
            height: unset;
            margin: 0;
        `
    }
`

const Description = styled.p`
    font-size: clamp(2rem,2vw, 5rem);
    width: ${isMobile() ? '100vw' : '30vw'};
    position: absolute;
`;

const DescriptionFour = styled(Description)`
    width: 40vw;
    text-align: justify;
    font-weight: 300;
    font-size: clamp(1.7rem, 1.5vw, 2.5rem);
    position: relative;
    // margin-left: 5vw;

    ${
        isMobile() && `
            width: unset;
            font-size: 1.2rem;
            margin: 2rem auto;
        `
    }
`;

const LandingImg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    min-width: 100vw;
    z-index: 1;
`;

const HeaderWrapper = styled.div`
    background-color: rgb(229, 229, 229);
    color: rgb(229, 229, 229);
    mix-blend-mode: difference;
    height: ${window.innerHeight}px;
    width: 100vw;
    overflow-x: hidden;
    position: relative;
`;

const Header = styled.h1`
    font-size: ${isMobile() ? '5rem' : '10vw'};
    font-weight: 600;
    margin: 0;
    padding: ${isMobile() ? '15px' : '5px'};
    z-index: 1;
    white-space: nowrap;
`;

const MapWrapper = styled.div`
    position: absolute;
    right: 0;
    width: ${isMobile() ? '100%' : '65vw'};
    top: 50%;
    transform: translate(0, -50%);
    will-change: transform;
`;