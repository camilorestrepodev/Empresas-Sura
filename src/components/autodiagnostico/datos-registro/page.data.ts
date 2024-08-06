export interface Departamento {
  name: string;
}

export interface Sector {
  name: string;
}

export interface Aliado {
  name: string;
}

export const Departamentos = (): Departamento[] => {
  const departamentos: Departamento[] = [
    { name: "Amazonas" },
    { name: "Antioquia" },
    { name: "Arauca" },
    { name: "Archipiélago de San Andrés, Providencia y Santa Catalina" },
    { name: "Atlántico" },
    { name: "Bogotá D.C" },
    { name: "Bolivar" },
    { name: "Boyacá" },
    { name: "Caldas" },
    { name: "Caquetá" },
    { name: "Casanare" },
    { name: "Cauca" },
    { name: "Cesar" },
    { name: "Chocó" },
    { name: "Córdoba" },
    { name: "Cundinamarca" },
    { name: "Guainía" },
    { name: "Guaviare" },
    { name: "Huila" },
    { name: "Guajira" },
    { name: "Magdalena" },
    { name: "Meta" },
    { name: "Nariño" },
    { name: "Norte de Santander" },
    { name: "Putumayo" },
    { name: "Quindío" },
    { name: "Risaralda" },
    { name: "Santander" },
    { name: "Sucre" },
    { name: "Tolima" },
    { name: "Valle del Cauca" },
    { name: "Vaupés" },
    { name: "Vichada" },
  ];

  return departamentos;
};

export const Sectores = (): Sector[] => {
  const sectores: Sector[] = [
    { name: "Agro" },
    { name: "Alimentos y bebidas" },
    { name: "Carbón" },
    { name: "Comercio" },
    { name: "Construcción" },
    { name: "Educación" },
    { name: "Energia" },
    { name: "Entretenimiento y otros servicios" },
    { name: "Financiero" },
    { name: "Gubernamental" },
    { name: "Hotelería, restauración y turismo" },
    { name: "Información tecnología y comunicaciones" },
    { name: "Inmobiliario" },
    { name: "Logística y transporte" },
    { name: "Manufactura" },
    { name: "Minería" },
    { name: "Otros" },
    { name: "Petróleo y gas" },
    { name: "Químico" },
    { name: "Salud" },
    { name: "Servicios" },
    { name: "Servicios Públicos" }
  ];

  return sectores;
};

export const Aliados = (): Aliado[] => {
  const cargos: Aliado[] = [
    { name: "Cámara de Comercio Palmira" },
    { name: "El templo de la moda" },
    { name: "Gobernación del Valle (pendiente nombre alianza)" },
    { name: "Acodres capitulo Pacifico" },
    { name: "Procaña" },
    { name: "SIDOC (cliente modelo especializado)" },
    { name: "Cavassa Cali" },
    { name: "Câmara de Comercio Buga" },
    { name: "Valle Impacta" },
  ];
  return cargos;
};
