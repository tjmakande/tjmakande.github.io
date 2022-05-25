import {useEffect, useState} from 'react';
import styled from 'styled-components';

import { isMobile } from 'utils/device';
import { openInNewTab } from 'utils/OpenNewTab';
import GithubIcon from './GithubIcon';
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
                <SectionTitle>Let's Collaborate</SectionTitle>
                <CTAtext>Don't be afraid to connect!</CTAtext>

                <div style={{marginTop: '5rem', width: '300px'}}>
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
                </div>

                <footer style={{position: 'absolute', textAlign: 'center', bottom: '3vh'}}> <small style={{color: 'white', fontSize: isMobile() ? '10px' : 'unset'}}>&copy; Copyright {currentYear}, Tapiwanashe J. Makande</small> </footer> 
            </Wrapper>
        </Container>
    );
};

export default Footer;

const Container = styled.section`
    top: 0;
    height: ${window.innerHeight}px;
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
    font-size: 9vw;
    width: 50vw;
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 9vw;
    z-index: 1;

    ${
        isMobile() && `
            font-size: 4rem;
            line-height: 4rem;
            width: unset;
        `
    }
`;

const EmailLink = styled.p`
    color: #fff;
    font-size: 1.3vw;
    margin: 2rem 0 0 0;
    text-decoration: underline;
    ${
        isMobile() && `
            font-size: 1rem;
        `
    }
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
    text-decoration: none;

    ${
        isMobile() && `
            font-size: 1.2rem;
        `
    }
`;

const SocialWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    justify-self: center;
`;