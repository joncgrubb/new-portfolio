import Vue from 'vue'
import Router from 'vue-router'
import grubbMain from '@/components/main'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'grubbMain',
      component: grubbMain
    }
  ]
})
