export type ServiceSolution = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  question: string;
  solutions: ServiceSolution[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "cierre-de-brechas",
    number: "01",
    name: "Cierre de brechas de competencias organizacionales",
    shortName: "Cierre de Brechas",
    tagline:
      "Formamos equipos que piensan estratégicamente y se adaptan a los desafíos del futuro.",
    question:
      "¿Su equipo requiere de nuevas habilidades para enfrentar los desafíos actuales y futuros? ¿La falta de capacitación está limitando su crecimiento y adaptabilidad?",
    solutions: [
      {
        title: "Diagnósticos de necesidades de habilidades y desempeños esperados",
        description:
          "Identificación de brechas clave para alinear las capacidades del equipo con los objetivos estratégicos.",
      },
      {
        title: "Programas de formación continua y reskilling",
        description:
          "Diseño de planes personalizados para desarrollar habilidades críticas y fomentar el pensamiento estratégico en los colaboradores.",
      },
      {
        title: "Estrategias de desarrollo de talento",
        description:
          "Creación de rutas de crecimiento profesional que impulsen la adaptabilidad y resiliencia en los equipos.",
      },
      {
        title: "Formación en liderazgo estratégico",
        description:
          "Programas para líderes que buscan fomentar una cultura de innovación y toma de decisiones basada en datos.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&auto=format&fit=crop&q=80",
  },
  {
    slug: "data-e-inteligencia",
    number: "02",
    name: "Data y modelos de inteligencia corporativa",
    shortName: "Data e Inteligencia",
    tagline:
      "Convertimos datos en estrategias que impulsan el crecimiento sostenible.",
    question:
      "¿Toma decisiones basadas en intuición en lugar de datos? ¿La falta de información precisa le impide identificar oportunidades o anticipar riesgos?",
    solutions: [
      {
        title: "Investigaciones de mercado y análisis de tendencias",
        description:
          "Identificación de oportunidades y riesgos para la toma de decisiones informadas.",
      },
      {
        title: "Modelos de Business Intelligence y IA",
        description:
          "Soluciones tecnológicas para optimizar procesos y predecir escenarios futuros.",
      },
      {
        title: "Desarrollo de Customer Journey Maps y Buyer Personas",
        description:
          "Herramientas para entender y conectar con los clientes de manera estratégica.",
      },
      {
        title: "Estudios de factibilidad y predicción de demanda",
        description:
          "Análisis basados en datos para garantizar decisiones sostenibles y rentables.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&auto=format&fit=crop&q=80",
  },
  {
    slug: "planificacion-estrategica",
    number: "03",
    name: "Planificación estratégica sostenible",
    shortName: "Planificación Estratégica",
    tagline:
      "Diseñamos estrategias que no solo funcionan hoy, sino que se adaptan al mañana.",
    question:
      "¿Su estrategia actual no está generando los resultados esperados? ¿Le cuesta alinear a su equipo alrededor de objetivos comunes y adaptarse a cambios inesperados?",
    solutions: [
      {
        title: "Definición de estrategias de crecimiento y desarrollo",
        description:
          "Creación de planes personalizados que integren sostenibilidad y adaptabilidad.",
      },
      {
        title: "Alineación estratégica y clarificación de objetivos",
        description:
          "Asegurar que todos los niveles de la organización comprendan y trabajen hacia un mismo norte.",
      },
      {
        title: "Modelos de ejecución y seguimiento",
        description:
          "Implementación de Road Maps y Cuadros de Mando para monitorear el progreso y ajustar estrategias en tiempo real.",
      },
      {
        title: "Talleres de pensamiento estratégico",
        description:
          "Formación para equipos en toma de decisiones basadas en datos.",
      },
      {
        title: "Evaluación de sostenibilidad estratégica",
        description:
          "Cumplimiento de hitos en el Road Map y mantenimiento de la alineación estratégica en los equipos.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop&q=80",
  },
  {
    slug: "eficiencia-operativa",
    number: "04",
    name: "Eficiencia operativa con enfoque estratégico",
    shortName: "Eficiencia Operativa",
    tagline:
      "Optimizamos sus procesos para liberar el potencial de crecimiento de su organización.",
    question:
      "¿Sus procesos operativos son lentos, costosos o ineficientes? ¿La falta de optimización está consumiendo recursos que podrían usarse para impulsar el crecimiento?",
    solutions: [
      {
        title: "Análisis y mejora de la cadena de valor",
        description:
          "Identificación de oportunidades para aumentar la eficiencia y reducir costos.",
      },
      {
        title: "Optimización de procesos comerciales y logísticos",
        description: "Implementación de soluciones end-to-end.",
      },
      {
        title: "Trade y Shopper Marketing",
        description:
          "Estrategias para maximizar el impacto en el punto de venta y mejorar la experiencia del cliente.",
      },
      {
        title: "Integración de herramientas para agilizar operaciones",
        description:
          "Integración de herramientas para agilizar operaciones y procesos comerciales.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&auto=format&fit=crop&q=80",
  },
  {
    slug: "transformacion-cultural",
    number: "05",
    name: "Transformación cultural y comunicación estratégica",
    shortName: "Transformación Cultural",
    tagline:
      "Creamos culturas que inspiran a los equipos a pensar estratégicamente y adaptarse al cambio.",
    question:
      "¿Su cultura organizacional no está alineada con sus objetivos? ¿La falta de comunicación interna está generando desmotivación o desalineación en su equipo?",
    solutions: [
      {
        title: "Definición de cultura corporativa y propósito organizacional",
        description:
          "Alineación de valores y comportamientos con la estrategia de la empresa.",
      },
      {
        title: "Mapas de cultura y conductas observables",
        description:
          "Herramientas para medir y fortalecer la cultura organizacional.",
      },
      {
        title: "Estrategias de comunicación interna",
        description:
          "Planes para fomentar la transparencia, el engagement y la alineación con los objetivos estratégicos.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=80",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
