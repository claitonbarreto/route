import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import Home from '../Home'
import Users from '../Users'

const Root = () => {
    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
            </Switch>
        </Router>
            
    )
}

export default Root