import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
    // const HeaderRef = useRef<HTMLHeadingElement>(null);
    // const HeaderAltRef = useRef<HTMLHeadingElement>(null);
    // const Iref = useRef<HTMLHeadingElement>(null);
    // const Createref = useRef<HTMLHeadingElement>(null);
    // const Designref = useRef<HTMLHeadingElement>(null);
    // const Andref = useRef<HTMLHeadingElement>(null);
    // const Maximizeref = useRef<HTMLHeadingElement>(null);
    // const Experiencesref = useRef<HTMLHeadingElement>(null);

    // const AnimationProgress = (prevThreshhold: number, nextThreshhold: number) => 
    //     ((window.scrollY - window.innerHeight * prevThreshhold) / ((window.innerHeight * nextThreshhold) - (window.innerHeight * prevThreshhold))) * 100

    // const AnimationWindow = (prevThreshhold: number, nextThreshhold: number) => 
    //     window.scrollY > window.innerHeight * prevThreshhold && window.scrollY < window.innerHeight * nextThreshhold

    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         if(HeaderRef.current && AnimationWindow(0.2, 0.3)) // About word 20% scroll to 30% scroll
    //             HeaderRef.current.style.marginBottom = -100 + AnimationProgress(0.2, 0.3) + 'vh';

    //         if(HeaderAltRef.current && AnimationWindow(0.3, 0.4)) // Me word 30% scroll to 40% scroll
    //             HeaderAltRef.current.style.marginTop = 100 - AnimationProgress(0.3, 0.4) + 'vh';

    //         if(Iref.current && AnimationWindow(0.5, 0.6)) // I word 50% scroll to 60% scroll
    //             Iref.current.style.marginLeft = 100 - AnimationProgress(0.5, 0.6) + 'vw';

    //         if(Createref.current && AnimationWindow(0.7, 0.8))
    //             Createref.current.style.marginLeft = 102 - AnimationProgress(0.7, 0.8) + 'vw';

    //         if(Designref.current && AnimationWindow(0.8, 0.9))
    //             Designref.current.style.marginLeft = 112 - AnimationProgress(0.8, 0.9) + 'vw';

    //         if(Andref.current && AnimationWindow(0.9, 1))
    //             Andref.current.style.marginLeft = 128 - AnimationProgress(0.9, 1) + 'vw';

    //         if(Maximizeref.current && AnimationWindow(1, 1.2))
    //             Maximizeref.current.style.marginLeft = 130 - AnimationProgress(1, 1.2) + 'vw';

    //         if(Experiencesref.current && AnimationWindow(1.2, 1.4))
    //             Experiencesref.current.style.marginLeft = 90 - AnimationProgress(1.2, 1.4) + 'vw';

    //     })
    // })

    return (
        <Container ref={ref}>
            <Wrapper>
                <AboutMeText>About</AboutMeText>
                <AboutMeTextalt >ME</AboutMeTextalt>
                <WordContainer>
                    <WordI >I</WordI>
                    <WordCreate >Create,</WordCreate>
                    <WordDesign >Design</WordDesign>
                    <WordAnd> & </WordAnd>
                    <WordMaximize >Maximize</WordMaximize>
                    <WordExperiences >Experiences</WordExperiences>
                </WordContainer>
            </Wrapper>
        </Container>
    )
});

export default AboutMe;

const Container = styled.div`
    // background-color: #E5E5E5;
    top: 0;
    height: 300vh;
    width: 100vw;
    // margin-top: -95vh;
    z-index: 4;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: black;
    padding: 0 5vw 0 0;
    position: relative;
`;

const AboutMeText = styled.h1`
    font-size: clamp(150px, 25vh, 300px);
    letter-spacing: -10px;
    position: absolute;
    margin: 0;
    width: 0;
    color: #989898;
    bottom: clamp(-300px, -25vh, -150px);
    left: -20px;
    font-weight: 700;
    text-transform: uppercase;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    z-index: 2;
`;

const AboutMeTextalt = styled(AboutMeText)`
    font-size: clamp(170px, 30vh, 350px);
    top: clamp(200px, 42vh, 550px);
    color: #BABABA82;
    left: 30px;
    z-index: 1;
`;

const WordContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

const Word = styled.h1`
    Font-size: clamp(60px, 5vw, 150px);
    margin: 0;
    width: 0;
    color: #585858;
    margin-left: 30vw;
    transform: translate3d(${window.innerWidth}px, 0px, 0px);
    z-index: 2;

`;

const WordI = styled(Word)`
    color: #BABABA;
`;

const WordCreate = styled(Word)`
    // margin-left: 2rem;
`; 

const WordDesign = styled(Word)`
    // margin-left: 12rem;
`;

const WordAnd = styled(Word)`
    // margin-left: 23rem;
    color: #BABABA;
`;

const WordMaximize = styled(Word)`
    // margin-left: 26rem;
`;

const WordExperiences = styled(Word)`
    font-size: clamp(100px, 12vw, 270px);
    // margin-left: -7rem;
`;



  // useEffect(() => {
    //     document.addEventListener('scroll', e => {
    //         if(ContainerRef.current)
    //             // ContainerRef.current.getBoundingClientRect().top < window.innerHeight ? setActive(true) : setActive(false);
    //             ContainerRef.current.getBoundingClientRect().top <= 20 ? setActive(true) : setActive(false);
    //     })
    // }, [])

    // useEffect(() => {
    //     if(Active){
    //         // gsap.to(ContainerRef.current, {opacity: 1, duration: 1});
    //         gsap.fromTo(HeaderRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
    //         gsap.fromTo(HeaderAltRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
    //         gsap.fromTo(document.querySelector('.App'), {backgroundColor: '#3A3A3A'}, {backgroundColor: '#E5E5E5'});

    //         //One by One word by word coming on to the screen as the section loads.
    //         gsap.fromTo(Iref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 0.5})
    //         gsap.fromTo(Createref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 1})
    //         gsap.fromTo(Designref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 1.5})
    //         gsap.fromTo(Andref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 2})
    //         gsap.fromTo(Maximizeref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 2.5})
    //         gsap.fromTo(Experiencesref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 0.5, delay: 3.5})

    //     } else{
    //         // gsap.to(ContainerRef.current, {opacity: 0, duration: 1})
    //         gsap.to(HeaderRef.current,{opacity: 0});
    //         gsap.to(HeaderAltRef.current,{opacity: 0});

    //         gsap.to(Iref.current,{opacity: 0 })
    //         gsap.to(Createref.current,{opacity: 0 })
    //         gsap.to(Designref.current,{opacity: 0 })
    //         gsap.to(Andref.current,{opacity: 0 })
    //         gsap.to(Maximizeref.current,{opacity: 0 })
    //         gsap.to(Experiencesref.current,{opacity: 0 })
    //         gsap.fromTo(document.querySelector('.App'),{backgroundColor: '#E5E5E5'},{backgroundColor: '#3A3A3A'})
    //     }
    // }, [Active])