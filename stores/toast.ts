import { defineStore } from "pinia";

export type Toast = {
  isOpen: boolean;
  message: string;
  action?: ToastAction;
};

export type ToastAction = {
  label: string;
  callback: (props: any) => void;
};

export const useToast = defineStore("toast", {
  state: (): Toast => ({
    isOpen: false,
    message: "",
    action: undefined,
  }),
  actions: {
    open(message: string, action?: ToastAction) {
      this.isOpen = true;
      this.message = message;
      this.action = action;
    },
    close() {
      this.isOpen = false;
      this.message = "";
      this.action = undefined;
    },
  },
});

export default useToast;
