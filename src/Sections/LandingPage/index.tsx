import React from 'react';
import styled from 'styled-components';

import Name from 'Assets/Name.gif';
import SectionWrapper from '../../Components/Styled/SectionWrapper';

const LandingPage = React.forwardRef<HTMLDivElement>((props, ref)=> {

    return(
        <SectionWrapper ref={ref}>
            <>
                <Wrapper>
                    <NameItem src={Name}/>
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
    top: 0;
    left: 0;
    transition: 0s;
`;
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;