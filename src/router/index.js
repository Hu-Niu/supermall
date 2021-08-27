import Vue from 'vue'
import VueRouter from 'vue-router'

//重定向
const Home = () => import('../view/home/Home.vue')
const Cart = () => import('../view/cart/Cart.vue')
const Category = () => import('../view/category/Category.vue')
const Profile = () => import('../view/profile/Profile.vue')
const Detail = () => import('../view/detail/Detail.vue')

//1 安装插件
Vue.use(VueRouter)

//2创建router
const routes = [
  {
    path: '',
    redirect: '/home',
    meta: { footShow:true }
  },
  {
    path: '/home',
    component: Home,
    meta: { footShow:true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { footShow:true }
  },
  {
    path: '/cart',
    component: Cart,
    meta: { footShow:true }
  },
  {
    path: '/category',
    component: Category,
    meta: { footShow:true }
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

//3导出
export default router