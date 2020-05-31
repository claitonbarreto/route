import React, { useState, useEffect } from 'react'

//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'

//MATERIAL-UI
import { TextField, Button, InputAdornment } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//styled
import styled from 'styled-components'

const CardContent = styled.div`
    border: 3px solid #05a8aa;
    border-radius: 10px;
    width: 80%;
    box-shadow: 0px 0px 5px black;
    height: auto;
    margin-top: -25px;
    padding: 25px;
`;

const HeaderContent = styled.div`
    background-color: #05a8aa;
    border-radius: 10px;
    width: 60%;
    text-align: center;
    z-index: 2
`

const Title = styled.h1`
    color: white;
    font-size: 27pt;
    font-weight: 300
`

const CardForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15%;
    margin-top: 80px;
`

const MyTextInput = styled.div`
    margin: 5px 0px 20px 0px;
    width: 100%;
    & * {
        width: 100%
    }
`

const MyButton = styled.div`
    margin-top: 60px;
    background-color: #ED6A5A;
    border-radius: 10px;
    & * {color: white;}
`

const CardHeader = ({title}) => {
    return(
        <HeaderContent>
            <Title>{title}</Title>
        </HeaderContent>
    )
}

const MyCard = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <CardHeader 
                title="Cálculo de frete"
                />
            </Row>
            <Row className="justify-content-center">
                <CardContent>
                        <CardForm>
                            <MyTextInput>
                                <TextField 
                                    label="CEP de Origem"
                                    helperText="somente números"
                                />
                            </MyTextInput>
                            <MyTextInput>
                                <TextField
                                    label="CEP de origem"
                                    helperText="somente números"
                                />
                            </MyTextInput>
                            <MyTextInput>
                                <TextField
                                    label="Frete"
                                    helperText="separar por (,)"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>
                                    }}
                                />
                            </MyTextInput>
                            
                            <MyButton>
                                <Button
                                    endIcon={<ArrowForwardIosIcon />}
                                >
                                    Calcular
                                </Button>
                            </MyButton>
                        </CardForm>
                </CardContent>
            </Row>       
        </Container>
    )
}


export default MyCard;
