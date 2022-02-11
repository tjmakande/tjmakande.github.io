import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';

const AboutMe = () => {
    const ContainerRef = useRef<HTMLDivElement>(null);
    const HeaderRef = useRef<HTMLHeadingElement>(null);
    const [Active, setActive] = useState<Boolean>(false)

    useEffect(() => {
        document.addEventListener('scroll', e => {
            if(ContainerRef.current)
                ContainerRef.current.getBoundingClientRect().top < window.innerHeight ? setActive(true) : setActive(false)
        })
    }, [])

    useEffect(() => {
        if(Active){
            // gsap.to(ContainerRef.current, {opacity: 1, duration: 1});
            gsap.fromTo(HeaderRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
            gsap.fromTo(document.querySelector('.App'), {backgroundColor: '#3A3A3A'}, {backgroundColor: '#E5E5E5'})
        } else{
            // gsap.to(ContainerRef.current, {opacity: 0, duration: 1})
            gsap.fromTo(HeaderRef.current,{y:0, opacity: 1},{y: 100, opacity: 0, duration: 0.5});
            gsap.fromTo(document.querySelector('.App'),{backgroundColor: '#E5E5E5'},{backgroundColor: '#3A3A3A'})

        }
    }, [Active])

    return (
        <Container ref={ContainerRef}>
            <Wrapper>
                <h1 ref={HeaderRef}>something</h1>
            </Wrapper>
        </Container>
    )
}

export default AboutMe;

const Container = styled.div`
    position: relative;
    height: 100vh;
`;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-Items: center;
    color: black;
    padding: 0 5vw 0 0;

`;

const AboutText = styled.h1`

`