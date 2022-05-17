import React from 'react';
import styled from 'styled-components';

import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
    const underlineOnHover = (div: HTMLElement) => div.style.textDecoration = "underline";
    const rmunderlineOnHover = (div: HTMLElement) => div.style.textDecoration = "none";

    const isHover = (action: boolean) => action ? (
        document.querySelector('.mouse')?.classList.add('mouseOverEmail')
    ) : (
        document.querySelector('.mouse')?.classList.remove('mouseOverEmail')
    );

    return(
        <Container className="footerwrapper">
            <Wrapper>
                <SectionTitle>Let's Collaborate</SectionTitle>
                <CTAtext style={{fontSize: '1.2vw'}}>Don't be afraid to connect!</CTAtext>

                <div style={{marginTop: '5rem'}}>
                    <EmailLink
                        className="EmailLink"
                        onMouseEnter={(e) => {isHover(true); underlineOnHover((e.target as HTMLElement));}}
                        onMouseLeave={(e) => {isHover(false); rmunderlineOnHover((e.target as HTMLElement));}}
                    >tj@example.com</EmailLink>
                    <Line />
                    <SocialWrapper>
                        <InstagramIcon />
                        <LinkedInIcon />
                        <GithubIcon />
                    </SocialWrapper>
                </div>
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
    color: #fff;
    font-size: 1.5vw;
    margin: 2rem 0 0 0;
`;

const Line = styled.hr`
    background: linear-gradient(to right, transparent, #fff, transparent);
    height: 1px;
    width: 100%;
    border: 0;
    margin: 1.5rem 0;
`;

const CTAtext = styled(EmailLink)`
    font-size: 1.2vw;
`;

const SocialWrapper = styled.div`
    width: 200px;
    margin: 1rem 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
`;