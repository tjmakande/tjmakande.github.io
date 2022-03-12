import React, {createRef} from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import Footer from 'Sections/Footer';
import {Scrollbar} from 'smooth-scrollbar-react';

import WorksPageImg from 'Assets/WorksPageImg.jpeg';

import CinemaPhoto from '../../Assets/Cinema-Photo.png';
import Musician from '../../Assets/Musician.png'
import AutomatedBot from '../../Assets/Automated-bot.png';

import gsap from 'gsap';


const AboutMePage = () => {
    const Imageref = createRef<HTMLImageElement>();
    const Itemref1 = createRef<HTMLDivElement>();
    const Itemref2 = createRef<HTMLDivElement>();
    const Itemref3 = createRef<HTMLDivElement>();

    const Backgroundref = React.createRef<HTMLDivElement>();
    const [red, green, blue] = [255, 255, 255];

    const scrollAnimation = (scrollY: number) => {

            if(scrollY < window.innerHeight){
                Imageref.current && (Imageref.current.style.transform = `translateY(${scrollY}px)`);
            } else {
                Imageref.current && (Imageref.current.style.transform = `translateY(${window.innerHeight}px)`);
            }

            if(scrollY > window.innerHeight){
                Backgroundref.current && (Backgroundref.current.style.transform = `translateY(${scrollY - window.innerHeight}px)`);
            }

            if(scrollY < window.innerHeight * 0.5)
                Itemref1 && gsap.to(Itemref1.current, {opacity: 0, duration: 0});
            
            if(scrollY >= window.innerHeight * 0.5 && scrollY <= window.innerHeight * 1.3){
                if(Itemref1.current){
                    gsap.to(Itemref1.current, {opacity: 1, duration: 1});
                    Itemref1.current.style.transform = `translateY(${scrollY - window.innerHeight * 0.5}px)`;
                }
            } else {
                Itemref1.current && gsap.to(Itemref1.current, {opacity: 0, duration: 1})
            }

            if(scrollY > window.innerHeight * 1.5 && scrollY <= window.innerHeight * 2.3){
                if(Itemref2.current){
                    gsap.to(Itemref2.current, {opacity: 1, duration: 1})
                    Itemref2.current.style.transform = `translateY(${scrollY - window.innerHeight * 1.5}px)`;
                }
            } else {
                Itemref2 && gsap.to(Itemref2.current, {opacity: 0, duration: 1})
            }

            if(scrollY > window.innerHeight * 2.5 && scrollY <= window.innerHeight * 3.3){
                if(Itemref3.current){
                    gsap.to(Itemref3.current, {opacity: 1, duration: 1});
                    Itemref3.current.style.transform = `translateY(${scrollY - window.innerHeight * 2.5}px)`;
                }
            } else {
                Itemref3.current && gsap.to(Itemref3.current, {opacity: 0, duration: 1})
            }

            if(scrollY > window.innerHeight * 3.8){
                const y = 1 + (scrollY-window.innerHeight * 3.8) / 150;
                const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
                
                Backgroundref.current && (Backgroundref.current.style.backgroundColor = `rgb(${r < 58 ? 58 : r}, ${g < 58 ? 58 : g}, ${b < 58 ? 58 : b} )`);
            } else {
                Backgroundref.current && (Backgroundref.current.style.backgroundColor = `rgb(255, 255, 255)`);
            }
    };

    return(
        <Scrollbar style={{overflow:'hidden', outline: 'none', height: '100vh', position: 'relative'}}damping={0.2} onScroll={(status) => scrollAnimation(status.offset.y)}>
            <Wrapper>
                <LandingImg ref={Imageref} src={WorksPageImg} />
                <div style={{color: '#fff', mixBlendMode: 'difference'}}>
                    <Header>
                        Works
                    </Header>
                </div>
            </Wrapper>
            <SectionWrapper>
                <Background ref={Backgroundref} />
                <TimeContainer>
                    <LeftSide>
                        <InfoWrap>
                            <Info ref={Itemref1}>
                                <ProjectTitle style={{marginTop: 0}}>Cinema </ProjectTitle>
                                <ProjectDescription>This is an account based movie booking platform. It displays the latest movies and their ratings based on the IMDB API. </ProjectDescription>
                                <ProjectRole>Design, Fullstack</ProjectRole>
                            </Info>
                        </InfoWrap>
                        <InfoWrap>
                            <InfoImg src={AutomatedBot} />
                        </InfoWrap>
                        <InfoWrap>
                            <Info ref={Itemref3}>
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
                        <InfoWrap>
                            <Info ref={Itemref2}>
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
        </Scrollbar>

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
    height: 15vh;
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