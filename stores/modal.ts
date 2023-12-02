import { defineStore } from "pinia";
import {markRaw} from 'vue'


export type Modal = {
    isOpen: boolean,
    view: object,
    actions?: ModalAction[]
}

export enum Type {
    Primary = 'primary',
    Outlined = 'outlined'
}
export type ModalAction = {
    label: string,
    type: Type
    callback: (props?: any) => void
}

export const useModal = defineStore("modal", {
    state: (): Modal => ({
        isOpen: false,
        view: {},
        actions: []
    }),
    actions: {
        open(view: object, actions?: ModalAction[] ){
            this.isOpen = true
            this.view = markRaw(view)
            this.actions = actions
        },
        close(){
            this.isOpen = false
            this.view = {}
            this.actions = []
        }
    }
})

export default useModal