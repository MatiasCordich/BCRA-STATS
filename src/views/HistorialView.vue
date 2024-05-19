<template>
    <section class="historial_container">
        Historial
    </section>
</template>

<script setup>

import { useDataMode } from '../stores/useData.js'
import { onMounted } from 'vue'

const { history, loading, error, fetchHistory } = useDataMode()

onMounted(() => {
  fetchHistory()
})

</script>

<style scoped>
.historial_container{
    width: 95%;
    margin: 0 auto;
    margin-top: 13rem;
}
</style>