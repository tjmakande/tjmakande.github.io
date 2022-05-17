import React, {createRef, useEffect, useState} from 'react';

import BeijingImg from 'Assets/BeijingImg.jpeg';
import TJImage from 'Assets/TJ_image.jpg';
import ZimImg from 'Assets/Zim_drawn.jpg';

import SectionWrapper from 'Components/Styled/SectionWrapper';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Footer from 'Sections/Footer';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';

import Video from './Portfolio_Video.mp4';

const AboutMePage = () => {
    const Imageref = createRef<HTMLImageElement>();
    // Starting HERE
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [screenHeight, setscreenHeight] = useState<number>(window.innerHeight);

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

            gsap.to('.background', {
                scrollTrigger:{
                    trigger: '.IntroTwoWrapper',
                    start: 'bottom center',
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
                backgroundColor: 'rgb(58, 58, 58)'
            });

            // Landing image effect
            gsap.to('.Landing_image', {
                scrollTrigger: {
                    trigger: '.Landing_image',
                    pin: true,
                    pinSpacing: false,
                    start: 'top top',
                    end: screenHeight,
                    scrub: .1
                }
            });

            // section wrapper
            const t1 = gsap.timeline({
                scrollTrigger:{
                    trigger: '.SectionWrapper',
                    pin: true,
                    pinSpacing: false,
                    start: 'top top',
                    end: `+=${screenHeight * 6}`,
                    immediateRender: false,
                    scrub: .1
                }
            });

            // Appear Text
            t1
            .fromTo('.DescriptionOne', {y: 200,opacity: 0}, {
                y: 0,
                opacity: 1,
            })
            .fromTo('.DescriptionOne',{opacity: 1}, {
                opacity: 0
            })
            .fromTo('.DescriptionTwo', {opacity: 0}, {
                opacity: 1,
                duration: 0.05
            })
            .to('.DescriptionTwo',{ // Move to the left
                x: -screenWidth / 3,
            })
            .fromTo('.ZimImg', {y: screenHeight, scale: 0.3}, {y: -screenHeight * 1.5, scale: 2})
            .fromTo('.DescriptionTwo', {opacity: 1}, {opacity: 0})
            .fromTo('.DescriptionThree', {x: -screenWidth / 3, opacity: 0}, {opacity: 1})
            .to('.DescriptionThree', {x: screenWidth / 3})
            .fromTo('.BeijingImg', {y: screenHeight, x: -screenWidth * 0.4}, {y: -screenHeight});

            gsap.to('.IntroTwoWrapper', {
                scrollTrigger:{
                    trigger: '.IntroTwoWrapper',
                    pin: true,
                    start: 'top top',
                    end: `+=${screenHeight / 2}`,
                    scrub: .1
                }
            });

        }
    }, [screenHeight, screenWidth]);

    return(
        <div className='Container scroller' style={{position: 'relative', width: '100vw', height: '100vh'}}>
            <HeaderWrapper>
                <LandingImg className="Landing_image" ref={Imageref} src={TJImage} />
                <div style={{color: 'rgb(229, 229, 229)', mixBlendMode: 'difference'}}>
                    <Header>
                        About Me
                    </Header>
                </div>
            </HeaderWrapper>
            <SectionWrapper >
                <Background className="background"/>
                <IntroContainer style={{marginBottom: '600vh'}} className="SectionWrapper">
                    <IntroWrapper>
                        <Description className="DescriptionOne"><span>Hi there! <br/>I'm TJ Makande.</span></Description>
                        <Description className="DescriptionTwo"><span>A web developer from Zimbabwe</span></Description>
                        <Description className="DescriptionThree"><span>Currently based in Beijing</span></Description>
                        <InfoImg src={ZimImg} className="ZimImg"/>
                        <InfoImg src={BeijingImg} style={{boxShadow: '#0000008c 8px 8px 50px'}} className="BeijingImg"/>
                    </IntroWrapper>
                </IntroContainer>

                <IntroTwoWrapper className='IntroTwoWrapper'>
                    <div style={{marginRight: '5rem', height:'400px'}}>
                        <DescriptionFour >
                            I'm naturally keen developer with an eye for clean code and designs. I have the MERN stack in my arsenal which enables me to work on all sides of the development cycle.
                        </DescriptionFour>
                        <DescriptionFour>
                            I am very much attracted to challenges and I love to find solutions. I do believe that those two belong together.
                        </DescriptionFour>
                    </div>

                    <video width="682" height="440" autoPlay muted>
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
  height: 100vh;
  width:100vw;
  z-index: -1;
  top: ${window.innerHeight};
  left: 0;
  position: absolute;
  background-color: #fff;
`;

const InfoImg = styled.img`
    position: absolute;
    right: 2vw;
    height: 75%;
    margin: 0 auto;

    mix-blend-mode: darken;
    transform: translateY(${window.innerHeight}px)
`;

const IntroContainer = styled.div`
    width: 100vw;
    height: 100vh;
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
`;

const IntroTwoWrapper = styled(IntroWrapper)`
    padding: 0 5vw;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50vh;
`;

const Description = styled.p`
    font-size: clamp(2rem,2vw, 5rem);
    width: 30vw;
    position: absolute;
`;

const DescriptionFour = styled(Description)`
    width: 40vw;
    text-align: justify;
    font-weight: 300;
    font-size: clamp(1.7rem, 1.5vw, 2.5rem);
    position: relative;
    // margin-left: 5vw;
`;

const LandingImg = styled.img`
    position: absolute;
    height: 100vh;
    left: 0;
`;

const HeaderWrapper = styled.div`
    background-color: rgb(229, 229, 229);
    color: rgb(229, 229, 229);
    mix-blend-mode: difference;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Header = styled.h1`
    font-size: 12vw;
    padding: 0;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 12vw;
    z-index: 1;

    position: absolute;
    right: 10vw;
`;