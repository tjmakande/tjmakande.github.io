import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';

const AboutMe = () => {
    const ContainerRef = useRef<HTMLDivElement>(null);
    const HeaderRef = useRef<HTMLHeadingElement>(null);
    const HeaderAltRef = useRef<HTMLHeadingElement>(null);


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
            gsap.fromTo(document.querySelector('.App'), {backgroundColor: '#3A3A3A'}, {backgroundColor: '#E5E5E5'})
        } else{
            // gsap.to(ContainerRef.current, {opacity: 0, duration: 1})
            gsap.fromTo(HeaderRef.current,{y:0, opacity: 1},{y: 100, opacity: 0, duration: 0.5});
            gsap.fromTo(HeaderAltRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
            gsap.fromTo(document.querySelector('.App'),{backgroundColor: '#E5E5E5'},{backgroundColor: '#3A3A3A'})

        }
    }, [Active])

    return (
        <Container ref={ContainerRef}>
            <Wrapper>
                <AboutMeText ref={HeaderRef}>About</AboutMeText>
                <AboutMeTextalt ref={HeaderAltRef} >ME</AboutMeTextalt>
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
    font-size: 120px;
    position: absolute;
    margin: 0;
    background-color: red;
    bottom: -100px;
    left: 15px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
`;

const AboutMeTextalt = styled.h1`
    font-size: 120px;
    position: absolute;
    margin: 0;
    top:300px;
    left: 15px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    z-index: 6;
`;