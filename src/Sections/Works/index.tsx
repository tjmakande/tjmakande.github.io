import React from 'react'

import styled from 'styled-components';

import CinemaPhoto from '../../Assets/Cinema-Photo.png';
import Musician from '../../Assets/Musician.png'
import AutomatedBot from '../../Assets/Automated-bot.png';
import Cube from '../../Assets/3D-cube.png';

interface ProjectDetailsSchema {
    title: string,
    description: string,
    languages: string,
}

const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    const ProjectDetails = [
        {
            title: 'Cinema: movie booking platform', 
            description: 'Find the latest movie showing in the cinema and book a seat for yourself and/or others!', 
            languages: 'React, Redux, Nodejs, MongoDB'
        },
        {
            title: 'Musician Portfolio', 
            description: 'Follow your favorite artist and stay up to date with his latest creations. Do not miss out on what their doing next', 
            languages: 'Pug, Sass'
        }, 
        {
            title: 'Automatic Customer service Bot', 
            description: 'The world is changing. I have created an automated customer service bot to interact with users.', 
            languages: 'React, Konva, NodeNLT, MongoDB'
        },
        {
            title: '3D Cube', 
            description: 'Simply put, some of my life in a cube. ', 
            languages: 'Vanilla javascript'
        }
    ]
    return(
        <Container ref={ref}>
            <Wrapper>
                <SectionTitle>Selected Works</SectionTitle>

                <WorksContainer>
                    <StripWrapper style={{transform: 'translate3d(-400vh, 0px, 0px)', width: '70vw'}}>
                        <PictureWrapper >
                            <ImageItem src={Cube} alt={'item'}/>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ImageItem src={AutomatedBot} alt={'item'}/>
                        </PictureWrapper>
                        <PictureWrapper>
                            <ImageItem src={Musician} alt={'item'}/>
                        </PictureWrapper>
                        <PictureWrapper >
                                <ImageItem src={CinemaPhoto} alt={'item'}/>
                        </PictureWrapper>
                    </StripWrapper>
                    <StripWrapper style={{
                        color: '#000',
                        zIndex: 90,
                        mixBlendMode: 'overlay',
                        transform: 'translate3d(100vh, 0px, 0px)', 
                        fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                        right: '0'
                        }}>
                        {
                            ProjectDetails.map((i:ProjectDetailsSchema, idx: number) => (
                                <PictureWrapper key={idx + '-item'}>
                                    <ProjectTitle>{i.title}</ProjectTitle>
                                </PictureWrapper>
                            ))
                        }
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

    & h2 {
        color: #000;
        text-decoration: none;
    }
`;

const ImageItem = styled.img`
    width: 100%;
`;

const ProjectTitle = styled.h2`
`;

const StripWrapper = styled.div`
    width: 50vw;
    padding: 0 4vw;
    position: absolute;
`;

const WorksContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 6;
    margin-left: 5vw;
    display: flex;
    flex-direction: row;
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
    color: rgb(58, 58, 58);
`;