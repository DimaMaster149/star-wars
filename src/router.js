import Vue from 'vue'
import Router from 'vue-router'
import Starships from '@/views/Starships.vue'
import StarShipDetailedItem from '@/components/StarShipDetailedItem';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/starships'
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships,
    },
    {
      path: '/starships/:id',
      name: 'StarShipDetailedItem',
      component: StarShipDetailedItem
    }
  ]
})
