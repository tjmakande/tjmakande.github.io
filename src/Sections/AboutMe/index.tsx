import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
    const HeaderRef = useRef<HTMLHeadingElement>(null);
    const HeaderAltRef = useRef<HTMLHeadingElement>(null);
    const Iref = useRef<HTMLHeadingElement>(null);
    const Createref = useRef<HTMLHeadingElement>(null);
    const Designref = useRef<HTMLHeadingElement>(null);
    const Andref = useRef<HTMLHeadingElement>(null);
    const Maximizeref = useRef<HTMLHeadingElement>(null);
    const Experiencesref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(HeaderRef.current && window.scrollY > window.innerHeight * 0.2 && window.scrollY < window.innerHeight * 0.3) // About word 20% scroll to 30% scroll
                HeaderRef.current.style.marginBottom = (-100 + ((window.scrollY - window.innerHeight * 0.2) / ((window.innerHeight * 0.3) - (window.innerHeight * 0.2))) * 100).toString(10) + 'vh';

        
            if(HeaderAltRef.current && window.scrollY > window.innerHeight * 0.3 && window.scrollY < window.innerHeight * 0.4) // Me word 30% scroll to 40% scroll
                HeaderAltRef.current.style.marginTop = (100 - ((window.scrollY - window.innerHeight * 0.3) / ((window.innerHeight * 0.4) - (window.innerHeight * 0.3))) * 100).toString(10) + 'vh';

            
        })
    })

    return (
        <Container ref={ref}>
            <Wrapper>
                <AboutMeText ref={HeaderRef}>About</AboutMeText>
                <AboutMeTextalt ref={HeaderAltRef} >ME</AboutMeTextalt>
                <WordContainer>
                    <WordI ref={Iref}>I</WordI>
                    <WordCreate ref={Createref}>Create,</WordCreate>
                    <WordDesign ref={Designref}>Design</WordDesign>
                    <WordAnd ref={Andref}> & </WordAnd>
                    <WordMaximize ref={Maximizeref}>Maximize</WordMaximize>
                    <WordExperiences ref={Experiencesref}>Experiences</WordExperiences>
                </WordContainer>
            </Wrapper>
        </Container>
    )
});

export default AboutMe;

const Container = styled.div`
    position: fixed;
    background-color: #E5E5E5;
    top: 0;
    height: 100vh;
    width: 100vw;
    // margin-top: -95vh;
    z-index: 4;
    opacity: 0;
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
    margin-bottom: -100vh;
`;

const AboutMeTextalt = styled(AboutMeText)`
    font-size: clamp(170px, 30vh, 350px);
    top: clamp(200px, 42vh, 550px);
    color: #BABABA82;
    left: 30px;
    z-index: 1;
    margin-top: 100vh;
`;

const WordContainer = styled.div`
    margin-left: 30vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Word = styled.h1`
    Font-size: clamp(60px, 4vw, 100px);
    margin: 0;
    width: 0;
    color: #585858;
`;

const WordI = styled(Word)`
    color: #BABABA;
`;

const WordCreate = styled(Word)`
    margin-left: 2rem;
`; 

const WordDesign = styled(Word)`
    margin-left: 12rem;
`;

const WordAnd = styled(Word)`
    margin-left: 23rem;
    color: #BABABA;
`;

const WordMaximize = styled(Word)`
    margin-left: 26rem;
`;

const WordExperiences = styled(Word)`
    font-size: clamp(100px, 12vw, 270px);
    margin-left: -7rem;
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