import {defineStore} from 'pinia'
import UserService from "@/services/UserService";

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    users: {},
    user: {},
    isLogged: false
  }),
  actions: {
    async getById(id: Number) {
      this.user = {loading: true};
      try {
        this.user = await UserService.get(id);
      } catch (error) {
        this.user = {error};
      }
    }
  }
})
