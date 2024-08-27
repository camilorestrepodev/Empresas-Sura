

export interface informacionRutas {
  nombre: string;
  titulo: string;
  subtitulo: string;
  items: object;
  img: string;
  descripcion: string;
  textoPrincipal: string;
  itemsTextoPrincipal: object;
  textoSecundario: string;
  itemsTextoSecundario: object;
  textoTercero: string;
  itemsTextoTercero: object;
}

export const informacionRutas: informacionRutas[] = [
  {
    nombre: "Talento Humano",
    titulo: "Ruta de Competitividad de Talento Humano",
    descripcion:
      "En esta ruta podrás desarrollar la capacidad para contar con el equipo humano necesario y conocer sobre el cumplimiento regulatorio como empleador de la promoción y prevención de la Seguridad y Salud en el Trabajo (SST).",
    subtitulo: "Esta se compone de tres módulos:",
    items: ["1. SST", "2. Atracción y selección", "3. Formación y desarrollo"],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/b3430a9c-e034-4916-8b6c-2714c8984a64.png",
    textoPrincipal:
      "Complementa lo aprendido en los talleres con los siguientes contenidos multimedia:",
    itemsTextoPrincipal: [
      "• SST desde la norma hacia el propósito.",
      "• El proceso de selección, clave para el desarrollo empresarial",
      "• Selección por competencias",
    ],
    textoSecundario:
      "Para finalizar, refuerza lo aprendido sobre formación y desarrollo con los siguientes documentos: ",
    itemsTextoSecundario: [
      "• Generalidades de la gestión del conocimiento",
      "• Diagnóstico de necesidades de conocimiento",
    ],
    textoTercero:"",
    itemsTextoTercero:[]
  },
  {
    nombre: "Modelo Operativo",
    titulo: "Ruta de Competitividad de Modelo Operativo",
    subtitulo: "Esta se compone de dos módulos: ",
    items: ["1. Gestión de riesgos.", "2. Cadena de abastecimiento."],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/83d47a2f-d27e-430f-85ac-67b292871122.png",
    descripcion:
      "En esta ruta podrás desarrollar la capacidad para generar eficiencia, confiabilidad y gestión de los riesgos dándole continuidad a la operación. ",
    textoPrincipal:
      "Explora sobre la gestión de compras y el almacenamiento de tus productos o insumos con los siguientes contenidos:",
    itemsTextoPrincipal: [
      "• Gestión de compras y abastecimiento.",
      "• Condiciones seguras de almacenamiento",
    ],
    textoSecundario: "",
    itemsTextoSecundario: [""],
    textoTercero:"",
    itemsTextoTercero:[]
  },
  {
    nombre: "Tecnología y transformación digital",
    titulo: "Ruta de Competitividad de Tecnología y transformación digital",
    descripcion:
      "En esta ruta podrás apalancar la estrategia de tu empresa en el desarrollo, uso y apropiación oportuna de las capacidades tecnológicas.",
    subtitulo: "Esta se compone de tres módulos: ",
    items: [
      "1. Soluciones y herramientas.",
      "2. Manejo y seguridad de la información.",
      "3. Transformación del negocio",
    ],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/0da52637-dd2b-437c-aaa0-e3ae09d8e3c5.png",
    textoPrincipal:
      "Pon en práctica lo aprendido en el taller “Herramientas digitales” con los siguientes documentos: ",
    itemsTextoPrincipal: [
      "• Aprende a gestionar los recursos tecnológicos de tu empresa",
      "• Inventario de herramientas tecnológicas.",
      "• Herramientas tecnológicas que pueden apalancar tu negocio.",
    ],
    textoSecundario:
      "Descubre cómo tener un buen manejo y seguridad de la información con los siguientes contenidos:",
    itemsTextoSecundario: [
      "• Configuración segura de redes",
      "• ¿Cómo podemos autogestionar la prevención de riesgos cibernéticos como miebros de una organización?",
      "• La conectividad y sus riesgos - Ciberseguridad",
    ],
    textoTercero:"",
    itemsTextoTercero:[]
  },
  {
    nombre: "Financiero",
    titulo: "Ruta de Competitividad de Financiero",
    subtitulo: "Esta se compone de tres módulos: ",
    items: ["1. Liquidez", "2. Planeación financiera", "3. Gestión tributaria"],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/9b2a0cbd-fd26-413c-bdcc-a5f24cb696eb.png",
    descripcion: "En la ruta podrás desarrollar la capacidad para acceder, apalancar y gestionar los recursos financieros de tu empresa.",
    textoPrincipal:
      "Descubre cómo gestionar tu capital con los siguientes contenidos: ",
    itemsTextoPrincipal: [
      "• Construcción de flujo de caja.",
      "• Gestión del capital de trabajo.",
      "• Introducción a la gestión del capital de trabajo."
    ],
    textoSecundario: "Refuerza lo aprendido en el taller 2 con los siguientes contenidos: ",
    itemsTextoSecundario: ["• Estados financieros.", "•Guía de indicadores financieros", "• Estrategias para aumentar la rentabilidad.", "• Inflación y otras variables macro que pueden impactar a tu empresa."],
    textoTercero: "¿Estas al día con tus obligaciones tributarias? Conoce más sobre este tema con los siguientes contenidos: ",
    itemsTextoTercero: ["• Obligaciones de llevar contabilidad","• Reforma tributaria"]
  },
  {
    nombre: "Ambiental",
    titulo: "Ruta de Competitividad de Ambiental",
    subtitulo: "Esta se compone de dos módulos:",
    items: ["1. Estrategia", "2. Ecoficiencia"],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/91a201a0-ef76-4d25-b427-961a1c3605ea.png",
    descripcion:
      "En esta ruta podrás desarrollar la capacidad para generar eficiencia, confiabilidad y gestión de los riesgos dándole continuidad a la operación. ",
    textoPrincipal:
      "Explora sobre la gestión de compras y el almacenamiento de tus productos o insumos con los siguientes contenidos:",
    itemsTextoPrincipal: [
      "• Gestión de compras y abastecimiento.",
      "• Condiciones seguras de almacenamiento",
    ],
    textoSecundario: "",
    itemsTextoSecundario: [""],
    textoTercero:"",
    itemsTextoTercero:[]
  },
  {
    nombre: "Legal",
    titulo: "Ruta de Competitividad de Legal",
    subtitulo: "Subtítulo de la ruta de Legal",
    items: ["1. Societario y gobierno corporativo.", "2. Contractual.", "3. Propiedad intelectual, información y consumidor."],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/2101d10f-ce5c-4ac1-bc05-5c87617117cc.png",
    descripcion:
      "En esta ruta podrás encontrar contenidos e información relevante para que tu empresa se gestione desde la parte legal y tenga oportunidades para seguir potenciándose en el mercado.",
    textoPrincipal:
      " Continúa aprendiendo con los siguientes documentos:",
    itemsTextoPrincipal: [
      "• Comparativo de requisitos para constituir sociedades.",
      "• Modelo de estatutos para creación de empresa S.A.S",
      "• Modelo de acta de asamblea de accionistas.",
      "• Modelo de convocatoria a asamblea."
    ],
    textoSecundario: "Explora la biblioteca de cláusulas aplica todas las recomendaciones: ",
    itemsTextoSecundario: ["• Banco de cláusulas para creación de acuerdo privado de socios.", "• Banco de cláusulas para establecer el protocolo de familia."],
    textoTercero:"",
    itemsTextoTercero:[]
  },
  {
    nombre: "Mercado",
    titulo: "Ruta de Competitividad de Mercado",
    subtitulo: "Esta se compone de tres módulos:",
    items: [
      "1. Estrategía",
      "2. Experiencia de cliente",
      "3. Gestión de marca",
    ],
    img: "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/b58f1604-7493-42ee-b0c3-1d68ea112e6e.png",
    descripcion:
      "En esta ruta podrás desarrollar la capacidad de leer el entorno, entender a los consumidores y gestionar nuevos segmentos de mercado a partir de propuestas de valor.  ",
    textoPrincipal:
      "Pon en práctica lo aprendido en el taller 1 con los siguientes documentos: ",
    itemsTextoPrincipal: [
      "• Guía de análisis del entorno.",
      "• Caja de herramientas para conocer al cliente.",
      "Plantilla de análisis del entorno y estrategia CAME",
      "Video: planeación de estratégica",
    ],
    textoSecundario:
      "Conoce cómo atraer más clientes profundizando lo aprendido",
    itemsTextoSecundario: [
      "• Guía para construir la propuesta de valor y el modelo de negocio",
      "• Video: ¿Cómo implementar estrategias digitales para aumentar la visibilidad?",
    ],
    textoTercero:"",
    itemsTextoTercero:[]
  },
];
