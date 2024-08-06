
export interface Vertical {
  nombreVertical: 'TH' | 'F' | 'MO' | 'A' | 'L' | 'M' | 'TTD';
  ResultadoPorVertical: string;
}

export interface Respuesta {
  respuestasFormulario?: Vertical[];
}