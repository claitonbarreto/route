import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Animated } from 'react-animated-css'

//MATERIAL-UI
import { Grid } from '@material-ui/core'

//actions
import ErrorAction from '../../actions/ErrorAction'
import AlertAction from '../../actions/AlertAction'

//My components
import Header from './Header'


import { Container, CardContent } from './styles'

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
                <Container
                    animationIn={props.animationIn}
                    animationInDelay={props.animationInDelay}
                    animationInDuration={props.animationDuration}
                >
                    <Header title={headerText} color={props.cardColor} themeColor={props.themeColor}/>
                    
                    <CardContent cardColor={props.cardColor} shadow={shadow}>
                        {children}           
                    </CardContent>
                </Container>
            </Grid>
        </>
    )
}



export default connect(store => ({
    error: store.ErrorReducer.error,
    data: store.RouteReducer.data,
    themeColor: store.ThemeReducer.theme
}))(MyCard)
