/**
 * 测试： 用户名状态共享
 */
import * as types from '../types'
import api from 'fetch/api';

const state={
  username:''
}
const getters={
  showUserName:state=>state.username+'客户'
}
const mutations={
  [types.SAVE_NAME](state,user){
    const route=user.router;
    delete user.router;
    api.Login(user)
      .then(res => {
        if(res.code=='01'){
          state.username=res.result.crealname;
          route.replace('/project');
        }else{

        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
const actions={
  [types.SAVE_NAME]({commit},user){
    commit(types.SAVE_NAME,user);
  }
}
export default{
  state,
  getters,
  mutations,
  actions
}
