import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  const token = ref(localStorage.getItem('token') || null)
  const user = ref(null)

  const isAuthenticated = computed(() => !!token.value)

  function login(accessToken, userData = null) {
    token.value = accessToken
    user.value = userData
    localStorage.setItem('token', accessToken)
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
  }
  
  function initializeAuth() {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      token.value = storedToken
    }
  }

  return { token, user, isAuthenticated, login, logout, initializeAuth }
})