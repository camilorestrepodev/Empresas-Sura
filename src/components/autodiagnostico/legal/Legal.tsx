import { useState, useEffect, useRef } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
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
      navigate("/home/modelo-operativo");
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
            Capacidad para desarrollar el negocio dentro de un marco legal y
            normativo eficiente.​​​
          </p>
          <form id="formSection3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  25. ¿La empresa está formalizada?
                  <span className="italic font-normal">
                    (Mantiene actualizado el registro de Cámara y Comercio,
                    cuenta con los registros obligatorios dependiendo del tipo
                    de negocio, por ejemplo si es IPS, registro de habilitación
                    en salud. Realiza asamblea de socios y/o accionistas
                    mínimamente una vez al año.)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion1"
                      name="pregunta25"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta25", "1", "La empresa no está formalizada.")}
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
                        La empresa no está formalizada.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion2"
                      name="pregunta25"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta25", "2", "La empresa cuenta con algunos de los requisitos para estar formalizada.")}
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
                        La empresa cuenta con algunos de los requisitos para
                        estar formalizada.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion3"
                      name="pregunta25"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta25", "3", "La empresa cuenta con todos los requisitos para estar formalizada.")}
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
                        La empresa cuenta con todos los requisitos para estar
                        formalizada.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta25_opcion4"
                      name="pregunta25"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta25", "4", "No Aplica (Es una persona natural y/o independiente)")}
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
                        No Aplica (Es una persona natural y/o independiente)
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  26. ¿La empresa realiza los contratos por escrito con los
                  requisitos esenciales: objeto claro, consentimiento de las
                  partes y motivo por el cual se celebra el mismo?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta26_opcion1"
                      name="pregunta26"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta26", "1", "Todos sus contratos los realiza de manera verbal y sin dejar claras las obligaciones y derechos de las partes.")}
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
                        Todos sus contratos los realiza de manera verbal y sin
                        dejar claras las obligaciones y derechos de las partes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta26_opcion2"
                      name="pregunta26"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta26", "2", "La empresa realiza sus contratos unos de manera verbal y otros de manera escrita, dejando claro las obligaciones de las partes.")}
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
                        La empresa realiza sus contratos unos de manera verbal y
                        otros de manera escrita, dejando claro las obligaciones
                        de las partes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta26_opcion3"
                      name="pregunta26"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta26", "3", "La empresa realiza sus contratos por escrito dejando claro las obligaciones de las partes.")}
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
                        La empresa realiza sus contratos por escrito dejando
                        claro las obligaciones de las partes.{" "}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  27. ¿Conoce las condiciones de calidad y garantía legal de sus
                  productos y/o servicios que debe ofrecer as sus clientes? Ley
                  1480 de 2011, estatuto del consumidor 1. La empresa debe
                  otorgar una garantía 2. Tener claro las condiciones de acceso
                  a la garantía 3. Establecer los tiempos para efectuar la
                  garantia 4. Establecer los canales
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta27_opcion1"
                      name="pregunta27"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta27", "1", "La empresa no tiene claridad sobre las obligaciones de sus productos y/o servicios para que sean consumidos por sus clientes")}
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
                      La empresa no tiene claridad sobre las condiciones de calidad y seguridad de sus productos y/o servicios para que sean consumidos por sus clientes{" "}
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta27_opcion2"
                      name="pregunta27"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta27", "2", "La empresa otorga garantía de sus productos y/o servicios pero no tiene claro si estas cumplen con las obligaciones legales")}
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
                      La empresa otorga garantía de sus productos y/o servicios pero no tiene claro si estas cumplen con las condiciones legales
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta27_opcion3"
                      name="pregunta27"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta27", "3", "La empresa conoce la obligaciones de sus productos y/o servicios y otorga a sus clientes la garantía legal")}
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
                      La empresa conoce la calidad de sus productos y/o servicios y otorga a sus clientes la garantía legal
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-around items-center">
              <div className="flex justify-between gap-10">
                <NavLink to={"/home/financiera"}>
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
