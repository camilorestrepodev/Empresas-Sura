import {Constants} from "../Constants.ts";

const FechaFetch =  async () => {

    const URL = Constants.FECHA_API_URL
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
