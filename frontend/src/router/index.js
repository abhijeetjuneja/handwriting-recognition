import VueRouter from 'vue-router'
import Home from '@/components/Home'
import PreviousResults from '@/components/PreviousResults'

let router = new VueRouter({
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
    }
  ]
})


export default router
