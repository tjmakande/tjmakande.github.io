import React, {createRef} from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import {Scrollbar} from 'smooth-scrollbar-react';
import Footer from 'Sections/Footer';

import TJImage from 'Assets/TJ_image.jpg';
import BeijingImg from 'Assets/BeijingImg.jpeg';
import ZimImg from 'Assets/ZimImg.jpeg';

const AboutMePage = () => {
    const Imageref = createRef<HTMLImageElement>();
    const IntroWrap = createRef<HTMLDivElement>();
    const Descriptionref = createRef<HTMLParagraphElement>();
    const DescriptionTworef = createRef<HTMLParagraphElement>();
    const DescriptionThreeref = createRef<HTMLParagraphElement>();

    const Backgroundref = React.createRef<HTMLDivElement>();

    const Line1ref = createRef<HTMLSpanElement>();
    const Line2ref = createRef<HTMLSpanElement>();
    const Line3ref = createRef<HTMLSpanElement>();
    const Line4ref = createRef<HTMLSpanElement>();

    const Paragraph1ref = createRef<HTMLParagraphElement>();
    const Paragraph2ref = createRef<HTMLParagraphElement>();

    const InfoImg1ref = createRef<HTMLImageElement>();
    const InfoImg2ref = createRef<HTMLImageElement>();

    const IntroTwoWrapperref = createRef<HTMLDivElement>();

    const Zimref = createRef<HTMLSpanElement>();
    const Beijingref = createRef<HTMLSpanElement>();

    const MakeTextTransparent = (x: number) => x/400 < 1 ? 1 - (x/400) : 0;
    const MoveTextLeft = (x: number) => x < window.innerWidth * 0.30 ? x : window.innerWidth * 0.30; 
    const moveTextRight = (x: number) => x < window.innerWidth * 0.6 ? x : window.innerWidth * 0.6;

    const [red, green, blue] = [255, 255, 255];

    const scrollAnimation = (scrollY: number) => {
        // Background
        if(scrollY > window.innerHeight){
            Backgroundref.current && (Backgroundref.current.style.transform = `translateY(${scrollY - window.innerHeight}px)`);
        }

        //Heading
        if(scrollY < window.innerHeight){
            Imageref.current && (Imageref.current.style.transform = `translateY(${scrollY}px)`);
        }else{
            Imageref.current && (Imageref.current.style.transform = `translateY(0px)`);
        }

        // animation part 1
        if(scrollY < window.innerHeight * 0.8){
             IntroWrap.current && (IntroWrap.current.style.visibility = 'hidden');
        } else { 
            IntroWrap.current && (IntroWrap.current.style.visibility = `visible`);
        }

        // Animation part 2
        if(scrollY > window.innerHeight * 0.8){

            if(IntroWrap.current){
                const instanceOffset = scrollY - window.innerHeight * 0.8;
                Descriptionref.current && (Descriptionref.current.style.opacity =  `${instanceOffset / 200}`);

                IntroWrap.current.style.transform = `translateY(${scrollY - window.innerHeight}px)`;

                // Text Move to the left side
                if( scrollY > window.innerHeight * 1.3){
                    IntroWrap.current.style.transform = `translate3d(-${MoveTextLeft(scrollY - window.innerHeight * 1.3)}px, ${scrollY - window.innerHeight}px, 0)`;
                    // console.log(MoveTextLeft(scrollY-window.innerHeight * 1.1))
                }

                //stay on the left side
                if(scrollY > window.innerHeight * 2) {
                    IntroWrap.current.style.transform = `translate3d(${-window.innerWidth * 0.3}px, ${scrollY - window.innerHeight}px, 0;)`;
                    Line1ref.current && (Line1ref.current.style.opacity = `${MakeTextTransparent(scrollY - window.innerHeight * 2)}`);
                    Line2ref.current && (Line2ref.current.style.opacity = `${MakeTextTransparent(scrollY - window.innerHeight * 2)}`);
                }
                //sentence swap
                if(scrollY > window.innerHeight * 2.5){
                    Descriptionref.current && (Descriptionref.current.style.display = 'none');
                    DescriptionThreeref.current && (DescriptionThreeref.current.style.display = 'none');
                    DescriptionTworef.current && (DescriptionTworef.current.style.display = 'block');

                    if(scrollY > window.innerHeight * 6){
                        Descriptionref.current && (Descriptionref.current.style.display = 'none');
                        DescriptionThreeref.current && (DescriptionThreeref.current.style.display = 'block');
                        DescriptionTworef.current && (DescriptionTworef.current.style.display = 'none');
                    }
                } else {
                    Descriptionref.current && (Descriptionref.current.style.display = 'block');
                    DescriptionTworef.current && (DescriptionTworef.current.style.display = 'none');
                    DescriptionThreeref.current && (DescriptionThreeref.current.style.display = 'none');
                }

                // make text visible
                if(scrollY > window.innerHeight * 2.7){
                    Line3ref.current && (Line3ref.current.style.opacity = `${1 - MakeTextTransparent(scrollY - window.innerHeight*2.7)}`);

                    // Image is moving up While the zimbabwe is showing. negative value is moving UP. 1.7 is to speed up the process, 2.7 is the scroll height at the beginning of this movement
                    InfoImg1ref.current && (InfoImg1ref.current.style.transform = `translate3d(${window.innerWidth * 0.3}px, ${(window.innerHeight * 0.8 - (scrollY - window.innerHeight * 2.7)) * 1.7}px, 0)`)
                }

                //Text move to the right side
                if(scrollY > window.innerHeight * 4){
                    IntroWrap.current.style.transform = `translate3d(${-window.innerWidth * 0.3 + moveTextRight(scrollY - window.innerHeight * 4)}px, ${scrollY - window.innerHeight}px, 0)`;

                    //freeze the image on top of viewport out of sight;
                    InfoImg1ref.current && (InfoImg1ref.current.style.transform = `translate3d(${window.innerWidth * 0.3}px, -${window.innerHeight * 0.8}px, 0)`)

                }

                // stay on the right side
                if(scrollY > window.innerHeight * 5.5) {
                    // IntroWrap.current.style.transform = `translate3d(${window.innerWidth * 0.6}px, ${scrollY - window.innerHeight}px, 0;)`;
                    Line3ref.current && (Line3ref.current.style.opacity = `${MakeTextTransparent(scrollY - window.innerHeight * 5.5)}`);
                }

                if(scrollY > window.innerHeight * 6){
                    Line4ref.current && (Line4ref.current.style.opacity = `${1 - MakeTextTransparent(scrollY - window.innerHeight*6)}`);


                    InfoImg2ref.current && (InfoImg2ref.current.style.transform = `translate3d(-${window.innerWidth * 0.75}px, ${(window.innerHeight * 0.8 - (scrollY - window.innerHeight * 6)) * 1.7}px, 0)`)
                }

                if(scrollY > window.innerHeight * 7.5){
                    Line4ref.current && (Line4ref.current.style.opacity = `${MakeTextTransparent(scrollY - window.innerHeight * 7.5)}`);

                    //Freeze image on top of the viewport out of sight
                    InfoImg2ref.current && (InfoImg2ref.current.style.transform = `translate3d(-${window.innerWidth * 0.75}px, -${window.innerHeight * 0.8}px, 0)`)
                }
                   
                if(scrollY > window.innerHeight * 8.5) {
                    IntroTwoWrapperref.current && (IntroTwoWrapperref.current.style.transform = `translateY(${scrollY - window.innerHeight * 8.5}px)`);

                    if(scrollY > window.innerHeight * 9.5){
                        IntroTwoWrapperref.current && (IntroTwoWrapperref.current.style.transform = `translateY(${window.innerHeight}px)`);
                    }
                }

                if(scrollY > window.innerHeight * 10){
                    const y = 1 + (scrollY-window.innerHeight * 10) / 150;
                    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
                    
                    Backgroundref.current && (Backgroundref.current.style.backgroundColor = `rgb(${r < 58 ? 58 : r}, ${g < 58 ? 58 : g}, ${b < 58 ? 58 : b} )`);
                } else {
                    Backgroundref.current && (Backgroundref.current.style.backgroundColor = `rgb(255, 255, 255)`);
                }
            }
        }
    }

    return(
        <Scrollbar style={{overflow:'hidden', outline: 'none', height: '100vh'}}damping={0.2} onScroll={(status) => scrollAnimation(status.offset.y)}>
            <HeaderWrapper>
                <LandingImg ref={Imageref} src={TJImage} />
                <div style={{color: 'rgb(229, 229, 229)', mixBlendMode: 'difference'}}>
                    <Header>
                        About Me
                    </Header>
                </div>
            </HeaderWrapper>
            <SectionWrapper>
                <Background ref={Backgroundref}/>
                <IntroContainer>
                    <IntroWrapper ref={IntroWrap}>
                        <Description ref={Descriptionref}>
                            <Wordspan ref={Line1ref}>Hi there! <br/></Wordspan>
                            <Wordspan ref={Line2ref}>I'm TJ Makande.<br /></Wordspan>
                        </Description>

                        <DescriptionTwo ref={DescriptionTworef}>
                            <Wordspan ref={Line3ref} style={{opacity: 0}}>A web developer from <Wordspan ref={Zimref}>Zimbabwe </Wordspan></Wordspan>
                        </DescriptionTwo>

                        <DescriptionThree ref={DescriptionThreeref}>
                            <Wordspan ref={Line4ref}style={{opacity: 0}}>Currently based in  <Wordspan ref={Beijingref}>Beijing</Wordspan></Wordspan>
                        </DescriptionThree>

                        <InfoImg src={ZimImg} ref={InfoImg1ref}/>
                        <InfoImg src={BeijingImg} ref={InfoImg2ref}/>

                    </IntroWrapper>
                </IntroContainer>

                <IntroTwoContainer>
                    <IntroTwoWrapper  ref={IntroTwoWrapperref}>
                        <DescriptionFour ref={Paragraph1ref}>
                            I'm naturally keen developer with an eye for clean code and designs. I have the MERN stack in my arsenal which enables me to work on all sides of the development cycle.
                        </DescriptionFour>
                        <DescriptionFive ref={Paragraph2ref}>
                            I am very much attracted to challenges and I love to find solutions. I do believe that those two belong together.
                        </DescriptionFive>
                    </IntroTwoWrapper>
                </IntroTwoContainer>
                <Footer />
            </SectionWrapper>
        </Scrollbar>
    )
}

