/*
* @Author: Rosen
* @Date:   2018-01-26 16:48:16
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-31 14:34:10
*/
import React        from 'react';
import { Link }     from 'react-router-dom';
import MUtil        from 'util/api.jsx'

import PageTitle    from 'component/page-title/index.jsx';
import TableList    from 'util/table-list.jsx';

const _mm   = new MUtil();

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list            : [],
            pageNum         : 1
        };
    }
    componentDidMount(){
        this.loadProductList();
    }
    loadProductList(){
        _mm.getProductList(this.state.pageNum).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list : []
            });
            _mm.errorTips(errMsg);
        });
    }
    // 页数发生变化的时候
    onPageNumChange(pageNum){
        this.setState({
            pageNum : pageNum
        }, () => {
            this.loadProductList();
        });
    }
    render(){
        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
            );
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表"/>
                <TableList tableHeads={['ID', '用户名', '邮箱', '电话', '注册时间']}>
                    {listBody}
                </TableList>
                {/* <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/> */}
            </div>
        );
    }
}

export default ProductList;