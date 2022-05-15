import gsap from 'gsap';
import React , {useEffect, useState} from 'react';
import styled from 'styled-components';

const ScrollDownIcon = () => {
    const [nudgeUser, setNudgeUser] = useState<boolean>(true);

    // EDIT TO READ FOR INACTIVITY FOR ALL PAGES
    useEffect(() => {
        if (nudgeUser){
            gsap.fromTo('.Arrow', {y: -40}, {y:0, repeat: 3, duration: 2.5, ease: "elastic.out(1, 0.3)"});
            setNudgeUser(false);
        }
    }, [nudgeUser]);

    return(
        <Wrapper className={'ScrollNudge'} onClick={() => setNudgeUser(true)}>
            <Arrow />
            <Text> scroll down </Text>
        </Wrapper>
    );
};

export default ScrollDownIcon;

const Wrapper = styled.div`
    position: fixed;
    bottom: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30px;
    left: 50%;
    right: 0;
    transform: translate(-50%, 0);
    margin: 0;
    padding: 0;
`;

const Arrow = () => (
    <svg className='Arrow' style={{width: '70%', fill: 'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
        <path d="M252.485 343.03l-7.07-7.071c-4.686-4.686-12.284-4.686-16.971 0L145 419.887V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v375.887l-83.444-83.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l116 116.485c4.686 4.686 12.284 4.686 16.971 0l116-116.485c4.686-4.686 4.686-12.284-.001-16.97z"/>
    </svg>
);

const Text = styled.p`
    // font-family: 'nunito-sans';
    font-size: 25px;
    white-space: nowrap;
    margin: 1rem 0 0 0;
`;

