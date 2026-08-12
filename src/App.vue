

<script setup>
import { onMounted } from "vue";
import api from "./services/api";

onMounted(async () => {
  try {
    const response = await api.get("/health");

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <h1>Coworking Frontend</h1>
</template>
