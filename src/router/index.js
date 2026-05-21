import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { title: 'Lanches do Gú · Hambúrgueres feitos em casa' } },
    { path: '/quem-somos', name: 'about', component: AboutPage, meta: { title: 'Quem é o Gú · Lanches do Gú' } }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 90 }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
