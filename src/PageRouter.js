import FrontPage from './FrontPage'
import Links from './Links'
import Contact from './Contact'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"
const PageRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/links'>
                    <Links />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    )
}
export default PageRouter