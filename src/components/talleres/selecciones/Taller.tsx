
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
    { nombre: "Talento Humano", path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/b3430a9c-e034-4916-8b6c-2714c8984a64.png" },
    { nombre: "Legal", path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/2101d10f-ce5c-4ac1-bc05-5c87617117cc.png" },
    { nombre: "Mercado", path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/b58f1604-7493-42ee-b0c3-1d68ea112e6e.png" },
    { nombre: "Ambiental", path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/91a201a0-ef76-4d25-b427-961a1c3605ea.png" },
    { nombre: "Financiera", path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/9b2a0cbd-fd26-413c-bdcc-a5f24cb696eb.png" },
    { nombre: "Modelo Operativo", path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/83d47a2f-d27e-430f-85ac-67b292871122.png" },
    {
      nombre: "Tecnología y Transformación Digital",
      path: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/0da52637-dd2b-437c-aaa0-e3ae09d8e3c5.png",
    },
  ];

  return (
    <>
      {verticales.map((vertical, index) => {
        const talleresVertical = responseFecha.filter(
          (taller) => taller.Vertical === vertical
        );

        const imagenVertical = images.find((img) => img.nombre === vertical);

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
