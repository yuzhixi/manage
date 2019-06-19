import axios from 'axios'

class MUtil {
    login(data){
        return new Promise((resolve, reject)=>{
            axios.post('/manage/user/login.do',data).then(
                (res)=>{
                    this.doLogin()
                    console.log('succedd')
                    debugger
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
}

export default MUtil;