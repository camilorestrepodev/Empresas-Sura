import "../../../styles/Autodiagnostico.css";
import { Vertical } from "./Resultados.type";
import Ruta from "./rutas-autodiagnositco/Ruta";
import { informacionRutas } from "./InformacionRutas.data";
import "../../../styles/Spinner.css";
import { useNavigate } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {NombresVerticales} from "../../../models/NombresVerticales.ts";
import {Constants} from "../../../Constants.ts";
import {useLocation} from "react-router-dom";
import {Rutas} from "../../../helpers/Rutas.ts";
import {sendToGTM} from "../../../helpers/sendToGTM.ts";
import {GTMEvents} from "../../../helpers/GTMEvents.ts";

export default function Resultados({
  response,
  enviarRequestCorreos,
  enviarRutasMenores,
  enviarGuardarInfo,
}: any) {
  const loading = Constants.LOADING_GIF;

  const [rutasEnviadas, setRutasEnviadas] = useState(false);
  const [informacionGuardada, setInformacionGuardada] = useState(false);
  const navigate = useNavigate();
  const getColorClass = (
    resultado: string
  ): { bgColor: string; textColor: string; minClass: string } => {
    const numResultado = parseInt(resultado.replace("%", ""));

    let bgColor = "";
    let textColor = "";
    let minClass = "";

    if (!isNaN(numResultado)) {
      const roundedNum = Math.floor(numResultado);

      if (roundedNum >= 0 && roundedNum <= 31) {
        bgColor = "rojo";
        textColor = "texto-blanco";
      } else if (roundedNum > 31 && roundedNum <= 71) {
        bgColor = "naranja-amarillo";
        textColor = "texto-blanco";
      } else if (roundedNum > 71 && roundedNum <= 100) {
        bgColor = "verde";
        textColor = "texto-negro";
      }

      if (roundedNum === 0) {
        minClass = "barra-minima";
      }
    }

    return { bgColor, textColor, minClass };
  };

  const sectionResultados = useRef<HTMLDivElement>(null);

  const nombresVerticales = NombresVerticales;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hasSentEmail = useRef(false);

  const procesarRutas = (respuestasFormulario: any) => {
    const rutas = respuestasFormulario
      .map((vertical: any) => {
        const nombreVertical = nombresVerticales[vertical.nombreVertical];
        return nombreVertical
          ? {
              nombreVertical,
              resultado: vertical.ResultadoPorVertical,
            }
          : null;
      })
      .filter((ruta: any) => ruta !== null);
  
    rutas.sort((a: any, b: any) => a.resultado - b.resultado);
  
    const rutasMenores = rutas.slice(0, 2).map((ruta: any) => ruta.nombreVertical);
  
    return rutasMenores;
  };

  const handleEnviarGuardarInfo = useCallback(
    (rutas: any[]) => {
      if (!informacionGuardada) {
        setInformacionGuardada(true);
        enviarGuardarInfo(rutas);
      }
    },
    [enviarGuardarInfo, informacionGuardada]
  );

  const handleEnviarRutasMenores = useCallback(
    (rutas: any[]) => {
      enviarRutasMenores(rutas);
      handleEnviarGuardarInfo(rutas);
    },
    [enviarRutasMenores, handleEnviarGuardarInfo]
  );

  const location = useLocation();

  useEffect(() => {
    if (location.state?.from === Rutas.AMBIENTAL) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.AMBIENTAL_SIGUIENTE
      });
    }
  }, [location]);

  useEffect(() => {
    if (response && response.respuestasFormulario && !rutasEnviadas) {
      const rutasProcesadas = procesarRutas(response.respuestasFormulario);
      console.log(rutasProcesadas)
      handleEnviarRutasMenores(rutasProcesadas);
      setRutasEnviadas(true); 
    }
  }, [response, rutasEnviadas, handleEnviarRutasMenores]);

  useEffect(() => {
    if (response && response.respuestasFormulario && !hasSentEmail.current) {
      enviarRequestCorreos();
      hasSentEmail.current = true;
    }
  }, [response, enviarRequestCorreos]);

  if (!response || !response.respuestasFormulario) {
    return (
      <div className="flex justify-center px-[120px] py-[70px]">
        <div className="spinner">
          <div className="spinner-ring"></div>
          <img src={loading} alt="Imagen de condor" />
        </div>
      </div>
    );
  }

  const sortedResults: Vertical[] = response.respuestasFormulario.sort(
    (a: Vertical, b: Vertical) => {
      const resultA = Math.floor(parseFloat(a.ResultadoPorVertical));
      const resultB = Math.floor(parseFloat(b.ResultadoPorVertical));
      return resultA - resultB;
    }
  );

  const menoresPorcentajesVerticales = sortedResults.slice(0, 2);

  const rutasMenoresPorcentajes = menoresPorcentajesVerticales.map(
    (vertical) => {
      const nombreVertical = nombresVerticales[vertical.nombreVertical];
      return informacionRutas.find((ruta) => ruta.nombre === nombreVertical);
    }
  );

  const onClick = () => {
    navigate(Rutas.DATOS_REGISTRO_TALLERES, { state: { from: Rutas.RESULTADOS } });
  };

  return (
    <>
      <section ref={sectionResultados}>
        <div className="main mt-5">
          <div className="bg-[#DFEAFF] py-[40px] px-[20px] w-[100%] h-[auto] md:w-[100%] md:px-[60px] lg:h-auto lg:px-[130px] lg:py-[70px]">
            <h2 className="text-[#2D6DF6] text-[32px] font-[700] text-center sm:text-left">
              Informe de diagnóstico de competitividad
            </h2>
            <p className="mt-5 text-center text-[18px] md:text-left lg:text-left lg:text-[20px] 2xl:text-[24px]">
              Los datos que encontrarás a continuación reflejan el estado de
              cada una de las áreas de tu empresa. Te invitamos a identificar
              las oportunidades que podrán impulsar la competitividad de tu
              negocio.
            </p>
            <div className="mt-20 flex justify-center">
              <table className="mt-10 h-[800px] md:w-[700px] lg:w-[auto] bg-[white] lg:px-[40px] lg:py-[50px] xl:px-[50px]">
                <thead>
                  <tr>
                    <th className="text-[#0033A0] text-center font-[700] px-[20px] py-[20px] text-[18px] sm:text-[28px] md:text-[20px] lg:text-[20px]">
                      Área
                    </th>
                    <th className="text-[#0033A0] text-center font-[700] px-[20px] py-[20px] text-[18px] sm:text-[28px] md:text-[20px] lg:text-[20px] lg:w-[400px]">
                      Porcentaje de autodiagnóstico
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedResults.map((vertical: Vertical, index: number) => (
                    <tr key={index}>
                      <td className="text-center text-[14px] sm:text-left px-[20px] md:text-center  md:text-[16px] lg:text-[16px] lg:text-left lg:px-[80px] lg:py-[20px]">
                        {nombresVerticales[vertical.nombreVertical]}
                      </td>
                      <td className="porcentaje-cell pl-10 sm:pl-0 px-[20px] lg:px-[60px]">
                        <div
                          className={`barra-porcentaje ${
                            getColorClass(vertical.ResultadoPorVertical).bgColor
                          } ${
                            getColorClass(vertical.ResultadoPorVertical)
                              .minClass
                          }`}
                          style={{
                            width: `${Math.floor(
                              parseFloat(vertical.ResultadoPorVertical)
                            )}%`,
                          }}
                        >
                          <span className="porcentaje-texto text-[14px] mt-4">
                            {Math.floor(
                              parseFloat(vertical.ResultadoPorVertical)
                            )}
                            %
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-[20px] py-[20px] mt-5 md:px-[60px] lg:px-[120px] lg:py-[70px]">
            <h2 className="text-[#2D6DF6] font-[700] text-[32px] text-center sm:text-left">
              Es momento de seguir adelante{" "}
            </h2>
            <p className="mt-3 text-[14px] width-[1128px] text-center sm:text-left 2xl:text-[24px]">
              Te recomendamos consultar los siguientes contenidos que te serán
              útiles para que gestiones planes en tu empresa relacionados con
              los frentes que priorizaste.
            </p>
            <div className="flex flex-col  justify-center items-center mt-6">
              {rutasMenoresPorcentajes.map((ruta: any, index: number) => (
                <Ruta
                  key={index}
                  nombre={ruta.nombre}
                  titulo={ruta.titulo}
                  descripcion={ruta.descripcion}
                  subtitulo={ruta.subtitulo}
                  items={ruta.items}
                  textoPrincipal={ruta.textoPrincipal}
                  itemsTextoPrincipal={ruta.itemsTextoPrincipal}
                  textoSecundario={ruta.textoSecundario}
                  itemsTextoSecundario={ruta.itemsTextoSecundario}
                  img={ruta.img}
                  textoTercero={ruta.textoTercero}
                  itemsTextoTercero={ruta.itemsTextoTercero}
                  onNext={onClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
