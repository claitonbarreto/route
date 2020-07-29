import React, { useState, useEffect } from 'react'
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
import ThemeAction from '../../actions/ThemeAction'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../theme'
import DarkModeInterruptor from '../../components/DarkModeInterruptor'
import GlobalTheme from '../../globalStyle'

const Root = (props) => {

    useEffect(
        () => {
            localStorage.setItem('theme', props.theme)
        }, [props.theme]
    )

    const toggleTheme = () => {
        if(props.theme === 'light') {
            props.dispatch(ThemeAction.setTheme('dark')) 
            return
        }
        props.dispatch(ThemeAction.setTheme('light'))
    }


    return (
        <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
            <GlobalTheme />
            <DarkModeInterruptor 
                theme={props.theme}
                toggleTheme={toggleTheme}
            />
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