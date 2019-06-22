import axios from 'axios'

class MUtil {
    login(data){
        return new Promise((resolve, reject)=>{
            axios.post('/manage/user/login.do',data).then(
                (res)=>{
                    // 数据请求成功
                    if(0 === res.data.status || 1 === res.data.status){
                        let userData = {
                            name: 'Helen',
                            age: '25',
                            phone: '18511112222'
                        }
                        typeof resolve === 'function' && resolve(userData, res.data.msg);
                    }
                    // 没有登录状态，强制登录
                    else if(10 === res.data.status){
                        this.doLogin();
                    }
                }
            ).catch(
                (error)=>{
                    debugger
                    reject(error)
                }
            )
        })
    }
    logout(){
        return new Promise((resolve, reject)=>{
            axios.post('/user/logout.do').then(
                (res)=>{
                    resolve(res)
                }
            ).catch(
                (err)=>{
                    console.error('error')
                    reject(err)
                }
            )
        })
    }

    getUrlParam(name){
        console.log('window',window.location)
        let queryString = window.location.search.split('?')[1]||'',
            reg         = new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),
            result      = queryString.match(reg);
            console.log('result', result)
        return result ? decodeURIComponent(result[2]) : null
    }

    errorTips(err){
        alert(err || '不对哦~')
    }

    doLogin(){
        window.location.href= '/login?redirect='+encodeURIComponent(window.location.pathname)
    }
    //首页统计
    statistic(){
        return new Promise((resolve, reject)=>{
            axios.post('/manage/statistic/base_count.do').then(
                (res)=>{
                   // 数据请求成功
                   if(0 === res.data.status){
                    
                        typeof resolve === 'function' && resolve(res.data, res.data.msg);
                    }
                }
            ).catch(
                (err)=>{
                    console.error('error')
                    reject(err)
                }
            )
        })
    }
    //获取产品列表
    getProductList(){
        return new Promise((resolve, reject)=>{
            axios.post('/manage/product/list.do').then(
                (res)=>{
                   // 数据请求成功
                   if(0 === res.data.status){
                    
                        typeof resolve === 'function' && resolve(res.data, res.data.msg);
                    }
                }
            ).catch(
                (err)=>{
                    console.error('error')
                    reject(err)
                }
            )
        })
    }
    //获取用户列表
    getUserList(data){
        return new Promise((resolve, reject)=>{
            axios.post('/manage/user/list.do', data).then(
                (res)=>{
                    // 数据请求成功
                    if(0 === res.data.status){
                    
                        typeof resolve === 'function' && resolve(res.data, res.data.msg);
                    }
                }
            ).catch(
                (err)=>{
                    console.error('error')
                    reject(err)
                }
            )
        })
    }
}

export default MUtil;