import classNames from "classnames";
import { useLocation } from "react-router-dom";

export default function Banner({
  titulo,
  descripcion,
  fondo,
  fondoMovil,
}: {
  titulo: string;
  descripcion: string;
  fondo: string;
  fondoMovil: string;
}) {
  const location = useLocation();

  const tituloClasses = classNames({
    "bg-titulo-xxxs bg-titulo-xxs bg-titulo-xs text-white font-bold xsm:text-3xl smm:text-4xl mb-4 sm:w-6/12 md:text-left md:text-2xl md:w-6/12 lgm:w-7/12 lgm:text-[28px] lg:w-7/12 lg:text-3xl xl:w-8/12 xl:text-[42px] 2xl:text-7xl 2xl:w-7/12":
      location.pathname === "/home/terminos-condiciones" ||
      location.pathname === "/home/datos-registro" ||
      location.pathname === "/home/talento-humano" ||
      location.pathname === "/home/mercados" ||
      location.pathname === "/home/modelo-operativo" ||
      location.pathname === "/home/legal" ||
      location.pathname === "/home/ambiental" ||
      location.pathname === "/home/financiera" ||
      location.pathname === "/home/tecnologia-transformacion-digital",
    "talleres-titulo-xxxs talleres-titulo-xxs talleres-titulo-xs text-[#2D6DF6] font-bold mb-4 sm:w-6/12 md:text-left md:text-2xl md:w-[300px] lgm:w-6/12 lgm:text-3xl lgm:px-0 lg:w-5/12 lg:text-4xl xl:w-/12 xl:text-4xl 2xl:text-6xl 2xl:w-6/12 xl:leading-[60px]":
      location.pathname === "/talleres/datos-registro-talleres" ||
      location.pathname === "/talleres/thank-you-talleres",
    "text-[#0033A0] text-2xl mb-4 sm:w-6/12 md:text-left md:text-3xl md:w-[380px] lg:w-5/12 lg:text-4xl xl:w-6/12 xl:text-5xl 2xl:text-6xl 2xl:w-[850px]":
      location.pathname === "/asistencia/registro-asistencia" ||
      location.pathname === "/asistencia/thank-you-asistencia",
    "titulo-asistencia-xxxs titulo-asistencia-xxs titulo-asistencia-xs text-white font-bold mb-4 sm:w-6/12 md:text-left md:text-4xl md:w-6/12 lg:w-5/12 lg:text-4xl xl:w-6/12 xl:text-6xl 2xl:mt-10 2xl:text-7xl 2xl:w-[850px] 2xl:text-7xl 2xl:w-[850px]":
      location.pathname === "/home/resultados-autodiagnostico",
  });

  const descripcionClasses = classNames({
    "descripcion-xxxs descripcion-xxs descripcion-xs text-white xsm:text-2xl smm:text-3xl mb-4 sm:w-6/12 sm:text-xl md:text-left md:text-xl md:w-6/12 lg:w-7/12 lg:text-2xl xl:w-7/12 xl:text-3xl 2xl:text-4xl 2xl:w-5/12":
      location.pathname === "/home/terminos-condiciones" ||
      location.pathname === "/home/datos-registro" ||
      location.pathname === "/home/talento-humano" ||
      location.pathname === "/home/mercados" ||
      location.pathname === "/home/modelo-operativo" ||
      location.pathname === "/home/legal" ||
      location.pathname === "/home/ambiental" ||
      location.pathname === "/home/financiera" ||
      location.pathname === "/home/tecnologia-transformacion-digital",
    "text-[#0033A0] descripcion-talleres-xxxs descripcion-talleres-xxs descripcion-talleres-xs font-bold mb-4 sm:w-6/12 md:text-left md:text-4xl md:w-[400px] lg:w-5/12 lg:text-4xl xl:w-6/12 xl:text-6xl 2xl:text-7xl 2xl:w-7/12":
      location.pathname === "/talleres/datos-registro-talleres" ||
      location.pathname === "/talleres/thank-you-talleres",
    "text-[#0033A0] text-2xl font-bold mb-4 sm:w-6/12 md:text-left md:text-4xl md:w-7/12 lg:w-5/12 lg:text-4xl xl:absolute xl:w-5/12 xl:text-6xl 2xl:text-7xl 2xl:w-[620px]":
      location.pathname === "/asistencia/registro-asistencia" ||
      location.pathname === "/asistencia/thank-you-asistencia",
  });

  const containerClasses = classNames({
    "absolute text-center px-[5%] container-xxs container-xs container-xxxs xsm:top-[60%] smm:top-[60%] sm:top-[15%] sm:left-0 sm:text-left sm:px-10 md:top-[30%] md:left-0 md:px-16 md:text-left lgm:top-[35%] lg:top-[32%]  lg:px-32 lg:left-0 lg:text-left xl:text-left xl:top-[40%] xl:px-32 xl:text-left 2xl:px-32 2xl:top-[40%]":
      location.pathname === "/home/terminos-condiciones" ||
      location.pathname === "/home/datos-registro" ||
      location.pathname === "/home/talento-humano" ||
      location.pathname === "/home/mercados" ||
      location.pathname === "/home/modelo-operativo" ||
      location.pathname === "/home/legal" ||
      location.pathname === "/home/ambiental" ||
      location.pathname === "/home/financiera" ||
      location.pathname === "/home/tecnologia-transformacion-digital",
    "absolute talleres-container-xxxs talleres-container-xxs talleres-container-xs text-center sm:top-[20%] sm:left-0 sm:text-left sm:px-10 md:top-[35%] md:left-0 md:px-16 md:text-left lg:top-[30%] lg:px-32 lg:left-0 lg:text-left xl:text-left xl:top-[30%] xl:px-28 xl:text-left  2xl:px-32":
      location.pathname === "/talleres/datos-registro-talleres" ||
      location.pathname === "/talleres/thank-you-talleres",
    "absolute asistencia-container-xxxs asistencia-container-xxs asistencia-container-xs text-center px-[5%] sm:top-[20%] sm:left-0 sm:text-left sm:px-10 md:top-[25%] md:left-0 md:px-16 md:text-left lg:top-[30%] lg:px-32 lg:left-0 lg:text-left xl:text-left xl:top-[25%] xl:px-32 xl:text-left 2xl:px-32":
      location.pathname === "/asistencia/registro-asistencia" ||
      location.pathname === "/asistencia/thank-you-asistencia",
    "absolute text-center top-[70%] px-[5%] sm:top-[20%] sm:left-0 sm:text-left sm:px-10 md:top-[25%] md:left-0 md:px-16 md:text-left lg:top-[30%] lg:px-32 lg:left-0 lg:text-left xl:text-left xl:top-[40%] xl:px-322xl:text-left 2xl:px-32":
      location.pathname === "/home/resultados-autodiagnostico",
  });

  return (
    <div className="relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="md:block lg:block hidden sm:block">
        <img
          src={fondo}
          alt="formulario"
          className="w-full h-full max-w-full"
        />
      </div>
      {/* Imagen para dispositivos móviles */}
      <div className="block sm:hidden md:hidden lg:hidden">
        <img
          src={fondoMovil}
          alt="formulario móvil"
          className="w-full h-full max-w-full"
        />
      </div>
      {/* Contenido principal */}
      <div className={classNames(containerClasses)}>
        <h1 className={classNames(tituloClasses)}>{titulo}</h1>
        <p className={classNames(descripcionClasses)}>{descripcion}</p>
      </div>
    </div>
  );
}
