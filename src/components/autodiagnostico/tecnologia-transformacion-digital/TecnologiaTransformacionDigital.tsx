import { useEffect, useRef, useState } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import {useLocation} from "react-router-dom";
import {Rutas} from "../../../helpers/Rutas.ts";
import {sendToGTM} from "../../../helpers/sendToGTM.ts";
import {GTMEvents} from "../../../helpers/GTMEvents.ts";

export default function TecnologiaTransformacionDigital({
  respuestasSeleccionadas,respuestasDescripciones
}: any) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);

  const [respuestas, setRespuestas] = useState({
    pregunta14: "",
    pregunta15: "",
    pregunta16: "",
    pregunta17: "",
  });

  const [descripciones, setDescripciones] = useState({
    pregunta14: "",
    pregunta15: "",
    pregunta16: "",
    pregunta17: "",
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      respuestas.pregunta14 &&
      respuestas.pregunta15 &&
      respuestas.pregunta16 &&
      respuestas.pregunta17
    ) {
      respuestasSeleccionadas(respuestas);
      respuestasDescripciones(descripciones)
      navigate(Rutas.MERCADO, { state: { from: Rutas.TECNOLOGIA_TRANSFORMACION_DIGITAL } });
    } else {
      setMostrarError(true);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.from === Rutas.TALENTO_HUMANO) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.TALENTO_HUMANO_SIGUIENTE
      });
    } else if (location.state?.from === Rutas.MERCADO) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.MERCADO_ATRAS
      });
    }
  }, [location]);

  const handleBack = () => {
    navigate(Rutas.TALENTO_HUMANO, { state: { from: Rutas.TECNOLOGIA_TRANSFORMACION_DIGITAL } });
  };

  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section4Ref.current) {
      section4Ref.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <section
        id="section4"
        ref={section4Ref}
        className="bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]"
      >
        <div className="sectionTecnologiaTransformacionDigital">
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left mb-3">
            Tecnología y transformación digital
          </h2>
          <p className="mt-3  text-center text-lg sm:text-left">
            Capacidad para apalancar la estrategia en el desarrollo, uso y
            apropiación oportuna de capacidades tecnológicas.
          </p>
          <form id="formSection4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  14. ¿Cuenta con herramientas tecnológicas que apalanquen la operación del negocio?{" "}
                  <span className="italic font-normal">
                    (CRM para gestión de clientes, ERP para conectar varias herramientas que operan en el negocio, etc.)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion1"
                      name="pregunta14"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta14", "1", "No cuenta con herramientas tecnológicas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta14_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No cuenta con herramientas tecnológicas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion2"
                      name="pregunta14"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta14", "2", "Cuenta con algunas herramientas tecnológicas, pero no tiene encargado de soporte o mantenimiento.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta14_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cuenta con algunas herramientas tecnológicas, pero no tiene encargado de soporte o mantenimiento.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion3"
                      name="pregunta14"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta14", "3", "Cuenta con un encargado informal de soporte y mantenimiento de las herramientas tecnológicas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta14_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cuenta con un encargado informal de soporte y mantenimiento de las herramientas tecnológicas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion4"
                      name="pregunta14"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta14", "4", "Cuenta con un encargado contratado formalmente para la gestión de las herramientas tecnológicas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta14_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cuenta con un encargado contratado formalmente para la gestión de las herramientas tecnológicas.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion5"
                      name="pregunta14"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta14", "5", "No aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta14_opcion5"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">No aplica.</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  15. Si utiliza herramientas o software NO gratuitos, ¿cuenta con las licencias?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion1"
                      name="pregunta15"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta15", "1", "Ninguna aplicación y/o herramienta tiene licencia.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta15_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Ninguna aplicación y/o herramienta tiene licencia.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion2"
                      name="pregunta15"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta15", "2", "Algunas aplicaciones y/o herramientas están licenciadas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta15_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Algunas aplicaciones y/o herramientas están licenciadas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion3"
                      name="pregunta15"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta15", "3", "Todas las aplicaciones y herramientas se encuentran licenciadas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta15_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Todas las aplicaciones y herramientas se encuentran licenciadas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion4"
                      name="pregunta15"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta15", "4", "Cuenta con presupuesto y plan de renovación para la adquisición/renovación de licencias.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta15_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cuenta con presupuesto y plan de renovación para la adquisición/renovación de licencias.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion5"
                      name="pregunta15"
                      value="5"
                      onChange={() => handleRespuestaChange("pregunta15", "5", "No aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta15_opcion5"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No aplica.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  16. ¿Usa herramientas de ciberseguridad en sus canales digitales para proteger su información?{" "}
                  <span className="italic font-normal">
                    (Antivirus, control de accesos a las aplicaciones, seguros)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta16_opcion1"
                      name="pregunta16"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta16", "1", "No conoce los riesgos cibernéticos a los que está expuesta la información de la empresa.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta16_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No conoce los riesgos cibernéticos a los que está expuesta la información de la empresa.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta16_opcion2"
                      name="pregunta16"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta16", "2", "Conoce los riesgos cibernéticos y tiene una política de tratamiento de datos personales (Ley de Habeas Data).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta16_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Conoce los riesgos cibernéticos y tiene una política de tratamiento de datos personales (Ley de Habeas Data).
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta16_opcion3"
                      name="pregunta16"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta16", "3", "Tiene implementadas las políticas y procesos para la gestión segura de la información y un plan de divulgación en la empresa.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta16_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Tiene implementadas las políticas y procesos para la gestión segura de la información y un plan de divulgación en la empresa.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  17. ¿Tiene canales digitales como sitio web o redes sociales y los actualiza con frecuencia?{" "}
                  <span className="italic font-normal">
                    (Correo, chat web, WhatsApp, redes sociales, sitio web)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta17_opcion1"
                      name="pregunta17"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta17", "1", "Tiene algunos canales digitales y se actualizan eventualmente.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta17_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Tiene algunos canales digitales y se actualizan eventualmente.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta17_opcion2"
                      name="pregunta17"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta17", "2", "Tiene un proceso y plan de medios para gestionar y hacer seguimiento a los canales digitales.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta17_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Tiene un proceso y plan de medios para gestionar y hacer seguimiento a los canales digitales.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta17_opcion3"
                      name="pregunta17"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta17", "3", "No aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta17_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No aplica.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-around items-center">
              <div className="flex justify-between gap-10">
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
                  className="text-white mr-3 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]"
                >
                  Siguiente
                </button>
              </div>
            </div>
            {mostrarError && (
              <div className="px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded mt-4">
                Debes seleccionar una opción en cada pregunta.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
