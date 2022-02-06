import React from 'react';
// import Container from './styled/Container';
import styled from 'styled-components';

import EmailLink from '../../Components/EmailLink';


const LandingPage = () => {
    return(
       <Container>
           <Wrapper>
                <Header>
                    TAPIWANASHE J. MAKANDE
                </Header> 

            <EmailLink />
           </Wrapper>
       </Container> 
    )
};

export default LandingPage;



const Container = styled.div`
    position: relative;
    height: 100vh;
`;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-Items: center;
    color: black;
    padding: 0 5vw;
`;

const Header = styled.h1`
    margin: 0;
    font-size: 11vw;
    font-family: 'futura';
    margin: 0;
    color: #E5E5E5;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 10vw;
`;