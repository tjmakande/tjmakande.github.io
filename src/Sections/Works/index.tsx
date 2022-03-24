import React from 'react'

import styled from 'styled-components';


const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container className="works_wrapper" ref={ref}>
            <SectionTitle>
                <span className="word_selected">
                    Selected
                </span>
                <span className="word_works">
                    Works
                </span>
            </SectionTitle>
            <ProjectItem className={'Works cinema'} data-id={'cinema'}>
               <Title > 01. Cinema</Title>
            </ProjectItem>

            <ProjectItem className={'Works chatbot'} data-id={'chatbot'}>
                <Title >02. Automated Chatbot</Title>
            </ProjectItem>

            <ProjectItem className={'Works masimba'} data-id={'masimba'}>
                <Title >03. Masimba</Title>
            </ProjectItem>

            <ProjectItem className={'Works sdsn'} data-id={'sdsn'}>
                <Title >04. SDSN Youth</Title>
            </ProjectItem>
        </Container>
    )
});

export default WorkSection;
const SectionTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 13vw;
    margin: 0;
    font-weight: 700;
`;

const Title = styled.h2`
    font-size: 5vw;
    margin: 0;
`;

const ProjectItem = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: start;
    padding: 2vh 0 2vh 15vw;
    border-bottom: 1px rgb(58, 58, 58) solid;
    mix-blend-mode: difference;
    color: white;
`;

const Container = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 250vh; //for animations sake
    background-color: white;
`;