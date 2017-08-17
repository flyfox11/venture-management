import axios from 'axios'
import qs from 'qs'

//import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/api/v1/';

/*
* 请求、响应拦截器
* */

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data.user='hzf';
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     //_.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.status!==200){
         //_.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    //_.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    /**
     * 用户列表
     */
    GetUsers(params) {
        return fetch('/users', params)
    }

}
