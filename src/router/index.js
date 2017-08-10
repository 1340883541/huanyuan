import Vue from 'vue'
import Router from 'vue-router'
const Index = r =>require.ensure([],()=> r(require('@/components/Index.vue')),'Index')
const Auction = r =>require.ensure([],()=> r(require('@/components/Auction.vue')),'Auction')
const Issue = r =>require.ensure([],()=> r(require('@/components/Issue.vue')),'Issue')
const Mein = r =>require.ensure([],()=> r(require('@/components/Mein.vue')),'Mein')
const Register = r =>require.ensure([],()=> r(require('@/components/Register.vue')),'Register')
const Login = r =>require.ensure([],()=> r(require('@/components/Login.vue')),'Login')
const Details = r =>require.ensure([],()=> r(require('@/pages/Details.vue')),'Details')
const Time = r =>require.ensure([],()=> r(require('@/pages/Time.vue')),'Time')
const Goodes = r =>require.ensure([],()=> r(require('@/pages/Goodes.vue')),'Goodes')
const Restore = r =>require.ensure([],()=> r(require('@/pages/Restore.vue')),'Restore')
const New = r =>require.ensure([],()=> r(require('@/pages/New.vue')),'New')
const Indent = r =>require.ensure([],()=> r(require('@/pages/Indent.vue')),'Indent')
// const Indent = r =>require.ensure([],()=> r(require('@/pages/Indent.vue')),'Indent')
const Recommend = r =>require.ensure([],()=> r(require('@/pages/Recommend.vue')),'Recommend')
const End = r =>require.ensure([],()=> r(require('@/pages/End.vue')),'End')









Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Mein',
      name: 'Mein',
      component: Mein
    },
    {
      path: '/Auction',
      name: 'Auction',
      component: Auction
    },
    {
      path: '/Issue',
      name: 'Issue',
      component: Issue
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/Time',
      name: 'time',
      component: Time
    },
    {
      path: '/Goodes',
      name: 'Goodes',
      component: Goodes
    },
    {
      path: '/Restore',
      name: 'Restore',
      component: Restore
    },
    {
      path: '/New',
      name: 'New',
      component: New
    },
    {
      path: '/Indent',
      name: 'Indent',
      component: Indent
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/End',
      name: 'End',
      component: End
    },
    {
    	path:'/',
    	redirect:"/Index"
    }
    
  ]
})
