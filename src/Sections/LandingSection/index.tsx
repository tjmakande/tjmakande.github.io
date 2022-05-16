import LandingImage from 'Assets/LandingImage2.jpg';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import styled from 'styled-components';

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
                    <svg style={{width: '100%'}} viewBox='0 0 420 280'>
                        <defs>
                            <clipPath id={'myPath'}>
                                <rect className={'ImageBlock1'} fill="#ffffff" x="0%" y="15%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock2'} fill="#ffffff" x="13.28%" y="0" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock3'} fill="#ffffff" x="26.56%" y="10%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock4'} fill="#ffffff" x="39.84%" y="0" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock5'} fill="#ffffff" x="53.12%" y="5%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock6'} fill="#ffffff" x="66.40%" y="15%" width="11%" height="85%" rx="30" />
                                <rect className={'ImageBlock7'} fill="#ffffff" x="79.68%" y="2%" width="11%" height="85%" rx="30" />
                            </clipPath>
                        </defs>
                        <image width={421} height={280} clipPath={`url(#myPath)`} xlinkHref={LandingImage}></image>
                    </svg>
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
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
`;
