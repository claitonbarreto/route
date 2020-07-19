import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

//Material Ui
import { Grid, Button } from "@material-ui/core"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

//styled components
import styled from 'styled-components'

//My Components
import MyCard from '../../components/MyCard/index'
import FreteField from '../../components/FreteField'

//stores
import store from '../../store/index'


const MyGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyButton = styled.div`
    margin-top: 60px;
    background-color: #ED6A5A;
    border-radius: 10px;
    & * {color: white;}
`;

const RouteDetails = ({data, frete}) => {
    
    return (
        <>
        {data.length === 0 ? (
            <Redirect to="/" />
        ) : (
            <Grid container spacing={2} style={{border: '1px solid blue', minHeight: '100vh', paddingTop: '15px'}}>

            <Grid container justify="center" style={{border: '1px solid red'}}>
                <Grid item xs={12} style={{marginBottom: '50px'}}>
                    <Grid container justify="center">
                        <MyCard
                            headerText="Endereços Encontrados"
                            cardWidth={6}
                            cardColor="#3ACECF"
                        >
                            <Grid container>
                                <Grid item md={6} style={{width: '100%', borderRight: '1px solid #ddd'}}>
                                    <AdressDetails data={data.origem}/>
                                </Grid>
                                <Grid item md={6} style={{width: '100%'}}>
                                    <AdressDetails data={data.destino}/>
                                </Grid>
                            </Grid>
                        </MyCard>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="flex-end">
                        <MyCard
                            headerText="Detalhes da rota"
                            cardWidth={6}
                            cardColor="#EC897D"
                        >
                            <Grid container>
                                <Grid item md style={{width: '100%'}}>
                                    <RouteDetailsCard data={data.route} frete={frete}/>
                                </Grid>
                            </Grid>
                        </MyCard>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="flex-start">
                        <Grid item xs={4}>
                            <BigText>Recalcular Frete</BigText>
                            <FreteField 
                                id="FRETE"
                            />
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={5}>
                                    <MyButton>
                                        <Button
                                            endIcon={<ArrowForwardIosIcon />}
                                        >
                                            Calcular
                                        </Button>
                                    </MyButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
        )}
        </>
    )
}

//ED6A5A

const TextDestak = styled.label`
    color: ${({color}) => color};
    font-weight: 300;
`

const TextLabel = styled.label`
    color: ${({theme}) => theme.labelColor};
`
const BigText = styled(TextLabel)`
    font-size: 2em;
`

const AdressDetails = ({data}) => {
    return (
        <>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Origem</TextDestak>
                <TextLabel>{data.dataCep.cep}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Logradouro</TextDestak>
                <TextLabel>{data.dataCep.logradouro}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Bairro</TextDestak>
                <TextLabel>{data.dataCep.bairro}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Cidade</TextDestak>
                <TextLabel>{data.dataCep.localidade}</TextLabel>
            </MyFlexGrid>
        </>
    )
}

const RouteDetailsCard = ({data, frete}) => {

    function milhar(n){
        var n = ''+n, t = n.length -1, novo = '';
    
        for( var i = t, a = 1; i >=0; i--, a++ ){
            var ponto = a % 3 == 0 && i > 0 ? '.' : '';
            novo = ponto + n.charAt(i) + novo;
        }
        return novo;
    }
    
    const getDistance = () => {
        let distance = data.response.route[0].summary.distance
        distance = `${parseFloat(milhar(distance)).toFixed(2)} Km`
        return distance
    }

    const getMinutes = () => {
        let seconds = data.response.route[0].summary.baseTime
        let minutes = seconds/60
        return `${minutes.toFixed(2)} Min`
    }

    const getFrete = () => {
        let _frete = frete.replace(',','.')
        let distance = milhar(data.response.route[0].summary.distance) // 9933
        _frete = parseFloat(distance) * parseFloat(_frete)

        return `R$${_frete.toFixed(2)}`
    }

    return (
        <>
            <MyFlexGrid direction="row">
                <TextDestak color="#05A8AA">Distância</TextDestak>
                <TextLabel>{getDistance()}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#05A8AA">Tempo Previsto</TextDestak>
                <TextLabel>{getMinutes()}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#05A8AA">Frete</TextDestak>
                <TextLabel>{getFrete()}</TextLabel>
            </MyFlexGrid>
        </>
    )
}

const MyFlexGrid = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    margin: 2em 0;
    label {
        flex: 1;
        text-align: center
    }
`


export default connect(store => ({
    data: store.RouteReducer.data,
    frete: store.FreteReducer.frete
}))(RouteDetails)