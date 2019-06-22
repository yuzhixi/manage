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
            pageNum: 1
        }
    }
    componentWillMount(){
        _mm.getUserList(this.state.pageNum)
    }
    onPageNumChange(num){

    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="用户管理"/>
                <div className="row">
                    <div className="col-md-12">
                        <span>用户列表</span>
                    </div>
                    <Pagination current={10} 
                        total={200} 
                        onChange={() => this.onPageNumChange(pageNum)}
                    />
                </div>
            </div>
        );
    }
}

export default Error;