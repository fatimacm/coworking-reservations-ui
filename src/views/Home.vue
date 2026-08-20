<template>
    <v-container class="hero-section py-16 px-8" style="max-width: 1200px; ">
      <v-row align="center">
        <!-- Columna izquierda: texto -->
        <v-col cols="12" md="6">
          <v-chip  draggable color="primary" variant="tonal" class="mb-6">
            <v-icon start size="8" color="success">mdi-circle</v-icon>
            Disponibilidad en tiempo real
          </v-chip>

          <h1 class="hero-title mb-4">
            Reserva tu espacio de trabajo
            <span class="text-primary">sin fricción</span>
          </h1>

          <p class="hero-subtitle mb-8">
            Salas de juntas, escritorios y salas didácticas listos por hora.
            Elige fecha, confirma horario y llega a trabajar — todo desde una
            sola plataforma.
          </p>

          <div class="d-flex ga-4 mb-10">
            <v-btn color="primary" size="large" rounded="lg">
              Ver espacios disponibles
            </v-btn>
            <v-btn variant="outlined" size="large" rounded="lg">
              Cómo funciona
            </v-btn>
          </div>

          <div class="d-flex ga-10">
            <div>
              <div class="stat-number">12+</div>
              <div class="stat-label">Salas y espacios</div>
            </div>
            <div>
              <div class="stat-number">$80</div>
              <div class="stat-label">MXN / hora desde</div>
            </div>
          </div>
        </v-col>

        <!-- Columna derecha: card de espacio -->
        <v-col cols="12" md="6">
          <v-card rounded="lg" elevation="4" class="space-card">
            <div class="space-image">
              <v-img
                src="https://assets.instantoffices.com/image/upload/v1772023419/TIG/Locations/781287d9-c23f-4b4f-8603-30a1089c6abf/ccfdb666-54c6-4e70-b924-c8e3f8848dcb.jpg"
                cover
                height="220"
                class="image-fill"
              />
              <v-chip variant="elevated" class="chip-overlay" size="small">
                Disponible hoy
              </v-chip>
            </div>

            <v-card-text class="pa-6">
              <h3 class="mb-1">Sala 1</h3>
              <p class="text-grey mb-4">Capacidad: 12 personas</p>

              <div class="d-flex ga-4 mb-4 amenities">
                <span><v-icon size="18">mdi-wifi</v-icon> WiFi</span>
                <span><v-icon size="18">mdi-coffee</v-icon> Coffee</span>
                <span><v-icon size="18">mdi-monitor</v-icon> Pantallas</span>
                <span><v-icon size="18">mdi-snowflake</v-icon> A/C</span>
              </div>

              <v-divider class="mb-4" />

              <div class="d-flex justify-space-between align-center">
                <div>
                  <span class="price">$80 MXN</span>
                  <span class="text-grey"> / hora</span>
                </div>
                <v-btn color="primary" rounded="lg">Reservar</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
</script>

<style scoped>
.hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.15;
  color: #0d1321;
}
.hero-subtitle {
  font-size: 17px;
  color: #5b6472;
  max-width: 480px;
}
.stat-number {
  font-size: 22px;
  font-weight: 800;
}
.stat-label {
  font-size: 13px;
  color: #7a8290;
}
.space-image {
  position: relative;
  height: 220px;
}
.image-fill {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.chip-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
}
.amenities span {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #4a5060;
}
.price {
  font-size: 20px;
  font-weight: 800;
  color: #3b6ef6;
}
</style>