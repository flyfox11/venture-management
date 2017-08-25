import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login'
import ProjectManager from 'pages/ProjectManager'
import LimitManager from 'pages/LimitManager'
import limitList from 'pages/limitList'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/readme',
      component: resolve => require(['../components/Home.vue'], resolve),
      children:[
        { path: '/',
          redirect: '/project'
        },
        {
          path: '/project',
          component: ProjectManager
        },
        {
          path: '/limit',
          component: LimitManager,
        },
        {
          path:'/limitList',
          component:limitList
        },
        {
          path: '/drag',
          component: resolve => require(['../pages/DragList.vue'], resolve)    // 拖拽列表组件
        }
      ]
    },
  ]
})
