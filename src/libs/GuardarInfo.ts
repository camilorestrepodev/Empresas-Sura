const guardarInfo = async (id:any, dataRegister: any, descripciones: any, rutasMenores:any) => {

  const URL =
    "https://prod-41.westus.logic.azure.com:443/workflows/2e73c9a9d06d4d1f90eba3be0fe7375b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1-nvs0fJJbK6_avH4MwRCPadkBAr8_oR135aDq6xa9c";
  try {
    const bodyData = {
        id, 
        descripciones,
        dataRegister,
        rutasMenores
    }

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
