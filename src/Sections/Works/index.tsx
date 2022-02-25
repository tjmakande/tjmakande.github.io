import React from 'react'

import styled from 'styled-components';

const WorkSection = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container ref={ref}>
            <Wrapper>
                <SectionTitle>Selected</SectionTitle>
                <SectionTitle> Works</SectionTitle>

                <WorksContainer>
                    <StripWrapper style={{transform: 'translate3d(-400vh, 0px, 0px)'}}>
                        <PictureWrapper style={{backgroundColor: 'blue'}}></PictureWrapper>
                        <PictureWrapper style={{backgroundColor: 'red'}}></PictureWrapper>
                        <PictureWrapper style={{backgroundColor: 'green'}}></PictureWrapper>
                        <PictureWrapper style={{backgroundColor: 'pink'}}></PictureWrapper>
                    </StripWrapper>
                    <StripWrapper style={{transform: 'translate3d(100vh, 0px, 0px)'}}>
                        <PictureWrapper style={{backgroundColor: 'pink'}}></PictureWrapper>
                        <PictureWrapper style={{backgroundColor: 'green'}}></PictureWrapper>
                        <PictureWrapper style={{backgroundColor: 'red'}}></PictureWrapper>
                        <PictureWrapper style={{backgroundColor: 'blue'}}></PictureWrapper>
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
    line-height: 16vh;
    margin: 0;
`;