import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import styled from 'styled-components'
import { Animated } from "react-animated-css";

const WaitContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
`;

const WaitBody = styled.div`
    background-color: #fff;
    width: auto;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 .5em;
    border-radius: 10px;

    & .MuiCircularProgress-root {
        width: 25px !important;
        height: 25px !important;
        color: #05A8AA;
    }
`

const WaitText = styled.span`
    font-weight: light;
    font-size: 1.2rem;
    margin-left: 10px;
`

const Wait = () => {
    return (
        <WaitContainer>
            <Animated animationIn="zoomIn" animationInDuration={500}> 
                <WaitBody>
                    <CircularProgress />
                    <WaitText>Aguarde, buscando rota...</WaitText>
                </WaitBody>
            </Animated>
        </WaitContainer>
    )
}

export default Wait