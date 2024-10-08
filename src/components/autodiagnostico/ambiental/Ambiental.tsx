import { useState, useEffect, useRef } from "react";
import "../../../styles/RadioButton.css";
import { AmbientalProps } from "./Ambiental.types";
import { useNavigate } from "react-router";
import {useLocation} from "react-router-dom";
import {Rutas} from "../../../helpers/Rutas.ts";
import {sendToGTM} from "../../../helpers/sendToGTM.ts";
import {GTMEvents} from "../../../helpers/GTMEvents.ts";

export default function Ambiental({
  respuestasSeleccionadas,
  respuestasDescripciones,
  enviarRequest
}: AmbientalProps) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);
  const [respuestas, setRespuestas] = useState({
    pregunta31: "",
    pregunta32: "",
    pregunta33: "",
    pregunta34: "",
  });

  const [descripciones, setDescripciones] = useState({
    pregunta31: "",
    pregunta32: "",
    pregunta33: "",
    pregunta34: "",
  });

  const handleRespuestaChange = (
    pregunta: string,
    respuesta: string,
    descripcion: string
  ) => {
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [pregunta]: respuesta,
    }));
    setDescripciones((prevDescripciones) => ({
      ...prevDescripciones,
      [pregunta]: descripcion,
    }));
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !respuestas.pregunta31 ||
      !respuestas.pregunta32 ||
      !respuestas.pregunta33 ||
      !respuestas.pregunta34
    ) {
      setMostrarError(true);
      return;
    }

    enviarRequest();
    navigate(Rutas.RESULTADOS, { state: { from: Rutas.AMBIENTAL } });
  };

  const section9Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section9Ref.current) {
      section9Ref.current.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    if (
      respuestas.pregunta31 &&
      respuestas.pregunta32 &&
      respuestas.pregunta33 &&
      respuestas.pregunta34
    ) {
      respuestasDescripciones(descripciones);
      respuestasSeleccionadas(respuestas);
    }
  }, [respuestas]);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.from === Rutas.MODELO_OPERATIVO) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.MODELO_OPERATIVO_SIGUIENTE
      });
    }
  }, [location]);

  const handleBack = () => {
    navigate(Rutas.MODELO_OPERATIVO, { state: { from: Rutas.AMBIENTAL } });
  };

  return (
    <>
      <section
        className="bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]"
        ref={section9Ref}
      >
        <div className="sectionAmbiental" id="section9">
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left mb-3">
            Ambiental
          </h2>
          <p className="mt-3  text-center text-lg sm:text-left">
            Capacidad para identificar las oportunidades en materia ambiental a
            través de la transición hacia modelos negocio de menor impacto.
          </p>
          <form id="formSection3">
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label
                  htmlFor="pregunta31"
                  className="block font-semibold text-lg"
                >
                  31. ¿La empresa debe cumplir con algún requisito u obligación en materia ambiental?{" "}
                  <span className="italic font-normal">
                    (Obligaciones asociadas a permisos otorgados por la autoridad ambiental, gestión de recursos naturales como agua, energía, residuos, fauna y flora)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion1"
                      name="pregunta31"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta31", "1", "Desconoce si tiene algún tipo de obligación ambiental.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta31_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Desconoce si tiene algún tipo de obligación ambiental.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion2"
                      name="pregunta31"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta31", "2", "Conoce sus obligaciones ambientales, pero aún no las gestiona.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta31_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Conoce sus obligaciones ambientales, pero aún no las gestiona.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion3"
                      name="pregunta31"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta31", "3", "Conoce sus obligaciones ambientales y las gestiona oportunamente.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta31_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Conoce sus obligaciones ambientales y las gestiona oportunamente.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion4"
                      name="pregunta31"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta31", "4", "No aplica, la actividad no tiene ninguna obligación con la autoridad ambiental.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta31_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No aplica, la actividad no tiene ninguna obligación con la autoridad ambiental.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="pregunta32"
                  className="block font-semibold text-lg"
                >
                  32. ¿Ha identificado que sus clientes tengan una exigencia/expectativa en materia ambiental al momento de adquirir sus productos y/o servicios?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta32_opcion1"
                      name="pregunta32"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta32", "1", "No ha identificado o los clientes no le han solicitado el cumplimiento de alguna exigencia o expectativa en materia ambiental. No aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta32_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No ha identificado o los clientes no le han solicitado el cumplimiento de alguna exigencia o expectativa en materia ambiental. No aplica.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta32_opcion2"
                      name="pregunta32"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta32", "2", "Ha identificado alguna expectativa o exigencia en materia ambiental por parte de los clientes.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta32_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Ha identificado alguna expectativa o exigencia en materia ambiental por parte de los clientes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta32_opcion3"
                      name="pregunta32"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta32", "3", "Cumple actualmente con las expectativas o exigencias en materia ambiental por parte de los clientes.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta32_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cumple actualmente con las expectativas o exigencias en materia ambiental por parte de los clientes.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="pregunta33"
                  className="block font-semibold text-lg"
                >
                  33. ¿Tiene identificados los impactos ambientales generados por su operación?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion1"
                      name="pregunta33"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta33", "1", "No identifica los aspectos e impactos ambientales generados por las operaciones.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta33_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No identifica los aspectos e impactos ambientales generados por las operaciones.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion2"
                      name="pregunta33"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta33", "2", "Cuenta con una metodología que le permite identificar y analizar los aspectos e impactos ambientales de sus operaciones.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta33_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cuenta con una metodología que le permite identificar y analizar los aspectos e impactos ambientales de sus operaciones.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion3"
                      name="pregunta33"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta33", "3", "Realiza el análisis de los impactos teniendo en cuenta sus grupos de interés.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta33_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Realiza el análisis de los impactos teniendo en cuenta sus grupos de interés.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion4"
                      name="pregunta33"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta33", "4",  "Para los impactos analizados, cuenta con un plan de acción para su mitigación.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta33_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Para los impactos analizados, cuenta con un plan de acción para su mitigación.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="pregunta34"
                  className="block font-semibold text-lg"
                >
                  34. ¿Realiza medición de su huella de carbono?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta34_opcion1"
                      name="pregunta34"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta34", "1", "No mide la huella de carbono o no sabe cómo medirla.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />

                    <label
                      htmlFor="pregunta34_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      No mide la huella de carbono o no sabe cómo medirla.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta34_opcion2"
                      name="pregunta34"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta34", "2", "Mide la huella de carbono de sus emisiones directas (alcance 1).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta34_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Mide la huella de carbono de sus emisiones directas (alcance 1).
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta34_opcion3"
                      name="pregunta34"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta34", "3", "Mide la huella de carbono de sus emisiones directas e indirectas (alcance 1 y 2).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta34_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Mide la huella de carbono de sus emisiones directas e indirectas (alcance 1 y 2).
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta34_opcion4"
                      name="pregunta34"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta34", "4", "Mide la huella de carbono de sus emisiones directas e indirectas de su cadena de valor (alcance 1, 2 y 3).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta34_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Mide la huella de carbono de sus emisiones directas e indirectas de su cadena de valor (alcance 1, 2 y 3).
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div> 
          </form>
          <div className="mt-10 flex justify-around items-center">
            <div className="buttons flex justify-center gap-10">
              <button
                id="atrasBtn"
                className="text-white mr-3 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]"
                onClick={handleBack}
              >
                Atrás
              </button>

              <button
                type="submit"
                id="siguienteBtnSection"
                onClick={handleSubmit}
                className="text-white mr-3 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]"
              >
                Siguiente
              </button>
            </div>
          </div>
          {mostrarError && (
            <div className="alert bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-3">
              Debes seleccionar una opción en cada pregunta.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
