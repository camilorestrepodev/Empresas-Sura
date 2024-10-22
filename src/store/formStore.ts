import {create} from 'zustand';
import { FormData } from '../components/autodiagnostico/datos-registro/page.types';

interface FormState {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formData: {
    tipoDocumento: '',
    numeroDocumento: '',
    nombreCompleto: '',
    cargo: '',
    nombreEmpresa: '',
    departamentoEmpresa: '',
    sectorEconomico: '',
    correoElectronico: '',
    celular: '',
    digitoVerificacion: '',
  },
  setFormData: (data: FormData) => set({ formData: data }),
}));