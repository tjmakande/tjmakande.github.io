import {useEffect} from 'react';

import TJImage from 'Assets/AM_landing.JPG';

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
    window.addEventListener('load', () => {
        const vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        ScrollTrigger.refresh();
        document.querySelector('.loader')?.remove();
    });

    useEffect(() => {
        const vid = document.getElementById('Pseudocode') as HTMLVideoElement;
        vid.playbackRate = isMobile() ? 2 : 3;
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const Contactbtn = document.querySelector('.Contactbtn');
        // initial setup
        const bodyScrollBar = Scrollbar.init(document.querySelector('.scroller')!, {damping: 0.05, renderByPixels: true, delegateTo: document});
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
        ScrollTrigger.defaults({scroller: '.scroller'});

        if (Contactbtn) Contactbtn.addEventListener('click', () => {bodyScrollBar.scrollTo(0, window.innerHeight * 15, 1000); });

            // Landing image effect
        gsap.to('.Landing_image', {
                scrollTrigger: {
                    trigger: '.Landing_image',
                    pin: true,
                    invalidateOnRefresh: true,
                    start: () => 'top top',
                    end: () => `+=${window.innerHeight}`,
                    scrub: 1
                }
            });

        ScrollTrigger.matchMedia({
                "(max-width: 850px)": () => {
                    // section wrapper
                    const t1 = gsap.timeline({
                        scrollTrigger:{
                            trigger: '.IntroOneWrapper',
                            pin: true,
                            pinSpacing: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                            start: () => 'top top',
                            end: () => `+=600%`,
                            scrub: .1
                        }
                    });
                    gsap.set('.flightPath', {strokeDasharray:() =>  window.innerWidth * 0.326, strokeDashoffset:0});
                    gsap.set('.MapWrapper', {scale: 1.5, autoAlpha: 0});

                    t1
                    .fromTo('.DescriptionOne', {x: 0, y:() => 200,opacity: 0}, {y: 0,opacity: 1,})
                    .fromTo('.DescriptionOne',{opacity: 1}, {opacity: 0})
                    .fromTo('.DescriptionTwo', {x: 0,opacity: 0}, {opacity: 1, duration: 0.05})
                    .to('.DescriptionTwo',{y: () => window.innerHeight * 0.3 }, 'showMap')
                    .to('.MapWrapper', {autoAlpha: 1}, 'showMap')
                    .to('.MapWrapper', {scale: 3, xPercent:() =>  -15, yPercent:() =>  -80, rotation: 0.05}, 'toZimbabwe')
                    .fromTo('.Zimbabwe', {fill: '#00800000'}, {fill: '#00800078'}, 'toZimbabwe')
                    .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
                    .fromTo('.DescriptionThree', {x: 0, y:() =>  window.innerHeight * 0.3, opacity: 0}, {opacity: 1})
                    .to('.MapWrapper', {scale: 2.5, xPercent:() =>  -70, yPercent:() =>  10, rotation: 0.01}, 'toChina-=2%')
                    .fromTo('.flightPath', {strokeDashoffset:() => window.innerWidth * 0.327}, {strokeDashoffset: 0}, 'toChina')
                    .fromTo('.China', {fill: '#ff000000'}, {fill: '#ff00009e'}, 'toChina')
                    .fromTo('.DescriptionThree', {x: 0,y:() =>  window.innerHeight * 0.3}, {y: () => -window.innerHeight * 0.3}, 'toChina')
                    .to(['.DescriptionThree', '.MapWrapper'], {opacity: 0.1});
                },
                "(min-width: 851px)": () => {
                    // section wrapper
                    const t1 = gsap.timeline({
                        scrollTrigger:{
                            trigger: '.IntroOneWrapper',
                            pin: true,
                            pinSpacing: true,
                            start: () => 'top top',
                            end: () => `+=600%`,
                            invalidateOnRefresh: true,
                            scrub: 1,
                        }
                    });

                    gsap.set('.flightPath', {strokeDasharray: () => window.innerWidth * 0.326, strokeDashoffset:0});
                    gsap.set('.MapWrapper', {scale: 1.5, autoAlpha: 0});

                    t1
                    .fromTo('.DescriptionOne', {y: 200,opacity: 0}, {y: 0,opacity: 1,})
                    .fromTo('.DescriptionOne',{opacity: 1}, {opacity: 0})
                    .fromTo('.DescriptionTwo', {y:0, opacity: 0}, {opacity: 1, duration: 0.05})
                    .to('.DescriptionTwo',{x: () => -window.innerWidth / 3})
                    .to('.MapWrapper', {autoAlpha: 1})
                    .to('.MapWrapper', {scale: 3.5, xPercent:() => -45, yPercent: () => -150, rotation: 0.05}, 'toZimbabwe')
                    .fromTo('.Zimbabwe', {fill: '#00800000'}, {fill: '#00800078'}, 'toZimbabwe')
                    .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
                    .fromTo('.DescriptionThree', {y:0, x: () => -window.innerWidth / 3, opacity: 0}, {opacity: 1})
                    .to('.MapWrapper', {xPercent: () => -140, yPercent: () => 10, rotation: 0.01}, 'toChina-=2%')
                    .fromTo('.flightPath', {strokeDashoffset: () => window.innerWidth * 0.327}, {strokeDashoffset: 0}, 'toChina')
                    .fromTo('.China', {fill: '#ff000000'}, {fill: '#ff00009e'}, 'toChina')
                    .to('.DescriptionThree', {y:0, x: () => window.innerWidth / 3}, 'toChina')
                    .to(['.DescriptionThree', '.MapWrapper'], {opacity: 0.1});
                },
            });
        // ScrollTrigger.addEventListener('refresh', () => {
        //         if (window.innerWidth > 850){
        //             gsap.set('.flightPath', {strokeDasharray: () => window.innerWidth * 0.326, strokeDashoffset:0});
        //         } else {
        //             gsap.set('.flightPath', {strokeDasharray:() =>  window.innerWidth * 0.326, strokeDashoffset:0});
        //         }
        //     });
            // Appear Text
        ScrollTrigger.matchMedia({
                "(max-width: 850px)": () => {
                    gsap.to('.IntroTwoWrapper', {
                        scrollTrigger:{
                            trigger: '.IntroTwoWrapper',
                            pin: true,
                            invalidateOnRefresh: true,
                            pinSpacing: true,
                            start: () => 'top top',
                            end: () => `+=${window.innerHeight / 2}`,
                            scrub: 1,
                        }
                    });
                },
                "(min-width: 851px)": () => {
                    gsap.to('.IntroTwoWrapper', {
                        scrollTrigger:{
                            trigger: '.IntroTwoWrapper',
                            pin: true,
                            invalidateOnRefresh: true,
                            pinSpacing: true,
                            start: () => 'top top',
                            end: () => `+=${window.innerHeight / 2}`,
                            scrub: 1,
                        }
                    });
                }
            });


        ScrollTrigger.matchMedia({
                "(max-width: 850px)": () => {
                    gsap.fromTo(['.footerwrapper', '.IntroTwoWrapper', 'body'],{backgroundColor: 'white'}, {
                        scrollTrigger: {
                            trigger: ".footerwrapper",
                            start: () => `top bottom`,
                            end: () => `+=${window.innerHeight}`,
                            scrub: .1,
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
                        backgroundColor: 'rgb(58, 58, 59)'
                    });
                },
                "(min-width: 851px)": () => {
                    gsap.fromTo(['.footerwrapper', '.IntroTwoWrapper', 'body'],{backgroundColor: 'white'}, {
                        scrollTrigger: {
                            trigger: ".footerwrapper",
                            start: () => `top bottom`,
                            end: () => `+=${window.innerHeight}`,
                            scrub: .1,
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
                        backgroundColor: 'rgb(58, 58, 59)'
                    });
                }
            });

        gsap.to('#Pseudocode', {
                scrollTrigger: {
                    trigger: '.footerwrapper',
                    start: () => 'top bottom',
                    end: () => '+=50px',
                    invalidateOnRefresh: true,
                    scrub: 1
                },
                opacity: 0
            });

    }, []);

    return(
        <Scroller className='Container scroller'>
            <HeaderWrapper>
                <ImageContainer className="Landing_image">
                    <LandingImg src={TJImage} alt="Author"/>
                </ImageContainer>
                <TitleContainer>
                    <Header>About Me</Header>
                </TitleContainer>
            </HeaderWrapper>
            <IntroContainer className="IntroOneWrapper">
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
        </Scroller>
    );
};


export default AboutMePage;

const Scroller = styled.div`
    position: relative;
    height: 100%;
    width: 100vw;
    overflow: hidden;
`;

const LandingImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width:100%;
`;

const ImageContainer = styled.div`
    height: 66.5vw;
    position: relative;

    @media (min-height: 66.5vw){
        width: 150.4vh;
        height: 100%;
        height: -moz-available;          /* WebKit-based browsers will ignore this. */
        height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
        height: fill-available;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (min-height: 66.5vw) and (max-width: 500px) {
        left: -80%;
    }
`;

const IntroContainer = styled.div`
    pointer-events: none;
    width: 100vw;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    background-color: white;
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
    height: 100%;
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    will-change: transform;
`;

const IntroTwoWrapper = styled(IntroWrapper)`
    height: 100%;
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    padding: 0 5vw;
    box-sizing: border-box;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    overflow: hidden;

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

const HeaderWrapper = styled.div`
    color: rgb(229, 229, 229);
    height: 100%;
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
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