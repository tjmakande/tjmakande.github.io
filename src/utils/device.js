import UAParser from 'ua-parser-js';
// import Bowser from 'bowser';

// const bowser = Bowser.getParser(window.navigator.userAgent);
const {device} = new UAParser().getResult();

export const isMobile = () => {
    if(device.type === 'mobile') return true;

    if(window.innerWidth < 810) return true;

    return false;
}

export const isDesktop = () => {
    if(window.innerWidth < 810) return false;

    if(window.innerWidth > window.innerHeight) return true;

    return false;
}