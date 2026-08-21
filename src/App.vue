<template>
  <v-app>
  <v-app-bar flat color="white" class="px-2 px-sm-8 pa-4">
    <!-- Logo -->
    <div class="logo-text ml-0 ml-sm-12">
      <div class="logo-line1">Coworking</div>
      <div class="logo-line2">Reservations</div>
    </div>

    <v-spacer />

    <!-- Links centrales -->
    <div class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/" class="nav-link">espacios</router-link>
      <router-link to="/" class="nav-link">contacto</router-link>
    </div>

    <v-spacer />

    <!-- Acciones derecha -->
    <router-link to="/" class="nav-link mr-6">Iniciar sesión</router-link>
    <v-btn style="background-color: #2563EB; border: 5cm; color: white;">Reservar ahora</v-btn>
  </v-app-bar>
  
  <v-main style="background-color: #EFF6FF;">
    <router-view />
  </v-main>
  </v-app>
</template>


<style scoped>
.logo-text {
  line-height: 1.1;
  font-weight: 800;
  font-size: 18px;
}
.logo-line1 {
  color: #2563EB;
}
.logo-line2 {
  color: #111;
}
.nav-links {
  display: flex;
  gap: 32px;
}
.nav-link {
  text-decoration: none;
  color: #545353;
  font-size: 16px;
  font-weight: 700;
}
</style>