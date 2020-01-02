import VueRouter from 'vue-router'
import Home from '@/components/Home'
import PreviousResults from '@/components/PreviousResults'
import NotFound from '@/components/NotFound'

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/previous-results',
      name: 'PreviousResults',
      component: PreviousResults
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})


export default router
