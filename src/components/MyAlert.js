import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'

const CardAlert = styled.div`
    position: absolute;
    float: center;
    margin: auto;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(10,10,10,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;


const MyAlert = ({showAlert, errors, ...props}) => {
    
    const handleClose = () => {
        props.handleClose()
    }

    {if(showAlert === true) {
        return (
            <CardAlert>
                <Alert 
                    severity="error"
                    onClose={handleClose}
                >
                    <AlertTitle>Erro!</AlertTitle>
                    {errors.map((err, key) => {
                        return <p key={key}> {err.error}, <strong>code: {err.code}</strong> </p>
                    })}
                </Alert>
            </CardAlert>
        )
    } else return null}
}

export default MyAlert;