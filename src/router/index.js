import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CatalogoView from '@/views/CatalogoView.vue'
import ProductView from '@/views/ProductView.vue'
import AboutView from '@/views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogoView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      props: true
    },
    {
      path: '/inicio',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      alias: '/acerca',
    },
  ],
})


export default router
