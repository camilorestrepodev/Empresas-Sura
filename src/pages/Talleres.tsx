import { Navigate, Route, Routes } from "react-router-dom";

import { DatosRegistroTalleres } from "../components/talleres/DatosRegistroTalleres.tsx";
import { ThankYouRegistro } from "../components/talleres/ThankYouRegistro.tsx";
import Banner from "../components/banner/Banner.tsx";
import LogoComplement from "../components/LogoComplement.tsx";

export default function Talleres() {
  const fondoMovil =
    "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/87042a3a-42f6-4613-b81a-6d5728c35643.jpg";
  const fondoTalleres =
    "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/25bbe935-db23-4c33-9df6-9ee297c63bab.jpg";

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
