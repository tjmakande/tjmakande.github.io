import React from 'react';
import styled from 'styled-components';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container>
            <Wrapper>
                <SectionTitle>Let's Collaborate</SectionTitle>
            </Wrapper>
        </Container>
    )
})

export default Footer;

const Container = styled.section`
    top: 0;
    height: 100vh;
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
    margin: 0;
    font-size: 9vw;
    width: 50vw;
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 9vw;
    z-index: 1;
`;