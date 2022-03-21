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
                    <span>A web developer who diligently works to find the best </span>
                    <span className={'solution'} style={{display: 'inline-block'}}>solution </span>
                    <span style={{display: 'inline-block'}}>to </span>
                    <span>any given </span>  
                    <span style={{display: 'inline-block'}}>challenge</span>
                    <span>, drawing the ideas created in your head, on to the canvas of reality.</span> 
                </Text>
            </Wrapper>
    )
});

export default AboutMe;

const Text = styled.div`
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
    overflow: hidden;
    justify-content: center;
    margin-bottom: 100vh;
`;