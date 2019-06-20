import React from 'react'
import './index.scss'
import axios from 'axios'
import MUtil from 'util/mm.js'
const _mm = new MUtil()

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect')||'/'
        }
    }
    componentWillMount(){
        document.title = "登录--HAPPY MMALL"
    }
    onSubmit(){
        console.log('mm',_mm)
        _mm.login({
            username: this.state.username,
            password: this.state.password
        }).then((res)=>{

            sessionStorage.setItem('userInfo',JSON.stringify({
                name: 'Helen',
                age: '25',
                phone: '18511112222'
            }))
            this.props.history.push(this.state.redirect)

        })
    }
    onInputChange(e){
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }
    onEnterKeyUp(e){
        if(e.keyCode == 13){
            this.onSubmit()
        }
    }
    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">注册</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                    name="username"
                                    className="form-control"  
                                    placeholder="username" 
                                    onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control"         
                                    placeholder="Password" 
                                    onKeyUp={(e)=>this.onEnterKeyUp(e)}
                                    onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <button type="button" 
                                className="btn btn-primary btn-lg btn-block"
                                onKeyUp={(e)=>this.onEnterKeyUp(e)}
                                onClick={(e) => this.onSubmit(e)}
                            >登陆</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login