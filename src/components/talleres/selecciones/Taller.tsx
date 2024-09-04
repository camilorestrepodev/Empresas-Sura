import {Constants} from "../../../Constants.ts";

interface TallerProps {
  responseFecha: Array<{
    Mes: string;
    Vertical: string;
    Iniciales: string;
    Taller: string;
    Experto: string;
    Fecha: string;
    Hora: string;
  }>;
}

export function Taller({ responseFecha }: TallerProps) {
  const verticales = [
    ...new Set(responseFecha.map((taller) => taller.Vertical)),
  ];

  const images = [
    { nombre: "Talento Humano", path: Constants.IMAGES_VERTICALES.TH },
    { nombre: "Legal", path: Constants.IMAGES_VERTICALES.L },
    { nombre: "Mercado", path: Constants.IMAGES_VERTICALES.M },
    { nombre: "Ambiental", path: Constants.IMAGES_VERTICALES.A },
    { nombre: "Financiero", path: Constants.IMAGES_VERTICALES.F },
    { nombre: "Modelo Operativo", path: Constants.IMAGES_VERTICALES.MO },
    {
      nombre: "Tecnología y transformación digital",
      path: Constants.IMAGES_VERTICALES.TTD,
    },
  ];

  return (
    <>
      {verticales.map((vertical, index) => {
        const talleresVertical = responseFecha.filter(
          (taller) => taller.Vertical === vertical
        );

        const imagenVertical = images.find((img) => img.nombre.toLowerCase() === vertical.toLowerCase());

        return (
          <article
            key={index}
            className="bg-[#F8F8F8] py-12 px-8 md:py-10 rounded-2xl md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:py-0 mb-10 gap-10"
          >
            <div className="flex-shrink-0 flex flex-col items-center">
              {imagenVertical && (
                <img
                  alt={`Imagen ${vertical}`}
                  className="w-48 md:w-64 lg:w-96"
                  src={imagenVertical.path}
                />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl text-[#0033A0] font-semibold">
                {vertical}
              </h1>
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor={`taller1-${vertical}`}
                    className="text-[#3F3F41] text-lg"
                  >
                    {talleresVertical[0].Iniciales} - Selecciona el primer taller al que deseas
                    registrarte de esta área*
                  </label>
                  <select
                    id={`taller1-${vertical}`}
                    defaultValue={"seleccionar"}
                    className="text-[16px] text-gray-500 rounded-lg h-12 border border-gray-300 mt-1 px-3 w-full max-w-md md:w-[350px] lg:w-[auto]"
                  >
                    <option value="seleccionar">Selecciona una opción</option>
                    {talleresVertical.slice(0, 2).map((taller, index) => (
                      <option
                        key={index}
                        value={taller.Taller}
                        className="text-gray-500 text-sm md:text-base lg:text-lg truncate"
                      >
                        {taller.Taller}, {new Date(taller.Fecha).toLocaleDateString()}, {taller.Hora.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor={`taller2-${vertical}`}
                    className="text-[#3F3F41] text-lg"
                  >
                    {talleresVertical[0].Iniciales} - Selecciona el segundo taller al que deseas
                    registrarte de esta área*
                  </label>
                  <select
                    id={`taller2-${vertical}`}
                    defaultValue={"seleccionar"}
                    className="text-[16px] text-gray-500 rounded-lg h-12 border border-gray-300 mt-1 px-3 w-full max-w-md md:w-[350px] lg:w-[auto]"
                  >
                    <option value="seleccionar">Selecciona una opción</option>
                    {talleresVertical
                      .slice(0, 2)
                      .sort(
                        (a, b) =>
                          new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime()
                      )
                      .map((taller, index) => (
                        <option
                          key={index}
                          value={taller.Taller}
                          className="text-gray-500 text-sm md:text-base lg:text-lg truncate lg:w-[500px]"
                        >
                          {taller.Taller}, {new Date(taller.Fecha).toLocaleDateString()}, {taller.Hora.toUpperCase()}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
