<template>
    <v-container class="hero-section px-8 my-sm-8" style="max-width: 1200px; ">
        <div class="d-flex align-center justify-space-between">
            <div>
                <h1 class="font-weight-bold">Coworking Room</h1>
                <p class="text-medium-emphasis mb-0">
                {{ spaces.length }} espacios disponibles en tu ciudad
                </p>
            </div>

            <v-btn
            variant="outlined" 
            size="large" 
            rounded="lg"
            @click="showFilters = !showFilters">
            Filtros
            <v-icon icon="mdi-filter-variant" class="ml-2" />
            </v-btn>

        </div>

        <v-fade-transition hide-on-leave>
            <v-card
                v-if="showFilters"
                class="filters-panel my-8 pa-5"
                rounded="xl"
                elevation="0"
            >
                <v-row align="end" class="flex-md-nowrap">
                <v-col cols="12" sm="6" md>
                    <label class="filter-label" for="space-type">
                        Tipo de espacio
                    </label>
                    <v-select 
                        id="space-type"
                        v-model="selectedFilters.spaceType"
                        :items="spaceTypes"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                        />
                </v-col>

                <v-col cols="12" sm="6" md>
                    <label class="filter-label" for="capacity">Capacidad</label>
                    <v-select
                        id="capacity"
                        v-model="selectedFilters.capacity"
                        :items="capacities"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                    />
                </v-col>

                <v-col cols="12" sm="6" md>
                    <label class="filter-label" for="price">Precio por hora</label>
                    <v-select
                    id="price"
                    v-model="selectedFilters.price"
                    :items="priceRanges"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    />
                </v-col>

                <v-col cols="12" sm="6" md>
                    <label class="filter-label" for="amenity">Amenidades</label>
                    <v-select
                    id="amenity"
                    v-model="selectedFilters.amenity"
                    :items="amenities"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    />
                </v-col>

                <v-col cols="12" md="auto" class="d-flex align-end">
                    <v-btn
                    color="#2563EB"
                    size="large"
                    rounded="lg"
                    block
                    @click="applyFilters"
                    >
                    Aplicar
                    </v-btn>
                </v-col>

            </v-row>
            </v-card>
        </v-fade-transition>

        <div class="d-flex align-center justify-space-between mb-8">
            <p class="text-medium-emphasis mb-0">
                Mostrando {{ spaces.length }} de {{ spaces.length }} espacios
            </p>
            
            <v-select
                id="sort_by"
                v-model="sortBy"
                :items="sortOptions"
                variant="outlined"
                density="compact"
                hide-details
                class="small-select"
                />
        </div>
    
        <v-progress-linear
            v-if="isLoading"
            indeterminate
            color="primary"
            class="mb-6"
        />

        <v-alert
            v-else-if="errorMessage"
            type="error"
            variant="tonal"
            class="mb-6"
        >
            {{ errorMessage }}
        </v-alert>

        <div v-else class="d-flex flex-column ga-6">
            <RoomCard
                v-for="space in spaces"
                :key="space.id"
                :room="space"
            />
        </div>
        
    </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import RoomCard from '../components/RoomCard.vue'
import api from '../services/api'

const emit = defineEmits(['apply-filters'])

const showFilters = ref(false)
const spaces = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

const selectedFilters = ref({
  spaceType: 'Todos',
  capacity: 'Cualquiera',
  price: 'Cualquiera',
  amenity: 'Todas',
})

const spaceTypes = ['Todos', 'Sala privada', 'Escritorio compartido', 'Sala de juntas']
const capacities = ['Cualquiera', '1 persona', '2 a 4 personas', '5 a 10 personas', 'Más de 10 personas']
const priceRanges = ['Cualquiera', 'Menos de $100', '$100 a $250', '$250 a $500', 'Más de $500']
const amenities = ['Todas', 'Wi-Fi', 'Proyector', 'Aire acondicionado', 'Café']

const sortBy = ref('recommended')

const sortOptions = [
    {title: 'Ordenar: Recomendados', value: 'recommended'},
    {title: 'Precio: Menor a Mayor', value: 'price-asc'},
    {title: 'Precio Mayor a Menor', value: 'price-desc'},
    {title: 'Capacidad', value: 'capacity'},    
]

function applyFilters() {
  emit('apply-filters', { ...selectedFilters.value })
}

async function fetchSpaces() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { data } = await api.get('/spaces')
    spaces.value = data
  } catch (error) {
    console.error('Unable to load spaces:', error)
    errorMessage.value = 'No pudimos cargar los espacios. Intenta de nuevo más tarde.'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchSpaces)
</script>

<style scoped>

.filters-panel {
  background-color: #fff;
  border: 1px solid #dbe3ee;
}

.filter-label {
  display: block;
  margin-bottom: 8px;
  color: #334155;
  font-size: 0.9rem;
  font-weight: 600;
}

.small-select :deep(.v-field__input),
.small-select :deep(.v-select__selection-text) {
  font-size: 0.8rem;
}

.small-select :deep(.v-field) {
  min-height: 10px;
}

.small-select{
    max-width: 200px;
}

</style>
