import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

//Material Ui
import { Grid } from "@material-ui/core"

//styled components
import styled from 'styled-components'

//My Components
import MyCard from '../../components/MyCard/index'

//stores
import store from '../../store/index'

const RouteDetails = ({data}) => {
    
    console.log(data)
    
    return (
        <>
        {data.length === 0 ? (
            <Redirect to="/" />
        ) : (
            <Grid container spacing={2}>

            <Grid item xs={12}>
                <MyCard
                    headerText="Endereços Encontrados"
                    cardWidth={12}
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
                <MyCard
                    headerText="Detalhes da rota"
                    cardWidth={6}
                >
                    <Grid container>
                        <Grid item md style={{width: '100%'}}>
                            <RouteDetailsCard data={data.route}/>
                        </Grid>
                    </Grid>
                </MyCard>
            </Grid>

        </Grid>
        )}
        </>
    )
}

const AdressDetails = ({data}) => {
    return (
        <>
            <MyFlexGrid direction="row">
                <label>Origem</label>
                <label>{data.dataCep.cep}</label>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <label>Logradouro</label>
                <label>{data.dataCep.logradouro}</label>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <label>Bairro</label>
                <label>{data.dataCep.bairro}</label>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <label>Cidade</label>
                <label>{data.dataCep.localidade}</label>
            </MyFlexGrid>
        </>
    )
}

const RouteDetailsCard = ({data}) => {

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

    return (
        <>
            <MyFlexGrid direction="row">
                <label>Distancia</label>
                <label>{getDistance()}</label>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <label>Tempo previsto</label>
                <label>{getMinutes()}</label>
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


export default connect(store => ({data: store.RouteReducer.data}))(RouteDetails)