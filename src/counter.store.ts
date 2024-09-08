import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const count = useStorage('count', 0, localStorage)
  function increment() {
    count.value++
  }

  return { count, increment }
})
