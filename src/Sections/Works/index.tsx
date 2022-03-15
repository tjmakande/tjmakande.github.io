import React from 'react'

import styled from 'styled-components';

import CinemaPhoto from '../../Assets/Cinema-Photo.png';
import Musician from '../../Assets/Musician.png'
import AutomatedBot from '../../Assets/Automated-bot.png';
import Cube from '../../Assets/3D-cube.png';

const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container ref={ref}>

            <ProjectItem>
               <Title> 01. Cinema</Title>
            </ProjectItem>
            <Line />

            <ProjectItem>
                <Title>02. Automated Chatbot</Title>

            </ProjectItem>
            <Line />

            <ProjectItem>
            <Title>03. Masimba</Title>

            </ProjectItem>
            <Line />

            <ProjectItem>
            <Title>04. SDSN Youth</Title>

            </ProjectItem>
            <Line />

        </Container>
    )
});

export default WorkSection;

const Title = styled.h1`
    font-size: 5vw;
    margin: 0;
    
`;

const Line = styled.hr`
    background-color: rgb(58,58,58);
    height: 1px;
    width: 90%;
    border: 0;
`;

const ProjectItem = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: start;
    padding-left: 15vw;
`;

const Container = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 100vh;
`;