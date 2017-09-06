import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/api/v1';
// axios.defaults.headers.common['x-access-token'] = 'xiaodingding';

/*
* 请求、响应拦截器
* */

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){

        let token=sessionStorage.getItem('venture-token');
        if(token){
          // axios.defaults.headers.common['x-access-token'] =token;
          config.data=config.data||{};
          config.data.token=token;
        }
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
    if(res.data.code=='03'){  //无token
      window.location='http://localhost:8080/login?no_token=1';
      return;
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
     * 用户注册 
     */
    Register(params) {
      return fetch('/register', params)
    },
    /**
     * 用户注销
     */
    Withdraw(params) {
      return fetch('/withdraw', params)
    },
    /**
     * 额度查询页面，下拉列表
     */
    GetLimitManager(params) {
      return fetch('/limit_manager', params)
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
      return fetch('/limit_detail', params)
    },
    /**
     * 项目列表
     */
    GetProjects(params) {
        return fetch('/projects', params)
    },
    /**
     * 新增项目
     */
    AddProject(params) {
        return fetch('/add_project', params)
    },
    /**
     * 查询单个项目
     */
    GetProject(params) {
        return fetch('/get_project', params)
    },
    /**
     * 修改项目
     */
    UpdateProject(params) {
        return fetch('/update_project', params)
    },
    /**
     * 项目状态列表
     */
    GetProjectStatus(params) {
      return fetch('/project_status', params)
    },
    /**
     * 合作渠道列表
     */
    GetChannelStatus(params) {
        return fetch('/channel_status', params)
    },

}
