const FechaFetch =  async () => {

    const URL = "https://prod-138.westus.logic.azure.com:443/workflows/d7e9a430c198480fa80dcb75cbaa3ed2/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=A8utDwkG6bcFhZY9OMNPGoRJdC80NV5VIz4A_xALiWg";
    const fechaActual = new Date().toISOString();
    
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
              fechaActual 
            })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Hubo un problema con la petición:', error);
    }
  
}

export default FechaFetch;
