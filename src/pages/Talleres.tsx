import { Navigate, Route, Routes } from "react-router-dom";

import { DatosRegistroTalleres } from "../components/talleres/DatosRegistroTalleres.tsx";
import { ThankYouRegistro } from "../components/talleres/ThankYouRegistro.tsx";
import Banner from "../components/banner/Banner.tsx";
import LogoComplement from "../components/LogoComplement.tsx";
import {Constants} from "../Constants.ts";

export default function Talleres() {
  const fondoMovil = Constants.FONDO_MOVIL_TALLERES;
  const fondoTalleres = Constants.FONDO_TALLERES;

  return (
    <>
      <Banner
        titulo={
          "Participa de los talleres que ofrecemos totalmente gratis desde"
        }
        descripcion={"Empresas SURA"}
        fondo={fondoTalleres}
        fondoMovil={fondoMovil}
      />

      <Routes>
        <Route
          path="datos-registro-talleres"
          index
          element={<DatosRegistroTalleres />}
        />
        <Route path="thank-you-talleres" element={<ThankYouRegistro />} />
        <Route path="" element={<Navigate to="datos-registro-talleres" />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <LogoComplement />
    </>
  );
}
