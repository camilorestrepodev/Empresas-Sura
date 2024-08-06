import { useState } from "react";
import "../../styles/TerminoStyle.css";
import { useNavigate } from "react-router-dom";

export default function TerminosCondiciones() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"Si" | "No">("No");

  const handleSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value as "Si" | "No");
  };

  const isButtonDisabled = selected !== "Si";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selected === "Si") {
      navigate("/home/datos-registro");
    }
  };

  return (
    <section >
      <div className="bg-[#F8F8F8] px-[30px] py-[70px] md:px-[70px] lg:px-[130px]">
        <div className="flex flex-col">
          <div className="mt-4">
            <h2 className="text-[#2D6DF6] text-[32px] font-[700] text-center sm:text-left">
              Términos y Condiciones
            </h2>
            <p className="text-[18px] leading-[24.2px] mt-5 text-center sm:text-left sm:px-0 md:px-0 lg:px-0 2xl:px-0">
              El presente formulario busca generar un diagnóstico general de la
              empresa, con el fin de hacer análisis, entregar recomendaciones,
              brindar servicios, conectar con aliados y en general, entregar la
              oferta de valor que SURA tiene establecida para las empresas para
              entregar bienestar y competitividad sostenibles. Con su
              diligenciamiento estás autorizando el uso de la misma; además, con
              el registro de los datos personales autorizas a Suramericana S.A.,
              en calidad de responsable, a realizar el tratamiento de los datos
              que sean recolectados, para brindar la gestión y asesoría
              integral, así como para las demás finalidades contempladas en la
              Política de Privacidad de Suramericana disponible en{" "}
              <a href="https://www.segurossura.com">www.segurossura.com</a>{" "}
              donde se encuentran los canales para ejercer los derechos a
              actualizar, rectificar, conocer y suprimir los datos. Para conocer
              visita los términos y condiciones de Empresa Sura visita{" "}
              <a href="https://segurossura.com/co/terminos-y-condiciones">
                https://segurossura.com/co/terminos-y-condiciones
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col mt-5">
            <label className="text-lg font-semibold text-center sm:text-left">
              1. Acepto los términos y condiciones:{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex justify-center items-center gap-20 sm:items-start sm:flex-col sm:gap-0">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="terms"
                  value="Si"
                  checked={selected === "Si"}
                  onChange={handleSelectionChange}
                  className="form-radio visually-hidden"
                />
                <span className="radio-button"></span>
                <span className="ml-5">Si</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="terms"
                  value="No"
                  checked={selected === "No"}
                  onChange={handleSelectionChange}
                  className="form-radio visually-hidden"
                />
                <span className="radio-button"></span>
                <span className="ml-5">No</span>
              </label>
            </div>
            <div className="progress-bar mt-4 flex justify-center">
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`mt-10 text-white text-[16px] font-bold w-[176px] h-[56px] rounded-[28px] flex justify-center items-center gap-6 ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
