import React from 'react';
import styled from 'styled-components';

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
   
    return (
            <Wrapper ref={ref}>
               
            </Wrapper>
    )
});

export default AboutMe;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 4;
    display: flex;
    flex-direction: column;
    color: black;
    // padding: 0 5vw 0 0;
    position: relative;
    overflow: hidden;
`;