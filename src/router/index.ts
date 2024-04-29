import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Experience from '@/views/Experience.vue'
import DemoProjects from '@/views/DemoProjects.vue'
import SiteInfo from '@/views/SiteInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing 
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/demo-projects',
      name: 'demo-projects',
      component: DemoProjects
    },
    {
      path: '/site-info',
      name: 'site-info',
      component: SiteInfo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
