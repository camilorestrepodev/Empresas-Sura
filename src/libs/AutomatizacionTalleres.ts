const enviarCorreosTalleres = async (dataRegister: any) => {
  
    const URL =
      "https://prod-48.westus.logic.azure.com:443/workflows/988102b372fc4c91bacdd96f4c08f8e9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qtGYvFsbs8h7rMkeEhlMM3i4O0YLNHcjPhE_zvXXgmY";
  
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
  