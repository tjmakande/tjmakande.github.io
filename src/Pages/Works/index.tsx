import React from 'react';
import styled from 'styled-components';
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
    const CubeProject = {
        Name: 'Cube Project',
        Imgsrc: Cube,
        Description: 'something cool'
    }
    const BotProject = {
        Name: 'Bot Project',
        Imgsrc: Bot,
        Description: 'something Bot cool cool'
    }
    const CinemaProject = {
        Name: 'Cinema Project',
        Imgsrc: Cinema,
        Description: 'Cinema\'s are so cool'
    }
    const MusicianProject = {
        Name: 'Musician Project',
        Imgsrc: Musician,
        Description: 'Bow wow wow yippe yo yippe yeah-- cool'
    }
    const Project = [CubeProject, BotProject, CinemaProject, MusicianProject];

    return(
        <SectionWrapper>
            <Wrapper>
                <Header>
                    Works
                </Header>
            </Wrapper>
            {
                    Project.map((i: Projectschema, idx: number) => (
                        <ProjectWrap>
                            <ProjectImg src={i.Imgsrc} />
                            <h1>{i.Name}</h1>
                            <p>{i.Description}</p>
                        </ProjectWrap>
                    ))
                }
        </SectionWrapper>
    )
}

export default WorksPage;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
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

const ProjectWrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ProjectImg = styled.img`
    width: 40vw;
    height: 40vw;
`;