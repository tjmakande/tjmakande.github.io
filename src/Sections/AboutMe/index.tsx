import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from 'utils/device';

gsap.registerPlugin(ScrollTrigger)

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {   
    return (
            <Wrapper className='AM_wrapper' ref={ref}>
                <Text> 
                    <Lines className={'Othertext'}>A web developer who diligently works to find the best </Lines>
                    <Lines className={'solution'} style={{display: 'inline-block'}}> solutions </Lines>&nbsp;
                    <Lines className={'to'} style={{display: 'inline-block'}}>to</Lines>&nbsp;
                    <Lines className={'Othertext'}>any given</Lines>&nbsp;
                    <Lines className={'challenge'} style={{display: 'inline-block'}}>challenges</Lines>
                    <Lines className={'Othertext'}>, drawing the ideas created in your head, on to the canvas of reality.</Lines> 
                </Text>
            </Wrapper>
    )
});

export default AboutMe;

const Lines = styled.span`
    position: relative;
    margin: 0;
    padding: 0
`;

const Text = styled.p`
    width: 60%;
    margin: 0 auto;
    color: black;
    font-size: ${isMobile() ? 'clamp(1rem, 2vw, 3rem)' : 'clamp(2rem, 2.5vw, 5rem)'};
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 200vh;
`;