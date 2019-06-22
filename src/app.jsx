import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom"

import Home from 'page/home/index.jsx'
import Login from 'page/login/index.jsx'
import User from 'page/user/index.jsx'
import Layout from 'component/layout/index.jsx'
import ErrorPage from 'page/error/index.jsx'
import Product from 'page/product/index/index.jsx'

class App extends React.Component{
    render(){
        let LayoutRouter = (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/product' component={Product}/>
                <Route path='/product/category' component={Home}/>
                <Route path='/user/index' component={User}/>
                <Redirect exact from='/user' to='/user/index'/>
                <Route component={ErrorPage} />
            </Switch>
        </Layout>)
        return (
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route path='/' render={props=>LayoutRouter} />
                </Switch>
                
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);