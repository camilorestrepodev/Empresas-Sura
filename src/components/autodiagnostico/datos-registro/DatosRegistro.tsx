import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Departamentos, Sectores } from "./page.data";
import { DatosRegistroProps, FormData } from "./page.types";
import "../../../styles/SelectStyle.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useFormStore } from "../../../store/formStore";

export default function DatosRegistro({ dataRegistrada }: DatosRegistroProps) {
  const navigate = useNavigate();
  const listaSectores = Sectores().map((sectores) => sectores.name);
  const listaDepartamentos = Departamentos().map(
    (departamentos) => departamentos.name
  );

  const { formData, setFormData } = useFormStore();

  const [numeroDocumento, setNumeroDocumento] = useState<string>("");
  const [digitoVerificacion, setDigitoVerificacion] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: formData
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      setFormData(data);
      dataRegistrada(data);
      navigate("/home/talento-humano");
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    }
  };

  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView();
    }
  }, []);

  const calcularDigitoVerificacion = (nit: string): number => {
    const vpri = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    let y = 0;

    for (let x = 0; x < nit.length; x++) {
      y += parseInt(nit.charAt(x)) * vpri[x % vpri.length];
    }

    const z = y % 11;
    return z > 1 ? 11 - z : z;
  };

  const handleNumeroDocumentoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "");
    setNumeroDocumento(value);
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      calcularYAsignarDigito(numeroDocumento);
    }
  };

  const tipoDocumento = watch("tipoDocumento");

  return (
    <>
      <section
        id="section2"
        ref={section2Ref}
        className="bg-[#F8F8F8] py-[40px] min-w-screen sm:px-[130px] sm:h-[auto] sm:py-[40px]"
      >
        <div>
          <h2 className="text-[#2D6DF6] font-[700] text-[32px] text-center sm:text-left">
            Datos de registro
          </h2>
          <form
            id="htmlFormSection2"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-3 px-[20px]"
          >
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
              {errors.tipoDocumento && (
                <div className="error text-[#E40506] italic text-[14px]">
                  {errors.tipoDocumento.message}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <div className="flex flex-col">
                <label htmlFor="numeroDocumento" className="font-semibold">
                  2. Número de documento:
                </label>
                <Controller
                  name="numeroDocumento"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "El número de documento es requerido",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "El número de documento debe ser numérico",
                    },
                    minLength: {
                      value: 7,
                      message:
                        "El número de documento debe tener al menos 7 dígitos",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "El número de documento no puede tener más de 10 dígitos",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      id="numeroDocumento"
                      className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                      type="text"
                      placeholder="Ej. 123456789"
                      {...field}
                      maxLength={12}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        handleNumeroDocumentoChange(e);
                      }}
                      onKeyDown={handleKeyDown}
                    />
                  )}
                />
                {errors.numeroDocumento && (
                  <div className="error text-[#E40506] italic text-[14px]">
                    {errors.numeroDocumento.message}
                  </div>
                )}
              </div>

              {tipoDocumento === "nit" && (
                <div className="mt-2 flex flex-col">
                  <label htmlFor="nit"> Dígito de verificación:</label>
                  <input
                    id="nit"
                    className="h-[40px] rounded-xl border border-[#2D6DF6] px-5 bg-gray-200 cursor-auto"
                    type="text"
                    placeholder={digitoVerificacion}
                    readOnly
                  />
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <label htmlFor="nombreCompleto" className="font-semibold">
                3. Nombre completo:
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
                    value: 30,
                    message: "El nombre no debe superar los 50 caracteres",
                  },
                })}
              />
              {errors.nombreCompleto && (
                <div className="error text-[#E40506] italic text-[14px]">
                  {errors.nombreCompleto.message}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <label htmlFor="cargo" className="font-semibold">
                4. Cargo:
              </label>
              <input
                id="cargo"
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                type="text"
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
                  pattern: {
                    value: /^[a-zA-Z0-9\s]*$/,
                    message:
                      "El cargo no debe contener símbolos extraños ni iconos",
                  },
                })}
              />
              {errors.cargo && (
                <div className="error text-[#E40506] italic text-[14px]">
                  {errors.cargo.message}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <label htmlFor="nombreEmpresa" className="font-semibold">
                5. Nombre de la empresa:
              </label>
              <input
                id="nombreEmpresa"
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
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
                  {errors.nombreEmpresa.message}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col select-container">
              <label htmlFor="departamentoEmpresa" className="font-semibold">
                6. Departamento de registro empresa:
              </label>
              <select
                id="departamentoEmpresa"
                defaultValue={"seleccionar"}
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                {...register("departamentoEmpresa", {
                  validate: (value) =>
                    value !== "" ||
                    "El departamento de registro de la empresa es requerido",
                })}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {listaDepartamentos.map((departamento) => (
                  <option key={departamento} value={departamento}>
                    {departamento}
                  </option>
                ))}
              </select>
              {errors.departamentoEmpresa && (
                <div className="error text-[#E40506] italic text-[14px]">
                  {errors.departamentoEmpresa.message}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <label htmlFor="sectorEconomico" className="font-semibold">
                7. Sector económico de la empresa:
              </label>
              <select
                id="sectorEconomico"
                defaultValue={"seleccionar"}
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
                {...register("sectorEconomico", {
                  validate: (value) =>
                    value !== "" ||
                    "El sector economico de la empresa es requerido",
                })}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {listaSectores.map((sector, index) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>
            {errors.sectorEconomico && (
              <div className="error text-[#E40506] italic text-[14px]">
                {errors.sectorEconomico.message}
              </div>
            )}

            <div className="mt-3 flex flex-col">
              <label htmlFor="correoElectronico" className="font-semibold">
                8. Correo electrónico:
              </label>
              <input
                id="correoElectronico"
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
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
                  {errors.correoElectronico.message}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <label htmlFor="celular" className="font-semibold">
                9. Celular:
              </label>
              <input
                id="celular"
                className="h-[40px] rounded-xl border border-[#2D6DF6] px-4"
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
                  {errors.celular.message}
                </div>
              )}
            </div>

            <div className="h-[150px] py-[50px] flex justify-center ">
              <div className="flex gap-8">
                <NavLink to="/home/terminos-condiciones">
                  <button
                    type="button"
                    className="text-white mr-3 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]"
                  >
                    Atrás
                  </button>
                </NavLink>

                <div>
                  <button
                    type="submit"
                    className="text-white mr-3 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
