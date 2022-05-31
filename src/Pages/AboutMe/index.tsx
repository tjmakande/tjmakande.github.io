import {useEffect} from 'react';

import TJImage from 'Assets/AM_landing.JPG';

// import SectionWrapper from 'Components/Styled/SectionWrapper';

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
    window.addEventListener('load', () => document.querySelector('.loader')?.remove());

    useEffect(() => {
        const vid = document.getElementById('Pseudocode') as HTMLVideoElement;
        vid.playbackRate = isMobile() ? 2 : 3;
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mobileWidth: boolean = window.innerWidth < 850;

        const Container = document.querySelector('.Container') as HTMLDivElement;
        const Contactbtn = document.querySelector('.Contactbtn');

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

            if (Contactbtn) Contactbtn.addEventListener('click', () => {bodyScrollBar.scrollTo(0, window.innerHeight * 15, 1000); });

            // Background Item;
            gsap.to('.background', {
                scrollTrigger: {
                trigger: '.background',
                anticipatePin: 1,
                pin: true,
                pinSpacing:false,
                invalidateOnRefresh: true,
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
                    invalidateOnRefresh: true,
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
                    invalidateOnRefresh: true,
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
                    invalidateOnRefresh: true,
                    start: 'top top',
                    end: window.innerHeight,
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
                    invalidateOnRefresh: true,
                    start: 'top top',
                    end: `+=${window.innerHeight * 6}`,
                    // immediateRender: false,
                    scrub: .1
                }
            });

            gsap.set('.flightPath', {strokeDasharray: window.innerWidth * 0.326, strokeDashoffset:0});

            if (isMobile()) {
                gsap.set('.MapWrapper', {scale: 3, autoAlpha: 0});

                t1
                .fromTo('.DescriptionOne', {y: 200,opacity: 0}, {y: 0,opacity: 1,})
                .fromTo('.DescriptionOne',{opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionTwo', {opacity: 0}, {opacity: 1, duration: 0.05})
                .to('.DescriptionTwo',{y: () => window.innerHeight * 0.3 }, 'showMap')
                .to('.MapWrapper', {autoAlpha: 1}, 'showMap')
                .to('.MapWrapper', {scale: 5, xPercent:() =>  -35, yPercent:() =>  -175, rotation: 0.05}, 'toZimbabwe')
                .fromTo('.Zimbabwe', {fill: '#00800000'}, {fill: '#00800078'}, 'toZimbabwe')
                .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionThree', {y:() =>  window.innerHeight * 0.3, opacity: 0}, {opacity: 1})
                .to('.MapWrapper', {scale: 4, xPercent:() =>  -110, yPercent:() =>  40, rotation: 0.01}, 'toChina-=2%')
                .fromTo('.flightPath', {strokeDashoffset:() => window.innerWidth * 0.327}, {strokeDashoffset: 0}, 'toChina')
                .fromTo('.China', {fill: '#ff000000'}, {fill: '#ff00009e'}, 'toChina')
                .fromTo('.DescriptionThree', {y:() =>  window.innerHeight * 0.3}, {y: () => -window.innerHeight * 0.3}, 'toChina')
                .to(['.DescriptionThree', '.MapWrapper'], {opacity: 0.1});
            } else {
                gsap.set('.MapWrapper', {scale: 1.5, autoAlpha: 0});

                t1
                .fromTo('.DescriptionOne', {y: 200,opacity: 0}, {y: 0,opacity: 1,})
                .fromTo('.DescriptionOne',{opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionTwo', {opacity: 0}, {opacity: 1, duration: 0.05})
                .to('.DescriptionTwo',{x: () => -window.innerWidth / 3})
                .to('.MapWrapper', {autoAlpha: 1})
                .to('.MapWrapper', {scale: 3.5, xPercent:() => -45, yPercent: () => -150, rotation: 0.05}, 'toZimbabwe')
                .fromTo('.Zimbabwe', {fill: '#00800000'}, {fill: '#00800078'}, 'toZimbabwe')
                .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
                .fromTo('.DescriptionThree', {x: () => -window.innerWidth / 3, opacity: 0}, {opacity: 1})
                .to('.MapWrapper', {xPercent: () => -140, yPercent: () => 10, rotation: 0.01}, 'toChina-=2%')
                .fromTo('.flightPath', {strokeDashoffset: () => window.innerWidth * 0.327}, {strokeDashoffset: 0}, 'toChina')
                .fromTo('.China', {fill: '#ff000000'}, {fill: '#ff00009e'}, 'toChina')
                .to('.DescriptionThree', {x: () => window.innerWidth / 3}, 'toChina')
                .to(['.DescriptionThree', '.MapWrapper'], {opacity: 0.1});
            }


            // Appear Text
            gsap.to('.IntroTwoWrapper', {
                scrollTrigger:{
                    trigger: '.IntroTwoWrapper',
                    anticipatePin: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                    pinSpacing: false,
                    start: 'top top',
                    end: `+=${window.innerHeight / 2}`,
                    scrub: 1
                }
            });

            const handleResize = () => {
                if (mobileWidth){
                    if (window.innerWidth > 850) window.location.reload();
                }

                if (!mobileWidth) {
                    if (window.innerWidth < 850) window.location.reload();
                }
            };
            const delay = (cb: () => void, time: number) => {
              let timer: NodeJS.Timeout | number = 0;
              return () => {
                clearTimeout(Number(timer));
                timer = window.setTimeout(cb, time);
              };
            };

            ScrollTrigger.addEventListener('refreshInit', delay(handleResize, 750));
        }
    }, []);

    return(
        <div className='Container scroller' style={{position: 'relative', width: '100vw', height: `100vh`, overflow: 'hidden'}}>
            <HeaderWrapper>
                <LandingImage className="Landing_image">
                    <LandingImg src={TJImage} alt="Author"/>
                </LandingImage>
                <TitleContainer>
                    <Header>
                        About Me
                    </Header>
                </TitleContainer>
            </HeaderWrapper>
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
                        I'm a naturally keen developer with an eye for clean code and designs. I have the MERN stack in my arsenal which enables me to work on all parts of the development cycle.
                    </DescriptionFour>
                    <DescriptionFour>
                        I am very much attracted to learning, challenges and finding solutions. I do believe that they all belong together.
                    </DescriptionFour>
                </IntroTwoTextContainer>

                <VideoWrap id={'Pseudocode'} width={isMobile() ? '100%' : '682'} height={isMobile() ? 'auto' : '440'} autoPlay muted preload='auto' playsInline>
                    <source src={Video} type="video/mp4"/>
                </VideoWrap>
            </IntroTwoWrapper>
            <Footer />
        </div>
    );
};


export default AboutMePage;

const Background = styled.div`
  height: 100vh;
  width:100vw;
  z-index: -1;
  left: 0;
  position: absolute;
  background-color: #fff;

    @media (max-width: 850px){
        // height: ${window.innerHeight}px;
    }
`;

const LandingImage = styled.div`
    height: 66.5vw;
    position: relative;

    @media (min-height: 66.5vw){
        height: 100vh;
        width: 150.4vh;
    }
`;

const IntroContainer = styled.div`
    pointer-events: none;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow-x: hidden;

    @media (max-width: 850px) {
        // height: ${window.innerHeight}px;
    }
`;

const TitleContainer = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: normal;
    backdrop-filter: blur(3px);
    position: absolute;
    right: 5vw;
    bottom: 4rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index:3;
    isolation: isolate;

    @media (max-width: 850px){
        bottom: clamp(5rem, 7vh, 9rem);
        right: 0;
    }
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
    height: 100vh;
    padding: 0 5vw;
    box-sizing: border-box;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 50vh;

    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const IntroTwoTextContainer = styled.div`
    width: 40vw;

    @media (max-width: 850px) {
        width: 88vw;
        height: unset;
        margin: 0;
    }
`;

const Description = styled.p`
    font-size: clamp(1.5rem,2vw, 5rem);
    width: 30vw;
    position: absolute;

    @media (max-width: 850px) {
        width: 100vw;
    }
`;

const DescriptionFour = styled(Description)`
    width: 40vw;
    text-align: justify;
    font-weight: 300;
    font-size: clamp(1.7rem, 1.5vw, 2.5rem);
    position: relative;

    @media (max-width: 850px) {
        width: unset;
        font-size: 1.2rem;
        margin: 2rem auto;
    }
`;

const LandingImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width:100%;
    height: 100%;

    @media (max-width: 850px){
        left: -25%;
    }

    @media (min-height: 66.5vw) and (max-width: 720px){
        left: -20%;
    }
`;

const HeaderWrapper = styled.div`
    background-color: rgb(229, 229, 229);
    color: rgb(229, 229, 229);
    mix-blend-mode: difference;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    position: relative;
`;

const Header = styled.h1`
    font-size: 10vw;
    font-weight: 600;
    margin: 0;
    padding: 5px;
    z-index: 1;
    white-space: nowrap;

    @media (max-width: 850px) {
        font-size: clamp(3rem, 15vw, 7rem);
        padding: 15px;
    }
`;

const MapWrapper = styled.div`
    position: absolute;
    height: auto;
    right: 0;
    width: 65vw;
    top: 50%;
    transform: translate(0, -50%);
    will-change: transform;

    @media (max-width: 850px) {
        width: 100%;
    }
`;

const VideoWrap = styled.video`
    margin: 0;
    width: 46vw;

    @media (max-width: 850px){
        width: 90vw;
        margin: 0 auto;
    }
`;