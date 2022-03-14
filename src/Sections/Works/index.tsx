import React from 'react'

import styled from 'styled-components';

import CinemaPhoto from '../../Assets/Cinema-Photo.png';
import Musician from '../../Assets/Musician.png'
import AutomatedBot from '../../Assets/Automated-bot.png';
import Cube from '../../Assets/3D-cube.png';

const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container ref={ref}>
            
        </Container>
    )
});

export default WorkSection;

const Container = styled.section`
    background-color: blue;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    overflow: hidden;
`;