import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//MATERIAL-UI
import { TextField, Button, InputAdornment, Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MailIcon from '@material-ui/icons/Mail';

//styled
import styled from 'styled-components'

//STORE
import store from '../../store/index'
import routeStore from '../../@api/store/routeStore'

//actions
import RouteActions from '../../actions/RouteActions'
import ErrorAction from '../../actions/ErrorAction'
import AlertAction from '../../actions/AlertAction'

//My components
import Header from './Header'
import CepField from '../CepField'
import FreteField from '../FreteField'
import validations from './validations'
import MyAlert from '../../components/MyAlert'
import Wait from '../Wait'

const CardContent = styled.div`
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 0px 5px #222;
    height: auto;
    margin-top: -35px;
    padding: 25px;
    background-color: ${({theme}) => theme.cardBackground};

    @media (max-width: 768px) {
        margin-left: .8rem;
        margin-right: .8rem;
    }

`;

const Text = styled.p`
    text-align: center;
    font-size: 12pt;
    color: ${props => props.color ? props.color : ({theme}) => theme.inputLabel};
    margin-bottom: 5px;
    font-weight: 500;
`;



const MyCard = ({headerText, cardWidth, children, shadow, ...props}) => {
    

    const handleCloseAlert = () => {
        props.dispatch(AlertAction.setShowAlert(false))
        props.dispatch(ErrorAction.clearError('dados'))
    }

    return (
        <>
            {props.redirect && (
                <Redirect to="/route-details" />
            )}
            <Grid 
                container 
                xs={props.xs} 
                sm={props.sm} 
                md={props.md} 
                lg={props.lg} 
                xl={props.xl}  
                direction="row" 
                justify="center" 
                alignItems="center"
            >
                <Header title={headerText} color={props.cardColor} themeColor={props.themeColor}/>
                
                <CardContent cardColor={props.cardColor} shadow={shadow}>
                    {children}           
                </CardContent>
            </Grid>
            {/* {props.suggest && <Grid xs={12} style={{marginTop: '20px'}}>
                <Text>Alguma sugestão ou reclamação? Não de acanhe, me envie um e-mail:</Text>
                <a href="#">
                    <Text color="#ED6A5A">
                        <MailIcon />
                        claitonbarreto@gmail.com
                    </Text>
                </a>
            </Grid>} */}
        </>
    )
}



export default connect(store => ({
    error: store.ErrorReducer.error,
    data: store.RouteReducer.data,
    themeColor: store.ThemeReducer.theme
}))(MyCard)
