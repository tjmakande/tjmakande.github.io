import AutomatedBot from 'Assets/chatbot-demo.gif';
import CinemaPhoto from 'Assets/cinema-demo.gif';
import Cube from 'Assets/cube-demo.gif';
import SDSN from 'Assets/SDSN-demo.gif';
import {useEffect, useState} from 'react';
import Scrollbar from 'smooth-scrollbar';
import { Scrollbar as ScrollType } from 'smooth-scrollbar/scrollbar';
import styled from 'styled-components';

import { openInNewTab } from "utils/OpenNewTab";

const WorkSection = () => {
    const [scrollbar, setScrollbar] = useState<ScrollType>();

    useEffect(() => {
        if (!scrollbar){
            window.addEventListener('load', () => {
                const container = Scrollbar.get(document.querySelector('.scroller') as HTMLDivElement);
                setScrollbar(container);
            });
        }
    }, [scrollbar]);


    return(
        <Container className="works_wrapper">
            <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100%'}}>
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
                    <ProjectBg className={'Works'} data-id={'cinema'} src={CinemaPhoto}  alt="cinema platform demo"/>
                    <DescriptionBox>
                        <p>A movie booking platform, where you can also check out the latest movies.</p>
                        <Btn available={false}>Coming Soon!</Btn>
                    </DescriptionBox>
                </ProjectItem>

                <ProjectItem className="chatbot">
                    <ProjectBg className={'Works'}  data-id={'chatbot'} src={AutomatedBot}  alt="chatbot demo"/>
                    <DescriptionBox>
                        <p>A customer service realtime chatbot that is able to process relevant information to the user and perform CRUD operations.</p>
                        <Btn available={false}>Upon Request</Btn>
                    </DescriptionBox>
                </ProjectItem>

                <ProjectItem className="cube">
                    <ProjectBg  className={'Works'} data-id={'cube'} src={Cube} alt="cube demo"/>
                    <DescriptionBox>
                        <p>A responsive cube showcasing my experience during the 6 years I lived in China.</p>
                        <Btn available={false}>Upon Request</Btn>
                    </DescriptionBox>
                </ProjectItem>

                <ProjectItem className="sdsn">
                    <ProjectBg className={'Works'}  data-id={'sdsn'}src={SDSN} alt="sdsn demo" />
                    <DescriptionBox>
                        <p>The global innovation and impact awards, recognizing and mobilizing leading solutions for the sustainable development goals.</p>
                        <Btn available={true} onClick={() => openInNewTab('https://www.sdsnyouth.org/awards')}>View Site</Btn>
                    </DescriptionBox>
                </ProjectItem>
            </WrapperWorks>

        </Container>
    );
};

export default WorkSection;

const Btn = styled.div`
    width: 60%;
    height: 50px;
    font-size: 1.2rem;
    margin: 0 auto;
    border-radius: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${
        (props: {available: boolean}) => props.available ? 'background-color: #00b1eb;' : 'background-color: #d9d6d6;'

    }

    @media (max-width: 460px){
        width: 120px;
        height: 40px;
    }
    @media ( max-width: 850px){
        font-size: clamp(13px, 3vh, 20px);
        width: 70%;
    }

    @media (max-width:850px) and (orientation: landscape){
        width: 150px;
        height: 35px;
    }
`;

const DescriptionBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-family: nunito;
    box-sizing: border-box;
    padding: 0 2rem;
    font-size: clamp(1.2rem, 3.3vw, 1.8rem);

    & > p {
        margin: 1em auto;
    }

    @media (max-width: 850px){
        width: 100%;
        backdrop-filter: blur(3px);
        // font-size: clamp(1rem, 3vh, 2rem);
    }

    @media (max-width:850px) and (orientation: landscape){
        width: 60%;
        // font-size: clamp(10px, 3vh, 20px);
    }
`;

const ProjectBg = styled.img`
    width: 50vw;
    height: 26.5vw;
    -webkit-box-shadow: 10px 10px 30px -7px rgba(150,150,150,1);
    -moz-box-shadow: 10px 10px 30px -7px rgba(150,150,150,1);
    box-shadow: 10px 10px 30px -7px rgba(150,150,150,1);

    &:hover{
        & + h2 {
            transform: rotateZ(-10deg);
            transition: .5s;
        }
    }

    @media (max-width: 850px){
        width: 85vw;
        height: 45.05vw;
    }

    @media (max-width:850px) and (orientation: landscape){
        width: clamp(12rem, 60vw, 20rem);
        height:clamp(6.36rem, 31.5vw, 10.6rem);
        margin-left:2vw;
    }
`;

const WrapperWorks = styled.div`
    height: 100%;
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
    font-size: clamp(6rem, 10.5vw, 16rem);
    margin: 0;
    font-weight: 700;
    z-index: 1;
`;
const ProjectItem = styled.div`
    position: absolute;
    top: 0;
    height: 70%;
    width: 95vw;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 850px){
        width: 100vw;
        justify-content: center;
        flex-direction: column;
    }
    @media (max-width:850px) and (orientation: landscape){
        flex-direction: row;
    }
`;

const Container = styled.section`
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    margin-bottom: 600vh;
    background-color: white;
`;

const TextContainer = styled.div`
    height: 180px;
    width: 100%;

    position: absolute;
    bottom: clamp(4rem, 13vh, 12rem);
    right: 8vw;
    background-color: white;
    display: flex;
    align-items: end;

    @media (max-width: 850px){
        right: 1.5rem;
        bottom: clamp(9rem, 19vh, 15rem);

    }

    @media (max-width:850px) and (orientation: landscape){
        // bottom: clamp(2rem, 12vh, 10rem);
    }
`;

const TitleContainer = styled.div`
    text-align: center;
    font-size: clamp(3.1rem, 10vw, 10rem);
    position: absolute;
    right: 0;
    z-index: 1;

    @media (max-width:850px) and (orientation: landscape){
        font-size: 2rem;
    }
`;

const TitleText = styled.p`
    white-space: nowrap;
    color: #000;
    margin: 0;
`;