import { useEffect, useRef } from "react";

export function ThankYouRegistro() {
  const sectionThank = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionThank.current) {
      sectionThank.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <section
        ref={sectionThank}
        className="bg-[#DFEAFF] md:w-full text-center md:h-auto md:px-20 lg:px-[130px] lg:h-[300px] lg:py-[80px]"
      >
        <h2 className="text-[#2D6DF6] font-bold text-[18px] lg:text-[32px] md:text-[32px]">
          ¡Gracias por inscribirte a nuestro taller!{" "}
        </h2>
        <p className="mt-10 text-[18px] lg:text-[18px] md:text-[32px]">
          Recuerda estar pendiente de recibir la invitación de conexión al
          espacio.{" "}
        </p>
      </section>

    </>
  );
}
