import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom"
import MUtil from 'util/mm';

const mm = new MUtil()

class NavTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')).name : ''
        }
    }
    onLogout(){
        mm.logout().then(()=>{
            console.log('退出登录')
            sessionStorage.removeItem('userInfo')
            window.location.href = '/login'
        })
    }
    render(){
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY Mall</b></Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                   <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/login">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username
                                ?<span>你好，{this.state.username}</span>
                                :<span>欢迎，请登录</span>
                            }
                            
                            <i className="fa fa-caret-down"></i>
                        </Link>
                        {
                            this.state.username
                            ?<ul className="dropdown-menu dropdown-user">
                                <li>
                                    <span onClick={()=>{this.onLogout()}}>
                                        <i className="fa fa-sign-out fa-fw"></i>
                                        <span>退出登录</span>
                                    </span>
                                </li>
                            </ul>
                            :''
                        }
                        
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavTop;