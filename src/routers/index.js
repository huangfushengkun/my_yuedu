
import Vue from "vue"
import Router from 'vue-router'
import { authToken } from "../service/getData";
// import { settings } from "cluster";
import setting from "@/views/setting.vue"


Vue.use(Router)

// import Main from '@/views/Main'
const routes = [
  {
    path: '/',
    // component: Main,
    component: () => import('@/views/Main.vue'),
    redirect: '/channel/1',
    children: [
      {
        path: 'login',
        component:() => import('@/views/Main/Login.vue'),
        meta: {
          title: '登录'
        }
      }, {
        path: 'channel/:id',
        // component: Channel
        component: () => import('@/views/Main/Channel.vue'),
        meta: {
          title: '列表'
        }
      }, {
        path: 'article/:id',
        component: () => import('@/views/Main/Article.vue'),
        meta: {
          title: '文章'
        }
      }, {
        path: 'join',
      }, {
        path: 'about',
      }, {
        path: 'setting',
        component: setting,
        meta:{
          requireAuth:true,
          title:'设置'
        }
      
      }
    ]
  },{
    path: '/user/:id'
  }
]


const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  //判断是否需要登陆
  if (to.matched.some(route => route.meta.requireAuth)) {
    //判断token是否存在有效
    const token = localStorage.getItem('token')
    if (token) {
      //判断是否有效
      authToken().then(res => {
        if(res.data.res_code === 200) {
          next()
        }
      })
    } else {
      next('/login')
    }
  } else {
    //正常跳转
    next()
  }
})

export default router