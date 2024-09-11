import {Constants} from "../Constants.ts";

const guardarInfo = async (id:any, dataRegister: any, descripciones: any, rutasMenores:any) => {

  const URL = Constants.GUARDAR_INFO_API_URL;
  try {
    const bodyData = {
        id, 
        descripciones,
        dataRegister,
        rutasMenores
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({bodyData}),
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

export default guardarInfo;
