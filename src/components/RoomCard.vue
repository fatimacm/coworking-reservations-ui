<template>
  <v-card class="room-card" rounded="xl" border elevation="0">
    <div class="room-card__layout">
      <div class="room-card__gallery">
        <v-window v-model="activeImage" class="h-100" show-arrows="hover">
          <v-window-item
            v-for="(image, index) in room.images"
            :key="index"
            :value="index"
          >
            <v-img
              :src="image"
              :alt="`Imagen de ${room.name}`"
              cover
              height="288"
            />
          </v-window-item>
        </v-window>

        <div class="gallery-dots">
          <button
            v-for="(_, index) in room.images"
            :key="index"
            class="gallery-dot"
            :class="{ 'gallery-dot--active': activeImage === index }"
            :aria-label="`Ver imagen ${index + 1}`"
            @click="activeImage = index"
          />
        </div>
      </div>

      <div class="room-card__details">
        <v-chip
          color="primary"
          variant="tonal"
          size="small"
          class="mb-4 font-weight-bold"
        >
          {{ room.type }}
        </v-chip>

        <h2 class="text-h5 font-weight-bold mb-2">
          {{ room.name }}
        </h2>

        <p class="text-body-1 mb-6">
          Capacidad: {{ room.capacity }} personas
        </p>

        <div class="d-flex flex-wrap ga-6">
          <div
            v-for="amenity in room.amenities"
            :key="amenity.label"
            class="d-flex align-center ga-2"
          >
            <v-icon :icon="amenity.icon" color="primary" size="20" />
            <span>{{ amenity.label }}</span>
          </div>
        </div>
      </div>

      <div class="room-card__price">
        <div>
          <span class="price">{{ room.price }} MXN</span>
          <span class="price-unit"> / hora</span>
        </div>

        <p class="text-body-2 mt-2 mb-6">
          Mínimo {{ room.minimumHours }} hora
        </p>

        <v-btn
          color="primary"
          size="large"
          rounded="lg"
          @click="$emit('reserve', room)"
        >
          Reservar
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['reserve'])

const activeImage = ref(0)

const room = {
  name: 'Sala 1',
  type: 'SALA DE JUNTAS',
  capacity: 12,
  price: '$80',
  minimumHours: 1,
  images: [
    'https://placehold.co/800x600/7b4a2d/7b4a2d',
    'https://placehold.co/800x600/8d5a3b/8d5a3b',
    'https://placehold.co/800x600/694026/694026',
    'https://placehold.co/800x600/9d6847/9d6847',
    'https://placehold.co/800x600/5f3822/5f3822',
  ],
  amenities: [
    { label: 'WiFi', icon: 'mdi-wifi' },
    { label: 'Coffe', icon: 'mdi-coffee-outline' },
    { label: 'Pantallas', icon: 'mdi-monitor' },
    { label: 'Aire acondicionado', icon: 'mdi-weather-sunny' },
  ],
}
</script>

<style scoped>
.room-card {
  overflow: hidden;
  border-color: #dbe3ee !important;
}

.room-card__layout {
  display: flex;
  min-height: 288px;
}

.room-card__gallery {
  position: relative;
  width: 23%;
  min-width: 280px;
  overflow: hidden;
  background: #7b4a2d;
}

.gallery-dots {
  position: absolute;
  right: 0;
  bottom: 16px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.gallery-dot {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.gallery-dot--active {
  background: #2563eb;
}

.room-card__details {
  flex: 1;
  padding: 30px 32px;
}

.room-card__price {
  display: flex;
  width: 250px;
  padding: 30px;
  border-left: 1px solid #dbe3ee;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.price {
  color: #0f2747;
  font-size: 1.45rem;
  font-weight: 800;
}

.price-unit {
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 960px) {
  .room-card__layout {
    flex-direction: column;
  }

  .room-card__gallery {
    width: 100%;
    min-width: 0;
  }

  .room-card__price {
    width: auto;
    border-top: 1px solid #dbe3ee;
    border-left: 0;
    align-items: flex-start;
    text-align: left;
  }
}
</style>