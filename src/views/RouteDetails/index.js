import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

//Material Ui
import { Grid } from "@material-ui/core"

//styled components
import styled from 'styled-components'

//My Components
import HomeCard from '../../components/HomeCard'
import MyCard from '../../components/MyCard/index'
import FooterText from '../../components/FooterText'


import {
    BottomGridContainer,
    Container,
    MyButton,
    MyGrids,
    MyTextInput
} from './styles'

const RouteDetails = ({data, frete}) => {

    return (
        <>
        {data.length === 0 ? (
            <Redirect to="/" />
        ) : 
        (
            <Container container justify="center" alignItems="center" style={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={10} md={10} lg={8} xl={8}  direction="column">
                    <Grid item xs={12} >
                        <Grid container justify="center">
                            <MyCard
                                headerText="Endereços Encontrados"
                                cardWidth={12}
                                cardColor="#3ACECF"
                                animationIn="fadeInLeft"
                                xs={12} sm={12} md={12} lg={12} xl={12}
                            >
                                <Grid container>
                                    <Grid item md={6} style={{width: '100%', borderRight: '0.2px solid #ddd'}}>
                                        <AdressDetails data={data.origin} target="Origem"/>
                                    </Grid>
                                    <Grid item md={6} style={{width: '100%'}}>
                                        <AdressDetails data={data.destiny} target="Destino"/>
                                    </Grid>
                                </Grid>
                            </MyCard>
                        </Grid>
                    </Grid>
                    <BottomGridContainer container direction="row" style={{marginTop: '50px'}}>
                        <Grid 
                            item
                            xs={12} 
                            sm={12} 
                            md={6} 
                            lg={6} 
                            xl={6}
                        >
                            <Grid container justify="flex-start">
                                <MyCard
                                    headerText="Detalhes da rota"
                                    cardColor="#EC897D"
                                    animationIn="fadeInUp"
                                    animationInDelay={200}
                                    xs={12} 
                                    sm={12} 
                                    md={10} 
                                    lg={10} 
                                    xl={9}
                                    style={{
                                        marginBottom: '25px'
                                    }} 
                                >
                                    <Grid container>
                                        <Grid item md style={{width: '100%'}}>
                                            <RouteDetailsCard data={data.route} frete={frete}/>
                                        </Grid>
                                    </Grid>
                                </MyCard>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container justify="center">
                                <HomeCard
                                    title="Ajuste de Frete"
                                    noCeps
                                    noButton
                                />
                            </Grid>
                        </Grid>
                    </BottomGridContainer>
                    <FooterText />
                </Grid>
            </Container>
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

    @media (max-width: 1440px) {
        font-size: 1.5rem;
        margin-top: 1rem;
    }
`

const AdressDetails = ({data, target}) => {
    return (
        <>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">{target}</TextDestak>
                <TextLabel>{data.postalCode}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Logradouro</TextDestak>
                <TextLabel>{data.street}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Bairro</TextDestak>
                <TextLabel>{data.neighborhood}</TextLabel>
            </MyFlexGrid>
            <MyFlexGrid direction="row">
                <TextDestak color="#ED6A5A">Cidade</TextDestak>
                <TextLabel>{data.city}</TextLabel>
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
        let distance = data.distance
        distance = `${parseFloat(milhar(distance)).toFixed(2)} Km`
        return distance
    }

    const getMinutes = () => {
        let seconds = data.baseTime
        let minutes = seconds/60
        return `${minutes.toFixed(2)} Min`
    }

    const getFrete = () => {
        let _frete = frete.replace(',','.')
        let distance = milhar(data.distance) // 9933
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