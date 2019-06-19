import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom"

import Home from 'page/home/index.jsx'
import Login from 'page/login/index.jsx'
import Layout from 'component/layout/index.jsx'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Layout>
                        <Route path='/' render={props => 
                        (
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/product' component={Home}/>
                                <Route path='/product/category' component={Home}/>
                            </Switch>
                        )} />
                    </Layout>
                </Switch>
                
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);