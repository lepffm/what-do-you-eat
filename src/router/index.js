import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'what-do-you-eat',
      component: () => import('../views/WhatDoYouEat.vue')
    }
  ]
})

export default router
