import { useEffect, useRef, useState } from "react";

import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function TalentoHumano({ respuestasSeleccionadas, respuestasDescripciones }: any) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);

  const [respuestas, setRespuestas] = useState({
    pregunta11: "",
    pregunta12: "",
    pregunta13: "",
  });

  const [descripciones, setDescripciones] = useState({
    pregunta11: "",
    pregunta12: "",
    pregunta13: "",
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

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (
      respuestas.pregunta11 &&
      respuestas.pregunta12 &&
      respuestas.pregunta13
    ) {
      respuestasDescripciones(descripciones);
      respuestasSeleccionadas(respuestas);
      
      navigate("/home/tecnologia-transformacion-digital");
    } else {
      setMostrarError(true);
    }
  };

  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <section
        id="section3"
        ref={section3Ref}
        className="bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]"
      >
        <div>
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left">
            Talento Humano
          </h2>
          <p className="mt-3 text-center text-lg sm:text-left">
            Capacidad para contar con el equipo humano necesario, cumplimiento
            regulatorio como empleador y promoción y prevención de la salud y
            seguridad en el trabajo.
          </p>
          <form
            id="formSection3"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  11. ¿La empresa conoce cuáles son los mínimos legales que debe
                  tener en cuenta para contratar al empleado?{" "}
                  <span className="italic font-normal">
                    (Como validación de conocimientos obligatorios, exámenes
                    médicos de preempleo y perfil de cargo.)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta11_opcion1"
                      name="pregunta11"
                      value="1"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta11",
                          "1",
                          "La empresa no tiene definidos lineamientos internos o legales para la selección"
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta11_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa no tiene definidos lineamientos internos o
                        políticas para la selección
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta11_opcion2"
                      name="pregunta11"
                      value="2"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta11",
                          "2",
                          "La empresa tiene definidos lineamientos internos o legales para la selección que contemplan los mínimos legales, pero no están documentados ni divulgados."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta11_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa tiene políticas o lineamientos para la
                        selección que contemplan los mínimos legales, pero no
                        están documentados ni divulgados.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta11_opcion3"
                      name="pregunta11"
                      value="3"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta11",
                          "3",
                          "La empresa tiene definidos lineamientos internos o legales para la selección que contemplan los mínimos legales, están documentados y divulgados."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta11_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa tiene políticas o lineamientos para la
                        selección que contemplan los mínimos legales, están
                        documentados y divulgados.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  12. ¿Cuenta con documentación que soporte la implementación
                  del sistema de gestión en seguridad y salud en el trabajo?{" "}
                  <span className="italic font-normal">
                    (Evaluación o autoevaluación al sistema de gestión en
                    seguridad y salud en el trabajo)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta12_opcion1"
                      name="pregunta12"
                      value="1"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta12",
                          "1",
                          "La empresa no ha identificado los requisitos mínimos que le aplican, ni participa con aliados que lo apoyan en este proceso."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta12_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa no ha identificado los requisitos mínimos que
                        le aplican, ni participa con aliados que lo apoyan en
                        este proceso.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta12_opcion2"
                      name="pregunta12"
                      value="2"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta12",
                          "2",
                          "La empresa tiene identificados los estándares mínimos que le aplican según el tamaño y tipo de empresa pero aun no los ha evaluado ni implementado."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta12_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa tiene identificados los estándares mínimos
                        que le aplican según el tamaño y tipo de empresa pero
                        aun no los ha evaluado ni implementado.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta12_opcion3"
                      name="pregunta12"
                      value="3"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta12",
                          "3",
                          "La empresa ha implementado y evaluado los estándares mínimos con resultados de complimiento en un nivel crítico (hasta un 60%)."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta12_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa ha implementado y evaluado los estándares
                        mínimos con resultados de cumplimiento en un nivel
                        crítico (hasta un 60%)
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta12_opcion4"
                      name="pregunta12"
                      value="4"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta12",
                          "4",
                          "La empresa ha implementado y evaluado los estándares mínimos con resultados de complimiento en un nivel moderadamente aceptable (hasta un 85%)."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta12_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa ha implementado y evaluado los estándares
                        mínimos con resultados de cumplimiento en un nivel
                        moderadamente aceptable (hasta un 85%) y se articula con
                        aliados para apalancar la gestión.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta12_opcion5"
                      name="pregunta12"
                      value="5"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta12",
                          "5",
                          "La empresa ha implementado y evaluado los estándares mínimos con resultados de complimiento en un nivel aceptable (superior al 85%)."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta12_opcion5"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa ha implementado y evaluado los estándares
                        mínimos con resultados de cumplimiento en un nivel
                        aceptable (superior al 85%) y se articula con aliados
                        para apalancar la gestión y lo incluye dentro de un
                        proceso de mejora continua.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  13. ¿Tienes claro cuál es el conocimiento, licencias o las
                  certificaciones legales que deben tener tus empleados para
                  poder ejercer sus funciones de acuerdo con su profesión o su
                  rol?{" "}
                  <span className="italic font-normal">
                    (Ejemplos . cursos de manipulación e alimentos para personal
                    operativo en cocinas, Licencia de SST para tecnólogos y
                    profesionales en seguridad y salud en el trabajo, Curso en
                    Reanimación Cardiopulmonar para personal asistencial en
                    áreas de urgencias.)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion1"
                      name="pregunta13"
                      value="1"
                      onChange={() =>
                        handleRespuestaChange(
                          "pregunta13",
                          "1",
                          "La empresa no tiene identificados los conocimientos y certificaciones legales que le aplican a su talento humano, de acuerdo con su rol y/o procesión."
                        )
                      }
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta13_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa no tiene identificados los conocimientos y
                        certificaciones legales que le aplican a su talento
                        humano, de acuerdo con su rol y/o profesión. Sus
                        empleados no están certificados o dichas certificaciones
                        no están vigentes
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion2"
                      name="pregunta13"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta13", "2", "La empresa tiene identificadas las certificaciones legales pero no las gestiona proactivamente. Susempleados no están certificados o dichas certificaciones no están vigentes.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta13_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa tiene identificadas las certificaciones
                        legales pero no las gestiona proactivamente. Sus
                        empleados no están certificados o dichas certificaciones
                        no están vigentes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion3"
                      name="pregunta13"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta13", "3", "La empresa tiene identificadas las certificaciones legales de sus empleados y las gestiona de manera manual y reactiva para mantenerlas actualizadas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta13_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa tiene identificadas las certificaciones
                        legales de sus empleados y las gestiona de manera manual
                        y reactiva para mantenerlas actualizadas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion4"
                      name="pregunta13"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta13", "4", "La empresa cuenta con una herramienta que de manera predictiva alerta el vencimiento y cuenta con espacios y aliados que de forma permanente y periódica actualizan dichas certificaciones.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta13_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        La empresa cuenta con una herramienta que de manera
                        predictiva alerta el vencimiento y cuenta con espacios y
                        aliados que de forma permanente y periódica actualizan
                        dichas certificaciones.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-around items-center">
                <div className="flex justify-between gap-10">
                  <NavLink to={"/home/datos-registro"}>
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
