const GetTaller = async (numeroCedula: string) => {

    try {
      const url = new URL(
        "https://prod-117.westus.logic.azure.com:443/workflows/f6992336e10744539ebb3029ca8fd27a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NUFYBNeSK6kSFXa4lWOTwvEDr4nUOAeqI5i0Lu727FQ"
      );
  
      url.searchParams.append("cedula", numeroCedula);
  
      const response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar las respuestas");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    }
  };
  
  export default GetTaller;
  