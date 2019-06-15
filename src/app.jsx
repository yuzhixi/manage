import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom"
import { createBrowserHistory } from 'history'

import Home from 'page/home/index.jsx'
import Layout from 'component/layout/index.jsx'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/product' component={Home}/>
                        <Route path='/product/category' component={Home}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);