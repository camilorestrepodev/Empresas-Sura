import {Constants} from "../Constants.ts";

const GetAliado = async (id: any) => {
  try {
    const url = new URL(
      Constants.GET_ALIADO_API_URL
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
