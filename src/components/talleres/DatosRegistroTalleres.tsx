import React, { ReactNode, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import GetDataId from "../../libs/GetDataId";
import { Taller } from "./selecciones/Taller";
import "../../styles/SelectStyle.css";
import FechaFetch from "../../libs/FechaFetch";
import { enviarRespuestasTalleres } from "../../libs/RegistroTalleresService";
import { useNavigate } from "react-router-dom";
import enviarCorreosTalleres from "../../libs/AutomatizacionTalleres";

interface UserData {
  Nombre: string;
  NombreEmpresa: string;
  CorreoElectronico: string;
  Celular: string;
  Cargo: string;
}

interface TallerData {
  Mes: string;
  Vertical: string;
  Iniciales: string;
  Taller: string;
  Experto: string;
  Fecha: string;
  Hora: string;
}

interface Fecha {
    Taller: string;
    Fecha: string;
    Hora: string;
}

export function DatosRegistroTalleres() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState<UserData | null>(null);
  const [digitoVerificacion, setDigitoVerificacion] = useState("");
  const [fechasFiltradas, setFechasFiltradas] = useState<TallerData[]>([]);

  const [primerArea, setPrimerArea] = useState("");
  const [segundaArea, setSegundaArea] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadingGif =
    "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/d7d9d0b5-629c-449a-9e69-d1f2178fe8d6.gif";

  const areasOptions = [
    { value: "Talento Humano", label: "Talento Humano" },
    {
      value: "Tecnología y Transformación Digital",
      label: "Tecnología y Transformación Digital",
    },
    { value: "Mercado", label: "Mercado" },
    { value: "Financiera", label: "Financiera" },
    { value: "Legal", label: "Legal" },
    { value: "Modelo Operativo", label: "Modelo Operativo" },
    { value: "Ambiental", label: "Ambiental" },
  ];

  useEffect(() => {
    if (responseData) {
      setValue("nombreCompleto", responseData.Nombre);
      setValue("nombreEmpresa", responseData.NombreEmpresa);
      setValue("correoElectronico", responseData.CorreoElectronico);
      setValue("celular", responseData.Celular);
      setValue("cargo", responseData.Cargo);
      setValue("numeroDocumento", inputValue);
    }
  }, [responseData, setValue, inputValue]);

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

  const handleBlur = async () => {
    try {
      const response = await GetDataId(inputValue);
      if (response) {
        setResponseData(response);
      } else {
        setResponseData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAreasChange = async () => {
    setLoading(true);
    try {
      const response = await FechaFetch();
      const currentDate = new Date().toISOString();
      const filteredFechas = response.filter(
        (fecha: TallerData) => new Date(fecha.Fecha) > new Date(currentDate)
      );
      const filteredByAreas = filteredFechas.filter(
        (fecha: TallerData) =>
          fecha.Vertical === primerArea || fecha.Vertical === segundaArea
      );
      setFechasFiltradas(filteredByAreas);
    } catch (error) {
      console.error("Error al enviar la petición:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const {
      nombreCompleto,
      correoElectronico,
      numeroDocumento,
      nombreEmpresa,
    } = data;

    const selectedFechas = fechasFiltradas.map((fecha) => ({
      Taller: fecha.Taller,
      Fecha: fecha.Fecha,
      Hora: fecha.Hora.toUpperCase(),
    }));

    const selectedFechasCorreos: {[key: string]: string } | null = fechasFiltradas.reduce(
      (acc: {[key: string]: string}, fecha: Fecha, index) => {
        const tallerKey = `taller${index + 1}`;
        acc[tallerKey] =  fecha.Taller,
        acc[`fecha${index + 1}`] = fecha.Fecha,
        acc[`hora${index + 1}`] = formatHora(fecha.Hora)
        return acc;
      },
      {}
    );

    function formatHora(hora: string): string {
      let [hours, minutes] = hora.split(":");
      let period = "AM";

      let parsedHours = parseInt(hours);
      if (parsedHours >= 12) {
        period = "PM";
        if (parsedHours > 12) parsedHours -= 12;
      } else if (parsedHours === 0) {
        parsedHours = 12;
      }

      return `${parsedHours}:${minutes} ${period}`;
    }

    const requestBody = {
      numeroDocumento,
      nombreCompleto,
      correoElectronico,
      nombreEmpresa,
      selectedFechas,
    };

    const requestBodyCorreos = {
      numeroDocumento,
      nombreCompleto,
      correoElectronico,
      nombreEmpresa,
      selectedFechasCorreos,
    };

    try {
      const apiResponse = await enviarRespuestasTalleres(requestBody);
      const apiResponse2 = await enviarCorreosTalleres(requestBodyCorreos);
      if (apiResponse && apiResponse2) {
        navigate("/talleres/thank-you-talleres");
      }
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    } finally {
      setLoading(false);
    }
  };

  const tipoDocumento = watch("tipoDocumento");

  const handleCedulaChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputValue(value);
    setValue("numeroDocumento", value);
  };

  useEffect(() => {
    if (primerArea && segundaArea) {
      handleAreasChange();
    }
  }, [segundaArea]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-[#DFEAFF] px-10 sm:px-10 py-10 xs:px-10 md:w-full md:h-auto md:px-20 lg:px-10 xl:px-[110px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[#2D6DF6] font-bold text-[18px] text-center lg:text-[32px] md:text-[32px] md:text-left lg:text-left">
            ¡Da el primer paso!
          </h2>
          <p className="mt-5">
            Inscríbete a los talleres a los que deseas participar e inicia el
            camino de tu ruta de competitividad empresarial.
          </p>

          <div className="mt-3 flex flex-col">
            <label htmlFor="tipoDocumento" className="font-semibold">
              1. Tipo de documento:
            </label>
            <Controller
              name="tipoDocumento"
              control={control}
              rules={{ required: "El tipo de documento es requerido" }}
              render={({ field }) => (
                <select
                  id="tipoDocumento"
                  defaultValue={"seleccionar"}
                  className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
                  {...field}
                >
                  <option value="seleccionar" disabled>
                    Selecciona una opción
                  </option>
                  <option value="nit">NIT</option>
                  <option value="cedula">CÉDULA</option>
                </select>
              )}
            />
            {errors.tipoDocumento && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.tipoDocumento.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label htmlFor="numeroDocumento" className="font-semibold">
              2. Número de documento:
            </label>
            <input
              id="numeroDocumento"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
              type="text"
              placeholder="Ej. 123456789"
              value={inputValue}
              onChange={
                tipoDocumento === "cedula"
                  ? handleCedulaChange
                  : handleNumeroDocumentoChange
              }
              onBlur={handleBlur}
            />
          </div>

          {tipoDocumento === "nit" && (
            <div className="mt-3 flex flex-col">
              <label htmlFor="nit" className="font-semibold">
                Dígito de verificación:
              </label>
              <input
                id="nit"
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-5 bg-gray-200 cursor-auto"
                type="text"
                value={digitoVerificacion}
                readOnly
              />
            </div>
          )}

          <div className="mt-3 flex flex-col">
            <label htmlFor="nombreCompleto" className="font-semibold">
              3. Nombre completo:
            </label>
            <input
              id="nombreCompleto"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
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
                  value: 30,
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
            <label htmlFor="nombreEmpresa" className="font-semibold">
              4. Nombre de la empresa:
            </label>
            <input
              id="nombreEmpresa"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
              type="text"
              placeholder="Ingresa el nombre de la empresa"
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
            <label htmlFor="correoElectronico" className="font-semibold">
              5. Correo electrónico:
            </label>
            <input
              id="correoElectronico"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
              type="email"
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
            <label htmlFor="celular" className="font-semibold">
              6. Número de celular:
            </label>
            <input
              id="celular"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
              type="tel"
              placeholder="Ingresa tu celular"
              pattern="[0-9]{10}"
              {...register("celular", {
                required: {
                  value: true,
                  message: "El celular es requerido",
                },
                maxLength: {
                  value: 10,
                  message: "El celular debe tener 10 digitos",
                },
                minLength: {
                  value: 10,
                  message: "El celular debe tener 10 digitos",
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
            <label htmlFor="cargo" className="font-semibold">
              7. Cargo:
            </label>
            <input
              id="cargo"
              className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
              type="text"
              placeholder="Ingresa tu cargo"
              {...register("cargo", {
                required: {
                  value: true,
                  message: "El cargo es requerido",
                },
                maxLength: {
                  value: 50,
                  message: "El cargo no debe superar los 30 caracteres",
                },
              })}
            />
            {errors.cargo && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.cargo.message as ReactNode}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <label htmlFor="primerArea" className="font-semibold">
              8. Selecciona la primera área en la que quieres asistir al espacio
              grupal. Recuerda que debe coincidir con tu ruta de competitividad:
            </label>
            <Controller
              name="primerArea"
              control={control}
              rules={{ required: "Selecciona una opción" }}
              render={({ field }) => (
                <select
                  id="primerArea"
                  defaultValue={"seleccionar"}
                  className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setPrimerArea(e.target.value);
                  }}
                >
                  <option value="seleccionar" disabled>
                    Selecciona una opción
                  </option>
                  {areasOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label htmlFor="segundaArea" className="font-semibold">
              9. Selecciona la segunda área en la que quieres asistir al espacio
              grupal. Recuerda que debe coincidir con tu ruta de competitividad:
            </label>
            <Controller
              name="segundaArea"
              control={control}
              rules={{ required: "Selecciona una opción" }}
              render={({ field }) => (
                <select
                  id="segundaArea"
                  defaultValue={"seleccionar"}
                  className="h-[40px] rounded-xl border border-[#2D6DF6] px-3"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setSegundaArea(e.target.value);
                  }}
                >
                  <option value="seleccionar" disabled>
                    Selecciona una opción
                  </option>
                  {areasOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className="mt-10 text-[#2D6DF6] text-[24px] text-center md:text-left lg:text-left lg:text-[32px] font-[700]">
            {loading ? (
              <div className="flex justify-center px-[120px] py-[70px]">
                <div className="spinner">
                  <div className="spinner-ring"></div>
                  <img src={loadingGif} alt="Imagen de condor" />
                </div>
              </div>
            ) : (
              fechasFiltradas.length > 0 && (
                <div>
                  <h3>Selección talleres:</h3>
                  <div className="mt-5">
                    <Taller responseFecha={fechasFiltradas} />
                  </div>
                  <div className="flex justify-center py-[50px]">
                    <button
                      type="submit"
                      className="h-[56px] w-[250px] rounded-[28px] bg-[#2D6DF6] text-white text-[18px] font-[700]"
                      disabled={loading}
                    >
                     {loading ? "Enviando..." : "Quiero inscribirme"}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </form>
      </section>
    </>
  );
}
