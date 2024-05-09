import { ref } from "vue";

export const useDataMode = () => {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await fetch("https://api.bcra.gob.ar/estadisticas/v1/principalesvariables");
      const {results} = await response.json();
      data.value = results;
      console.log(data)
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};
