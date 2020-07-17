import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import styled from 'styled-components'

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

const Wait = () => {
    return (
        <WaitContainer>
            <CircularProgress />
        </WaitContainer>
    )
}

export default Wait