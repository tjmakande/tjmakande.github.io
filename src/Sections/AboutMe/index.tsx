import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    return (
            <Wrapper className='AM_wrapper'>
                <Text>
                    <Lines className={'Othertext'}>A web developer who diligently works to move </Lines>
                    <Lines className={'from'} style={{display: 'inline-block'}}>from</Lines>&nbsp;
                    <Lines className={'challenge'} style={{display: 'inline-block'}}> challenges </Lines>&nbsp;
                    <Lines className={'to'} style={{display: 'inline-block'}}>to</Lines>&nbsp;
                    {/* <Lines className={'Othertext'}>any given</Lines>&nbsp; */}
                    <Lines className={'solution'} style={{display: 'inline-block'}}>solutions</Lines>
                    <Lines className={'Othertext'}>, eliminating obstacles along the way and paving a way forward.</Lines>
                </Text>
            </Wrapper>
    );
};

export default AboutMe;

const Lines = styled.span`
    position: relative;
    margin: 0;
    padding: 0
`;

const Text = styled.p`
    width: 65%;
    margin: 0 auto;
    color: black;
    font-size:clamp(2rem, 2.5vw, 5rem);

    @media (max-width: 850px){
        font-size: clamp(1rem,3vw,3rem);
        width: 90%;
    }
`;

const Wrapper = styled.div`
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 200vh;
    margin-bottom: calc(var(--vh, 1vh) * 200);
`;