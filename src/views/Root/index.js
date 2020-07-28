import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import Home from '../Home'
import Users from '../Users'
import RouteDetails from '../RouteDetails'
import ThemeReducer from '../../reducers/ThemeReducer'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../theme'
import GlobalTheme from '../../globalStyle'

const Root = (props) => {


    return (
        <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
            <GlobalTheme />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/route-details">
                        <RouteDetails />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
            
    )
}

export default connect(store => ({
    theme: store.ThemeReducer.theme
}))(Root)