import React, {createRef, useEffect} from 'react';
import styled from 'styled-components';
import SectionWrapper from 'Components/Styled/SectionWrapper';
import gsap from 'gsap';


const AboutMePage = () => {
    const Itemref1 = createRef<HTMLDivElement>();
    const Itemref2 = createRef<HTMLDivElement>();
    const Itemref3 = createRef<HTMLDivElement>();
    const Itemref4 = createRef<HTMLDivElement>();
    const Itemref5 = createRef<HTMLDivElement>();
    const Itemref6 = createRef<HTMLDivElement>();


    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(window.scrollY < window.innerHeight * 0.5)
                Itemref1 && gsap.to(Itemref1.current, {opacity: 0, duration: 0});
            
            if(window.scrollY >= window.innerHeight * 0.5 && window.scrollY <= window.innerHeight * 1.3){
                if(Itemref1.current){
                    gsap.to(Itemref1.current, {opacity: 1, duration: 1});
                    Itemref1.current.style.transform = `translateY(${window.scrollY - window.innerHeight * 0.5}px)`;
                }
            } else {
                Itemref1.current && gsap.to(Itemref1.current, {opacity: 0, duration: 1})
            }


            if(window.scrollY > window.innerHeight * 1.5 && window.scrollY <= window.innerHeight * 2.3){
                if(Itemref2.current){
                    gsap.to(Itemref2.current, {opacity: 1, duration: 1})
                    Itemref2.current.style.transform = `translateY(${window.scrollY - window.innerHeight * 1.5}px)`;
                }
            } else {
                Itemref2 && gsap.to(Itemref2.current, {opacity: 0, duration: 1})
            }

            if(window.scrollY > window.innerHeight * 2.5 && window.scrollY <= window.innerHeight * 3.3){
                if(Itemref3.current){
                    gsap.to(Itemref3.current, {opacity: 1, duration: 1});
                    Itemref3.current.style.transform = `translateY(${window.scrollY - window.innerHeight * 2.5}px)`;
                }
            } else {
                Itemref3.current && gsap.to(Itemref3.current, {opacity: 0, duration: 1})
            }

            if(window.scrollY > window.innerHeight * 3.5 && window.scrollY <= window.innerHeight * 4.3){
                if(Itemref4.current){
                    gsap.to(Itemref4.current, {opacity: 1, duration: 1})
                    Itemref4.current.style.transform = `translateY(${window.scrollY - window.innerHeight * 3.5}px)`;
                }
            } else {
                Itemref4.current && gsap.to(Itemref4.current, {opacity: 0, duration: 1})
            }

            if(window.scrollY > window.innerHeight * 4.5 && window.scrollY <= window.innerHeight * 5.3){
                if(Itemref5.current) {
                    gsap.to(Itemref5.current, {opacity: 1, duration: 1})
                    Itemref5.current.style.transform = `translateY(${window.scrollY - window.innerHeight * 4.5}px)`;
                }
            } else {
                Itemref5.current && gsap.to(Itemref5.current, {opacity: 0, duration: 1})
            }

            if(window.scrollY > window.innerHeight * 5.5 && window.scrollY <= window.innerHeight * 6.3){
                if(Itemref6.current){
                    gsap.to(Itemref6.current, {opacity: 1, duration: 1})
                    Itemref6.current.style.transform = `translateY(${window.scrollY - window.innerHeight * 5.5}px)`;
                }
            } else {
                Itemref6.current && gsap.to(Itemref6.current, {opacity: 0, duration: 1})
            }
        })
    }, [])

    return(
        <SectionWrapper>
            <Wrapper>
                <Header>
                    About Me
                </Header>
            </Wrapper>
            <TimeContainer>
                <Timeline />
                <LeftSide>
                    <InfoWrap>
                        <Info ref={Itemref1}><p>Front end developer</p></Info>
                    </InfoWrap>
                    <InfoWrap>
                        <Info ref={Itemref3}><p>Based in Beijing</p></Info>
                    </InfoWrap>
                    <InfoWrap>
                        <Info ref={Itemref5}><p>Item 5 </p></Info>
                    </InfoWrap>
                </LeftSide>
                <RightSide>
                    <InfoWrap>
                        <Info ref={Itemref2}><p>Born in Zimbabwe</p></Info>
                    </InfoWrap>
                    <InfoWrap>
                        <Info ref={Itemref4}><p>I love challenges</p></Info>
                    </InfoWrap>
                    <InfoWrap>
                        <Info ref={Itemref6}><p>Item 6 </p></Info>
                    </InfoWrap>
                </RightSide>
            </TimeContainer>
        </SectionWrapper>
    )
}

export default AboutMePage;
const LeftSide = styled.div`
    width: 50vw;
    height: 100%;
    // background-color: white;
`;

const RightSide = styled(LeftSide)`
    padding-top: 100vh;
`;

const InfoWrap = styled.div`
    width: 50vw;
    height: 100vh;
    margin-bottom: 100vh;
    display: flex;
    justify-content: center;
`;

const Info = styled.div`
    height: 15vh;
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        font-size: 2.5rem;
    }
`;

const TimeContainer = styled.div`
    width: 100%;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: row;
`;

const Timeline = styled.div`
    position: absolute;
    top: -10vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 10px 10px;
    height: 600vh;
    width: 5px;
    background-color: rgb(58, 58, 58, 0.5);
`;

const Wrapper = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    margin: 0;
    font-size: 12vw;
    margin: 0;
    padding: 0;
    color: #E5E5E5;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 12vw;
    z-index: 1;
`;