import {defineStore} from 'pinia'
import router from '@/router'

import AuthService from "@/services/AuthService"

import {useUserStore} from "@/stores/users";

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    token: localStorage.getItem('token')
  }),
  actions: {
    async login(username: string, password: string) {
      const userStore = useUserStore()
      try {
        const jwtDTO = await AuthService.login({username, password})

        // update pinia state
        this.token = jwtDTO.data.token
        console.log(jwtDTO)

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', jwtDTO.data.token)

        userStore.isLogged = true
        userStore.user = jwtDTO.data.user

        // redirect to previous url or default to home page
        let redirect_url = /*this.$route.redirectedFrom.fullPath ||*/ '/'
        await router.push(redirect_url)
      } catch (error) {
        console.log(error)
        userStore.isLogged = false
        userStore.user = {}
        localStorage.removeItem('token')
      }
    },
    async logout() {
      this.token = null
      localStorage.removeItem('token')
      await router.push('/login')
    }
  }
})
