import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'
import {connect} from 'react-redux'
import ErrorAction from '../actions/ErrorAction'
import store from '../store/index'
import { Animated } from 'react-animated-css'

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
    & .MuiPaper-root {
        background-color: #FF1F39;
    }
    & .MuiAlert-message {
        color: #fff;
    }
    & .MuiSvgIcon-root {
        color: #fff;
    }

    * {
        font-weight: bold;
    }
`;


const MyAlert = ({errors, ...props}) => {
    
    const handleClose = () => {
        props.handleClose()
    }

    {if(props.showAlert === true) {
        return (
            <CardAlert>
                <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={800}>
                    <Alert 
                        severity="error"
                        onClose={handleClose}
                    >
                        <AlertTitle>Erro!</AlertTitle>
                        {errors.map((err, key) => {
                            return <p key={key}> {err} </p>
                        })}
                    </Alert>
                </Animated>
            </CardAlert>
        )
    } else return null}
}

export default connect(store => ({
    showAlert: store.AlertReducer.showAlert,
    error: store.ErrorReducer.error
}))(MyAlert)