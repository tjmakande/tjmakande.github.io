import {useEffect, useState} from 'react';
import styled from 'styled-components';

import { isMobile } from 'utils/device';
import { openInNewTab } from 'utils/OpenNewTab';
// import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';


const Footer = () => {
    const underlineOnHover = (div: HTMLElement) => div.style.textDecoration = "underline";
    const rmunderlineOnHover = (div: HTMLElement) => div.style.textDecoration = "none";
    const [currentYear, setCurrentYear] = useState<number>(2021);
    const isHover = (action: boolean) => action ? (
        document.querySelector('.mouse')?.classList.add('mouseOverEmail')
    ) : (
        document.querySelector('.mouse')?.classList.remove('mouseOverEmail')
    );
    useEffect(() => {
        const date = new Date();
        setCurrentYear(date.getFullYear());
    },[]);

    return(
        <Container className="footerwrapper">
            <Wrapper>
                <SectionTitle>Let's<br/>Collaborate</SectionTitle>
                <CTAtext>Don't be afraid to connect!</CTAtext>

                <ContactContainer>
                    <EmailLink
                        className="EmailLink"
                        onClick={() => openInNewTab('mailto:tjmakande@gmail.com')}
                        onMouseEnter={(e) => {isHover(true); if (isMobile()) underlineOnHover((e.target as HTMLElement));}}
                        onMouseLeave={(e) => {isHover(false); rmunderlineOnHover((e.target as HTMLElement));}}
                    >tjmakande@gmail.com</EmailLink>
                    <Line />
                    <SocialWrapper>
                        <InstagramIcon />
                        <LinkedInIcon />
                        {/* <GithubIcon /> */}
                    </SocialWrapper>
                </ContactContainer>

                <footer style={{position: 'absolute',left: '2vw', bottom: '3vh'}}> <small style={{color: 'white', fontSize: isMobile() ? '10px' : 'unset'}}>&copy; Copyright {currentYear}, Tapiwanashe J. Makande</small> </footer> 
            </Wrapper>
        </Container>
    );
};

export default Footer;
const ContactContainer = styled.div`
    margin-top: 2rem;
    width: clamp(150px, 20vw, 400px);

    @media (max-width: 850px){
        margin-top: 0;
    }
`;

const Container = styled.section`
    top: 0;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    z-index: 5;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
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
    font-size: clamp(4rem, 13vw, 8rem);
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: clamp(4rem, 13vw, 8rem);
    z-index: 1;
    text-align: center;

    @media ( max-width: 850px){
        // font-size: 4rem;
        // line-height: 4rem;
        width: unset;
    }

`;

const EmailLink = styled.p`
    color: #fff;
    font-size: 1.3vw;
    margin: 2rem 0 0 0;
    text-decoration: underline;
    @media ( max-width: 850px){
        font-size: 1rem;
        margin: 1.5rem 0;
    }
`;

const Line = styled.hr`
    background: linear-gradient(to right, transparent, #fff, transparent);
    height: 1px;
    width: 100%;
    border: 0;
    margin: 1.5rem 0;

    @media (max-width: 850px){
        margin: 0.5rem 0;
    }
`;

const CTAtext = styled(EmailLink)`
    font-size: clamp(1.2rem, 1.2vw, 3rem);
    text-decoration: none;

    @media (max-width: 850px) and (orientation: landscape) {
        font-size: clamp(1rem, 2.1vw, 3rem);
        line-height: clamp(1rem, 2.1vw, 3rem);
    }
`;

const SocialWrapper = styled.div`
    width: 100%;
    margin: 1rem 0 2.5rem 0;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    justify-self: center;
`;