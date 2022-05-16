import LandingImage from 'Assets/LandingImage2.jpg';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import gsap from 'gsap';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import LandingPart1 from 'Assets/LandingPart1.png';
import LandingPart2 from 'Assets/LandingPart2.png';
import LandingPart3 from 'Assets/LandingPart3.png';
import LandingPart4 from 'Assets/LandingPart4.png';
import LandingPart5 from 'Assets/LandingPart5.png';
import LandingPart6 from 'Assets/LandingPart6.png';





const LandingSection = () => {
    return (
        <SectionWrapper>
            <Wrapper className="LandingSection">
                <TextContainer className="TextContainer">
                    <NameHeader className="LandingText">Tapiwanashe</NameHeader>
                    <NameHeader className="LandingText">J. Makande</NameHeader>
                    <DescriptionTitle className="LandingText">Web developer</DescriptionTitle>
                </TextContainer>

                <ImageWrapper>
                    {/* <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                        <Image src={LandingPart1} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart2} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart3} style={{marginTop: '0px'}} alt="image part" />
                        <Image src={LandingPart4} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart5} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart6} style={{marginTop: '0'}} alt="image part" />
                    </div> */}

                    <svg style={{width: '100%'}} viewBox='0 0 420 280'>
                        <defs>
                            <clipPath id={'myPath'}>
                                <rect className={'ImageBlock1'} fill="#ffffff" x="0%" y="15%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock2'} fill="#ffffff" x="13.28%" y="0" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock3'} fill="#ffffff" x="26.56%" y="10%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock4'} fill="#ffffff" x="40.84%" y="0" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock5'} fill="#ffffff" x="55.12%" y="5%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock6'} fill="#ffffff" x="69.40%" y="15%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock7'} fill="#ffffff" x="83.68%" y="2%" width="11%" height="85%" rx="30" />
                            </clipPath>
                        </defs>
                        <image width={421} height={280} clipPath={`url(#myPath)`} xlinkHref={LandingImage}></image>
                    </svg>
                    {/* <Image src={LandingImage} alt={'Picture of me'}/> */}
                </ImageWrapper>

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
    flex-direction: row;
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
`;
const DescriptionTitle = styled.p`
    font-family: 'nunito';
    font-size: clamp(2rem, 3vw, 5.5rem);
    text-transform: uppercase;
    margin: 4rem 0 0 0;
    color: #fff;
    mix-blend-mode: difference;
`;

const Image = styled.img`
    // width: 14%;
    width: 100%;
    clip-path: url(#myPath);
    height: 100%;
    // border-radius: 60px 60px;
`;

const TextContainer = styled.div`
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-bo;
    padding-top: 10rem;
`;

const ImageWrapper = styled.div`
    // position: absolute;
    // top: 5rem;
    // left: 6vw;
    // height: 0;
    // padding-top: calc(421/280 * 100%);
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    // right: 0;
`;
