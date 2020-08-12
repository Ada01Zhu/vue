import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../VueRouter/index.js'
// import Index from '../views/Index.vue'
// import Layout from '../components/Layout.vue'

// 使用 vue-router 插件
Vue.use(VueRouter)

// 配置 routes 路由表
const routes = [
  // 嵌套路由
  // {
  //   path: '/',
  //   component: Layout,
  //   children: [
  //     {
  //       name: 'index',
  //       // 最终的路由 /
  //       path: '',
  //       component: Index
  //     },
  //     {
  //       name: 'detail',
  //       // 最终的路由 /detail/10086
  //       path: '/detail/:id',
  //       props: true,
  //       component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'hash', // history | hash
  routes
})

export default router
