import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const isAvailableForWork = ref(true)

  // function setAvailability(value) {
  //   isAvailableForWork.value = value
  // }

  // function toggleAvailability() {
  //   isAvailableForWork.value = !isAvailableForWork.value
  // }

  return {
    isAvailableForWork,
    // setAvailability,
    // toggleAvailability
  }
})