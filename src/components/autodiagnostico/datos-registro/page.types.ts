export interface FormData {
  nombreCompleto: string;
  tipoDocumento: string;
  numeroDocumento: string;
  cargo: string;
  nombreEmpresa: string;
  departamentoEmpresa: string;
  sectorEconomico: string;
  correoElectronico: string;
  celular: string;
  digitoVerificacion: string;
}

export interface DatosRegistroProps {
  dataRegistrada: (formData: FormData) => void;
}
