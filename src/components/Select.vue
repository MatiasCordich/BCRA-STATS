<template>
    <div class="input_box">
        <h3>Eliga una opcion</h3>
        <select class="custom-select" v-model="selectedOption">
            <option v-for="item in data" :key="item.idVariable" :value="item.idVariable" class="custom-option">
                {{ item.descripcion }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { useDataMode } from '@/stores/useData';
import { onMounted, ref } from 'vue';

const selectedOption = ref(null)
const { data, fetchData } = useDataMode()

// Llama a fetchData cuando sea necesario
onMounted(() => {
    fetchData();
});
</script>

<style scoped>

.input_box{
    background-color: #040818;
    color: var(--mint);
    max-width: 30rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.custom-select {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: var(--primary);
    font-size: 1.8rem;
    padding: 1rem;
}
</style>
