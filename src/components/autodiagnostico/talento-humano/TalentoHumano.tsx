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
                  11. ¿La empresa conoce cuales son los mínimos legales
                  para contratar a un empleado?{" "}
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
                          "No los tiene definidos."
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
                        No los tiene definidos.
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
                          "Los tiene, pero no están documentados ni divulgados."
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
                        Los tiene, pero no están documentados ni divulgados.
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
                          "Los tiene y están documentados y divulgados."
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
                        Los tiene y están documentados y divulgados.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  12. ¿Cuenta con documentación que respalde la implementación
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
                          "No ha identificado los requisitos mínimos que le aplican, ni participa con aliados que lo apoyan en este proceso."
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
                        No ha identificado los requisitos mínimos que le aplican, ni participa con aliados que lo apoyan en este proceso.
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
                          "Tiene identificados los estándares mínimos que le aplican según el tamaño y tipo de empresa, pero no los ha evaluado ni implementado."
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
                        Tiene identificados los estándares mínimos que le aplican según el tamaño y tipo de empresa, pero no los ha evaluado ni implementado.
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
                          "Ha implementado y evaluado los estándares mínimos con un nivel de cumplimiento crítico de hasta un 60%."
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
                        Ha implementado y evaluado los estándares mínimos con un nivel de cumplimiento crítico de hasta un 60%.
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
                          "Ha implementado y evaluado los estándares mínimos con un nivel de cumplimiento moderadamente aceptable (85%) y se articula con aliados para la gestión."
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
                        Ha implementado y evaluado los estándares mínimos con un nivel de cumplimiento moderadamente aceptable (85%) y se articula con aliados para la gestión.
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
                          "Ha implementado y evaluado los estándares mínimos con un nivel de cumplimiento aceptable (más del 85%) y se articula con aliados para la gestión y el proceso de mejora continua."
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
                        Ha implementado y evaluado los estándares mínimos con un nivel de cumplimiento aceptable (más del 85%) y se articula con aliados para la gestión y el proceso de mejora continua.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  13. ¿Tiene claro cuál es el conocimiento, licencias o las certificaciones legales que deben tener sus empleados para ejercer sus funciones de acuerdo con su profesión o su rol?{" "}
                  <span className="italic font-normal">
                    (Ejemplos: cursos de manipulación de alimentos, Licencia de SST, Curso en Reanimación Cardiopulmonar.)
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
                          "No los tiene identificados. Sus empleados no están certificados o dichas certificaciones no están vigentes."
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
                        No los tiene identificados. Sus empleados no están certificados o dichas certificaciones no están vigentes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion2"
                      name="pregunta13"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta13", "2", "Las tienen identificadas, pero no las gestiona. Sus empleados no están certificados o no están vigentes.")}
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
                        Las tienen identificadas, pero no las gestiona. Sus empleados no están certificados o no están vigentes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion3"
                      name="pregunta13"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta13", "3", "Las tiene identificadas y las gestiona manual y reactivamente para actualizarlas.")}
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
                        Las tiene identificadas y las gestiona manual y reactivamente para actualizarlas.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta13_opcion4"
                      name="pregunta13"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta13", "4", "Cuenta con una herramienta predictiva que alerta el vencimiento y cuenta con espacios y aliados para actualizar las certificaciones.")}
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
                        Cuenta con una herramienta predictiva que alerta el vencimiento y cuenta con espacios y aliados para actualizar las certificaciones.
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
