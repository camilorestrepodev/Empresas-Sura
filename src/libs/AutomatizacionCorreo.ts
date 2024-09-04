import {NombresVerticales} from "../models/NombresVerticales.ts";
import {Constants} from "../Constants.ts";

const enviarRespuestasCorreos = async (dataRegister: any, response: any) => {
  type RutasPdfType = Record<string, string>;

  const rutasPdf: RutasPdfType = {
    TH: Constants.RUTAS_PDF.TH,
    F: Constants.RUTAS_PDF.F,
    MO: Constants.RUTAS_PDF.MO,
    A: Constants.RUTAS_PDF.A,
    L: Constants.RUTAS_PDF.L,
    M: Constants.RUTAS_PDF.M,
    TTD: Constants.RUTAS_PDF.TTD,
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

  const URL = Constants.AUTOMATIZACION_CORREO_API_URL;

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