export default AboutMePage;

const Background = styled.div`
  height: 100vh;
  width:100vw;
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #fff;
`;

const InfoImg = styled.img`
    position: absolute;
    right: 5vw;
    height: 50%;
    margin: 0 auto;
    box-shadow: #0000008c 8px 8px 50px;

    transform: translateY(${window.innerHeight * 0.80}px)
`;

const Wordspan = styled.span`
    // opacity: 0;
`;

const IntroContainer = styled.div`
    width: 100vw;
    height: 750vh;
    position: relative;
    overflow-x: hidden;
`;

const IntroWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IntroTwoContainer = styled(IntroContainer)`
    height: 200vh;
    margin-bottom: 50vh;
`;

const IntroTwoWrapper = styled(IntroWrapper)`
    padding: 0 10vw;
    align-items: start;
`;

const Description = styled.p`
    font-size: clamp(2rem,2vw, 5rem);
    width: 30vw;
`;

const DescriptionTwo = styled(Description)`
    display: none;
`;
const DescriptionThree = styled(Description)`
    display: none;
`;
const DescriptionFour = styled(Description)`
    width: 28vw;
    text-align: justify;
    font-weight: 300;
    font-size: clamp(1.7rem, 1.5vw, 2.5rem);
`;
const DescriptionFive = styled(DescriptionFour)``;

const LandingImg = styled.img`
    position: absolute;
    height: 100vh;
    left: 0;
`;

const HeaderWrapper = styled.div`
    background-color: rgb(229, 229, 229);
    color: rgb(229, 229, 229);
    mix-blend-mode: difference;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Header = styled.h1`
    font-size: 12vw;
    padding: 0;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 12vw;
    z-index: 1;

    position: absolute;
    right: 10vw;
`;