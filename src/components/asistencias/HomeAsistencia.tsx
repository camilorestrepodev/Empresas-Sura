import { ReactNode, useEffect, useState } from "react";
import "../../styles/RadioButton.css";
import "../../styles/SelectStyle.css";
import { Controller, useForm, useWatch } from "react-hook-form";
import { enviarRespuestasAsistencia } from "../../libs/RegistroAsistenciaService";
import { useNavigate } from "react-router-dom";
import GetTaller from "../../libs/GetTaller";
import {Constants} from "../../Constants.ts";
import {TipoDocumento} from "../../models/TipoDocumento.ts";

interface TallerData {
  taller: string;
  fecha: string;
}

const HomeAsistencia = () => {
  const {
    register,
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);
  const [digitoVerificacion, setDigitoVerificacion] = useState("");
  const [responseData, setResponseData] = useState<TallerData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [primeraVez, setPrimeraVez] = useState(true);

  const navigate = useNavigate();

  const Star1 = Constants.START1;
  const Star5 = Constants.START5;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    if (selectedOption === "Si") {
      setValue("showEmailInputs", true);
    } else {
      setValue("showEmailInputs", false);
    }
  };

  const handleNumeroDocumentoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputValue(value);
    setValue("numeroDocumento", value);
    calcularYAsignarDigito(value);
  };

  const calcularYAsignarDigito = (nit: string) => {
    if (nit.length >= 8 && nit.length <= 10) {
      const dv = calcularDigitoVerificacion(nit);
      setDigitoVerificacion(dv.toString());
    } else {
      setDigitoVerificacion("");
    }
  };

  const calcularDigitoVerificacion = (nit: string) => {
    const vpri = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    let y = 0;
    for (let x = 0; x < nit.length; x++) {
      y += parseInt(nit.charAt(x)) * vpri[x % vpri.length];
    }
    const z = y % 11;
    return z > 1 ? 11 - z : z;
  };

  const tipoDocumento = watch("tipoDocumento");

  const showEmailInputs = useWatch({
    control,
    name: "showEmailInputs",
    defaultValue: false,
  });

  const onSubmit = async (data: any) => {
    try {
      let digitoVerificacion = "";
      
      if (data.tipoDocumento === TipoDocumento.NIT) {
        digitoVerificacion = calcularDigitoVerificacion(data.numeroDocumento).toString();
      }
      
      const response = await enviarRespuestasAsistencia({ ...data, rating, digitoVerificacion });
      console.log("Respuesta:", response);
      navigate("/asistencia/thank-you-asistencia");
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    }
  };

  useEffect(() => {
    if (!primeraVez) {
      return;
    }
    
    setPrimeraVez(false);
    
    const fetchData = async () => {
      try {
        const response = await GetTaller(inputValue);
        if (response && response.talleres) {
          setResponseData(response.talleres);
        } else {
          setResponseData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const convertirFechaBogota = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    fecha.setHours(fecha.getHours() - 2);
    const opciones: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Bogota',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    return fecha.toLocaleString('es-CO', opciones);
  };

  const handleCedulaChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputValue(value);
    setValue("numeroDocumento", value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="px-10 py-10 md md:w-full md:h-auto md:px-20 lg:px-10 xl:px-[110px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[#2D6DF6] mt-10 font-bold text-[18px] text-center lg:text-[32px] md:text-[32px] md:text-left lg:text-left">
            ¿Asististe a nuestro taller? Cuéntanos más
          </h2>
          <p className="mt-5 text-[18px]">
            Te invitamos a evaluar tu experiencia
          </p>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="tipoDocumento"
              className="font-semibold text-[18px]"
            >
              Tipo de documento: <span className="text-red-600">*</span>
            </label>
            <Controller
              name="tipoDocumento"
              control={control}
              rules={{ required: "El tipo de documento es requerido" }}
              render={({ field }) => (
                <select
                  id="tipoDocumento"
                  defaultValue=""
                  className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                  {...field}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="nit">NIT</option>
                  <option value="cedula">CÉDULA</option>
                </select>
              )}
            />
          </div>

          <div className="mt-3 flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="numeroDocumento" className="font-semibold">
                Número de documento:
              </label>
              <input
                id="numeroDocumento"
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                type="text"
                placeholder="Ej. 123456789"
                value={inputValue}
                onChange={
                  tipoDocumento === "cedula"
                    ? handleCedulaChange
                    : handleNumeroDocumentoChange
                }
              />
            </div>

            {tipoDocumento === "nit" && (
              <div className="mt-2 flex flex-col">
                <label htmlFor="nit"> Dígito de verificación:</label>
                <input
                  id="nit"
                  className="h-[40px] rounded-xl border border-[#2D6DF6] px-4 bg-gray-200 cursor-auto"
                  type="text"
                  placeholder={digitoVerificacion}
                  readOnly
                />
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label className="font-semibold text-[18px]">
              Taller al que asistió <span className="text-red-600">*</span>
            </label>
            <Controller
              name="taller"
              control={control}
              rules={{ required: "El taller es requerido" }}
              render={({ field }) => (
                <select
                  className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                  defaultValue=""
                  {...field}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {responseData.map((data) => {
                    const fechaTaller = `${convertirFechaBogota(data.fecha).toUpperCase()} - ${data.taller}`;
                    return (
                      <option key={fechaTaller} value={fechaTaller}>
                        {fechaTaller}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="nombreCompleto"
              className="font-semibold text-[18px]"
            >
              Nombre de contacto:
            </label>
            <input
              id="nombreCompleto"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
              type="text"
              placeholder="Ej. Martha Gómez"
              {...register("nombreCompleto", {
                required: {
                  value: true,
                  message: "El nombre completo es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "El nombre solo debe contener letras",
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "El nombre no debe superar los 50 caracteres",
                },
              })}
            />
            {errors.nombreCompleto && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.nombreCompleto.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label className="font-semibold text-[18px]">
              Nombre de la empresa: <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
              placeholder="Ej: Empresa"
              {...register("nombreEmpresa", {
                required: {
                  value: true,
                  message: "El nombre de la empresa es requerido",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre de la empresa no debe superar los 50 caracteres",
                },
              })}
            />
            {errors.nombreEmpresa && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.nombreEmpresa.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label className="font-semibold text-[18px]">
              Correo electrónico: <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
              placeholder="Ingresa tu correo"
              {...register("correoElectronico", {
                required: {
                  value: true,
                  message: "El correo electrónico es requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ingresa un correo electrónico valido",
                },
              })}
            />
            {errors.correoElectronico && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.correoElectronico.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label className="font-semibold text-[18px]">
              Número de celular: <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
              placeholder="Ingresa tu celular"
              pattern="[0-9]{10}"
              {...register("celular", {
                required: {
                  value: true,
                  message: "El celular es requerido",
                },
                maxLength: {
                  value: 10,
                  message: "El celular debe tener 10 dígitos",
                },
                minLength: {
                  value: 10,
                  message: "El celular debe tener 10 dígitos",
                },
              })}
            />
            {errors.celular && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.celular.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label className="font-semibold text-[18px]">
              Cargo: <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
              placeholder="Ingresa tu cargo"
              {...register("cargo", {
                required: {
                  value: true,
                  message: "El cargo es requerido",
                },
                maxLength: {
                  value: 50,
                  message: "El cargo no debe superar los 50 caracteres",
                },
              })}
            />
            {errors.cargo && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.cargo.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col ">
            <label className="text-lg font-semibold text-center sm:text-left text-[18px] xxs:text-left">
              ¿Cómo calificas el contenido de este taller?{" "}
              <span className="text-red-600">*</span>
            </label>
            <p className="ml-5 italic xxxs:text-center xxs:text-left">
              Selecciona 1 a 5 estrellas
            </p>
            <div className="mt-2 flex gap-2 sm:items-start xxxs:justify-center xxs:justify-start">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    className="hidden"
                    onChange={() => setRating(value)}
                  />
                  {value <= rating ? (
                    <img
                      src={Star1}
                      alt={`Rating ${value}`}
                      className="cursor-pointer"
                      onClick={() => setRating(value)}
                    />
                  ) : (
                    <img
                      src={Star5}
                      alt={`Rating ${value}`}
                      className="cursor-pointer"
                      onClick={() => setRating(value)}
                    />
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <label className="text-lg font-semibold text-center sm:text-left text-[18px]">
              ¿El espacio aportó herramientas y/o para la gestión de tu
              empresa? <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex gap-20 sm:items-start sm:gap-10 xxxs:gap-5 xxxs:justify-center xxs:justify-start">
              <Controller
                name="aportadoHerramientas"
                control={control}
                defaultValue=""
                rules={{ required: "Esta pregunta es obligatoria" }}
                render={({ field }) => (
                  <>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Si"
                        className="form-radio visually-hidden"
                        checked={field.value === "Si"}
                        onChange={() => field.onChange("Si")}
                      />
                      <span className="radio-button"></span>
                      <span className="ml-5">Si</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No"
                        className="form-radio visually-hidden"
                        checked={field.value === "No"}
                        onChange={() => field.onChange("No")}
                      />
                      <span className="radio-button"></span>
                      <span className="ml-5">No</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No aplica"
                        className="form-radio visually-hidden"
                        checked={field.value === "No aplica"}
                        onChange={() => field.onChange("No aplica")}
                      />
                      <span className="radio-button"></span>
                      <span className="ml-5">No aplica</span>
                    </label>
                  </>
                )}
              />
            </div>
            {errors.aportadoHerramientas && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.aportadoHerramientas.message as ReactNode}
              </div>
            )}
          </div>

          <div className="flex flex-col mt-3">
            <label className="text-lg font-semibold text-center sm:text-left text-[18px] xxs:text-left">
              ¿Te gustaría acceder a la ruta de Platzi?{" "}
              <span className="text-red-500">*</span>
            </label>

            <div className="flex flex-col mt-2 space-y-2">
              <Controller
                name="accesoPlatzi"
                control={control}
                rules={{ required: "Esta pregunta es obligatoria" }}
                render={({ field }) => (
                  <select
                    className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                    defaultValue=""
                    onChange={(e) => {
                      field.onChange(e);
                      handleSelectChange(e);
                    }}
                    value={field.value}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                )}
              />
            </div>
            {errors.accesoPlatzi && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.accesoPlatzi.message as ReactNode}
              </div>
            )}
            {showEmailInputs && (
              <div className="mt-2">
                <label className="block justify-around text-sm font-semibold">
                  Por favor escribe 2 correos electrónicos a los que se
                  otorgarán las licencias de Platzi por 3 meses. Esta licencia
                  se hará efectiva una vez haya asistido a los talleres
                  programados.
                </label>
                <div className="mt-2 flex flex-col sm:flex-row gap-5">
                  <input
                    type="email"
                    placeholder="Edinson@gmail.com"
                    className="w-full h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                    {...register("correoPlatzi1", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Ingresa un correo electrónico valido",
                      },
                    })}
                  />
                  <input
                    type="email"
                    placeholder="Andrea@gmail.com"
                    className="w-full h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                    {...register("correoPlatzi2", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Ingresa un correo electrónico valido",
                      },
                    })}
                  />
                </div>
                {errors.correoPlatzi1 && (
                  <div className="error text-[#E40506] italic text-[14px]">
                    {errors.correoPlatzi1.message as ReactNode}
                  </div>
                )}
                {errors.correoPlatzi2 && (
                  <div className="error text-[#E40506] italic text-[14px]">
                    {errors.correoPlatzi2.message as ReactNode}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label className="font-semibold text-[18px]">
              ¿Quieres conocer cómo podemos acompañarte desde SURA para
              proteger la información que manejas de tu empresa y de tus
              clientes en los medios digitales?{" "}
              <span className="text-red-600">*</span>
            </label>

            <div className="mt-2 flex  gap-20 sm:items-start sm:gap-10 xxxs:justify-center xxs:justify-start">
              <Controller
                name="conocerSURA"
                control={control}
                rules={{ required: "Esta pregunta es obligatoria" }}
                render={({ field }) => (
                  <>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Si"
                        className="form-radio visually-hidden"
                        checked={field.value === "Si"}
                        onChange={() => field.onChange("Si")}
                      />
                      <span className="radio-button"></span>
                      <span className="ml-5">Si</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No"
                        className="form-radio visually-hidden"
                        checked={field.value === "No"}
                        onChange={() => field.onChange("No")}
                      />
                      <span className="radio-button"></span>
                      <span className="ml-5">No</span>
                    </label>
                  </>
                )}
              />
            </div>
            {errors.conocerSURA && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.conocerSURA.message as ReactNode}
              </div>
            )}
          </div>

          <div className="progress-bar mt-4 flex justify-center">
            <button className="w-[150px] h-[56px] bg-[#2D6DF6] text-[16px] text-white font-semibold rounded-[28px] mt-8 hover:bg-blue-700">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default HomeAsistencia;
