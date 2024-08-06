import { useEffect, useRef, useState } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

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
      navigate("/home/mercados");
    } else {
      setMostrarError(true);
    }
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
                  14. ¿La empresa cuenta con herramientas tecnológicas que le
                  apalanquen la operación del negocio y el relacionamiento con
                  sus clientes?{" "}
                  <span className="italic font-normal">
                    (CRM: Customer Relation Management, Es la herramienta que
                    permite hacer gestion de las relaciones con los clientes ej.
                    Salesforce. ERP: Sistema de software que permite conectar
                    varias herramientas que operan en el negocio ej Herramienta
                    de finanzas, TH y CRM. Manejo de base de datos de clientes -
                    software de venta)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion1"
                      name="pregunta14"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta14", "1", "La empresa no cuenta con las herramientas tecnológicas necesarias que requiere la operación de sus procesos internos y externos.")}
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
                        La empresa no cuenta con las herramientas tecnológicas
                        necesarias que requiere la operación de sus procesos
                        internos y externos.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion2"
                      name="pregunta14"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta14", "2", "La empresa cuenta con herramientas tecnológicas para operar algunos de sus procesos, pero no tiene ningún persona encargada de soporte o mantenimiento.")}
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
                        La empresa cuenta con herramientas tecnológicas para
                        operar algunos de sus procesos, pero no tiene área o
                        persona encargada de soporte o mantenimiento.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion3"
                      name="pregunta14"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta14", "3", "La empresa gestiona sus herramientas tecnológicas y cuenta con más soporte y mantenimiento de estas de manera informal.")}
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
                        La empresa gestiona sus herramientas tecnológicas y
                        cuenta con algún soporte y mantenimiento de estas de
                        manera informal.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion4"
                      name="pregunta14"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta14", "4", "Cuenta con contrato formal con un tercero experto y/o con un tamaño propia de la empresa responsable de la gestión de las herramientas tecnológicas.")}
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
                        Cuenta con contrato formal con un tercero experto y/o
                        con un área propia de la empresa responsable de la
                        gestión de las herramientas tecnológicas.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta14_opcion5"
                      name="pregunta14"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta14", "5", "No aplica")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta14_opcion5"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">No aplica</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  15. Si utiliza herramientas o software NO gratuitos, ¿Cuenta
                  las licencias formales de cada una de ellas?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion1"
                      name="pregunta15"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta15", "1", "Ninguna aplicación y/o herramienta tecnológica se encuentra licenciada")}
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
                        Ninguna aplicación y/o herramienta tecnológica se
                        encuentra licenciada
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion2"
                      name="pregunta15"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta15", "2", "Algunas de las aplicaciones y herramientas tecnológicas con las que cuenta la empresa y que lo requieren, se encuentran licenciadas.")}
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
                        Algunas de las aplicaciones y herramientas tecnológicas
                        con las que cuenta la empresa y que lo requieren, se
                        encuentran licenciadas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion3"
                      name="pregunta15"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta15", "3", "Todas las aplicaciones y herramientas tecnológicas con las que cuenta la empresa y que lo requieren, se encuentran licenciadas")}
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
                        Todas las aplicaciones y herramientas tecnológicas con
                        las que cuenta la empresa y que lo requieren, se
                        encuentran licenciadas
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion4"
                      name="pregunta15"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta15", "4", "Cuenta con presupuesto y plan de renovación para la adquisición/renovación de licencias y realiza control en la instalación")}
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
                        Cuenta con presupuesto y plan de renovación para la
                        adquisición/renovación de licencias y realiza control en
                        la instalación.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta15_opcion5"
                      name="pregunta15"
                      value="5"
                      onChange={() => handleRespuestaChange("pregunta15", "5", "No aplica porque la empresa cuenta con programas gratuitos")}
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
                        No aplica porque la empresa cuenta con programas
                        gratuitos
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  16. ¿Has implementado alguna acción preventiva o usas
                  herramientas de ciberseguridad para "proteger tú información" en
                  tus canales digitales ?{" "}
                  <span className="italic font-normal">
                    (antivirus - control de accesos a las aplicaciones -
                    transferencia del riesgo - seguro)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta16_opcion1"
                      name="pregunta16"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta16", "1", "No tiene conocimiento de los riesgos cibernéticos a los que está expuesta la información de la empresa")}
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
                        No tiene conocimiento de los riesgos cibernéticos a los
                        que está expuesta la información de la empresa.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta16_opcion2"
                      name="pregunta16"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta16", "2", "Conoce los riesgos cibernéticos a los que está expuesta la información crítica de su empresa, y tiene conexión de tratamiento de datos personales “Ley de Habeas Data”")}
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
                        Conoce los riesgos cibernéticos a los que está expuesta
                        la información crítica de su empresa, y tiene política
                        de tratamiento de datos personales “Ley de Habeas Data”
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta16_opcion3"
                      name="pregunta16"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta16", "3", "Tiene implementadas las técnicas de seguridad de la información, el tratamiento adecuado de datos y también tiene un plan de divulgación o cultura de seguridad de la información en la empresa")}
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
                        Tiene implementadas las políticas y procesos para la
                        gestión segura de la información, el tratamiento
                        adecuado de datos y además tiene un plan de divulgación
                        o cultura de seguridad de la información en la empresa.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  17. ¿Su empresa tiene canales digitales como sitio web o redes
                  sociales y los actualiza con frecuencia?{" "}
                  <span className="italic font-normal">
                    (Correo, chat web, Whatsapp, redes sociales, sitio web)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta17_opcion1"
                      name="pregunta17"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta17", "1", "Cuenta con algunos canales digitales y se actualizan eventualmente")}
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
                        Cuenta con algunos canales digitales y se actualizan
                        eventualmente
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta17_opcion2"
                      name="pregunta17"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta17", "2", "Tenemos un proceso y plan de medios para gestionar y hacer seguimiento a los canales digitales")}
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
                        Tenemos un proceso y plan de medios para gestionar y
                        hacer seguimiento a los canales digitales
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta17_opcion3"
                      name="pregunta17"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta17", "3", "No aplica - La empresa no cuenta con canales digitales")}
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
                        No aplica - La empresa no cuenta con canales digitales
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-around items-center">
              <div className="flex justify-between gap-10">
                <NavLink to={"/home/talento-humano"}>
                  <button
                    id="atrasBtn"
                    className="text-white mr-3 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]"
                  >
                    Atrás
                  </button>
                </NavLink>

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
