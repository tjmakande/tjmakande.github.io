import styled from 'styled-components';

export default styled.div`
    width: 4vw;
    height: 3vw;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 99;

    &:hover {
        cursor: pointer;

        & * {
            background-color: lightgray;
            transition: .5s;
        }
    }
`;