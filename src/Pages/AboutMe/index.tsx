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
            if(window.scrollY >= window.innerHeight * 0.5 && window.scrollY <= window.innerHeight * 2){
                if(Itemref1.current){

                }
            }


            if(window.scrollY > window.innerHeight * 2 && window.scrollY <= window.innerHeight * 3)
                console.log('section 2!!!!')

            if(window.scrollY > window.innerHeight * 3 && window.scrollY <= window.innerHeight * 4)
                console.log('section 3!!!!')

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
                    <Info ref={Itemref1}><p>Item 1 </p></Info>
                    <Info ref={Itemref3}><p>Item 3 </p></Info>
                    <Info ref={Itemref5}><p>Item 5 </p></Info>
                </LeftSide>
                <RightSide>
                    <Info ref={Itemref2}><p>Item 2 </p></Info>
                    <Info ref={Itemref4}><p>Item 4 </p></Info>
                    <Info ref={Itemref6}><p>Item 6 </p></Info>
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

const Info = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: red;
    margin-bottom: 100vh;
    display: flex;
    justify-content: center;
    font-size: 3rem;

    & p {
        margin: 0;
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
    height: 300vh;
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