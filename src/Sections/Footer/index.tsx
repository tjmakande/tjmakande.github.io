import React from 'react';
import styled from 'styled-components';

import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Container className="footerwrapper">
            <Wrapper>
                <SectionTitle>Let's Collaborate</SectionTitle>

                <EmailLink style={{fontSize: '1.3vw'}}>Don't be afraid to connect, you can reach me @ tj@example.com</EmailLink>
                <EmailLink>...or...</EmailLink>


                <SocialWrapper>
                    <InstagramIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                </SocialWrapper>

            </Wrapper>
        </Container>
    );
});

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
    padding: 0 5vw 0 5vw;
    position: relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
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

const EmailLink = styled.p`
    // position: absolute;
    bottom: 2vh;
    color: #fff;
    font-size: 1vw;
`;

const SocialWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 5rem;
    transform: translate(-50%, 0);
    width: 15%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
`;