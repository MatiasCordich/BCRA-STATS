<template>
  <main class="stats_section">
      <h2 class="title">Datos del BCRA</h2>
      <p class="text">
        Todos los datos se encontraran actualizados a la fecha de disponibilidad.
      </p>
      <div class="stats_container">
        
      </div>
    </main>
</template>

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

