import { useEffect, useState } from "react";
import enviarRespuestas from "../libs/AutoDiagnosticoService";
//import FechaFetch from "../libs/fechaFetch";

import { Navigate, Routes, Route } from "react-router";
import Banner from "../components/banner/Banner";
import LogoComplement from "../components/LogoComplement";
import InfoSteps from "../components/InfoSteps";

import enviarRespuestasCorreos from "../libs/AutomatizacionCorreo";
import { useLocation } from "react-router-dom";
import GetAliado from "../libs/GetAliado";
import { useNavigate } from "react-router-dom";
import TerminosCondiciones from "../components/autodiagnostico/TerminosCondiciones";
import DatosRegistro from "../components/autodiagnostico/datos-registro/DatosRegistro";
import TalentoHumano from "../components/autodiagnostico/talento-humano/TalentoHumano";
import TecnologiaTransformacionDigital from "../components/autodiagnostico/tecnologia-transformacion-digital/TecnologiaTransformacionDigital";
import Mercados from "../components/autodiagnostico/mercados/Mercados";
import Financiera from "../components/autodiagnostico/financiera/Financiera";
import Legal from "../components/autodiagnostico/legal/Legal";
import ModeloOperativo from "../components/autodiagnostico/modelo-operativo/ModeloOperativo";
import Ambiental from "../components/autodiagnostico/ambiental/Ambiental";
import Resultados from "../components/autodiagnostico/resultados/Resultados";
import guardarInfo from "../libs/GuardarInfo";
import {Constants} from "../Constants.ts";

