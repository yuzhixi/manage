/*
* @Author: Rosen
* @Date:   2018-01-26 13:45:45
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:56:28
*/
import React        from 'react';
import { Link }     from 'react-router-dom';

import PageTitle    from 'component/page-title/index.jsx';
import Pagination from 'util/pagination.jsx'
import MUtil from 'util/api.jsx'

const _mm = new MUtil()

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            pageNum: 1,
            total: 200
        }
    }
    componentWillMount(){
        this.loadUserList()
    }
    loadUserList(){
        _mm.getUserList({
            pageNum: this.state.pageNum
        }).then(res  =>{
            this.setState({
                list: res
            })
        }).catch((err)=>{
            _mm.errorTips(err)
        })

    }
    onPageNumChange(num){
        this.setState({
            pageNum: num
        },()=>{
            this.loadUserList()
        })
    }
    render(){
        let listBody = this.state.list.map((user,index)=>{
                return (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.createTime}</td>
                    </tr>
                )
            })
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>注册时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination current={this.state.pageNum} 
                        total={this.state.total} 
                        onChange={(pageNum) => this.onPageNumChange(pageNum)}
                    />
                </div>
            </div>
        );
    }
}

export default Error;