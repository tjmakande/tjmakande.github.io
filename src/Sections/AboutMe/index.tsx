import React from 'react';
import styled from 'styled-components';

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
   
    return (
            <Wrapper ref={ref}>
               <Text> A web developer who diligently works to find the best solution to any given challenge, drawing the ideas created in your head, on to the canvas of reality.</Text>
            </Wrapper>
    )
});

export default AboutMe;

const Text = styled.p`
    color: black;
    width: 60%;
    margin: 0 auto;
    font-size: clamp(2rem, 2.5vw, 5rem);

`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
`;