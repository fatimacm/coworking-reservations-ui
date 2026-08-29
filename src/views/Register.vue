<template>
  <v-container class="auth-page d-flex align-center justify-center px-5 py-10">
    <v-card class="auth-card pa-6 pa-sm-10" rounded="xl" elevation="0">
      <div class="text-center mb-8">
        <div class="auth-icon mb-5">
          <v-icon color="#2563EB" size="30">mdi-account-plus-outline</v-icon>
        </div>
        <h1 class="auth-title mb-2">Crea tu cuenta</h1>
        <p class="auth-subtitle mb-0">Reserva y administra tus espacios de trabajo en un solo lugar.</p>
      </div>

      <v-form>
        <div class="d-flex ga-3 mb-4">
          <div class="flex-grow-1">
            <label class="field-label" for="register-first-name">Nombre</label>
            <v-text-field
              id="register-first-name"
              placeholder="Tu nombre"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-account-outline"
              hide-details
            />
          </div>
          <div class="flex-grow-1">
            <label class="field-label" for="register-last-name">Apellido</label>
            <v-text-field
              id="register-last-name"
              placeholder="Tu apellido"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-account-outline"
              hide-details
            />
          </div>
        </div>

        <label class="field-label" for="register-username">Nombre de usuario</label>
        <v-text-field
          id="register-username"
          placeholder="Elige un nombre de usuario"
          variant="outlined"
          density="comfortable"
          prepend-inner-icon="mdi-at"
          class="mb-4"
          hide-details
        />

        <label class="field-label" for="register-email">Correo electrónico</label>
        <v-text-field
          id="register-email"
          type="email"
          placeholder="tu@correo.com"
          variant="outlined"
          density="comfortable"
          prepend-inner-icon="mdi-email-outline"
          class="mb-4"
          hide-details
        />

        <label class="field-label" for="register-password">Contraseña</label>
        <v-text-field
          id="register-password"
          type="password"
          placeholder="Crea una contraseña"
          variant="outlined"
          density="comfortable"
          prepend-inner-icon="mdi-lock-outline"
          append-inner-icon="mdi-eye-outline"
          class="mb-2"
          hide-details
        />
        <label class="field-label" for="confirm-password">Confirmar contraseña</label>
        <v-text-field
          id="confirm-password"
          type="password"
          placeholder="Confirma tu contraseña"
          variant="outlined"
          density="comfortable"
          prepend-inner-icon="mdi-lock-outline"
          append-inner-icon="mdi-eye-outline"
          class="mb-2"
          hide-details
        />
        <p class="password-hint mb-6">Usa al menos 8 caracteres.</p>

        <v-btn color="#2563EB" size="large" rounded="lg" block>
          Crear cuenta
        </v-btn>
      </v-form>

      <v-divider class="my-7" />

      <p class="text-center auth-footer mb-0">
        ¿Ya tienes una cuenta?
        <router-link to="/login" class="helper-link font-weight-bold">Inicia sesión</router-link>
      </p>
    </v-card>
  </v-container>
</template>

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
.auth-footer,
.password-hint {
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

.password-hint {
  font-size: 0.8rem;
}
</style>