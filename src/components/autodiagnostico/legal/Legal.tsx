import { useState, useEffect, useRef } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import {useLocation} from "react-router-dom";
import {Rutas} from "../../../helpers/Rutas.ts";
import {sendToGTM} from "../../../helpers/sendToGTM.ts";
import {GTMEvents} from "../../../helpers/GTMEvents.ts";
export default function Legal({ respuestasSeleccionadas, respuestasDescripciones }: any) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);

  const [respuestas, setRespuestas] = useState({
    pregunta25: "",
    pregunta26: "",
    pregunta27: "",
  });

  const [descripciones, setDescripciones] = useState({
    pregunta25: "",
    pregunta26: "",
    pregunta27: "",
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
      respuestas.pregunta25 &&
      respuestas.pregunta26 &&
      respuestas.pregunta27
    ) {
      respuestasDescripciones(descripciones)
      respuestasSeleccionadas(respuestas);
      navigate(Rutas.MODELO_OPERATIVO, { state: { from: Rutas.LEGAL } });
    } else {
      setMostrarError(true);
    }
  };

  const section6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section6Ref.current) {
      section6Ref.current.scrollIntoView();
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.from === Rutas.FINANCIERO) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.FINANCIERO_SIGUIENTE
      });
    } else if (location.state?.from === Rutas.MODELO_OPERATIVO) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.MODELO_OPERATIVO_ATRAS
      });
    }
  }, [location]);

  const handleBack = () => {
    navigate(Rutas.FINANCIERO, { state: { from: Rutas.LEGAL } });
  };

  return (
    <>
      <section
        className="bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]"
        ref={section6Ref}
      >
        <div className="sectionLegal" id="section7">
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left mb-3">
            Legal
          </h2>
          <p className="mt-3  text-center text-lg sm:text-left">
            Capacidad para desarrollar el negocio d entro de un marco legal y
            normativo eficiente.
          </p>
          <form id="formSection3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  ¿Cuenta con los registros obligatorios para operar?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion1"
                      name="pregunta25"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta25", "1", "No cuenta con los registros.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta25_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No cuenta con los registros.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion2"
                      name="pregunta25"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta25", "2", "Cuenta de manera parcial con los registros.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta25_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Cuenta de manera parcial con los registros.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion3"
                      name="pregunta25"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta25", "3", "Sí cuenta con todos los registros necesarios.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta25_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Sí cuenta con todos los registros necesarios.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion4"
                      name="pregunta25"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta25", "4", "No Aplica (Es una persona natural y/o independiente).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta25_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No Aplica (Es una persona natural y/o independiente).
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  ¿Formaliza los contratos por escrito?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta26_opcion1"
                      name="pregunta26"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta26", "1", "Contrata de manera verbal.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta26_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Contrata de manera verbal.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta26_opcion2"
                      name="pregunta26"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta26", "2", "Algunos contratos son verbales y otros escritos.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta26_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Algunos contratos son verbales y otros escritos.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta26_opcion3"
                      name="pregunta26"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta26", "3", "Celebro todos los contratos por escrito.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta26_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        Celebro todos los contratos por escrito.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  ¿Cumple las normas laborales y de seguridad social?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta27_opcion1"
                      name="pregunta27"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta27", "1", "No conoce las normas que debe cumplir.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta27_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                        No conoce las normas que debe cumplir.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta27_opcion2"
                      name="pregunta27"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta27", "2", "Cumple parcialmente.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta27_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Cumple parcialmente.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta27_opcion3"
                      name="pregunta27"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta27", "3", "Cumple a cabalidad las normas laborales y de seguridad social.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta27_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Cumple a cabalidad las normas laborales y de seguridad social.
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
              <div className="alert bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-3">
                Debes seleccionar una opción en cada pregunta.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
