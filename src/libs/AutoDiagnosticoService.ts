const enviarRespuestas = async (respuestas: any) => {

  const URL =
    "https://prod-26.westus.logic.azure.com:443/workflows/9461110b715845e293f8328c11cc9e32/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WH0JZ3HDoA6UUYNrltEhsnXSamiTkdHWxrQX9M3FJnY";
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        respuestasFormulario: [
          {
            nombreVertical: "TH",
            categorias: [
              {
                nombreCategoria: "TH1",
                respuestaSeleccionada: respuestas.pregunta11,
              },
              {
                nombreCategoria: "TH2",
                respuestaSeleccionada: respuestas.pregunta12,
              },
              {
                nombreCategoria: "TH3",
                respuestaSeleccionada: respuestas.pregunta13,
              },
            ],
          },
          {
            nombreVertical: "TTD",
            categorias: [
              {
                nombreCategoria: "TTD1a",
                respuestaSeleccionada: respuestas.pregunta14,
              },
              {
                nombreCategoria: "TTD1b",
                respuestaSeleccionada: respuestas.pregunta15,
              },
              {
                nombreCategoria: "TTD2",
                respuestaSeleccionada: respuestas.pregunta16,
              },
              {
                nombreCategoria: "TTD3",
                respuestaSeleccionada: respuestas.pregunta17,
              },
            ],
          },
          {
            nombreVertical: "M",
            categorias: [
              {
                nombreCategoria: "M1a",
                respuestaSeleccionada: respuestas.pregunta18,
              },
              {
                nombreCategoria: "M1b",
                respuestaSeleccionada: respuestas.pregunta19,
              },
              {
                nombreCategoria: "M2",
                respuestaSeleccionada: respuestas.pregunta20,
              },
              {
                nombreCategoria: "M3",
                respuestaSeleccionada: respuestas.pregunta21,
              },
            ],
          },
          {
            nombreVertical: "F",
            categorias: [
              {
                nombreCategoria: "F1",
                respuestaSeleccionada: respuestas.pregunta22,
              },
              {
                nombreCategoria: "F2",
                respuestaSeleccionada: respuestas.pregunta23,
              },
              {
                nombreCategoria: "F3",
                respuestaSeleccionada: respuestas.pregunta24,
              },
            ],
          },
          {
            nombreVertical: "L",
            categorias: [
              {
                nombreCategoria: "L1",
                respuestaSeleccionada: respuestas.pregunta25,
              },
              {
                nombreCategoria: "L2",
                respuestaSeleccionada: respuestas.pregunta26,
              },
              {
                nombreCategoria: "L3",
                respuestaSeleccionada: respuestas.pregunta27,
              },
            ],
          },
          {
            nombreVertical: "MO",
            categorias: [
              {
                nombreCategoria: "MO1",
                respuestaSeleccionada: respuestas.pregunta28,
              },
              {
                nombreCategoria: "MO2a",
                respuestaSeleccionada: respuestas.pregunta29,
              },
              {
                nombreCategoria: "MO2b",
                respuestaSeleccionada: respuestas.pregunta30,
              },
            ],
          },
          {
            nombreVertical: "A",
            categorias: [
              {
                nombreCategoria: "A1a",
                respuestaSeleccionada: respuestas.pregunta31,
              },
              {
                nombreCategoria: "A1b",
                respuestaSeleccionada: respuestas.pregunta32,
              },
              {
                nombreCategoria: "A1c",
                respuestaSeleccionada: respuestas.pregunta33,
              },
              {
                nombreCategoria: "A2",
                respuestaSeleccionada: respuestas.pregunta34,
              },
            ],
          },
        ],
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

export default enviarRespuestas;
