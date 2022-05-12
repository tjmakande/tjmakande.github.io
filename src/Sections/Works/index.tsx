import React from 'react';

import Cube from 'Assets/3D-cube.png';
import AutomatedBot from 'Assets/Automated-bot.png';
import CinemaPhoto from 'Assets/Cinema-Photo.png';
import Musician from 'Assets/Musician.png';
import styled from 'styled-components';


const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container className="works_wrapper" ref={ref}>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh'}}>
                <WrapperText>
                    <SectionTitle>
                    <span className="word_selected" style={{display: 'inline-block'}}>
                        Selected
                    </span>
                    <span className="word_works" style={{display: 'inline-block'}}>
                        Works
                    </span>
                </SectionTitle>
                </WrapperText>
            </div>

            <WrapperWorks className="Project_wrapper">
                <ProjectItem className={'Works cinema'}  data-id={'cinema'}>
                    <ProjectBg  src={CinemaPhoto} />
                    <Title > 01. Cinema</Title>
                </ProjectItem>

                <ProjectItem className={'Works chatbot'}  data-id={'chatbot'}>
                    <ProjectBg src={AutomatedBot} />
                    <Title >02. Chatbot</Title>
                </ProjectItem>

                <ProjectItem className={'Works masimba'} data-id={'masimba'}>
                    <ProjectBg  src={Musician}/>
                    <Title >03. Masimba</Title>
                </ProjectItem>

                <ProjectItem className={'Works sdsn'} data-id={'sdsn'}>
                    <ProjectBg src={Cube} />
                    <Title >04. SDSN Youth</Title>
                </ProjectItem>
            </WrapperWorks>
        </Container>
    );
});

export default WorkSection;
const ProjectBg = styled.img`
    width: 50vw;
    height: 28vw;
`;

const WrapperWorks = styled.div`
    width: ${95 * 4}vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;
const WrapperText = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;
const SectionTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12vw;
    margin: 0;
    font-weight: 700;
`;

const Title = styled.h2`
    position: absolute;
    color: rgb(58,58,58);
    right: 2vw;
    bottom: 5vw;
    font-size: 10vw;
    margin: 0;
`;

const ProjectItem = styled.div`
    position: relative;
    height: 100vh;
    width: 95vw;
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: difference;
    color: white;
`;

const Container = styled.section`
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    margin-bottom: 350vh; //for animations sake
    background-color: white;
`;