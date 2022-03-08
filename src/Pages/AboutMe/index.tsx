import React, {createRef} from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import {Scrollbar} from 'smooth-scrollbar-react';
import Footer from 'Sections/Footer';

import TJImage from 'Assets/TJ_image.jpg';
import TechImg from 'Assets/TechImg.jpeg';
import Tech2Img from 'Assets/Tech2Img.jpeg';
import BeijingImg from 'Assets/BeijingImg.jpeg';
import ZimImg from 'Assets/ZimImg.jpeg';
import PuzzlesImg from 'Assets/PuzzlesImg.jpeg';
import DeveloperImg from 'Assets/DeveloperImg.jpeg';

import gsap from 'gsap';


const AboutMePage = () => {
    const Imageref = createRef<HTMLImageElement>();
    const IntroWrap = createRef<HTMLDivElement>();
    const Descriptionref = createRef<HTMLParagraphElement>();

    const Zimref = createRef<HTMLSpanElement>();
    const Beijingref = createRef<HTMLSpanElement>();

    const HeadMakeOpaque = (x: number) => x/400 < 1 ? 1 - (x/400) : 0;
    const MoveTextLeft = (x: number) => x < window.innerWidth * 0.30 ? x : window.innerWidth * 0.30; 



    const scrollAnimation = (scrollY: number) => {
        // animation part 1
        if(scrollY < window.innerHeight * 0.8){
             IntroWrap.current && (IntroWrap.current.style.visibility = 'hidden');
        } else { 
            IntroWrap.current && (IntroWrap.current.style.visibility = `visible`);
        }

        // Animation part 2
        if(scrollY > window.innerHeight * 0.8){
            if(IntroWrap.current){
                const instanceOffset = scrollY - window.innerHeight * 0.8;
                Descriptionref.current && (Descriptionref.current.style.opacity =  `${instanceOffset / 200}`);
                IntroWrap.current.style.transform = `translateY(${scrollY - window.innerHeight}px)`;

                if( scrollY > window.innerHeight * 1.1){
                    IntroWrap.current.style.transform = `translate3d(-${MoveTextLeft(scrollY - window.innerHeight * 1.1)}px, ${scrollY - window.innerHeight}px, 0)`;
                    // console.log(MoveTextLeft(scrollY-window.innerHeight * 1.1))
                }
            }
        }

        if(scrollY > window.innerHeight * 2) {
            Descriptionref.current && (Descriptionref.current.style.opacity = `${HeadMakeOpaque(scrollY - window.innerHeight * 2)}`);
        }
    }

    return(
        <Scrollbar style={{overflow:'hidden', outline: 'none', height: '100vh'}}damping={0.2} onScroll={(status) => scrollAnimation(status.offset.y)}>
            <SectionWrapper>
                <HeaderWrapper>
                    <LandingImg ref={Imageref} src={TJImage} />
                    <div style={{color: 'rgb(229, 229, 229)', mixBlendMode: 'difference'}}>
                        <Header>
                            About Me
                        </Header>
                    </div>
                </HeaderWrapper>
                
                <IntroContainer>
                    <IntroWrapper ref={IntroWrap}>
                        <Description ref={Descriptionref}>
                            I am a web developer, from <Wordspan ref={Zimref}>Zimbabwe</Wordspan>, currently based in <Wordspan ref={Beijingref}>Beijing</Wordspan>.
                        </Description>
                    </IntroWrapper>
                </IntroContainer>


                <IntroTwoContainer>
                    <IntroTwoWrapper>
                        <Description>
                            I'm naturally curious, that's probably how I ended up learning MERN stack.
                        </Description>
                    </IntroTwoWrapper>
                </IntroTwoContainer>

                <IntroThreeContainer>
                    <IntroThreeWrapper>
                        <Description>
                            I don't shy away from challenges, and I'm always looking forward to help you tackle yours!
                        </Description>
                    </IntroThreeWrapper>
                </IntroThreeContainer>

                <Footer />
            </SectionWrapper>
        </Scrollbar>

    )
}

export default AboutMePage;
const Wordspan = styled.span`
    // opacity: 0;
`;

const IntroContainer = styled.div`
    width: 100%;
    height: 400vh;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: row;
`;

const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IntroTwoContainer = styled(IntroContainer)`
    height: 150vh;
`;

const IntroTwoWrapper = styled(IntroWrapper)`
    justify-content: start;
    padding: 0 10vw;
`;

const IntroThreeContainer = styled(IntroContainer)`
    height: 150vh;
`;

const IntroThreeWrapper = styled(IntroWrapper)`
    justify-content: start;
    padding: 0 10vw;
`;


const Description = styled.p`
    font-size: clamp(2rem,2vw, 5rem);
    width: 30vw;
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