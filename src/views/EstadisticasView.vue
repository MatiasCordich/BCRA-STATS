<template>
  <main class="stats_section">
    <h2 class="title">Datos del BCRA</h2>
    <p class="text">
      Todos los datos se encontraran actualizados a la fecha de disponibilidad.
    </p>
    <div class="stats_container">
      <div v-if="loading">Cargando ...</div>
      <div v-else-if="error">
        Hubo un error
      </div>
      <div v-else>
        <div v-for="item in data" :key="item.id">
          {{ item }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useDataMode } from '@/stores/useData';

export default {
  setup() {
    const apiStore = useDataMode()

    apiStore.fetchData()

    return {
      loading: apiStore.loading,
      error: apiStore.error,
      data: apiStore.data
    }
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
</style>
