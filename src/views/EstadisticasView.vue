<template>
  <main class="stats_section">
    <h2 class="title">Datos del BCRA</h2>
    <p class="text">
      Todos los datos se encontraran actualizados a la fecha de disponibilidad.
    </p>
    <div class="stats_container">
      <div v-if="loading">Cargando...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else class="cards_container">
        <div class="item"  v-for="item in data" :key="item.idVariable">
          <Card class="card" :description="item.descripcion" :valor="item.valor" :fecha="item.fecha"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue';

import { useDataMode } from '@/stores/useData';
import { onMounted } from 'vue';

const { data, loading, error, fetchData } = useDataMode()

// Llama a fetchData cuando sea necesario
onMounted(() => {
  fetchData();
});
</script>

<script>
export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.stats_section {
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.title {
  color: var(--grey);
  font-size: calc(4rem + 2.5vw);
  text-align: center;
  width: 95%;
}

.text {
  color: var(--white);
  font-size: 2rem;
  text-align: center;
  line-height: 4rem;
}

.stats_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 120rem;
  width: 100%;
}

.cards_container,
.item{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

@media (min-width: 640px) {
    .cards_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
   
    }

    .item{
      height: 100%;
      justify-items: stretch;
    }

    .card{
      height: 100%;
    }
}
</style>
