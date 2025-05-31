import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import ListPage from '../pages/ListPage.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/login', component: LoginPage },
  {
    path: '/list',
    component: ListPage,
    beforeEnter: () => {
      const auth = useAuthStore()
      if (!auth.token) return '/login'
      return true
    }
  },
  { path: '/', redirect: '/login' }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
