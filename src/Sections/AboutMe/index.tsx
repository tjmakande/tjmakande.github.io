import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';

const AboutMe = () => {
    const ContainerRef = useRef<HTMLDivElement>(null);
    const HeaderRef = useRef<HTMLHeadingElement>(null);
    const HeaderAltRef = useRef<HTMLHeadingElement>(null);
    const Iref = useRef<HTMLHeadingElement>(null);
    const Createref = useRef<HTMLHeadingElement>(null);
    const Designref = useRef<HTMLHeadingElement>(null);
    const Andref = useRef<HTMLHeadingElement>(null);
    const Maximizeref = useRef<HTMLHeadingElement>(null);
    const Experiencesref = useRef<HTMLHeadingElement>(null);


    const [Active, setActive] = useState<Boolean>(false)

    useEffect(() => {
        document.addEventListener('scroll', e => {
            if(ContainerRef.current)
                // ContainerRef.current.getBoundingClientRect().top < window.innerHeight ? setActive(true) : setActive(false);
                ContainerRef.current.getBoundingClientRect().top <= 20 ? setActive(true) : setActive(false);

                console.log(window.innerHeight, ContainerRef.current?.getBoundingClientRect().top)
        })
    }, [])

    useEffect(() => {
        if(Active){
            // gsap.to(ContainerRef.current, {opacity: 1, duration: 1});
            gsap.fromTo(HeaderRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
            gsap.fromTo(HeaderAltRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
            gsap.fromTo(document.querySelector('.App'), {backgroundColor: '#3A3A3A'}, {backgroundColor: '#E5E5E5'});


            // gsap.fromTo([
            //     Iref.current,
            //     Createref.current, 
            //     Designref.current, 
            //     Andref.current, 
            //     Maximizeref.current, 
            //     Experiencesref.current
            // ],
            // {
            //    opacity: 0,
            //    x: 100 
            // }, 
            // {
            //     opacity: 1,
            //     x: 0,
            //     duration: 1
            // })

            //One by One word by word coming on to the screen as the section loads.
            gsap.fromTo(Iref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 0.5})
            gsap.fromTo(Createref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 1})
            gsap.fromTo(Designref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 1.5})
            gsap.fromTo(Andref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 2})
            gsap.fromTo(Maximizeref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 1, delay: 2.5})
            gsap.fromTo(Experiencesref.current,{opacity: 0,x: 100 }, {opacity: 1, x: 0,duration: 0.5, delay: 3.5})

        } else{
            // gsap.to(ContainerRef.current, {opacity: 0, duration: 1})
            gsap.fromTo(HeaderRef.current,{y:0, opacity: 1},{y: 100, opacity: 0, duration: 0.5});
            gsap.fromTo(HeaderAltRef.current,{y:100, opacity: 0},{y: 0, opacity: 0, duration: 1});
            gsap.fromTo(document.querySelector('.App'),{backgroundColor: '#E5E5E5'},{backgroundColor: '#3A3A3A'})
        }
    }, [Active])

    return (
        <Container ref={ContainerRef}>
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
}

export default AboutMe;

const Container = styled.div`
    position: relative;
    height: 100vh;
    margin-top: -95vh;
    z-index: 4;
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
    font-size: 150px;
    position: absolute;
    margin: 0;
    width: 0;
    color: #989898;
    bottom: -180px;
    left: -20px;
    font-weight: 700;
    text-transform: uppercase;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    z-index: 2;
`;

const AboutMeTextalt = styled(AboutMeText)`
    font-size: 170px;
    top: 250px;
    color: #BABABA82;
    left: 30px;
    z-index: 1;
`;

const WordContainer = styled.div`
    margin-left: 30vw;
    display: flex;
    flex-direction: column;
`;

const Word = styled.h1`
    Font-size: 60px;
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
    font-size: 130px;
    margin-left: -5rem;
`;