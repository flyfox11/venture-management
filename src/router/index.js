import Vue from 'vue'
import Router from 'vue-router'
import hello from '../components/hello'
import Login from '../components/Login'
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
      path: '/hello',
      name: 'Hello',
      component: hello
    }
  ]
})
