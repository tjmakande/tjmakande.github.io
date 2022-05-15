// import LandingImage from 'Assets/TJ_image.jpg';
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

    useEffect(() => {
        gsap.to(".Block", {
            scrollTrigger: {
                trigger: '.LandingSection',
                start: 'bottom bottom',
                end: 'bottom center',
                scrub: .1
            },
            xPercent: 100
        });

        gsap.to(".LandingText", {
            scrollTrigger: {
                trigger: '.LandingSection',
                start: 'bottom bottom',
                end: 'bottom center',
                scrub: .1
            },
            yPercent: -40,
            opacity: 0
        });
    },[]);


    return (
        <SectionWrapper>
            <Wrapper className="LandingSection">
                <div style={{width: '50vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: '0rem'}}>
                    <NameHeader className="LandingText">Tapiwanashe</NameHeader>
                    <NameHeader className="LandingText">J. Makande</NameHeader>
                    <DescriptionTitle className="LandingText">Web developer</DescriptionTitle>
                </div>

                {/* <Block className='Block' /> */}
                <ImageWrapper>
                    <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                        <Image src={LandingPart1} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart2} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart3} style={{marginTop: '0px'}} alt="image part" />
                        <Image src={LandingPart4} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart5} style={{marginTop: '0'}} alt="image part" />
                        <Image src={LandingPart6} style={{marginTop: '0'}} alt="image part" />
                    </div>

                    {/* <svg width={'100%'} height={'100%'}>
                        <defs>
                            <clipPath id={'myPath'}>
                                <rect fill="#ffffff" x="0" y="50" width="12%" height="200%" rx="30" />
                                <rect fill="#ffffff" x="14%" y="0" width="12%" height="200%" rx="30" />
                                <rect fill="#ffffff" x="28%" y="20" width="12%" height="200%" rx="30" />
                                <rect fill="#ffffff" x="42%" y="-30" width="12%" height="200%" rx="30" />
                                <rect fill="#ffffff" x="56%" y="20" width="12%" height="200%" rx="30" />
                                <rect fill="#ffffff" x="70%" y="-50" width="12%" height="200%" rx="30" />
                                <rect fill="#ffffff" x="84%" y="40" width="12%" height="200%" rx="30" />

                            </clipPath>
                        </defs>
                    </svg>
                    <Image src={LandingImage} alt={'Picture of me'}/> */}
                </ImageWrapper>

            </Wrapper>
        </SectionWrapper>
    );
};

export default LandingSection;

const Wrapper = styled.div`
    position: relative;
    padding: 5rem 6vw;
    box-sizing: border-box;
    height:100vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    background-color: white;
    overflow: hidden;
`;

const NameHeader = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(5rem, 6vw, 8rem);
    line-height: clamp(5rem, 5vw, 8rem);
    text-transform: uppercase;
    margin: 0;
    color: #fff;
    mix-blend-mode: difference;
    z-index: 5;
`;
const DescriptionTitle = styled.p`
    font-family: 'Prata';
    font-size: clamp(3rem, 4.5vw, 10rem);
    text-transform: uppercase;
    margin: 4rem 0 0 0;
    color: #fff;
    mix-blend-mode: difference;
`;

const Image = styled.img`
    // width: 14%;
    // clip-path: url(#myPath);
    height: 100%;
    border-radius: 60px 60px;
`;

const ImageWrapper = styled.div`
    // position: absolute;
    top: 5rem;
    left: 6vw;
    // height: 0;
    // padding-top: calc(421/280 * 100%);
    width: 40vw;
    height: 50vh;
    right: 0;

    display: flex;
    flex-direction: row;
`;

const Block = styled.div`
    width: 30%;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: rgb(58, 58, 59);
`;