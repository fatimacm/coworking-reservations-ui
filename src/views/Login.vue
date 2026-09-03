<template>
  <v-container class="auth-page d-flex align-center justify-center px-5 py-10">
    <v-card class="auth-card pa-6 pa-sm-10" rounded="xl" elevation="0">
      <div class="text-center mb-8">
        <div class="auth-icon mb-5">
          <v-icon color="#2563EB" size="30">mdi-account</v-icon>
        </div>
        <h1 class="auth-title mb-2">Bienvenido de vuelta</h1>
        <p class="auth-subtitle mb-0">Inicia sesión para administrar tus reservas.</p>
      </div>

      <v-alert v-if="errorMessage" type="error" variant="tonal" density="compact" class="mb-4">
        {{ errorMessage }}
      </v-alert>

      <v-form @submit.prevent="handleLogin">
        <label class="field-label" for="login-email">Correo electrónico</label>
        <v-text-field
          id="login-email"
          v-model="form.email"
          type="email"
          placeholder="tu@correo.com"
          variant="outlined"
          density="comfortable"
          prepend-inner-icon="mdi-email-outline"
          class="mb-4"
          hide-details
        />

        <div class="d-flex justify-space-between align-center mb-2">
          <label class="field-label mb-0" for="login-password">Contraseña</label>
          <a class="helper-link" href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <v-text-field
          id="login-password"
          v-model="form.password"
          type="password"
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          density="comfortable"
          prepend-inner-icon="mdi-lock-outline"
          append-inner-icon="mdi-eye-outline"
          class="mb-6"
          hide-details
        />

        <v-btn
          type="submit"
          color="#2563EB"
          size="large"
          rounded="lg"
          block
          :loading="loading"
        >
          Iniciar sesión
        </v-btn>
      </v-form>

      <v-divider class="my-7" />

      <p class="text-center auth-footer mb-0">
        ¿Aún no tienes una cuenta?
        <router-link to="/register" class="helper-link font-weight-bold">Regístrate</router-link>
      </p>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  email: '',
  password: '',
})

const loading = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  errorMessage.value = ''
  loading.value = true

  try {
    // POST /login espera application/x-www-form-urlencoded, no JSON,
    // porque el backend usa OAuth2PasswordRequestForm. El campo se llama
    // "username" aunque aquí se le pida el correo al usuario.
    const params = new URLSearchParams()
    params.append('username', form.email)
    params.append('password', form.password)

    const response = await api.post('/login', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    authStore.login(response.data.access_token)

    // Redirección provisional a Home. No hay lógica de "regresar a donde
    // estaba" todavía (eso depende de las rutas protegidas, que no existen aún).
    router.push('/')
  } catch (error) {
    if (error.response?.status === 401) {
      errorMessage.value = 'Correo o contraseña incorrectos.'
    } else {
      errorMessage.value = 'No se pudo iniciar sesión. Intenta de nuevo.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-page {
  min-height: calc(100vh - 80px);
}

.auth-card {
  width: 100%;
  max-width: 480px;
  border: 1px solid #dbe3ee;
  background: #fff;
}

.auth-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: #eff6ff;
}

.auth-title {
  color: #0d1321;
  font-size: clamp(1.7rem, 4vw, 2rem);
  font-weight: 800;
  line-height: 1.2;
}

.auth-subtitle,
.auth-footer {
  color: #64748b;
  font-size: 0.95rem;
}

.field-label {
  display: block;
  margin-bottom: 8px;
  color: #334155;
  font-size: 0.9rem;
  font-weight: 600;
}

.helper-link {
  color: #2563eb;
  font-size: 0.875rem;
  text-decoration: none;
}

.helper-link:hover {
  text-decoration: underline;
}
</style>