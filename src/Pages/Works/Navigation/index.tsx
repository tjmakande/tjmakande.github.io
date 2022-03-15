import React from 'react';
import styled from 'styled-components';

interface Props {
    active: number,
    setPage: (item: number) => void
}

interface BtnProp {
    ActiveBtn: Boolean
}

const Navigation = (props: Props) => {
    const {active, setPage} = props;
    return(
        <div style={{height: '100vh', width: '5vw', position: 'absolute', right: '2vw', display: 'flex', alignItems: 'center', top: 0, transform: `translateY(${window.innerHeight * active}px)`, transition:'.5s'}}>
            <Container>
                <Btns ActiveBtn={active === 0} onClick={() => setPage(0)}> Top </Btns>
                <Btns ActiveBtn={active === 1} onClick={() => setPage(1)}> 1 </Btns>
                <Btns ActiveBtn={active === 2} onClick={() => setPage(2)}> 2 </Btns>
                <Btns ActiveBtn={active === 3} onClick={() => setPage(3)}> 3 </Btns>
                <Btns ActiveBtn={active === 4} onClick={() => setPage(4)}> 4</Btns>
            </Container>
        </div>
    )
};

export default Navigation;

const Container = styled.div`
    width: 5vw;
    height: 50vh;
    background-color: rgb(90,90,90, 0.8);
    border-radius: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
`;

const Btns = styled.div`
    font-size: 13px;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props:BtnProp) => props.ActiveBtn ? 'lime' : 'rgb(229,229,229)'};
    background-color: ${(props:BtnProp) => props.ActiveBtn && 'rgb(78, 78, 78)'};


    &:hover{
        background-color: rgb(78, 78, 78);
        transition: .5s;
        cursor: none;
        color: white;
    }
`;