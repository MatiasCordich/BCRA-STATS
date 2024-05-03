<template>
  <div class="card">
    <p class="description">{{description}}</p>
    <h2 class="valor">{{valor}}</h2>
    <p class="date">Datos al: <span>{{fecha}}</span></p>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    valor: String,
    fecha: String
  }
}

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #040818;
  width: 95%;
  padding: 1.5rem;
  border-radius: .4rem;
}

.card p {
  line-height: 4rem;
  font-size: 2rem;
  color: var(--white);
}

.card h2 {
  color: var(--mint);
  font-weight: 900;
  font-size: 4rem;
}

.date {
  color: var(--grey);
  font-weight: 900;
}

.date span {
  color: var(--mint);
}
</style>