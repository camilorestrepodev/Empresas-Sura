


import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import {Constants} from "../Constants.ts";

export const Footer = () => {
  const facebook = Constants.FOOTER_IMAGES.FACEBOOK;
  const instagram = Constants.FOOTER_IMAGES.INSTAGRAM;
  const twitter = Constants.FOOTER_IMAGES.TWITTER;
  const linkedin = Constants.FOOTER_IMAGES.LINKEDIN;
  const youtube = Constants.FOOTER_IMAGES.YOUTUBE;


  const [isMobile, setIsMobile] = useState(false);
  const [mostrarLineas, setMostrarLineas] = useState(false);
  const [mostrarSobreNosotros, setMostrarSobreNosotros] = useState(false);
  const [mostrarEncuentranos, setMostrarEncuentranos] = useState(false);
  const [mostrarServicioUsuario, setMostrarServicioUsuario] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="footer bg-white text-light p-10 border-t-[1px] border-[#0033A0] sm:p-6 lg:py-[20px] lg:px-[70px] xl:px-20">
      <div className="mt-8">
        <div className="flex flex-col gap-8 px-4 sm:flex-row md:px-[60px] sm:px-6 lg:px-16 lg:gap-16">
          <div className="max-w-lg mx-auto sm:h">
            <div className="text-center sm:text-left">
              <h2
                className={`text-[#0033A0] text-[18px] font-[600] ${
                  isMobile ? "cursor-pointer" : "cursor-auto"
                }`}
                onClick={() => isMobile && setMostrarSobreNosotros(!mostrarSobreNosotros)}
              >
                Sobre Nosotros
              </h2>
              <div
                className={`flex flex-col mt-4 ${
                  mostrarSobreNosotros ? "block" : "hidden"
                } sm:flex`}
              >
                <a href="https://www.segurossura.com.co/paginas/reportes-copasst-covid19.aspx" className="text-[14px] text-[#0033A0]">Reporte Copasst COVID-19</a>
                <a href="https://www.sura.com/#resources-section" className="text-[14px] text-[#0033A0]">Acerca de SURA</a>
                <a href="https://www.segurossura.com.co/paginas/gobierno-corporativo.aspx" className="text-[14px] text-[#0033A0]">Gobierno corporativo</a>
                <a href="https://www.segurossura.com.co/acerca-de-suramericana" className="text-[14px] text-[#0033A0]">Gestión corporativa</a>
                <a href="https://www.segurossura.com.co/acerca-de-suramericana" className="text-[14px] text-[#0033A0]">Informe de gestión</a>
                <a href="https://www.sura.com/arteycultura/?utm_source=segurossura&utm_medium=menu&utm_campaign=footer-seguros&utm_content=footer-seguros" className="text-[14px] text-[#0033A0]">Vivimos la cultura</a>
                <a href="https://www.segurossura.com.co/landings/reconocimientos-sura/index.html" className="text-[14px] text-[#0033A0]">Reconocimientos SURA</a>
                <a href="https://www.segurossura.com.co/acerca-de-suramericana" className="text-[14px] text-[#0033A0]">Responsabilidad ambiental</a>
                <a href="https://www.segurossura.com.co/paginas/novedades.aspx" className="text-[14px] text-[#0033A0]">Novedades</a>
                <a href="https://www.magneto365.com/co/empresas/seguros-sura" className="text-[14px] text-[#0033A0]">Trabaja con nosotros</a>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto sm:h">
            <div className="text-center sm:text-left">
              <h2
                className={`text-[#0033A0] text-[18px] font-[600] ${
                  isMobile ? "cursor-pointer" : "cursor-auto"
                }`}
                onClick={() => isMobile && setMostrarEncuentranos(!mostrarEncuentranos)}
              >
                Encuéntranos
              </h2>
              <div
                className={`flex flex-col mt-4 ${
                  mostrarEncuentranos ? "block" : "hidden"
                } sm:flex`}
              >
                <a href="https://www.segurossura.com.co/paginas/oficinas-y-sucursales.aspx" className="text-[14px] text-[#0033A0]">Oficinas y sucursales</a>
                <a href="https://www.segurossura.com.co/paginas/salud/sedes/saludsura.aspx" className="text-[14px] text-[#0033A0]">Sedes Salud SURA</a>
                <a href="https://www.segurossura.com.co/paginas/movilidad/autos/centros-de-servicio/inicio.aspx" className="text-[14px] text-[#0033A0]">Centros de servicios Autos SURA</a>
                <a href="https://www.segurossura.com.co/paginas/movilidad/motos/centros-de-servicio/motos.aspx" className="text-[14px] text-[#0033A0]">Centros de servicios Motos SURA</a>
                <a href="https://directoriomedico.segurossura.com.co/#/home" className="text-[14px] text-[#0033A0]">Directorio médico</a>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto sm:h">
            <div className="text-center sm:text-left">
              <h2
                className={`text-[#0033A0] text-[18px] font-[600] ${
                  isMobile ? "cursor-pointer" : "cursor-auto"
                }`}
                onClick={() => isMobile && setMostrarServicioUsuario(!mostrarServicioUsuario)}
              >
                Servicios al usuario
              </h2>
              <div
                className={`flex flex-col mt-4 ${
                  mostrarServicioUsuario ? "block" : "hidden"
                } sm:flex`}
              >
                <a href="https://www.segurossura.com.co/paginas/escribenos.aspx" className="text-[14px] text-[#0033A0]">Escríbenos</a>
                <a href="https://www.segurossura.com.co/paginas/glosario.aspx" className="text-[14px] text-[#0033A0]">Glosario</a>
                <a href="https://www.segurossura.com.co/paginas/preguntas-frecuentes.aspx" className="text-[14px] text-[#0033A0]">Preguntas frecuentes</a>
                <a href="https://www.segurossura.com.co/paginas/casos-eticos.aspx" className="text-[14px] text-[#0033A0]">Línea ética</a>
                <a href="https://www.segurossura.com.co/paginas/atencion-al-consumidor-financiero.aspx" className="text-[14px] text-[#0033A0]">Atención al consumidor financiero</a>
                <a href="https://www.superfinanciera.gov.co/jsp/index.jsf?utm_source=segurossura&utm_medium=menu&utm_campaign=footer-seguros&utm_content=footer-seguros" className="text-[14px] text-[#0033A0]">Superintendencia Financiera</a>
                <a href="https://www.segurossura.com.co/paginas/legal/defensor-del-consumidor-financiero.aspx" className="text-[14px] text-[#0033A0]">Defensor del consumidor financiero</a>
                <a href="https://www.segurossura.com.co/paginas/legal/informacion-financiera.aspx" className="text-[14px] text-[#0033A0]">Información financiera</a>
                <a href="https://www.segurossura.com.co/paginas/ley-de-transparencia.aspx" className="text-[14px] text-[#0033A0]">Ley de transparencia</a>
                <a href="https://provalidarpoliza.azurewebsites.net/890903407/verify" className="text-[14px] text-[#0033A0]">Certificación pólizas de Cumpliento y Responsabilidad Civil Derivada</a>
                <a href="https://provalidarpoliza.azurewebsites.net/890903407/verify?utm_source=segurossura&utm_medium=menu&utm_campaign=certificacion-poliza-todo-riesgo-contratista&utm_content=footer-home" className="text-[14px] text-[#0033A0]">Certificación pólizas de Todo Riesgo</a>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto sm:h">
            <div className="text-center sm:text-left">
              <h2
                className={`text-[#0033A0] text-[18px] font-[600] ${
                  isMobile ? "cursor-pointer" : "cursor-auto"
                }`}
                onClick={() => isMobile && setMostrarLineas(!mostrarLineas)}
              >
                Líneas de atención
              </h2>
              <div
                className={`flex flex-col mt-4 ${
                  mostrarLineas ? "block" : "hidden"
                } sm:flex`}
              >
                <a href="#" className="text-[14px] text-[#0033A0] flex flex-col">Llámanos sin costo <span className="text-[20px] font-[600]">#888</span></a>
                <a href="#" className="text-[14px] text-[#0033A0] flex flex-col">Bogotá <span className="text-[20px] font-[600]">60143 78888</span></a>
                <a href="#" className="text-[14px] text-[#0033A0] flex flex-col">Cali <span className="text-[20px] font-[600]">6024378888</span></a>
                <a href="#" className="text-[14px] text-[#0033A0] flex flex-col">Medellín <span className="text-[20px] font-[600]">6044378888</span></a>
                <a href="#" className="text-[14px] text-[#0033A0] flex flex-col">Resto del país <span className="text-[20px] font-[600]">01 8000 51 8888</span></a>
                <a href="https://www.segurossura.com.co/paginas/legal/politicas-uso-y-seguridad.aspx" className="text-[14px] text-[#0033A0] mt-5">Políticas de uso y seguridad</a>
                <a href="https://www.segurossura.com.co/paginas/legal/politica-privacidad-datos.aspx" className="text-[14px] text-[#0033A0]">Políticas de privacidad y datos y Ley de datos personales</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 py-10 flex flex-col items-center sm:flex-row sm:justify-between sm:px-20 sm:py-10 lg:px-16 2xl:px-[110px]">
          <div>
            <p className="text-[#0033A0] text-[14px]">© Copyright SURA 2024</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <ul className="flex gap-4">
              <li>
                <NavLink to="https://www.facebook.com/SegurosSURAColombia">
                  <img
                    src={facebook}
                    alt="Facebook"
                    width="40"
                    height="40"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.instagram.com/segurossura/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    width="40"
                    height="40"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com/company/sura-seguros/mycompany/verification/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    width="40"
                    height="40"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://x.com/SegurosSURAcol">
                  <img
                    src={twitter}
                    alt="Twitter"
                    width="40"
                    height="40"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.youtube.com/channel/UC_voqvWCPExU_khvJHFbW_g?ybp=-gEOZm9vdGVyLXNlZ3Vyb3M%253D">
                  <img
                    src={youtube}
                    alt="YouTube"
                    width="40"
                    height="40"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};