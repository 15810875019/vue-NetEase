import Vue from 'vue'
import Router from 'vue-router'

import Shouye from '../pages/Shouye/Shouye.vue'
import Fenlei from '../pages/Fenlei/Fenlei.vue'
import Geren from '../pages/Geren/Geren.vue'
import Gouwuche from '../pages/Gouwuche/Gouwuche.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Search from '../pages/Search/Search.vue'
import Fenleilist from '../pages/Fenlei/Fenleilist.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Shouye,
      meta:{
        showFooter:true
      }
     
    },
    {
      path: '/shouye',
      component: Shouye,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      
    },
     
    {
      path: '/fenlei',
      component: Fenlei,
      meta:{
        showFooter:true
      },
      children:[{
        name: 'fenleilist',
        path: '/fenlei/fenleilist',
        component: Fenleilist,
        meta:{
          showFooter:true
        }
      },
      {
        path:"/fenlei",
        redirect: '/fenlei/fenleilist',
      }
      ]
    },
    {
      path: '/geren',
      component: Geren,
      meta:{
        showFooter:false
      },
    },
    {
      path: '/gouwuche',
      component: Gouwuche,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        showFooter:true
      }
    },
  ]
})
