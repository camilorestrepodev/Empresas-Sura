import { useState, useEffect, useRef } from "react";
import "../../../styles/RadioButton.css";
import { AmbientalProps } from "./Ambiental.types";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

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
    navigate("/home/resultados-autodiagnostico");
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
                  31. ¿La empresa debe cumplir con algún requisito u obligación
                  en materia ambiental?{" "}
                  <span className="italic font-normal">
                    (Obligaciones asociadas a permisos otorgados por la
                    autoridad ambiental, gestión de recursos naturales como:
                    agua, energía, residuos, fauna y flora)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion1"
                      name="pregunta31"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta31", "1", "La empresa desconoce si tiene qué tipo de obligación ambiental.")}
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
                        La empresa desconoce si tiene algún tipo de obligación
                        ambiental.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion2"
                      name="pregunta31"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta31", "2", "La empresa conoce sus obligaciones ambientales, pero más no las gestiona.")}
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
                        La empresa conoce sus obligaciones ambientales, pero aún
                        no las gestiona.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion3"
                      name="pregunta31"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta31", "3", "La empresa conoce sus obligaciones ambientales y las gestiona oportunamente.")}
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
                        La empresa conoce sus obligaciones ambientales y las
                        gestiona oportunamente.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta31_opcion4"
                      name="pregunta31"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta31", "4", "No Aplica - La actividad no tiene ninguna obligación con la autoridad ambiental")}
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
                        No Aplica - La actividad no tiene ninguna obligación con
                        la autoridad ambiental
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
                  32. ¿Has identificado que tus clientes tengan una
                  exigencia/expectativa en materia ambiental al momento de
                  adquirir tus productos y/o servicios?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta32_opcion1"
                      name="pregunta32"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta32", "1", "No he identificado o mis clientes no me han solicitado el plcimiento de alguna exigencia/ expectativa en materia ambiental")}
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
                        No he identificado o mis clientes no me han solicitado
                        el cumplimiento de alguna exigencia/ expectativa en
                        materia ambiental
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta32_opcion2"
                      name="pregunta32"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta32", "2", "Ha identificado alguna expectativa/exigencia en materia ambiental por parte de mis clientes")}
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
                        Ha identificado alguna expectativa/exigencia en materia
                        ambiental por parte de mis clientes
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta32_opcion3"
                      name="pregunta32"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta32", "3", "Cumplo actualmente con las expectativas/ exigencias en materia ambiental por parte de mis clientes. *Dependiendo de la exigencia se asocia a un servicio en particular")}
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
                        Cumplo actualmente con las expectativas/ exigencias en
                        materia ambiental por parte de mis clientes.
                        *Dependiendo de la exigencia se asocia a un servicio en
                        particular
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
                  33. ¿Tienes identificados los impactos ambientales generados
                  por tu operación?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion1"
                      name="pregunta33"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta33", "1", "No identificas los aspectos e impactos ambientales generados por tus operaciones.")}
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
                        No identificas los aspectos e impactos ambientales
                        generados por tus operaciones.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion2"
                      name="pregunta33"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta33", "2", "Cuentas con una metodología que te permite analizar tus aspectos e impactos ambientales de tus operaciones.")}
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
                        Cuentas con una metodología que te permite analizar tus
                        aspectos e impactos ambientales de tus operaciones.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion3"
                      name="pregunta33"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta33", "3", "Realizas el análisis de los impactos teniendo en cuenta tus grupos de interés.")}
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
                        Realizas el análisis de los impactos teniendo en cuenta
                        tus grupos de interés.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta33_opcion4"
                      name="pregunta33"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta33", "4",  "Para los impactos analizados, cuentas con un plan de acción para su mitigación.")}
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
                        Para los impactos analizados, cuentas con un plan de
                        acción para su mitigación.
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
                  34. ¿Realiza medición de su huella de carbono?{" "}
                  <span className="italic font-normal">
                    Huella de carbono; Indicador que busca medir el impacto
                    ambiental de una organización en cómo esta aporta en la
                    generación de gases efecto invernadero. Alcance 1: Emisiones
                    directas de Gases Efecto Invernadero, provenientes de
                    fuentes propias o controladas por la empresa usadas en la
                    producción de un bien o servicio (Ejemplo: Consumo de
                    combustibles en calderas, hornos y vehículos que genera la
                    entidad) Alcance 2: Emisiones indirectas de Gases Efecto
                    Invernadero, provenientes de energía comprada por la empresa
                    usada en la producción de un bien o servicio (Ejemplo:
                    Consumo de electricidad) Alcance 3: Emisiones indirectas
                    provenientes de fuentes que no son propiedad ni están
                    controladas por la empresa (Ej: Transporte de los
                    colaboradores, viajes de negocio, transporte de insumos de
                    proveedores, disposición de residuos){" "}
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta34_opcion1"
                      name="pregunta34"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta34", "1", "No mide la huella de carbono o no sabe qué medirla")}
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
                      No mide la huella de carbono o no sabe cómo medirla
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta34_opcion2"
                      name="pregunta34"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta34", "2", "Mide la huella de carbono de sus emisiones directas (alcance 1). ")}
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
              <NavLink to={"/home/modelo-operativo"}>
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
