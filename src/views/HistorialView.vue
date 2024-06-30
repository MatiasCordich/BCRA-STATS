<template>
    <section class="historial_container">
        <h2 class="historial_title">Historial</h2>
        <Select/>
    </section>
</template>

<script setup>

import Select from '../components/Select.vue'

</script>

<style scoped>

.historial_container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 13rem;
}

.historial_title{
    color: var(--grey);
    font-size: calc(4rem + 2.5vw);
}
</style>