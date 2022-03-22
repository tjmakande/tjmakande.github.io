import React, {useRef} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
    // const TextWrapperref = useRef<HTMLDivElement>();

    // const t1 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: TextWrapperref.current,
    //         start: "center center",
    //         end: "bottom top",
    //         scrub: true, 
    //         markers: true
    //     }
    // });

    
   
    return (
            <Wrapper className='wrappers' ref={ref}>
                <Text className='TextDiv'> 
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
    font-size: clamp(2rem, 2.5vw, 5rem);
    
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;