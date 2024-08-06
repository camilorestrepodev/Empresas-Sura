export const enviarRespuestasTalleres = async (requestBody: any) => {
  const URL = "https://prod-08.westus.logic.azure.com:443/workflows/c30c3b36b76e4643a70c3268e4fa5bbc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CmMRz7_-qfCBOqoty3Xf473qJKpF7vtTDjGAPzTGtOQ";

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