<template>
    <v-container class="hero-section px-8 my-sm-8" style="max-width: 1200px; ">
        <div class="d-flex align-center justify-space-between">
            <div>
                <h1 class="font-weight-bold">Mis Reservas</h1>
            </div>

            <v-btn prepend-icon="mdi-plus" style="background-color: #2563EB; color: white;">Nueva Reserva</v-btn>
        </div>

        <MyReservationCard></MyReservationCard>
    </v-container>
</template>

<script setup>
import MyReservationCard from '../components/MyReservationCard.vue';

</script>

