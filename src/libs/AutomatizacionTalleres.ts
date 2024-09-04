import {Constants} from "../Constants.ts";

const enviarCorreosTalleres = async (dataRegister: any) => {
  
    const URL = Constants.AUTOMATIZACION_TALLERES_API_URL;
  
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataRegister
        }),
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar las respuestas");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Hubo un problema con la solicitud:", error);
      throw error;
    }
  };
  
  export default enviarCorreosTalleres;
  