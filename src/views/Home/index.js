import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Grid, Paper, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import store from '../../store/index'
import routeStore from '../../@api/store/routeStore'

import MyCard from '../../components/MyCard/index'
import MyAlert from '../../components/MyAlert'
import CepField from '../../components/CepField'
import FreteField from '../../components/FreteField'
import RouteActions from '../../actions/RouteActions'
import AlertAction from '../../actions/AlertAction'
import FreteAction from '../../actions/FreteAction'
import ThemeAction from '../../actions/ThemeAction'
import ErrorAction from '../../actions/ErrorAction'
import Wait from '../../components/Wait'

//STYLED 
import styled from 'styled-components'

const HomeGrid = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MyTextInput = styled.div`
    margin: 5px 0px 20px 0px;
    width: 100%;

    & .MuiInput-underline:before {
        border-bottom: ${({theme}) => `1px solid ${theme.inputUnderlineColor}`}
    }

    & .MuiFormLabel-root {
        color: ${({theme}) => theme.inputLabel};
    }

    & .MuiFormHelperText-root {
        color: ${({theme}) => theme.inputLabel}
    }

    & .MuiTypography-colorTextSecondary {
        color: ${({theme}) => theme.inputLabel}
    }

    & .MuiInputBase-input {
        color: ${({theme}) => theme.inputLabel}
    }
    
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




const Home = (props) => {

    const [busy, setBusy] = useState(false)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => console.log(props), [])

    const toggleTheme = () => {
        let tema = props.tema
        console.log(props)
        if(tema === 'light') {
            props.dispatch(ThemeAction.setTheme('dark'))
        } else {
            props.dispatch(ThemeAction.setTheme('light'))
        }
    }

    const handleCloseAlert = () => {
        props.dispatch(AlertAction.setShowAlert(false))
        props.dispatch(ErrorAction.clearError('dados'))
    }

    const handleSend = (e) => {
        var state = store.getState();
    
        let cep_origem = state.CepReducer.cepOrigem
        let cep_destino = state.CepReducer.cepDestino
        
         if(state.ErrorReducer.error.length > 0) {

             props.dispatch(AlertAction.setShowAlert(true))
        
         } else {
    
            props.dispatch(AlertAction.setShowAlert(false))
    
            setBusy(true)
            var promise = routeStore.getRoute(cep_origem, cep_destino)
            promise.then(res => {
                if(res.data.error) {
                    props.dispatch(ErrorAction.setError([res.data.message]))
                    props.dispatch(AlertAction.setShowAlert(true))
                    return
                }
                //TODO: ABRIR PAGINA RESULTADO 
                props.dispatch(ErrorAction.clearError())
                props.dispatch(RouteActions.setRoute(res.data))
                props.dispatch(FreteAction.setFrete(props.frete))
                setRedirect(true)
            })
    
            promise.finally(() => {setBusy(false)})
         }    
        
    }

   return (
    <HomeGrid imageUrl={process.env.PUBLIC_URL+'back.png'}>
        {busy && <Wait />}
        <MyAlert 
            errors={props.errors}
            handleClose={handleCloseAlert}
        />
        <ThemeButtonStyle>
            <Button onClick={toggleTheme}>
                Mudar Tema
            </Button>
        </ThemeButtonStyle>
        <Grid
            container
            spacing={0} 
            md={5} xs={12} 
            direction="row" 
            justify="center"
            alignItems="center"
        >   
            <MyCard shadow cardColor="#05A8AA" headerText="Calcule sua rota" redirect={redirect} suggest>
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
            </MyCard>
        </Grid>
    </HomeGrid>
   )
}

const ThemeButtonStyle = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    border: 1px solid red;
`

export default connect(store => ({
    cepOrigem: store.CepReducer.cepOrigem,
    cepDestino: store.CepReducer.cepDestino,
    frete: store.FreteReducer.frete,
    tema: store.ThemeReducer.theme,
    errors: store.ErrorReducer.errors
}))(Home)
