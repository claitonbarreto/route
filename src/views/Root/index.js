import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import Home from '../Home'
import Users from '../Users'
import RouteDetails from '../RouteDetails'

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
                <Route path="/route-details">
                    <RouteDetails />
                </Route>
            </Switch>
        </Router>
            
    )
}

export default Root