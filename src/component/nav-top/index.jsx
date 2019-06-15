import React from 'react'
import {Link} from 'react-router-dom'

class NavTop extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY Mall</b></Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="#" aria-expanded="false">
                            <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-messages">
                            <li>
                                <Link to="#">
                                    <div>
                                        <strong>John Doe</strong>
                                        <span className="pull-right text-muted">
                                            <em>Today</em>
                                        </span>
                                    </div>
                                    <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link className="text-center" to="/">
                                    <strong>Read All Messages</strong>
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/" aria-expanded="false">
                            <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-tasks">
                            <li>
                                <Link to="/">
                                    <div>
                                        <p>
                                            <strong>Task 1</strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" styles="width: 60%">
                                                <span className="sr-only">60% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <p>
                                            <strong>Task 2</strong>
                                            <span className="pull-right text-muted">28% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" styles="width: 28%">
                                                <span className="sr-only">28% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <p>
                                            <strong>Task 3</strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" styles="width: 60%">
                                                <span className="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <p>
                                            <strong>Task 4</strong>
                                            <span className="pull-right text-muted">85% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" styles="width: 85%">
                                                <span className="sr-only">85% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link className="text-center" to="/">
                                    <strong>See All Tasks</strong>
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/" aria-expanded="false">
                            <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New Comment
                                        <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                        <span className="pull-right text-muted small">12 min</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-envelope fa-fw"></i> Message Sent
                                        <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-tasks fa-fw"></i> New Task
                                        <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                        <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link className="text-center" to="/">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i>
                            <span>欢迎，admin</span>
                            <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <span onClick={()=>{this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavTop;