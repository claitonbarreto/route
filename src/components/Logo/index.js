import React from 'react'
import { connect } from 'react-redux'

import orange_logo from '../../assets/logo/routelogo_orange.png'
import white_logo from '../../assets/logo/routelogo_white.png'

import { Container, LogoImage } from './styles'

const Logo = (props) => {

    return (
        <Container>
            <LogoImage src={props.theme == "light" ? orange_logo : white_logo} alt="Logo"/>
        </Container>
    )

}

export default connect(store => ({
    theme: store.ThemeReducer.theme
}))(Logo)