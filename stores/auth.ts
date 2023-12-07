import { defineStore } from "pinia";

export type User = {
    user: null | string
}

export const useAuth = defineStore("auth", {
    state: (): User => ({
        user: null,
    }),
    actions: {
        setUser(){
            this.user = 'some string'
        },
        removeUser(){
            this.user = null
        }
    }

})

export default useAuth