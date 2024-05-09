import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataMode = defineStore({
  id: 'apiBCRA',
  state: () => ({
    data: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchData() {
      this.loading = true
      try {
        const response = await fetch('https://api.bcra.gob.ar/estadisticas/v1/principalesvariables')
        const data = await response.json()
        this.data = this.data
      } catch (error) {
        this.error = error.message
      } finally{
        this.loading = false
      }
    }
  }
})
