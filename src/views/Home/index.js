//VENDORS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Grid, Paper, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

//STORE
import store from '../../store/index'
import routeStore from '../../@api/store/routeStore'

//MY COMPONENTS
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
import DarkModeInterruptor from '../../components/DarkModeInterruptor'
import Logo from '../../components/Logo'
import FooterText from '../../components/FooterText'

//STYLED 
import {
    CardForm,
    HomeGrid,
    MyButton,
    MyTextInput
} from './styles'

const Home = (props) => {

    const [busy, setBusy] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const handleCloseAlert = () => {
        props.dispatch(ErrorAction.clearErrors('dados'))
        props.dispatch(AlertAction.setShowAlert(false))
    }

    const handleSend = (e) => {
        var state = store.getState();

        let cep_origem = state.CepReducer.cepOrigem
        let cep_destino = state.CepReducer.cepDestino
        
        if(cep_origem == '') {
            props.dispatch(ErrorAction.setError('ORIGEM: O campo não pode ser vazio'))
            props.dispatch(AlertAction.setShowAlert(true))
            return
        }

        if(cep_destino == '') {
            props.dispatch(ErrorAction.setError('DESTINO: O campo não pode ser vazio'))
            props.dispatch(AlertAction.setShowAlert(true))
            return
        }

        if(props.errors.length > 0) {

            props.dispatch(AlertAction.setShowAlert(true))

        } else {

        props.dispatch(AlertAction.setShowAlert(false))

        setBusy(true)
        
        var promise = routeStore.getRoute(cep_origem, cep_destino)
        promise.then(res => {
            if(!res.data) {
                props.dispatch(ErrorAction.setError("Mensagem: Não foi possível estabelecer conexão com a API"))
                props.dispatch(AlertAction.setShowAlert(true))
                return
            }

            if(res.data.error) {
                props.dispatch(ErrorAction.setError(res.data.message))
                props.dispatch(AlertAction.setShowAlert(true))
                return
            }
            props.dispatch(RouteActions.setRoute(res.data))
            props.dispatch(FreteAction.setFrete(props.frete))
            setRedirect(true)
        })

        promise.finally(() => {setBusy(false)})
        }    
        
    }

   return (
    <>
    <HomeGrid imageUrl={process.env.PUBLIC_URL+'back.png'}>
        {busy && <Wait />}
        <MyAlert 
            errors={props.errors}
            handleClose={handleCloseAlert}
        />
        <Grid
            container
            spacing={0} 
            xs={12} 
            sm={8} 
            md={8} 
            lg={8} 
            xl={5}
            direction="column" 
            justify="center"
            alignItems="center"
        > 
            <Logo />
            <MyCard 
                shadow
                suggest  
                cardColor="#05A8AA" 
                headerText="Calcule sua rota" 
                redirect={redirect} 
                themeColor={props.tema}
                cardWidth={7}
                xs={12}
                sm={12}
                md={10}
                lg={6}
                xl={6}
                animationDuration={50}
            >
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
        <FooterText />
    </HomeGrid>
    </>
   )
}



export default connect(store => ({
    cepOrigem: store.CepReducer.cepOrigem,
    cepDestino: store.CepReducer.cepDestino,
    frete: store.FreteReducer.frete,
    tema: store.ThemeReducer.theme,
    errors: store.ErrorReducer.errors
}))(Home)
