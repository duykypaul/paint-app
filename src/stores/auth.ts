import {defineStore} from 'pinia'
import { useRouter, useRoute} from 'vue-router'
// import router from '@/router/index.router'

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
      // const route = useRoute();
      // const router = useRouter();
      // const userStore = useUserStore()
      // // @ts-ignore
      // console.log(this.store.route)
      // @ts-ignore
      console.log(this.store.router)
      // @ts-ignore
      console.log(this.$router.router)
      // try {
      //   // const jwtDTO = await AuthService.login({username, password})
      //
      //   // update pinia state
      //   this.token = "jwtDTO.data.token"
      //
      //   // store user details and jwt in local storage to keep user logged in between page refreshes
      //   localStorage.setItem('token', "jwtDTO.data.token")
      //
      //   userStore.isLogged = true
      //   userStore.user = {}
      //
      //   // redirect to previous url or default to home page
      //   let redirect_url = route.redirectedFrom?.fullPath || '/'
      //   await router.push(redirect_url)
      // } catch (error) {
      //   console.log(error)
      //   userStore.isLogged = false
      //   userStore.user = {}
      //   localStorage.removeItem('token')
      // }
    },
    async logout() {
      // this.token = null
      // localStorage.removeItem('token')
      // await router.push('/login')
    }
  }
})
