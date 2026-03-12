import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved ? saved === 'dark' : true
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, initTheme, toggleTheme }
}
