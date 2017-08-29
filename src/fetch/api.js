import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/api/v1';

/*
* 请求、响应拦截器
* */

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        //config.data.user='hzf';
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.status!==200){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
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
    },
    /**
     * 用户登陆
     */
    Login(params) {
      return fetch('/login', params)
    },
    /**
     * 额度列表
     */
    GetLimits(params) {
      return fetch('/limits', params)
    },
    /**
     * 额度详情
     */
    GetLimitDetail(params) {
      return fetch('/limitDetail', params)
    },
    /**
     * 项目状态列表
     */
    GetProjectStatus(params) {
      return fetch('/project_status', params)
    },
}
