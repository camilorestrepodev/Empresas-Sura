import { Navigate, Route, Routes } from "react-router-dom";
import Banner from "../components/banner/Banner";

import HomeAsistencia from "../components/asistencias/HomeAsistencia";
import ThankYouAsistencia from "../components/asistencias/ThankYouAsistencia";
import LogoComplement from "../components/LogoComplement";
import {Constants} from "../Constants.ts";

export default function Asistencia() {
  const fondoMovil = Constants.FONDO_MOVIL_ASISTENCIA;
  const FondoAsistencia = Constants.FONDO_ASISTENCIA;

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
