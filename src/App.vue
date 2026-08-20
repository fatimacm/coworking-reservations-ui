<template>
  <v-app>
  <v-app-bar flat color="white" class="px-8">
    <!-- Logo -->
    <div class="logo-text">
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
    <v-btn style="background-color: cornflowerblue; border: 5cm;">Reservar ahora</v-btn>
  </v-app-bar>
  
  <v-main style="background-color: #EFF6FF;">
    <router-view />
  </v-main>
  </v-app>
</template>


<style scoped>
.logo-text {
  line-height: 1.1;
  font-weight: 700;
  font-size: 18px;
}
.logo-line1 {
  color: #3b6ef6;
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
  color: #444;
  font-size: 15px;
}
</style>