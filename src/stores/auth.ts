import {defineStore} from 'pinia'
import router from '@/router'

import AuthService from "@/services/AuthService"

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    token: localStorage.getItem('token')
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const jwtDTO = await AuthService.login({username, password})

        // update pinia state
        this.token = jwtDTO.data.token
        console.log(jwtDTO)

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', jwtDTO.data.token)

        // redirect to previous url or default to home page
        await router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async logout() {
      this.token = null
      localStorage.removeItem('token')
      await router.push('/login')
    }
  }
})
