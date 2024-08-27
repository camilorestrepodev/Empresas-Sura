import {NombresVerticales} from "../models/NombresVerticales.ts";

const enviarRespuestasCorreos = async (dataRegister: any, response: any) => {
  type RutasPdfType = Record<string, string>;

  const rutasPdf: RutasPdfType = {
    TH:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADTALENTOHUMANO_Link.pdf",
    F:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADFINANCIERA_Link.pdf",
    MO:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADMODELOOPERATIVO_Link.pdf",
    A:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADAMBIENTAL_link.pdf",
    L:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADLEGAL_Link.pdf",
    M:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADMERCADO_Link.pdf",
    TTD:
      "https://comunicaciones.segurossura.com.co/MercadeoEmpresas/Recursos/EmpresaSURA/RUTADECOMPETITIVIDADTECNOLOGIAYTRANSFORMACIONDIGITAL_link.pdf",
  };

  const nombresVerticales = NombresVerticales;

  const { respuestasFormulario } = response;

  const nuevosResultadosPorVertical: Record<string, string> =
    respuestasFormulario.reduce(
      (acc: Record<string, string>, vertical: any) => {
        const valorSinDecimales = Math.floor(
          parseFloat(vertical.ResultadoPorVertical)
        );
        acc[vertical.nombreVertical] = valorSinDecimales.toString();
        return acc;
      },
      {} as Record<string, string>
    );

    const menoresPorcentajesVerticales = respuestasFormulario.filter(
      (vertical: any) => parseFloat(vertical.ResultadoPorVertical) < 100
    );

  const menoresPorcentajesVerticalesOrdenados = [...menoresPorcentajesVerticales]
  .sort((a, b) => a.porcentaje - b.porcentaje)
  .slice(0, 2); 

const rutasMenoresPdf: Record<string, string> = menoresPorcentajesVerticalesOrdenados.reduce(
  (acc: Record<string, string>, vertical: any, index: number) => {
    const nombreVertical = nombresVerticales[vertical.nombreVertical];
    acc[`nombre${index + 1}`] = nombreVertical;
    acc[`ruta${index + 1}`] = rutasPdf[vertical.nombreVertical];
    return acc;
  },
  {} as Record<string, string>
);

  const infoCombinada = {
    resultadosPorVertical: nuevosResultadosPorVertical,
    rutasMenoresPdf,
  };

  const URL =
    "https://prod-151.westus.logic.azure.com:443/workflows/a5842fe7453e423cadddd194db7c8284/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=RH9RWhh4CwMpboJ-G1KWngDOdAESmoB2H518Br3SSEM";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataRegister,
        response: infoCombinada,
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

export default enviarRespuestasCorreos;
