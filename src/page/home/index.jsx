import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import PageTitle from 'component/page-title/index.jsx'


class Home extends React.Component{
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页">
                    <button className="btn btn-warning">click</button>
                </PageTitle>
                <div className='row'>
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        )
    }
}

export default Home