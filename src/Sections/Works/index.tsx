import React from 'react'

import styled from 'styled-components';

const WorkSection = () => {
    return(
        <Container>
            <Wrapper>
                <SectionTitle>Selected</SectionTitle>
                <SectionTitle> Works</SectionTitle>
            </Wrapper>
        </Container>
    )
};

export default WorkSection;


const Container = styled.section`
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100vh;
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
    line-height: 16vh;
    margin: 0;
    opacity: 0.05;
`;