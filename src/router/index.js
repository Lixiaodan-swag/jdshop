import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('../views/Home/Home')
const Category=()=>import('../views/Category/Category')
const Center=()=>import('../views/Center/Center')
const Car=()=>import('../views/Car/Car')
const Profile=()=>import('../views/Profile/Profile')

Vue.use(Router)


  const routes=[
    {
      path:'',
      redirect:"/home",
      
    },
   {
     path:'/home',
     component:Home,
    //  meta:{
    //   title:"首页"
    // },
   },
   {
    path:'/category',
    component:Category,
    // meta:{
    //   title:"分类"
    // },
  },
  {
    path:'/center',
    component:Center,
    // meta:{
    //   title:"京喜"
    // },
  },
  {
    path:'/car',
    component:Car,
    // meta:{
    //   title:"购物车"
    // },
  },
  {
    path:'/profile',
    component:Profile,
    // meta:{
    //   title:"我的"
    // },
  },

  ]

  const router= new Router({
    routes,
    mode:'history'
  })

  // router.beforeEach((to,from,next)=>{
  //   document.title=to.matched[0].meta.title
  //   next()
  // })
  export default router

