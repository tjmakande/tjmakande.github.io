import React, {useState} from 'react';
import styled from 'styled-components';
import Footer from 'Sections/Footer';
import Navigation from './Navigation';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import Cube from 'Assets/3D-cube.png';
import Bot from 'Assets/Automated-bot.png';
import Cinema from 'Assets/Cinema-Photo.png';
import Musician from 'Assets/Musician.png';

interface Projectschema {
    Name: string,
    Imgsrc: string,
    Description: string
}

const WorksPage = () => {
    const [page, setPage] = useState<number>(0);

    const CubeProject = {
        Name: 'Cube Project',
        Imgsrc: Cube,
        Description: 'I just thought this was actually pretty cool'
    }
    const BotProject = {
        Name: 'Bot Project',
        Imgsrc: Bot,
        Description: 'An automatic bot system for a production company that carries out tasks such as checking an orders, making orders etc all through messages'
    }
    const CinemaProject = {
        Name: 'Cinema Project',
        Imgsrc: Cinema,
        Description: 'A site designed to show the latest movies and book a seat for yourself and your friends'
    }
    const MusicianProject = {
        Name: 'Musician Project',
        Imgsrc: Musician,
        Description: 'A personal website for a musician'
    }
    const Project = [CubeProject, BotProject, CinemaProject, MusicianProject];

    return(
        <SectionWrapper style={{backgroundColor: 'rgb(58,58,58)', transform: `translateY(-${window.innerHeight * page}px)`}}>
            <Wrapper>
                <p style={{font: '1.5rem', marginTop: '5rem', color: 'rgb(229,229,229)'}}>
                    These are some of the projects that I have been working on. Please check them out!
                </p>
                <Header>
                    Works
                </Header>
            </Wrapper>
            {
                Project.map((i: Projectschema, idx: number) => (
                    <ProjectSection style={{transform: `translatey(${window.innerHeight * (idx)}px)`}}>
                        <ProjectWrap>
                            <ProjectImg src={i.Imgsrc} />
                            <TextContainer>
                                <Title>{i.Name}</Title>
                                <Description>{i.Description}</Description>
                            </TextContainer>
                        </ProjectWrap>
                    </ProjectSection>
                ))
            }
            <Navigation active={page} setPage={(page: number) => setPage(page)}/>
        </SectionWrapper>
    )
}

export default WorksPage;
const TextContainer = styled.div`
    width: 30%;
`;

const Title = styled.h1`
    color: white;
    font-size: clamp(1.5rem, 3.5vw, 5rem);
`;

const Description = styled.p`
    color: rgb(229, 229, 229);
`;

const ProjectSection = styled.div`
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    padding-left: 5vw;
`;

const ProjectWrap = styled.div`
    position: relative;  
    height:85%;   
    width: 85%;
    background-color: rgb(58,58,58);
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px 20px;
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Header = styled.h1`
    position: relative;
    margin: 0;
    font-size: 12vw;
    color: #E5E5E5;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 12vw;
    z-index: 1;
`;

const ProjectImg = styled.img`
    width: 70%;
    margin-left: 2rem;
    
`;