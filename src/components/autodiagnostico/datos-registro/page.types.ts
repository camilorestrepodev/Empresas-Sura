export interface FormData {
  documento: string;
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
  documentoEmpresa: string;
}

export interface DatosRegistroProps {
  dataRegistrada: (formData: FormData) => void;
}
