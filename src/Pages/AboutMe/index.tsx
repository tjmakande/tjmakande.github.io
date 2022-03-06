import React, {createRef} from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import {Scrollbar} from 'smooth-scrollbar-react';

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
    const Itemref1 = createRef<HTMLDivElement>();
    const Itemref2 = createRef<HTMLDivElement>();
    const Itemref3 = createRef<HTMLDivElement>();
    const Itemref4 = createRef<HTMLDivElement>();
    const Itemref5 = createRef<HTMLDivElement>();
    const Itemref6 = createRef<HTMLDivElement>();

    const scrollAnimation = (scrollY: any) => {
            Imageref.current && (Imageref.current.style.transform = `translateY(${scrollY}px)`);

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

            if(scrollY > window.innerHeight * 3.5 && scrollY <= window.innerHeight * 4.3){
                if(Itemref4.current){
                    gsap.to(Itemref4.current, {opacity: 1, duration: 1})
                    Itemref4.current.style.transform = `translateY(${scrollY - window.innerHeight * 3.5}px)`;
                }
            } else {
                Itemref4.current && gsap.to(Itemref4.current, {opacity: 0, duration: 1})
            }

            if(scrollY > window.innerHeight * 4.5 && scrollY <= window.innerHeight * 5.3){
                if(Itemref5.current) {
                    gsap.to(Itemref5.current, {opacity: 1, duration: 1})
                    Itemref5.current.style.transform = `translateY(${scrollY - window.innerHeight * 4.5}px)`;
                }
            } else {
                Itemref5.current && gsap.to(Itemref5.current, {opacity: 0, duration: 1})
            }

            if(scrollY > window.innerHeight * 5.5 && scrollY <= window.innerHeight * 6.3){
                if(Itemref6.current){
                    gsap.to(Itemref6.current, {opacity: 1, duration: 1})
                    Itemref6.current.style.transform = `translateY(${scrollY - window.innerHeight * 5.5}px)`;
                }
            } else {
                Itemref6.current && gsap.to(Itemref6.current, {opacity: 0, duration: 1})
            }
    };

    return(
        <Scrollbar style={{overflow:'hidden', outline: 'none', height: '100vh'}}damping={0.033} onScroll={(status) => scrollAnimation(status.offset.y)}>
            <SectionWrapper>
                <Wrapper>
                    <LandingImg ref={Imageref} src={TJImage} />
                    <div style={{color: 'rgb(229, 229, 229)', mixBlendMode: 'difference'}}>
                        <Header>
                            About Me
                        </Header>
                    </div>
                </Wrapper>
                    <TimeContainer>
                        <LeftSide>
                            <InfoWrap>
                                <Info ref={Itemref1}><p style={{marginTop: 0}}>WEB DEVELOPER</p></Info>
                            </InfoWrap>
                            <InfoWrap>
                                <InfoImg src={ZimImg} />
                            </InfoWrap>
                            <InfoWrap>
                                <Info ref={Itemref3}><p>Based in Beijing</p></Info>
                            </InfoWrap>
                            <InfoWrap>
                                <InfoImg src={PuzzlesImg} />
                            </InfoWrap>
                            <InfoWrap>
                                <Info ref={Itemref5}><p>The sky is only the limit</p></Info>
                            </InfoWrap>
                            <InfoWrap>
                                <InfoImg src={Tech2Img} />
                            </InfoWrap>
                        </LeftSide>
                        <RightSide>
                            <InfoWrap>
                                <InfoImg src={DeveloperImg} />
                            </InfoWrap>
                            <InfoWrap>
                                <Info ref={Itemref2}><p>Born in Zimbabwe</p></Info>
                            </InfoWrap>
                            <InfoWrap>
                                <InfoImg src={BeijingImg} />
                            </InfoWrap>
                            <InfoWrap>
                                <Info ref={Itemref4}><p>I love challenges</p></Info>
                            </InfoWrap>
                            <InfoWrap>
                                <InfoImg src={TechImg} />
                            </InfoWrap>
                            <InfoWrap>
                                <Info ref={Itemref6}><p>Simple is beautiful </p></Info>
                            </InfoWrap>
                        </RightSide>
                    </TimeContainer>
            </SectionWrapper>
        </Scrollbar>

    )
}

export default AboutMePage;

const InfoImg = styled.img`
    height: 50%;
    margin: 0 auto;
    box-shadow: #0000008c 8px 8px 50px;
    margin-top: 25vh;
`;

const LandingImg = styled.img`
    position: absolute;
    height: 100vh;
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
    justify-content: center;
    align-items: center;

    & p {
        margin-top: -10vh;
        font-size: 2.5rem;
    }
`;

const TimeContainer = styled.div`
    width: 100%;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: row;
`;

const Wrapper = styled.div`
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
    bottom: 0;
`;