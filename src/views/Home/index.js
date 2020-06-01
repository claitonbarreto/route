import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'

import store from '../../store/index'
import routeStore from '../../@api/store/routeStore'

import MyCard from '../../components/MyCard/index'
import MyAlert from '../../components/MyAlert'

//STYLED 
import styled from 'styled-components'

const HomeGrid = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: auto;
    min-height: 100vh;
`;


const Home = (props) => {

   return (
    <HomeGrid imageUrl={process.env.PUBLIC_URL+'back.png'}>
        <Grid
            container
            spacing={0} 
            md={12} xs={6} 
            direction="row" 
            justify="center"
            alignItems="center"
        >
            <MyCard />
        </Grid>
    </HomeGrid>
   )
}

export default connect(store => ({cepOrigem: store.CepReducer.cepOrigem, cepDestino: store.CepReducer.cepDestino}))(Home)