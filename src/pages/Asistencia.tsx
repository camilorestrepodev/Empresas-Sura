import { Navigate, Route, Routes } from "react-router-dom";
import Banner from "../components/banner/Banner";

import HomeAsistencia from "../components/asistencias/HomeAsistencia";
import ThankYouAsistencia from "../components/asistencias/ThankYouAsistencia";
import LogoComplement from "../components/LogoComplement";

export default function Asistencia() {
  const fondoMovil = "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/f14d0373-07bf-463d-9f46-9d4dc06a66ac.png";
  const FondoAsistencia = "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/09b3a829-b8a9-4e6f-a2a2-b51f683cbecd.jpg";

  return (
    <>
      <Banner
          titulo={"Gestionar tu conocimiento es un gran camino para hacer "}
          descripcion={"más competitiva tu empresa"}
          fondo={FondoAsistencia}
          fondoMovil={fondoMovil}
        />     
      <Routes>
        <Route
          path="registro-asistencia"
          index
          element={<HomeAsistencia />}
        />
        <Route
          path="thank-you-asistencia"
          element={<ThankYouAsistencia />}
        />
        <Route
          path=""
          element={<Navigate to="registro-asistencia" />}
        />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <LogoComplement />
    </>
  );
}
