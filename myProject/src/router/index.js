import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/Body/home')
const about = () => import('../components/Body/about')
const add=()=>import('../components/Body/add')
const userDetails = () =>import ('../components/Body/userDetails')
const editUser=()=>import('../components/Body/edit')

Vue.use(Router)
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/about',
    component:about
  },
  {
    path:'/add',
    component:add
  },
  {
    path:'/home/:id',
    component:userDetails
  },
  {
    path:'/home/:id/editUser',
    component:editUser
  }
]
export default new Router({
  routes,
  mode:'history'
})
