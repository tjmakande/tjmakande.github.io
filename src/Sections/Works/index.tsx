import React from 'react'

import styled from 'styled-components';

import CinemaPhoto from '../../Assets/Cinema-Photo.png';
import Musician from '../../Assets/Musician.png'
import AutomatedBot from '../../Assets/Automated-bot.png';
import Cube from '../../Assets/3D-cube.png';

const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container ref={ref}>
            <Wrapper>
                <SectionTitle>Selected Works</SectionTitle>

                <WorksContainer>
                    <StripWrapper style={{transform: 'translate3d(-400vh, 0px, 0px)'}}>
                        <PictureWrapper>
                            <ImageItem src={Cube} alt={'item'}/>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ImageItem src={AutomatedBot} alt={'item'}/>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ImageItem src={Musician} alt={'item'}/>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ImageItem src={CinemaPhoto} alt={'item'}/>
                        </PictureWrapper>
                    </StripWrapper>
                    <StripWrapper style={{transform: 'translate3d(100vh, 0px, 0px)'}}>
                        <PictureWrapper>
                            <ProjectTitle>Cinema: movie booking platform </ProjectTitle>
                            <ProjectDescription> Find the latest movie showing in the cinema and book a seat for yourself and/or others! </ProjectDescription>
                            <ProjectLanguages>React, Redux, Nodejs, MongoDB</ProjectLanguages>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ProjectTitle>Musician Portfolio </ProjectTitle>
                            <ProjectDescription> Follow your favorite artist and stay up to date with his latest creations. Do not miss out on what their doing next</ProjectDescription>
                            <ProjectLanguages>Pug, Sass</ProjectLanguages>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ProjectTitle>Automatic Customer service Bot </ProjectTitle>
                            <ProjectDescription> The world is changing. I have created an automated customer service bot to interact with users.</ProjectDescription>
                            <ProjectLanguages>React, Konva, NodeNLT, MongoDB</ProjectLanguages>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ProjectTitle>3D Cube </ProjectTitle>
                            <ProjectDescription> Simply put, some of my life in a cube. </ProjectDescription>
                            <ProjectLanguages>Vanilla javascript</ProjectLanguages>
                        </PictureWrapper>
                    </StripWrapper>
                </WorksContainer>
            </Wrapper>
        </Container>
    )
});

export default WorkSection;
const PictureWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ImageItem = styled.img`
    width: 100%;
`;

const ProjectTitle = styled.h2`

`;

const ProjectDescription = styled.p`
    font-size: 18px;
`;

const ProjectLanguages = styled.p`
    font-size: 10px;
`;

const StripWrapper = styled.div`
    width: 50vw;
    padding: 0 4vw;
`;

const WorksContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 6;
    margin-left: 5vw;
    display: flex;
    flex-direction: row;
    overflow: scroll;
`;

const Container = styled.section`
    top: 0;
    height: 450vh;
    width: 100vw;
    z-index: 5;
    overflow: hidden;
`;

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: black;
    padding: 0 5vw 0 0;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const SectionTitle = styled.h1`
    font-size: clamp(150px, 18vh, 300px);
    text-transform: uppercase;
    line-height: clamp(150px, 18vh, 300px);
    margin: 0;
`;