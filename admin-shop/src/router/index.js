import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/middleware/auth';

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import Home from '@/views/home/index.vue'
import Login from '@/views/auth/login/index.vue'
import Signup from '@/views/auth/signup/index.vue'

const routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        beforeEnter: auth,
      },

    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
