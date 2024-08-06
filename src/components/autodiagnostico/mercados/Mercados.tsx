import { useState, useEffect, useRef } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function Mercados({ respuestasSeleccionadas, respuestasDescripciones }: any) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);

  const [respuestas, setRespuestas] = useState({
    pregunta18: "",
    pregunta19: "",
    pregunta20: "",
    pregunta21: "",
  });

  const [descripciones, setDescripciones] = useState({
    pregunta18: "",
    pregunta19: "",
    pregunta20: "",
    pregunta21: "",
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
      respuestas.pregunta18 &&
      respuestas.pregunta19 &&
      respuestas.pregunta20 &&
      respuestas.pregunta21
    ) {
      respuestasSeleccionadas(respuestas);
      respuestasDescripciones(descripciones);
      navigate("/home/financiera");
    } else {
      setMostrarError(true);
    }
  };
  const section5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section5Ref.current) {
      section5Ref.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <section
        id="section5"
        ref={section5Ref}
        className="bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]"
      >
        <div className="sectionMercado">
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left">
            Mercado
          </h2>
          <p className="mt-3  text-center text-lg sm:text-left">
          Capacidad de leer el entorno, entender los consumidores y desarrollar nuevos segmentos de mercado a partir de propuestas de valor. 
          </p>
          <form id="formSection5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  18. ¿Tu empresa tiene definida una meta que quiere alcanzar este año o los próximos dos años? <span className="italic font-normal"> - Una meta cuantificable, medible y real.  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta18_opcion1"
                      name="pregunta18"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta18", "1", "La empresa no cuenta con una meta clara y aún no ha definido su propósito empresarial")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta18_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa no cuenta con una meta clara y aún no ha definido su propósito empresarial 
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta18_opcion2"
                      name="pregunta18"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta18", "2", "Tiene definido un propósito (misión), visión y valores de la empresa. ")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta18_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Tiene definido un propósito (misión), visión y valores de la compañía. 
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta18_opcion3"
                      name="pregunta18"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta18", "3", "A partir del análisis del entorno, define una meta, los objetivos y las estrategias")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta18_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      A partir del análisis del entorno, define una meta, los objetivos y las estrategias  
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  19. ¿Cuentas con una propuesta de valor clara? Es decir, ¿qué haces diferente por lo que te compran los clientes?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta19_opcion1"
                      name="pregunta19"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta19", "1", "No cuenta con una propuesta de valor pero tiene una oferta básica y clara de productos y servicios para sus clientes")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta19_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      No cuenta con una propuesta de valor pero tiene una oferta básica y clara de productos y servicios para sus clientes
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta19_opcion2"
                      name="pregunta19"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta19", "2", "Sí, tiene definido cuál es el valor (beneficios) que ofrece a sus clientes y los atributos que lo diferencian de sus competidores en el mercado (Propuesta de valor).")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta19_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Sí, tiene definido cuál es el valor (beneficios) que ofrece a sus clientes y los atributos que lo diferencian de sus competidores en el mercado (Propuesta de valor).
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta19_opcion3"
                      name="pregunta19"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta19", "3", "Alinea sus actividades y procesos con su propuesta de valor definiendo un modelo de gobierno claro, flexible y sostenible que comunica a sus grupos de interés. ")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta19_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Alinea sus actividades y procesos con su propuesta de valor definiendo un modelo de negocio claro, flexible y sostenible que comunica a sus grupos de interés. 
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  20. ¿Mides la satisfacción de tus clientes?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta20_opcion1"
                      name="pregunta20"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta20", "1", "La empresa no realiza medición de la satisfacción de clientes")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta20_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa no realiza medición de la satisfacción de clientes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta20_opcion2"
                      name="pregunta20"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta20", "2", "Se ha realizado la medición de satisfacción y experiencia de los clientes durante las diferentes interacciones")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta20_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Se ha realizado la medición de satisfacción y experiencia de los clientes durante las diferentes interacciones.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta20_opcion3"
                      name="pregunta20"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta20", "3", "Cuenta con indicadores para evaluar la satisfacción y la experiencia del cliente y responder de manera inmediata ante el cliente")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta20_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Cuenta con indicadores para evaluar la satisfacción y la experiencia del cliente y responder de manera inmediata ante el cliente. 
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta20_opcion4"
                      name="pregunta20"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta20", "4", "Se hace un seguimiento regular de la satisfacción y experiencia del cliente para determinar estrategias y ajustes en procesos e infraestructura que permitan proveer una mejor experiencia al cliente.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta20_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Se hace un seguimiento regular de la satisfacción y experiencia del cliente para determinar estrategias y ajustes en procesos e infraestructura que permitan proveer una mejor experiencia al cliente.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  21. ¿Cuentas con una identidad de marca?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta21_opcion1"
                      name="pregunta21"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta21", "1","La empresa no tiene una marca definida, más no cuenta con una línea gráfica de identidad.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta21_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa no tiene una marca definida, aún no cuenta con una línea gráfica de identidad. 
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta21_opcion2"
                      name="pregunta21"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta21", "2", "La empresa cuenta con definiciones de elementos básicos de marca; nombre, logotipo, tipografía, color.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta21_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa cuenta con definiciones de elementos básicos de marca; nombre, logotipo, tipografía, color.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta21_opcion3"
                      name="pregunta21"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta21", "3", "La empresa cuenta con un manual de marca, que incluye elementos básicos, estilo y tono de comunicación, definiciones de propósito, valores y atributos de marca, y definiciones claras de uso para íconos, fotografías, ilustraciones, fondos, texturas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta21_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa cuenta con un manual de marca, que incluye elementos básicos, estilo y tono de comunicación, definiciones de propósito, valores y atributos de marca, y definiciones claras de uso para íconos, fotografías, ilustraciones, fondos, texturas.                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-around items-center">
                <div className="flex justify-between gap-10">
                  <NavLink to={"/home/tecnologia-transformacion-digital"} >
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
