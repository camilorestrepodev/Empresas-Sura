export const enviarRespuestasAsistencia = async (requestBody: any) => {
    const URL = "https://prod-103.westus.logic.azure.com:443/workflows/b0479d24370b42eb9f387632738ac527/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=09Cl_UJCuQcaqWpiuKt56dLS6s0OMoTK5Yln_MFvd2g";
  
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