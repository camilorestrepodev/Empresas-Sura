import {Constants} from "../Constants.ts";

const GetDataId = async (numeroCedula: string) => {

  try {
    const url = new URL(
      Constants.GET_DATA_ID_API_URL
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
