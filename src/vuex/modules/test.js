/**
 * Created by 胡志甫 on 2017/8/18.
 */
import * as types from '../types'

const state={
  count:3,
  initNum:15
}
const getters={
  showCount:state=>state.initNum+'.00'
}
const mutations={
  [types.TEST_COUNT](state,addCount){
      state.initNum+=addCount;
  }
}
const actions={
  getResult({commit},addCount){
    commit(types.TEST_COUNT,addCount);
  }
}
export default{
  state,
  getters,
  mutations,
  actions
}
