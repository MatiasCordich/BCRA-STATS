import { ref } from "vue";

export const useDataMode = () => {
  const data = ref(null);
  const history = ref(null)
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await fetch("https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables");
      
      const {results} = await response.json();
      data.value = results;
      
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchHistory = async (index, initDate, endDate) => {
    loading.value = true;
    try {
      const response = await fetch(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/1/2024-02-01/2024-02-05`);
      
      const {results} = await response.json();
     
      console.log(results);
      
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    history,
    loading,
    error,
    fetchData,
    fetchHistory
  };
};
