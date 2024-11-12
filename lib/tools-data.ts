export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
  subphases?: Subphase[];
}

interface ScrumCrewMember {
  role: string;
  responsibilities: string[];
}

interface Subphase {
  title: string;
  description: string;
  icon: string;
  scrumCrew?: ScrumCrewMember[];
}

export const toolsData: Tool[] = [
  {
    id: 'planning-phase',
    title: 'Planificación',
    description: 'Fase inicial de definición y planificación del proyecto',
    icon: '📋',
    href: '/herramientas/planificacion',
    features: [
      'Definición de alcance',
      'Planificación temporal',
      'Estimación de recursos'
    ],
    subphases: [
      {
        title: 'Inicio',
        description: '• Project Charter\n• Stakeholders\n• Objetivos\n• Alcance inicial\n• Restricciones\n• Supuestos',
        icon: '🎯',
        scrumCrew: [
          {
            role: 'Product Owner',
            responsibilities: [
              'Definición de visión',
              'Priorización de objetivos',
              'Gestión de stakeholders'
            ]
          }
        ]
      },
      {
        title: 'Viabilidad',
        description: '• Estudio de mercado\n• Análisis técnico\n• Evaluación financiera\n• Riesgos iniciales\n• Marco legal\n• Sostenibilidad',
        icon: '📊',
        scrumCrew: [
          {
            role: 'Business Analyst',
            responsibilities: [
              'Análisis de mercado',
              'Estudios de factibilidad',
              'Modelado financiero'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'analysis-phase',
    title: 'Análisis',
    description: 'Evaluación detallada y estudios específicos',
    icon: '🔍',
    href: '/herramientas/analisis',
    features: [
      'Estudios técnicos',
      'Análisis de mercado',
      'Evaluación financiera'
    ],
    subphases: [
      {
        title: 'Mercado',
        description: '• Demanda\n• Competencia\n• Precios\n• Segmentación\n• Estrategia comercial',
        icon: '📈',
        scrumCrew: [
          {
            role: 'Market Analyst',
            responsibilities: [
              'Investigación de mercado',
              'Análisis competitivo',
              'Estrategia de precios'
            ]
          }
        ]
      },
      {
        title: 'Técnico',
        description: '• Estudios de suelo\n• Normativa urbanística\n• Factibilidades\n• Impacto ambiental\n• Infraestructura\n• Tecnología',
        icon: '🔧',
        scrumCrew: [
          {
            role: 'Technical Lead',
            responsibilities: [
              'Evaluación técnica',
              'Coordinación de estudios',
              'Validación de factibilidades'
            ]
          }
        ]
      },
      {
        title: 'Financiero',
        description: '• Costos\n• Ingresos\n• Financiamiento\n• Flujo de caja\n• Indicadores\n• Sensibilidad',
        icon: '💰',
        scrumCrew: [
          {
            role: 'Financial Analyst',
            responsibilities: [
              'Análisis financiero',
              'Evaluación de riesgos',
              'Modelación económica'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'development-phase',
    title: 'Desarrollo',
    description: 'Diseño y desarrollo detallado del proyecto',
    icon: '✏️',
    href: '/herramientas/desarrollo',
    features: [
      'Diseño arquitectónico',
      'Ingeniería de detalle',
      'Especificaciones técnicas'
    ],
    subphases: [
      {
        title: 'Conceptual',
        description: '• Partido arquitectónico\n• Volumetría\n• Zonificación\n• Flujos\n• Imagen objetivo',
        icon: '💡',
        scrumCrew: [
          {
            role: 'Design Lead',
            responsibilities: [
              'Concepto arquitectónico',
              'Criterios de diseño',
              'Coordinación de diseño'
            ]
          }
        ]
      },
      {
        title: 'Básico',
        description: '• Anteproyecto\n• Plantas\n• Cortes\n• Elevaciones\n• Renders\n• Presupuesto',
        icon: '📐',
        scrumCrew: [
          {
            role: 'Architecture Team',
            responsibilities: [
              'Desarrollo de diseño',
              'Documentación técnica',
              'Coordinación BIM'
            ]
          }
        ]
      },
      {
        title: 'Detallado',
        description: '• Proyecto ejecutivo\n• Especialidades\n• Detalles\n• Especificaciones\n• Memorias',
        icon: '📝',
        scrumCrew: [
          {
            role: 'Engineering Team',
            responsibilities: [
              'Ingeniería de detalle',
              'Coordinación técnica',
              'Documentación constructiva'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'execution-phase',
    title: 'Ejecución',
    description: 'Implementación y construcción del proyecto',
    icon: '🏗️',
    href: '/herramientas/ejecucion',
    features: [
      'Gestión de obra',
      'Control de calidad',
      'Supervisión técnica'
    ],
    subphases: [
      {
        title: 'Preparación',
        description: '• Contrataciones\n• Permisos\n• Logística\n• Instalación\n• Seguridad',
        icon: '🚧',
        scrumCrew: [
          {
            role: 'Construction Manager',
            responsibilities: [
              'Planificación de obra',
              'Gestión de contratos',
              'Coordinación de equipos'
            ]
          }
        ]
      },
      {
        title: 'Construcción',
        description: '• Obra gruesa\n• Terminaciones\n• Instalaciones\n• Equipamiento\n• Pruebas',
        icon: '⚒️',
        scrumCrew: [
          {
            role: 'Site Manager',
            responsibilities: [
              'Supervisión de obra',
              'Control de avance',
              'Gestión de recursos'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'monitoring-phase',
    title: 'Monitoreo',
    description: 'Seguimiento y control del proyecto',
    icon: '📊',
    href: '/herramientas/monitoreo',
    features: [
      'Control de avance',
      'Gestión de cambios',
      'Control de costos'
    ],
    subphases: [
      {
        title: 'Control',
        description: '• Avance físico\n• Control de costos\n• Calidad\n• Seguridad\n• Documentación',
        icon: '📋',
        scrumCrew: [
          {
            role: 'Project Controller',
            responsibilities: [
              'Seguimiento de KPIs',
              'Control presupuestario',
              'Reportes de avance'
            ]
          }
        ]
      },
      {
        title: 'Cambios',
        description: '• Solicitudes\n• Evaluación\n• Aprobación\n• Implementación\n• Documentación',
        icon: '🔄',
        scrumCrew: [
          {
            role: 'Change Manager',
            responsibilities: [
              'Gestión de cambios',
              'Evaluación de impactos',
              'Control de versiones'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'closing-phase',
    title: 'Cierre',
    description: 'Finalización y entrega del proyecto',
    icon: '🏁',
    href: '/herramientas/cierre',
    features: [
      'Recepción de obra',
      'Documentación final',
      'Entrega al cliente'
    ],
    subphases: [
      {
        title: 'Recepción',
        description: '• Inspecciones\n• Correcciones\n• Certificados\n• Garantías\n• Manuales',
        icon: '✅',
        scrumCrew: [
          {
            role: 'Quality Manager',
            responsibilities: [
              'Control de calidad',
              'Gestión de observaciones',
              'Documentación final'
            ]
          }
        ]
      },
      {
        title: 'Entrega',
        description: '• Capacitación\n• Documentación\n• Garantías\n• Post-venta\n• Evaluación',
        icon: '🔑',
        scrumCrew: [
          {
            role: 'Delivery Manager',
            responsibilities: [
              'Coordinación de entregas',
              'Gestión post-venta',
              'Satisfacción cliente'
            ]
          }
        ]
      }
    ]
  }
];