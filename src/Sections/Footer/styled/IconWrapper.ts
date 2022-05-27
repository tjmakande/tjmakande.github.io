import styled from 'styled-components';

export default styled.div`
    width: 25px;
    padding: 0;
    margin: 0;

    @media (max-width: 850px){
        width: clamp(12px, 4.5vw, 25px);
    }
`;