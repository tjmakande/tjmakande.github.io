import React from 'react';
// import Container from './styled/Container';
import styled from 'styled-components';

import EmailLink from '../../Components/EmailLink';
import SectionWrapper from '../../Components/Styled/SectionWrapper';


const LandingPage = () => {
    return(
           <SectionWrapper>
                <Header>
                    TAPIWANASHE J. MAKANDE
                </Header> 
            <EmailLink />
           </SectionWrapper>
    )
};

export default LandingPage;

const Header = styled.h1`
    margin: 0;
    font-size: 12vw;
    margin: 0;
    padding: 0;
    color: #E5E5E5;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 12vw;
    z-index: 9;
`;