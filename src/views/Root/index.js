import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

//My imports
import ThemeAction from '../../actions/ThemeAction'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../theme'
import DarkModeInterruptor from '../../components/DarkModeInterruptor'
import GlobalTheme from '../../globalStyle'

//Pages
import Home from '../Home'
import RouteDetails from '../RouteDetails'
import _404 from '../_404'

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
                    <Route path="/route-details">
                        <RouteDetails />
                    </Route>
                    <Route>
                        <_404 />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
            
    )
}

export default connect(store => ({
    theme: store.ThemeReducer.theme
}))(Root)