import React from 'react';
// import Container from './styled/Container';
import styled from 'styled-components';


const LandingPage = () => {
    return(
       <Container>
           <Wrapper>
                <Header>
                    TJ Makande 
                </Header> 
                <Title>
                    Developer
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra vulputate velit.  
                </Description>
           </Wrapper>
       </Container> 
    )
};

export default LandingPage;



const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #00000021;
    z-index: 2;
    padding: 2vw;
`;

const Wrapper = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-Items: center;
    color: black;
    padding: 0 5vw 0 0;
`;

const Header = styled.h1`
    font-size: 50px;
    margin: 0;
`;

const Title = styled.h4`
    font-size: 32px;
    margin: 2rem 0;
`

const Description = styled.p`
    font-size: 28px;
`;