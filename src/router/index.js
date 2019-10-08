import Vue from 'vue'
import Router from 'vue-router'
import Starships from '@/views/Starships.vue'
import StarShipDetailedItem from '@/components/StarShipDetailedItem';
import Login from '@/views/Login.vue';
import { isAuthorized } from '@/router/guards/isAuthorized';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/starships'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships,
      beforeEnter: isAuthorized,
    },
    {
      path: '/starships/:id',
      name: 'StarShipDetailedItem',
      component: StarShipDetailedItem
    }
  ]
})
