import { defineStore } from 'pinia'
import type { ApiError, LoginBody, LoginResponse } from '@shared/types'
import { login } from '@shared/api/client'

const TOKEN_KEY = 'vue_token'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem(TOKEN_KEY) || null,
    error: null as string | null
  }),
  actions: {
    async login(body: LoginBody) {
      const res: LoginResponse | ApiError = await login(body)
      if ('error' in res) {
        this.error = res.error
        this.token = null
        return false
      } else {
        this.token = res.token
        this.error = null
        localStorage.setItem(TOKEN_KEY, res.token)
        return true
      }
    },
    logout() {
      this.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  }
})
