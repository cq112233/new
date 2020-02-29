//路由规则文件
//导入vue
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//导入组件登入界面
import login from '../components/login.vue'
//导入home界面
import home from '../components/home.vue'
//vue使用vuerouter
Vue.use(VueRouter)

const routes = [
      {
        path:'/',
        redirect:'/login'
      },
      {
        path:'/login',
        component:login
      },
      {
        path:'/home',
        component:home
      }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫，设置只有登入时才能访问其他文件
router.beforeEach((to, from, next) =>{
    if(to.path === '/login'){return next()}
    const totoken = window.sessionStorage.getItem('token')
    //获取的token为字符串
    console.log(typeof totoken)
    if(!totoken){return next('/login')}
    next()
})

export default router
