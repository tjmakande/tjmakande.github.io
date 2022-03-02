import styled from 'styled-components';

interface Props {
    left: Boolean,
    top: Boolean
}

export default styled.div`
    position: fixed;
    font-size: clamp(16px, 2.5vw, 20px);
    ${
        (props:Props) => props.left ? 'left: 2vw' : 'right: 2vw'
    };
    ${
        (props: Props) => props.top ? 'top: 3vh' : 'bottom: 3vh'
    };
    z-index: 7;
    margin: 0;
    color: rgb(229, 229, 229);
    font-weight: 600;
    & > a {
        color: rgb(229, 229, 229);
    }

    &:hover{
        cursor: pointer;
    }
`;