export default function Home() {
  const fondoResultados = Constants.FONDO_RESULTADOS;
  const fondoHome = Constants.FONDO_HOME;
  const fondoMovilResultados = Constants.FONDO_MOVIL_RESULTADOS;
  const fondoMovilHome = Constants.FONDO_MOVIL_HOME;
  const loadingGif = Constants.LOADING_GIF;

  const [response, setResponse] = useState(null);
  const [respuestas, setRespuestas] = useState({});
  const [dataRegister, setDataRegister] = useState({});
  const [descripciones, setDescripciones] = useState({});
  const [rutasMenores, setRutasMenores] = useState({});
  const [id, setId] = useState<string | null>(null);
  const [informacionGuardada, setInformacionGuardada] = useState(false);

  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const extractQueryParams = (hash: string): Record<string, string> => {
    const params: Record<string, string> = {};
    const parts = hash.split("&");
    parts.forEach((part) => {
      const [key, value] = part.split("=");
      if (key && value) {
        params[key] = value;
      }
    });
    return params;
  };

  const arrayToObject = (arr: string[]): Record<string, string> => {
    const result: Record<string, string> = {};
    arr.forEach((item, index) => {
      result[index.toString()] = item;
    });
    return result;
  };
  
  useEffect(() => {
    const handleHashChange = async () => {
      const hash = window.location.hash.substring(1);
      const queryParams = extractQueryParams(hash);
      const id = queryParams["id"];

      if (id) {
        setId(id);
        setLoading(true);
        try {
          const result = await GetAliado(id);
          navigate("/home/terminos-condiciones", {
            state: { aliado: result },
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center px-[120px] py-[70px]">
        <div className="spinner">
          <div className="spinner-ring"></div>
          <img src={loadingGif} alt="Imagen de carga" />
        </div>
      </div>
    );
  }

  const handleRespuestas = (nuevaRespuesta: any) => {
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      ...nuevaRespuesta,
    }));
  };

  const handleDataRegister = (nuevaRespuesta: any) => {
    setDataRegister((prevDataRegister) => ({
      ...prevDataRegister,
      ...nuevaRespuesta,
    }));
  };

  const handDescripciones = (nuevaRespuesta: any) => {
    setDescripciones((prevRespuestas) => ({
      ...prevRespuestas,
      ...nuevaRespuesta,
    }));
  };

  const handleGuardarInfo = (nuevaRespuesta: any) => {
    setRutasMenores((prevRespuestas) => ({
      ...prevRespuestas,
      ...nuevaRespuesta,
    }));
  };

  const handleSaveInfo = async (rutas: any[]) => {
    try {
      if (informacionGuardada) return;

      setInformacionGuardada(true);
      
      const response = await guardarInfo(
        id,
        dataRegister,
        descripciones,
        arrayToObject(rutas)
      );
      console.log(response);
    } catch (error) {
      console.error("Hubo un problema en la petición:", error);
    }
  };

  const handleEnviarRequest = async () => {
    if (!respuestas) return;
    try {
      const response = await enviarRespuestas(respuestas);
      setResponse(response);
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    }
  };

  const handleEnviarAutomatizacionCorreo = async () => {
    try {
      const responseCorreos = await enviarRespuestasCorreos(
        dataRegister,
        response
      );
      console.log(responseCorreos);
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    }
  };

  return (
    <>
      <Banner
        titulo={
          location.pathname === "/home/resultados-autodiagnostico"
            ? "¡Gracias por terminar tu autodiagnóstico!"
            : "Diagnóstico de Competitividad Empresarial"
        }
        descripcion={
          location.pathname === "/home/resultados-autodiagnostico"
            ? ""
            : "Queremos acompañarte a gestionar las oportunidades y las incertidumbres que puedan llegar a presentarse en tu camino empresarial."
        }
        fondo={
          location.pathname === "/home/resultados-autodiagnostico"
            ? fondoResultados
            : fondoHome
        }
        fondoMovil={
          location.pathname === "/home/resultados-autodiagnostico"
            ? fondoMovilResultados
            : fondoMovilHome
        }
      />
      <InfoSteps
        texto={
          location.pathname === "/home/resultados-autodiagnostico"
            ? "¡Es momento de seguir adelante! Hemos analizado tus resultados y desarrollado contenidos que te serán útiles para el cierre de brechas y garantizar el éxito de tu empresa."
            : "Para avanzar, es necesario dar pasos en la dirección correcta. Por esto, te invitamos a realizar un autodiagnóstico diseñado para entender las oportunidades de desarrollo que hemos evidenciado como más relevantes para nuestros empresarios."
        }
        subtexto={
          location.pathname === "/home/resultados-autodiagnostico"
            ? ""
            : "¡Conocer tu empresa nos permitirá acompañarte!"
        }
      />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home/terminos-condiciones" />}
        />
        <Route path="terminos-condiciones" element={<TerminosCondiciones />} />
        <Route
          path="datos-registro"
          element={<DatosRegistro dataRegistrada={handleDataRegister} />}
        />
        <Route
          path="talento-humano"
          element={
            <TalentoHumano
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
            />
          }
        />
        <Route
          path="tecnologia-transformacion-digital"
          element={
            <TecnologiaTransformacionDigital
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
            />
          }
        />
        <Route
          path="mercados"
          element={
            <Mercados
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
            />
          }
        />
        <Route
          path="financiera"
          element={
            <Financiera
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
            />
          }
        />
        <Route
          path="legal"
          element={
            <Legal
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
            />
          }
        />
        <Route
          path="modelo-operativo"
          element={
            <ModeloOperativo
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
            />
          }
        />
        <Route
          path="ambiental"
          element={
            <Ambiental
              respuestasSeleccionadas={handleRespuestas}
              respuestasDescripciones={handDescripciones}
              enviarRequest={handleEnviarRequest}
            />
          }
        />
        <Route
          path="resultados-autodiagnostico"
          element={
            <Resultados
              response={response}
              enviarRequestCorreos={handleEnviarAutomatizacionCorreo}
              enviarRutasMenores={handleGuardarInfo}
              enviarGuardarInfo={handleSaveInfo}
            />
          }
        />
      </Routes>
      <LogoComplement />
    </>
  );
}
