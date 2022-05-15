import LandingImage from 'Assets/TJ_image.jpg';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import gsap from 'gsap';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';


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
                <div style={{width: '50vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: '8rem'}}>
                    <NameHeader className="LandingText">Tapiwanashe</NameHeader>
                    <NameHeader className="LandingText">J. Makande</NameHeader>
                    <DescriptionTitle className="LandingText">Web developer</DescriptionTitle>
                </div>

                {/* <Block className='Block' /> */}
                <ImageWrapper>
                    <svg width={'100%'} height={'100%'}>
                        <defs>
                            <clipPath id={'myPath'}>
                                <rect fill="#ffffff" x="0" width="12%" height="300%" rx="50" />
                                <rect fill="#ffffff" x="14%" width="12%" height="300%" rx="50" />
                                <rect fill="#ffffff" x="28%" width="12%" height="300%" rx="50" />
                                <rect fill="#ffffff" x="42%" width="12%" height="300%" rx="50" />
                                <rect fill="#ffffff" x="56%" width="12%" height="300%" rx="50" />
                                <rect fill="#ffffff" x="70%" width="12%" height="300%" rx="50" />
                                <rect fill="#ffffff" x="84%" width="12%" height="300%" rx="50" />

                            </clipPath>
                        </defs>
                    </svg>
                    <Image src={LandingImage} alt={'Picture of me'}/>
                </ImageWrapper>

            </Wrapper>
        </SectionWrapper>
    );
};

export default LandingSection;

const Wrapper = styled.div`
    position: relative;
    padding: 8rem 6vw;
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
    width: 100%;
    clip-path: url(#myPath);
    // height: 32vw;
`;

const ImageWrapper = styled.div`
    // height: 0;
    // padding-top: calc(421/280 * 100%);
    width: 40vw;
`;

const Block = styled.div`
    width: 30%;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: rgb(58, 58, 59);
`;