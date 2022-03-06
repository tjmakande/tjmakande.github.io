import React from 'react';
import styled from 'styled-components';

import Name from 'Assets/Name.gif';
import SectionWrapper from '../../Components/Styled/SectionWrapper';

const LandingPage = React.forwardRef<HTMLDivElement>((props, ref)=> {

    return(
        <SectionWrapper ref={ref}>
            <>
                <Wrapper>
                    {/* <Header id="Name">
                        TAPIWANASHE J. MAKANDE
                    </Header>  */}

                    <NameItem src={Name} />
                </Wrapper>
            </>
        </SectionWrapper>
    )
});

export default LandingPage;

const NameItem = styled.img`
    width: 100%;
    position: absolute;
    margin: 0 auto;
    transform: scale(1);
`;
const Wrapper = styled.div`
    height: 130vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(229, 229, 229);
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