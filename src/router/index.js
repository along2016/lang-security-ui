import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import UserInfo from '@/page/user/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
