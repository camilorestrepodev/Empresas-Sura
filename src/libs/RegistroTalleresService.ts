import {Constants} from "../Constants.ts";

export const enviarRespuestasTalleres = async (requestBody: any) => {
  const URL = Constants.REGISTRO_TALLERES_API_URL;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), 
    });

    if (!response.ok) {
      throw new Error("Error al enviar las respuestas");
    }
    
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error);
    throw error;
  }
};