
export default function Ruta({
  titulo,
  descripcion,
  subtitulo,
  items,
  img,
  textoPrincipal,
  itemsTextoPrincipal,
  textoSecundario,
  itemsTextoSecundario,
  textoTercero,
  itemsTextoTercero,
  onNext
}: any) {

  return (
    <>
      <article className="h-[auto] w-[100%] mt-10 py-[20px] rounded-[24px] lg:relative lg:w-[1100px] md:py-[20px] md:h-[auto] md:w-[600px] lg:h-[auto] lg:px-[120px]">
        <div className="bg-[#F8F8F8] h-[auto] md:h-[auto] py-[20px] rounded-[24px] lg:flex md:px-[40px] md:py-[40px]">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <div className="px-[30px]">
              <h2 className="text-[#26328C] text-center sm:text-left font-[700] text-[32px] sm:w-[520px]">
                {titulo}
              </h2>
              <p className="mt-3 sm:w-[460px] text-center sm:text-left text-[#26328C] font-[16px]">
                {descripcion}
              </p>
              <h3 className="text-[#26328C] font-[700] text-[18px] mt-3">
                {subtitulo}
              </h3>
              <ul className="text-[#26328C] font-[16px] mt-3">
                {items &&
                  items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>

            <div className="mt-5">
              <button onClick={onNext} className="bg-[#2D6DF6] text-white h-[56px] w-[313px] rounded-[28px] text-[18px] font-[700] mt-5">
                Inscribirme a los talleres
              </button>
            </div>
          </div>
          <div className="ml-10 flex md:justify-center lg:absolute lg:right-0 lg:top-0">
            <img
              src={img}
              alt="ruta imagen"
              className="w-[250px] h-[280px] md:h-[400px] md:w-[400px] lg:w-[500px] lg:h-[500px] xl:w-[420px] xl:h-[500px]"
            />
          </div>
        </div>

        <div className="mt-10 px-[30px] md">
          <div className="mt-5">
            <h2 className="text-[#2D6DF6] text-[28px] font-[700]">
              {textoPrincipal}
            </h2>
            <ul className="font-[16px] mt-3 px-10">
              {itemsTextoPrincipal &&
                itemsTextoPrincipal.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
          <div className="mt-5">
            <h2 className="text-[#2D6DF6] text-[28px] font-[700]">
              {textoSecundario}
            </h2>
            <ul className="font-[16px] mt-3 px-10">
              {itemsTextoSecundario &&
                itemsTextoSecundario.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
          <div className="mt-5">
            <h2 className="text-[#2D6DF6] text-[28px] font-[700]">
              {textoTercero}
            </h2>
            <ul className="font-[16px] mt-3 px-10">
              {itemsTextoTercero &&
                itemsTextoTercero.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
