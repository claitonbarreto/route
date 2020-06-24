import React, { useState, useEffect } from 'react'

//MATERIAL-UI
import { TextField, Button, InputAdornment, Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MailIcon from '@material-ui/icons/Mail';

//styled
import styled from 'styled-components'

//STORE
import store from '../../store/index'
import routeStore from '../../@api/store/routeStore'

//My components
import Header from './Header'
import CepField from '../CepField'
import FreteField from '../FreteField'
import validations from './validations'
import MyAlert from '../../components/MyAlert'
import Wait from '../Wait'

const CardContent = styled.div`
    border: 3px solid #05a8aa;
    border-radius: 10px;
    width: 80%;
    box-shadow: 0px 0px 5px black;
    height: auto;
    margin-top: -25px;
    padding: 25px;
    background-color: white;
`;

const MyTextInput = styled.div`
    margin: 5px 0px 20px 0px;
    width: 100%;
    & .Mui-focused {
        color: #00696A
    }
    & .Mui-focused * {
        color: #00696A
    }
    & label.Mui-focused {
        color: #00696A;
    }
    & .MuiInput-underline:after {
        border-bottom-color: #00696A
    }
`;

const CardForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15%;
    margin-top: 80px;
`;

const MyButton = styled.div`
    margin-top: 60px;
    background-color: #ED6A5A;
    border-radius: 10px;
    & * {color: white;}
`;

const Text = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: 12pt;
    color: ${props => props.color};
    margin-bottom: 5px;
`;



const MyCard = () => {


    useEffect(() => {
       
    })

    const handleSend = (e) => {
        var state = store.getState();

        let cep_origem = state.CepReducer.cepOrigem
        let cep_destino = state.CepReducer.cepDestino
        
        state.ErrorReducer.error.length > 0 ? setShowAlert(true) : setShowAlert(false) 

        setBusy(true)
        var promise = routeStore.getRoute(cep_origem, cep_destino)
        promise.then(res => {
            //TODO: ABRIR PAGINA RESULTADO 
            console.log(res)
            setBusy(false)
        })
    }

    const handleCloseAlert = () => {
        
        setShowAlert(false)
    }

    const [showAlert, setShowAlert] = useState(false)
    const [busy, setBusy] = useState(false)

    return (
        <>
            <Grid container xs={4} md={6} direction="row" justify="center" alignItems="center">
                {busy && <Wait />}
                <MyAlert 
                    showAlert={showAlert} 
                    errors={store.getState().ErrorReducer.error} 
                    handleClose={handleCloseAlert}
                />

                <Header title="Cálculo de frete" />
                
                <CardContent>
                            <CardForm>
                                <MyTextInput>
                                    <CepField 
                                        id="ORIGEM"
                                        label="CEP de Origem"
                                    />
                                </MyTextInput>
                                <MyTextInput>
                                    <CepField 
                                        id="DESTINO"
                                        label="CEP de Destino"
                                    />
                                </MyTextInput>
                                <MyTextInput>
                                    <FreteField 
                                        id="FRETE"
                                    />
                                </MyTextInput>
                                
                                <MyButton>
                                    <Button
                                        endIcon={<ArrowForwardIosIcon />}
                                        onClick={handleSend}
                                    >
                                        Calcular
                                    </Button>
                                </MyButton>
                            </CardForm>
                    </CardContent>
            </Grid>
            <Grid xs={12} style={{marginTop: '20px'}}>
                <Text>Alguma sugestão ou reclamação? Não de acanhe, me envie um e-mail:</Text>
                <a href="#">
                    <Text color="#ED6A5A">
                        <MailIcon />
                        claitonbarreto@gmail.com
                    </Text>
                </a>
            </Grid>
        </>
    )
}


export default MyCard;
