const GetDataId = async (numeroCedula: string) => {

  try {
    const url = new URL(
      "https://prod-12.westus.logic.azure.com:443/workflows/4ddf89a44dac41aca3f4960989f4b260/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YJfwpoT4YG7HU0oineZYhvvKas5l78aPgKFwE4QrbfQ"
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

export default GetDataId;
