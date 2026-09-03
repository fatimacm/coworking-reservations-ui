import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Router
import router from './router'

// Auth store
import { useAuthStore } from './stores/authStore'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light', // 'system' | 'light' | 'dark'
  },
})

const pinia = createPinia()
const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(pinia)

// Initialize auth store
const authStore = useAuthStore()
authStore.initializeAuth()

app.mount('#app')