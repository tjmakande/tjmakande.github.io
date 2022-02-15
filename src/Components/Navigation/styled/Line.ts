import styled from "styled-components";

interface Props {
    width: number
}

export default styled.div`
    background-color: white;
    height: 5.5px;
    border-radius: 20px 20px;
    margin-bottom: 6.5px;
    width: ${(props:Props) => props.width}%;

`