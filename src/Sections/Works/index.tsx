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


            <TextContainer>
                <TitleContainer>
                    <div className={'text1'}>
                        <TitleText> 01. Cinema</TitleText>
                    </div>
                </TitleContainer>

                <TitleContainer>
                    <div className={'text2'}>
                        <TitleText> 02. Chatbot</TitleText>
                    </div>
                </TitleContainer>

                <TitleContainer>
                    <div className={'text3'}>
                        <TitleText> 03. Masimba</TitleText>
                    </div>
                </TitleContainer>

                <TitleContainer>
                    <div className={'text4'}>
                        <TitleText> 04. SDSN Youth</TitleText>
                    </div>
                </TitleContainer>
            </TextContainer>

            <WrapperWorks className="Project_wrapper">
                <ProjectItem className={'Works cinema'}  data-id={'cinema'}>
                    <ProjectBg  src={CinemaPhoto} />
                </ProjectItem>

                <ProjectItem className={'Works chatbot'}  data-id={'chatbot'}>
                    <ProjectBg src={AutomatedBot} />
                </ProjectItem>

                <ProjectItem className={'Works masimba'} data-id={'masimba'}>
                    <ProjectBg  src={Musician}/>
                </ProjectItem>

                <ProjectItem className={'Works sdsn'} data-id={'sdsn'}>
                    <ProjectBg src={Cube} />
                </ProjectItem>
            </WrapperWorks>

        </Container>
    );
});

export default WorkSection;

// EDIT: PUT TO THE BOTTOM AFTER COMPLETE
const TitleText = styled.text`
    white-space: nowrap;
`;
const TitleContainer = styled.div`
    text-align: center;
    font-size: 7rem;
    position: absolute;
    right: 0;
`;

const TextContainer = styled.div`
    height: 250px;
    width: 400px;

    position: absolute;
    right: clamp(2rem, 10vw, 10rem);
    top: 50%;
    translate(0, -50%);
`;

// THIS IS THE STARTING POINT OF ORIGINAL
const ProjectBg = styled.img`
    width: 70vw;
    height: 43vw;

    &:hover{
        & + h2 {
            transform: rotateZ(-10deg);
            transition: .5s;

        }
    }
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

    &:hover{
        transform: rotateZ(-10deg);
    }
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