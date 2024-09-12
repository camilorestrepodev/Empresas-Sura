import {TallerData} from "../components/talleres/TallerData.tsx";

export const createTallerId = (taller: TallerData): string => {
  return `${taller.Vertical}-${taller.Taller}-${taller.Fecha}-${taller.Hora}-${taller.Experto}`;
}