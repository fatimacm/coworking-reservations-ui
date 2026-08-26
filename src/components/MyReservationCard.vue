<template>
  <div class="reservations-table">
    <div class="table-header">
      <span>Tipo de espacio</span>
        <span>Fecha</span>
        <span>Horario</span>
        <span>Duración</span>
        <span>Estatus</span>
        <span class="text-center">Acciones</span>
      </div>
      <v-card class="reservation-row mb-3" rounded="lg" border elevation="0">
        <div class="reservation-grid">
          <div class="d-flex align-center ga-4">
            <v-avatar color="#e9f0ff" size="56">
              <v-icon icon="mdi-desk" color="#2563eb" />
            </v-avatar>

            <div>
              <p class="font-weight-bold mb-0">Desk 1</p>
              <p class="text-medium-emphasis text-body-2 mb-0">Coworking</p>
            </div>
          </div>

          <div>21 de julio 2026</div>
          <div>08:00 - 12:00</div>
          <div>4 horas</div>

          <div>
            <v-chip color="success" variant="tonal" size="small" class="font-weight-bold">
              Activa
            </v-chip>
          </div>
                    
          <div class="d-flex justify-center ga-4">
            <v-btn icon="mdi-pencil-outline" color="primary" variant="outlined" size="small" />
            <v-btn icon="mdi-delete-outline" color="error" variant="outlined" size="small" />
          </div>
        </div>
      </v-card>
      <v-card class="reservation-row mb-3" rounded="lg" border elevation="0">
        <div class="reservation-grid">
          <div class="d-flex align-center ga-4">
            <v-avatar color="#f2eafe" size="56">
              <v-icon icon="mdi-account-group-outline" color="#7c3aed" />
            </v-avatar>
            <div>
              <p class="font-weight-bold mb-0">Meeting Room</p>
              <p class="text-medium-emphasis text-body-2 mb-0">Sala de juntas</p>
            </div>
          </div>
          <div>19 de julio 2026</div>
          <div>08:00 - 12:00</div>
          <div>4 horas</div>
          <div>
            <v-chip color="error" variant="tonal" size="small" class="font-weight-bold">
              Vencida
            </v-chip>
          </div>
          <div class="d-flex justify-center ga-4">
            <v-btn icon="mdi-pencil-outline" color="primary" variant="outlined" size="small" />
            <v-btn icon="mdi-delete-outline" color="error" variant="outlined" size="small" />
          </div>
        </div>
      </v-card>
      </div>
</template>

<style scoped>

.table-header,
.reservation-grid {
  display: grid;
  grid-template-columns: minmax(250px, 2fr) 1.15fr 1fr 0.9fr 0.9fr 1fr;
  align-items: center;
  column-gap: 20px;
}

.table-header {
  padding: 0 28px 12px;
  color: #64748b;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
}

.reservation-row {
  border-color: #e2e8f0 !important;
}

.reservation-grid {
  min-height: 76px;
  padding: 10px 14px;
  color: #1e293b;
  font-size: 0.95rem;
}

@media (max-width: 960px) {
  .table-header {
    display: none;
  }

  .reservation-grid {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    padding: 20px;
  }

  .reservation-grid > :first-child {
    grid-column: 1 / -1;
  }

  .reservation-grid > :last-child {
    justify-content: flex-start !important;
  }
}

@media (max-width: 600px) {
    
  .reservation-grid {
    grid-template-columns: 1fr;
  }

  .reservation-grid > :first-child {
    grid-column: auto;
  }
}
</style>