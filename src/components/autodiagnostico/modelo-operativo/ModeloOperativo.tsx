import { useEffect, useRef, useState } from "react";
import "../../../styles/RadioButton.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function ModeloOperativo({ respuestasSeleccionadas, respuestasDescripciones }: any) {
  const navigate = useNavigate();
  const [mostrarError, setMostrarError] = useState(false);

  const [respuestas, setRespuestas] = useState({
    pregunta28: "",
    pregunta29: "",
    pregunta30: "",
  });

  const [descripciones, setDescripciones] = useState({
    pregunta28: "",
    pregunta29: "",
    pregunta30: "",
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
      respuestas.pregunta28 &&
      respuestas.pregunta29 &&
      respuestas.pregunta30
    ) {
      respuestasDescripciones(descripciones)
      respuestasSeleccionadas(respuestas);
      navigate("/home/ambiental");
    } else {
      setMostrarError(true);
    }
  };

  const section8Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section8Ref.current) {
      section8Ref.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <section
        ref={section8Ref}
        className="bg-[#F8F8F8] px-[20px] py-[40px] min-w-screen sm:px-[130px] sm:py-[70px] sm:h-[auto]"
      >
        <div className="sectionModeloOperativo" id="section8">
          <h2 className="text-[#2D6DF6] text-center font-[700] text-[32px] sm:text-left mb-3">
            Modelo operativo
          </h2>
          <p className="mt-3  text-center text-lg sm:text-left">
            Capacidad para generar eficiencia, confiabilidad, gestionar riesgos
            y dar continuidad a la operación.
          </p>
          <form id="formSection3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 mt-5 sm:mt-5">
              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  28. ¿Cuentas con lineamientos para la gestión y control de los
                  riesgos identificados en tu empresa?{" "}
                  <span className="italic font-normal">
                    (El Gobierno de Riesgos es el conjunto de estrategias,
                    normas, estructuras y procesos que debe tener definida la
                    organización para identificar riesgos y oportunidades,
                    monitorear tendencias, cuantificar la exposición al riesgo y
                    definir la cantidad de riesgos que está dispuesta a asumir
                    la organización (apetito al riesgo) así como los límites y
                    niveles de atribución de los cargos estratégicos.)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta28_opcion1"
                      name="pregunta28"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta28", "1", "La gestión de riesgos se limita a la identificación y tratamiento de los riesgos exigidos por la normatividad que le aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta28_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La gestión de riesgos se limita a la identificación y tratamiento de los riesgos exigidos por la normatividad que le aplica.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta28_opcion2"
                      name="pregunta28"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta28", "2", "Tiene una estructura de gobierno de riesgos definida y están asignados los roles y responsabilidades de cargos involucrados en la gestión de riesgos.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta28_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Tiene una estructura de gobierno de riesgos definida y están asignados los roles y responsabilidades de cargos involucrados en la gestión de riesgos.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta28_opcion3"
                      name="pregunta28"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta28", "3", "La gestión de riesgos está inmersa en todos los procesos y se rige bajo las definiciones del gobierno y válida la gestión de riesgos operativos, más que la gestión de riesgos estrategicos.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta28_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La gestión de riesgos está inmersa en todos los procesos y se rige bajo las definiciones del gobierno y política de riesgos. Existe alineación entre gestión de riesgos operativos, tácticos y estratégicos.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  29. ¿Cuenta con directrices de inventarios en la empresa?   <span className="italic font-normal">
                  (Política de inventarios: Contempla las instrucciones o directrices implementadas por la empresa para la gestión de sus recursos, su propósito es evitar o reducir pérdidas por daños o minimizar costos de inventario. Es decir, estas políticas sirven para definir cómo se va a administrar el inventario, tanto en el nivel stock, su ubicación, su valoración, entre otros aspectos. Un inventario son las existencias que tiene una compañía, ya sea en materia prima, productos en proceso y productos finales que se comercializarán al cliente o consumidor.)
                  </span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta29_opcion1"
                      name="pregunta29"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta29", "1", "No se cuenta con alguna clase de registro, conexión o sistema para administrar inventarios.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta29_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      No se cuenta con alguna clase de registro, política o sistema para administrar inventarios.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta29_opcion2"
                      name="pregunta29"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta29", "2", "La empresa cuenta con una aplicación de inventarios")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta29_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa cuenta con una política de inventarios 
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta29_opcion3"
                      name="pregunta29"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta29", "3", "La empresa cuenta con una aplicación de inventarios conectada a las ventas proyectadas.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta29_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa cuenta con una política de inventarios conectada a las ventas proyectadas.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta29_opcion4"
                      name="pregunta29"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta29", "4", "La empresa cuenta con una aplicación de inventarios conectada a la capacidad de los proveedor.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta29_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa cuenta con una política de inventarios conectada a la capacidad de los proveedores.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta29_opcion5"
                      name="pregunta29"
                      value="5"
                      onChange={() => handleRespuestaChange("pregunta29", "5", "No Aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta29_opcion5"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">No Aplica.</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-lg">
                  30. ¿Tienes identificadas las necesidades y recursos para el almacenamiento y transporte de sus bienes?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta30_opcion1"
                      name="pregunta30"
                      value="1"
                      onChange={() => handleRespuestaChange("pregunta30", "1", "No tengo clara la demanda de mis productos y/o servicios, ni se qué almacenarlos.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta30_opcion1"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      No tengo clara la demanda de mis productos y/o servicios, ni se cómo almacenarlos.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta30_opcion2"
                      name="pregunta30"
                      value="2"
                      onChange={() => handleRespuestaChange("pregunta30", "2", "Adquiero los productos y/o servicios que necesito cuando recibo un pedido por parte de mis clientes.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta30_opcion2"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      Adquiero los productos y/o servicios que necesito cuando recibo un pedido por parte de mis clientes.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta30_opcion3"
                      name="pregunta30"
                      value="3"
                      onChange={() => handleRespuestaChange("pregunta30", "3", "La empresa cuenta con una estrategia definida y divulgada para el almacenamiento y transporte de su mercancía.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta30_opcion3"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">
                      La empresa cuenta con una estrategia definida y divulgada para el almacenamiento y transporte de su mercancía.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pregunta30_opcion4"
                      name="pregunta30"
                      value="4"
                      onChange={() => handleRespuestaChange("pregunta30", "4", "No Aplica.")}
                      className="form-radio h-4 w-4 text-blue-600 visually-hidden"
                    />
                    <label
                      htmlFor="pregunta30_opcion4"
                      className="ml-2 cursor-pointer"
                    >
                      <div className="radio-button">
                        <div className="radio-button-dot"></div>
                      </div>
                      <span className="ml-2">No Aplica.</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-around items-center">
              <div className="buttons flex justify-between gap-10">
                <NavLink to={"/home/legal"}>
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
