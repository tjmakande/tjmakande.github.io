import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';

interface Props{
    page: (item: boolean) => void
}

const WhatIDo = (props:Props) => {
    const {page} = props;
    const ContainerRef = useRef<HTMLDivElement>(null);
    const HeaderRef = useRef<HTMLHeadingElement>(null);
    const [Active, setActive] = useState<Boolean>(false);

    useEffect(() => {
        document.addEventListener('scroll', e => {
            if(ContainerRef.current)
                ContainerRef.current.getBoundingClientRect().top < window.innerHeight * 3 / 4 ? setActive(true) : setActive(false)
        })
    }, []);

    useEffect(() => {
        if(Active){
            // gsap.to(ContainerRef.current, {opacity: 1, duration: 1});
            gsap.fromTo(HeaderRef.current,{y:100, opacity: 0},{y: 0, opacity: 1, duration: 1});
            page(true);
        } else{
            // gsap.to(ContainerRef.current, {opacity: 0, duration: 1})
            gsap.fromTo(HeaderRef.current,{y:0, opacity: 1},{y: 100, opacity: 0, duration: 0.5});
            page(false);
        }
    }, [Active, page])

    return (
        <Container ref={ContainerRef}>
            <Wrapper>
                <Header ref={HeaderRef}>
                    What I do
                </Header>
            </Wrapper>

        </Container>

    )
}

export default WhatIDo;

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

const Header = styled.h1`
    font-size: 50px;
    margin: 0;
`;