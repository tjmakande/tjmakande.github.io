import {useEffect} from 'react';

import AutomatedBot from 'Assets/chatbot-demo.gif';
import CinemaPhoto from 'Assets/cinema-demo.gif';
import Cube from 'Assets/cube-demo.gif';
import SDSN from 'Assets/SDSN-demo.gif';
import styled from 'styled-components';

import {isMobile} from 'utils/device';


const WorkSection = () => {

    useEffect(() => {
        window.addEventListener('load', () => {
            const cursor = document.querySelector('.mouse') as HTMLDivElement;
            const Works = document.querySelectorAll('.Works');
            Works.forEach((element) => {
                element.addEventListener('mouseenter', () => cursor && cursor.classList.add('mouseOverProject'));
                element.addEventListener('mouseleave', () => cursor && cursor.classList.remove('mouseOverProject'));
            });
        });
    },[]);

    return(
        <Container className="works_wrapper">
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


            <TextContainer className="worksTexts">
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
                        <TitleText> 03. Cube</TitleText>
                    </div>
                </TitleContainer>

                <TitleContainer>
                    <div className={'text4'}>
                        <TitleText> 04. SDSN Youth</TitleText>
                    </div>
                </TitleContainer>
            </TextContainer>

            <WrapperWorks className="Project_wrapper">
                <ProjectItem className="cinema">
                    <ProjectBg className={'Works'} data-id={'cinema'} src={CinemaPhoto} />
                    <DescriptionBox>
                        A movie booking platform where one can also checkout the latest movies.
                    </DescriptionBox>
                </ProjectItem>

                <ProjectItem className="chatbot">
                    <ProjectBg className={'Works'}  data-id={'chatbot'} src={AutomatedBot} />
                    <DescriptionBox>
                        A customer service chatbot that is able to process relevant information to the user.
                    </DescriptionBox>
                </ProjectItem>

                <ProjectItem className="cube">
                    <ProjectBg  className={'Works'} data-id={'cube'} src={Cube}/>
                    <DescriptionBox>
                        A cube showcasing my experiences in China.
                    </DescriptionBox>
                </ProjectItem>

                <ProjectItem className="sdsn">
                    <ProjectBg className={'Works'}  data-id={'sdsn'}src={SDSN} />
                    <DescriptionBox>
                        The global innovation and impact awards, recognizing and mobilizing leading solutions for the sustainable development goals.
                    </DescriptionBox>
                </ProjectItem>
            </WrapperWorks>

        </Container>
    );
};

export default WorkSection;

const DescriptionBox = styled.div`
    width: ${isMobile() ? '100%' : '35%'};
    height: 150px;
    display: flex;
    align-items: start;
    justify-content: center;
    font-family: nunito;
    box-sizing: border-box;
    padding: 0 2rem;
    font-size: 1.5rem;
    ${isMobile() && `
        margin-top: 2rem;
        backdrop-filter: blur(3px);
    `}
`;

const ProjectBg = styled.img`
    width: 50vw;
    height: 26.5vw;
    -webkit-box-shadow: 10px 10px 30px -7px rgba(150,150,150,1);
    -moz-box-shadow: 10px 10px 30px -7px rgba(150,150,150,1);
    box-shadow: 10px 10px 30px -7px rgba(150,150,150,1);

    ${isMobile() && `
        width: 90vw;
        height: 47.7vw;
    `}
    &:hover{
        & + h2 {
            transform: rotateZ(-10deg);
            transition: .5s;
        }
    }
`;

const WrapperWorks = styled.div`
    height: 100vh;
    position: relative;
    z-index: 2;
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
    font-size: clamp(6rem, 12vw, 16rem);
    margin: 0;
    font-weight: 700;
    z-index: 1;
`;
const ProjectItem = styled.div`
    position: absolute;
    top: 0;
    height: 70vh;
    width: ${isMobile() ? '100vw' : '95vw'};
    display: flex;
    align-items: center;
    justify-content: ${isMobile() ? 'center' : 'end'};
    ${
        isMobile() && 'flex-direction: column;'
    }
`;

const Container = styled.section`
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    margin-bottom: 350vh; //for animations sake
    background-color: white;
`;

const TextContainer = styled.div`
    height: 150px;
    width: 100%;

    position: absolute;
    bottom: clamp(1.5rem, 12vh, 10rem);
    right: ${isMobile() ? '1.5rem' : '8vw'};
    background-color: white;
    z-index: 0;
`;

const TitleContainer = styled.div`
    text-align: center;
    font-size: clamp(3.5rem, 10vw, 10rem);
    position: absolute;
    right: 0;
    mix-blend-mode: difference;
    z-index: 1;
`;

const TitleText = styled.p`
    white-space: nowrap;
    color: #fff;
    margin: 0;
`;