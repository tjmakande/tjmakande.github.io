import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'utils/device';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    return (
            <Wrapper className='AM_wrapper'>
                <Text>
                    <Lines className={'Othertext'}>A web developer who diligently works to move </Lines>
                    <Lines className={'from'} style={{display: 'inline-block'}}>from</Lines>&nbsp;
                    <Lines className={'challenge'} style={{display: 'inline-block'}}> challenges </Lines>&nbsp;
                    <Lines className={'to'} style={{display: 'inline-block'}}>to</Lines>&nbsp;
                    {/* <Lines className={'Othertext'}>any given</Lines>&nbsp; */}
                    <Lines className={'solution'} style={{display: 'inline-block'}}>solutions</Lines>
                    <Lines className={'Othertext'}>, drawing the ideas created in your head, on to the canvas of reality.</Lines>
                </Text>
            </Wrapper>
    );
};

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
    font-size:clamp(2rem, 2.5vw, 5rem);

    ${
        isMobile() && `
            font-size: 1.5rem;
            width: 90%;
        `
    }
`;

const Wrapper = styled.div`
    height: ${window.innerHeight}px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 200vh;
`;