import React, {createRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import Footer from 'Sections/Footer';
// import {Scrollbar} from 'smooth-scrollbar-react';

import WorksPageImg from 'Assets/WorksPageImg.jpeg';

import CinemaPhoto from '../../Assets/Cinema-Photo.png';
import Musician from '../../Assets/Musician.png'
import AutomatedBot from '../../Assets/Automated-bot.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import { toUSVString } from 'util';


const AboutMePage = () => {
    // const Imageref = createRef<HTMLImageElement>();
    const Itemref1 = createRef<HTMLDivElement>();
    const Itemref2 = createRef<HTMLDivElement>();
    const Itemref3 = createRef<HTMLDivElement>();
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
        const Container = document.querySelector('.Container') as HTMLDivElement;
        const Contactbtn = document.querySelector('.Contactbtn');
        const Projects = document.querySelectorAll('.Project');
        const ProjectInfo = document.querySelectorAll('.Project_info');

        if(Container){
            //initial setup
            const bodyScrollBar = Scrollbar.init(Container, {damping: 0.05, renderByPixels: true, delegateTo: document});
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
            ScrollTrigger.defaults({scroller: Container});

            Contactbtn && Contactbtn.addEventListener('click', () => {bodyScrollBar.scrollTo(0, screenHeight * 10, 500)})

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

            gsap.to('.background', {
                scrollTrigger:{
                    trigger: '.Project3',
                    start: 'bottom top',
                    end: 'max',
                    scrub: .1
                },
                backgroundColor: 'rgb(58, 58, 58)'
            })

            //Landing image effect
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

            gsap.fromTo('.Project1_info',{opacity: 0}, {
                scrollTrigger:{
                    trigger: '.Project1',
                    start: 'top center',
                    end: `+=${screenHeight * 0.8}`,
                    pin: true,
                    pinSpacing: false,
                    toggleActions: 'play none none reverse',
                    onLeave: () => gsap.to('.Project1_info', {opacity: 0}),
                    onEnterBack: () => gsap.to('.Project1_info', {opacity: 1}),


                },
                opacity: 1,
                duration: 1
            })

            gsap.fromTo('.Project2_info',{opacity: 0}, {
                scrollTrigger:{
                    trigger: '.Project2',
                    start: 'top center',
                    end: `+=${screenHeight * 0.8}`,
                    pin: true,
                    pinSpacing: false,
                    toggleActions: 'play none none reverse',
                    onLeave: () => gsap.to('.Project2_info', {opacity: 0}),
                    onEnterBack: () => gsap.to('.Project2_info', {opacity: 1}),
                },
                opacity: 1,
                duration: 1
            })

            gsap.fromTo('.Project3_info',{opacity: 0}, {
                scrollTrigger:{
                    trigger: '.Project3',
                    start: 'top center',
                    end: `+=${screenHeight * 0.8}`,
                    pin: true,
                    pinSpacing: false,
                    toggleActions: 'play none none reverse',
                    onLeave: () => gsap.to('.Project3_info', {opacity: 0}),
                    onEnterBack: () => gsap.to('.Project3_info', {opacity: 1}),
                },
                opacity: 1,
                duration: 1
            })
        }
    }, [screenHeight, screenWidth])

    return(
        <div className="Container scroller" style={{position: 'relative', height: '100vh', width: '100vw'}}>
            <Wrapper>
                <LandingImg className="Landing_image" src={WorksPageImg} />
                <div style={{color: '#fff', mixBlendMode: 'difference'}}>
                    <Header>
                        Works
                    </Header>
                </div>
            </Wrapper>
            <SectionWrapper >
                <Background className="background" />
                <TimeContainer>
                    <LeftSide>
                        <InfoWrap className='Project1'>
                            <Info className="Project1_info" ref={Itemref1}>
                                <ProjectTitle>Cinema </ProjectTitle>
                                <ProjectDescription>This is an account based movie booking platform. It displays the latest movies and their ratings based on the IMDB API. </ProjectDescription>
                                <ProjectRole>Design, Fullstack</ProjectRole>
                            </Info>
                        </InfoWrap>
                        <InfoWrap>
                            <InfoImg src={AutomatedBot} />
                        </InfoWrap>
                        <InfoWrap className="Project2">
                            <Info className="Project2_info" ref={Itemref3}>
                                <ProjectTitle>Musician Site</ProjectTitle>
                                <ProjectDescription>Site for a local musician displaying their latest songs.</ProjectDescription>
                                <ProjectRole>Design, Fullstack</ProjectRole>
                            </Info>
                        </InfoWrap>
                    </LeftSide>
                    <RightSide>
                        <InfoWrap>
                            <InfoImg src={CinemaPhoto} />
                        </InfoWrap>
                        <InfoWrap className="Project3">
                            <Info className="Project3_info" ref={Itemref2}>
                                <ProjectTitle>Automated chatbot </ProjectTitle>
                                <ProjectDescription>Most companies now have clients from all over the world. I created this automated bot to </ProjectDescription>
                                <ProjectRole>Design, Fullstack</ProjectRole>
                            </Info>
                        </InfoWrap>
                        <InfoWrap>
                            <InfoImg src={Musician} />
                        </InfoWrap>
                    </RightSide>
                </TimeContainer>
                <Footer />
            </SectionWrapper>
        </div>
    )
}

export default AboutMePage;
const Background = styled.div`
  height: 100vh;
  width:100vw;
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #fff;
`;

const ProjectRole = styled.p`
    font-size: 0.8rem;
`;

const ProjectDescription = styled.p`
    font-size: 1.5rem;
`;

const ProjectTitle = styled.h3`
    font-size: clamp(4rem, 6vw, 8rem);
    font-weight: 300;
    margin-bottom: 5vh;
    text-transform: uppercase;
    line-height: clamp(4rem, 6vw, 8rem);
`;

const InfoImg = styled.img`
    height: 50%;
    margin: 0 auto;
    box-shadow: #0000008c 8px 8px 50px;
    margin-top: 25vh;
`;

const LandingImg = styled.img`
    position: absolute;
    width: 100vw;
    left: 0;
`;
const LeftSide = styled.div`
    width: 50vw;
    height: 100%;
    margin-bottom: 100vh;
`;

const RightSide = styled(LeftSide)`
`;

const InfoWrap = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Info = styled.div`
    height: 5vh;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TimeContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

const Wrapper = styled.div`
    color: #fff;
    mix-blend-mode: difference;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
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
    bottom: 0;
`;