import LandingImage from 'Assets/LandingImage2.jpg';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import styled from 'styled-components';
import { isMobile } from 'utils/device';

const LandingSection = () => {
    return (
        <SectionWrapper>
            <Wrapper className="LandingSection">
                <NameHeader className="LandingText">Tapiwanashe</NameHeader>
                <NameHeader className="LandingText">J. Makande</NameHeader>


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

                <DescriptionTitle className="LandingText">Web developer</DescriptionTitle>
            </Wrapper>
        </SectionWrapper>
    );
};

export default LandingSection;

const Wrapper = styled.div`
    position: relative;

    box-sizing: border-box;
    padding: 5rem 6vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    background-color: white;
    overflow: hidden;
`;

const NameHeader = styled.h1`
    font-family: nunito;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(4rem, 4.5vw, 7rem);
    line-height: clamp(4rem, 4.5vw, 7rem);
    text-transform: uppercase;
    margin: 0;
    color: #fff;
    mix-blend-mode: difference;
    z-index: 5;

    ${
        isMobile() && `
            font-size: 3rem;
            margin: 0 auto;
        `
    }
`;
const DescriptionTitle = styled.p`
    font-family: 'nunito';
    font-size: clamp(2rem, 3vw, 5.5rem);
    text-transform: uppercase;
    margin: 4rem 0 0 0;
    color: #fff;
    mix-blend-mode: difference;

    ${
        isMobile() && `
            margin: 3rem auto 4rem;
        `
    }
`;

// const TextContainer = styled.div`
//     width: 40vw;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: start;
//     box-sizing: border-bo;
//     padding-top: 10rem;
// `;

const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;

    ${
        isMobile() && `
            position: relative;
            height: unset;
            align-self: center;
            width: 90vw;
        `
    }
`;
