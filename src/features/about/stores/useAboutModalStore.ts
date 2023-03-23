import { defineStore } from 'pinia'

export const useAboutModalStore = defineStore('counter', {
  state: () => {
    return { isShow: false }
  },
  actions: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
  },
})
