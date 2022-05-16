import gsap from 'gsap';
import React , {useEffect, useState} from 'react';
import styled from 'styled-components';

interface WrapperProps {
    isInactive: boolean;
}

const ScrollDownIcon = () => {
    const [isUserInactive, setIsUserInactive] = useState<boolean>(false);

    const InactiveUser = () => {
        let time: NodeJS.Timeout;

        const ShowIcon = () => setIsUserInactive(true);

        const resetTimer = () => {
            clearTimeout(time);
            setIsUserInactive(false);
            time = setTimeout(ShowIcon, 5000);
        };

        window.addEventListener('load', resetTimer, true);
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach((name: string) => {
            if(name === 'scroll') {
                document.querySelector('.scroller')?.addEventListener('scroll', resetTimer, true);
            } else {
                document.addEventListener(name, resetTimer, true);
            }
        });

    };

    useEffect(() => {
       InactiveUser();
    }, []);

    // EDIT TO READ FOR INACTIVITY FOR ALL PAGES
    useEffect(() => {
        if (isUserInactive){
            gsap.fromTo('.Arrow', {y: -40}, {y:0, repeat: 3, duration: 2.5, ease: "elastic.out(1, 0.3)"});
        }
    }, [isUserInactive]);

    return(
        <Wrapper className={'ScrollNudge'} isInactive={isUserInactive}>
            <Arrow />
            <Text> scroll down </Text>
        </Wrapper>
    );
};

export default ScrollDownIcon;

const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    bottom: 3vh;
    display: ${p => p.isInactive ? 'flex' : 'none'};
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

