import { useEffect, useRef } from "react";

const ThankYouAsistencia = () => {
  const sectionThank = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionThank.current) {
      sectionThank.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <div>
        <section
          ref={sectionThank}
          className=" md:w-full text-center md:h-auto md:px-20 lg:px-[130px] lg:h-[300px] lg:py-[80px]"
        >
          <h2 className="text-[#2D6DF6] font-bold text-[18px] lg:text-[32px] md:text-[32px]">
            ¡Hemos recibido tus datos con éxito!{" "}
          </h2>
        </section>
      </div>
    </>
  );
};

export default ThankYouAsistencia;
