import React from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';


const WorksPage = () => {
    return(
        <SectionWrapper>
            <Wrapper>
                <Header>
                    Works
                </Header>
            </Wrapper>
        </SectionWrapper>
    )
}

export default WorksPage;

const Wrapper = styled.div`
    height: 130vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    position: fixed;
    margin: 0;
    font-size: 12vw;
    margin: 0;
    padding: 0;
    color: #E5E5E5;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 12vw;
    z-index: 1;
    margin-top: -30vh;
`;