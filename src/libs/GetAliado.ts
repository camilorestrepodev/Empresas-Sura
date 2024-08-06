const GetAliado = async (id: any) => {
  try {
    const url = new URL(
      "https://prod-188.westus.logic.azure.com:443/workflows/b9e4cf07ca7347bf9db0b43ab3423e8b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AaUTJaUU5ZOLpjRLRLqE8FIYcVf-b4q0WsTrvKMj3TY"
    );

    url.searchParams.append("id", id);

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Error al enviar las respuestas");
    }

    const text = await response.json();
    return text;
  } catch (error) {
    console.error("Hubo un problema con la petición:", error);
  }
};

export default GetAliado;
