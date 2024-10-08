import { useState, useEffect, useRef } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import {useLocation} from "react-router-dom";
import {Rutas} from "../../../helpers/Rutas.ts";
import {sendToGTM} from "../../../helpers/sendToGTM.ts";
import {GTMEvents} from "../../../helpers/GTMEvents.ts";

export default function Financiera({ respuestasSeleccionadas, respuestasDescripciones }: any) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);

  const [respuestas, setRespuestas] = useState({
    pregunta22: "",
    pregunta23: "",
    pregunta24: "",
  });
  
  const [descripciones, setDescripciones] = useState({
    pregunta22: "",
    pregunta23: "",
    pregunta24: ""
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
      respuestas.pregunta22 &&
      respuestas.pregunta23 &&
      respuestas.pregunta24
    ) {
      respuestasSeleccionadas(respuestas);
      respuestasDescripciones(descripciones)
      navigate(Rutas.LEGAL, { state: { from: Rutas.FINANCIERO } });
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
    if (location.state?.from === Rutas.MERCADO) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.MERCADO_SIGUIENTE
      });
    } else if (location.state?.from === Rutas.LEGAL) {
      sendToGTM({
        event: GTMEvents.COMPETITIVIDAD_EMPRESARIAL,
        ...GTMEvents.LEGAL_ATRAS
      });
    }
  }, [location]);

  const handleBack = () => {
    navigate(Rutas.MERCADO, { state: { from: Rutas.FINANCIERO } });
  };

  return (
    <>
      <section ref={section6Ref}>
        <div
          className="sectionFinanciera bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]]"
          id="section6"
        >
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left">
            Financiero
          </h2>
          <p className="mt-3 text-center text-lg sm:text-left">
          Capacidad para acceder, apalancar y gestionar los recursos.
          </p>
          <form id="formSection3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  22. ¿Los ingresos de su empresa alcanzan a cubrir todos los gastos?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta22_opcion1"
                      name="pregunta22"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta22", "1", "Algunos meses los ingresos no son suficientes para pagar todos los gastos.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta22_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Algunos meses los ingresos no son suficientes para pagar todos los gastos.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta22_opcion2"
                      name="pregunta22"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta22", "2", "Siempre logro cubrir los gastos, aunque a veces no queden ganancias.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta22_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">                
                      Siempre logro cubrir los gastos, aunque a veces no queden ganancias.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta22_opcion3"
                      name="pregunta22"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta22", "3", "En los meses buenos guardo para cubrir los gastos de los no tan buenos.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta22_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">                      
                      En los meses buenos guardo para cubrir los gastos de los no tan buenos.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  23. ¿Construye y analiza los estados financieros de la empresa?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta23_opcion1"
                      name="pregunta23"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta23", "1", "No genera información financiera de la empresa.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta23_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      No genera información financiera de la empresa.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta23_opcion2"
                      name="pregunta23"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta23", "2", "Recolecta información financiera básica (ventas, costos, deudas, etc.).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta23_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Recolecta información financiera básica (ventas, costos, deudas, etc.).
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta23_opcion3"
                      name="pregunta23"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta23", "3", "Construye información estructurada contablemente con periodicidad anual o mensual.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta23_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Construye información estructurada contablemente con periodicidad anual o mensual.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  24. ¿Conoce los beneficios tributarios a los que puede acceder y ha hecho uso de estos?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta24_opcion1"
                      name="pregunta24"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta24", "1", "Desconoce los incentivos tributarios.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta24_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Desconoce los incentivos tributarios.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta24_opcion2"
                      name="pregunta24"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta24", "2", "Ha identificado que puede aplicar a un beneficio tributario.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta24_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Ha identificado que puede aplicar a un beneficio tributario.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta24_opcion3"
                      name="pregunta24"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta24", "3", "Ha accedido a algunos beneficios e identifica potenciales.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta24_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Ha accedido a algunos beneficios e identifica potenciales.
                      </span>
                    </label>
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
