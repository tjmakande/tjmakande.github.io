import styled from 'styled-components';

interface Props {
    left: boolean;
    top: boolean;
}

export default styled.div`
    position: fixed;
    ${
        (props: Props) => props.left ? 'left: 2vw' : 'right: 2vw'
    };
    ${
        (props: Props) => props.top ? 'top: 3vh' : 'bottom: 3vh'
    };

    & a {
        color: #fff;
        text-decoration: none;
    }
    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 850px){
        font-size: 1.5rem;
    }
`;