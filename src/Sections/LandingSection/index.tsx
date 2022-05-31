import LandingImage from 'Assets/LandingImage2.jpg';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { isMobile } from 'utils/device';

const LandingSection = () => {

  useEffect(() => {
        const options = {
            strings: [ '', 'WEB DEVELOPER', 'LEARNER', 'PERSISTENT', 'AMBITIOUS', 'Adept'],
            typeSpeed: 60,
            backsSpeed: 100,
            backDelay: 1500,
            loop: true,
            loopCount: Infinity,
        };

        const currTyped = new Typed('.DescriptionText', options);

        return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        currTyped.destroy();
        };
    }, []);

  return (
        <Wrapper className="LandingSection">
            <NameHeader className="LandingText">Tapiwanashe</NameHeader>
            <NameHeader style={{marginBottom: isMobile() ? '2rem' : '0'}}className="LandingText">J. Makande</NameHeader>

            <ImageWrapper>
                <svg style={{width: '100%'}} viewBox='0 0 420 280'>
                    <defs>
                        <clipPath id={'myPath'}>
                            <rect className={'ImageBlock1'} fill="#ffffff" x="5.64%" y="15%" width="11%" height="85%" rx="30" />
                            <rect className={'ImageBlock2'} fill="#ffffff" x="18.92%" y="0" width="11%" height="85%" rx="30" />
                            <rect className={'ImageBlock3'} fill="#ffffff" x="32.2%" y="10%" width="11%" height="85%" rx="30" />
                            <rect className={'ImageBlock4'} fill="#ffffff" x="45.48%" y="0" width="11%" height="85%" rx="30" />
                            <rect className={'ImageBlock5'} fill="#ffffff" x="58.76%" y="5%" width="11%" height="85%" rx="30" />
                            <rect className={'ImageBlock6'} fill="#ffffff" x="72.04%" y="15%" width="11%" height="85%" rx="30" />
                            <rect className={'ImageBlock7'} fill="#ffffff" x="85.32%" y="2%" width="11%" height="85%" rx="30" />
                        </clipPath>
                    </defs>
                    <image width={421} height={280} clipPath={`url(#myPath)`} xlinkHref={LandingImage}></image>
                </svg>
            </ImageWrapper>

            <DescriptionTitle className="LandingText"><span className="DescriptionText"> </span></DescriptionTitle>
        </Wrapper>
    );
};

export default LandingSection;

const Wrapper = styled.div`
    position: relative;

    box-sizing: border-box;
    padding: 5rem 6vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    background-color: white;
    overflow: hidden;
`;

const NameHeader = styled.h1`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(3.1rem, 6.5vw, 10rem);
    line-height: clamp(3.1rem, 6.5vw, 10rem);
    text-transform: uppercase;
    margin: 0;
    color: rgb(200,200,200);
    mix-blend-mode: difference;
    z-index: 5;

    @media (max-width: 850px){
        margin: 0 auto;
        font-size: clamp(3.1rem, 10vw, 6rem);
        line-height: clamp(3.1rem, 10vw, 6rem);
    }

    @media (max-width: 850px) and (max-height: 600px) and (orientation: landscape){
        font-size: 2em;
        line-height: 1em;
        margin: 0;
    }
`;
const DescriptionTitle = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: clamp(2.5rem, 3vw, 5.5rem);
    text-transform: uppercase;
    margin: 4rem 0 0 0;
    color: rgb(200,200,200);
    mix-blend-mode: difference;

    @media (max-width: 850px){
        margin: 2rem auto;
    }

    @media (max-width: 850px) and (max-height: 600px) and (orientation: landscape){
        margin: 0;
        font-size: 1.8rem;
    }
`;

const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 850px){
        position: relative;
        height: unset;
        align-self: center;
        width: clamp(10rem, 90vw, 30rem);
    }

    @media ( max-height: 600px ) and (max-width: 850px) and (orientation: landscape) {
        width: clamp(14rem, 48vw, 25rem);
        right: 2%;
        position: absolute;
    }
`;
