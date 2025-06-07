export interface PracticeArea {
  id: number;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  services: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    title: "Direito Tributário",
    slug: "direito-tributario",
    icon: "scale",
    shortDescription: "Atuação estratégica em questões fiscais para empresas e pessoas físicas.",
    longDescription: "Nossa equipe especializada em Direito Tributário oferece soluções estratégicas para questões fiscais complexas, proporcionando segurança jurídica e economia tributária para nossos clientes. Atuamos tanto na esfera consultiva quanto contenciosa, com profundo conhecimento da legislação tributária brasileira e suas constantes atualizações.",
    services: [
      "Consultoria tributária preventiva",
      "Planejamento tributário",
      "Contencioso administrativo e judicial",
      "Recuperação de créditos tributários",
      "Due diligence tributária",
      "Análise de riscos fiscais"
    ]
  },
  {
    id: 2,
    title: "Direito Empresarial",
    slug: "direito-empresarial",
    icon: "briefcase",
    shortDescription: "Assessoria jurídica completa para empresas de todos os portes.",
    longDescription: "Nossa prática de Direito Empresarial abrange todos os aspectos legais relacionados à atividade empresarial, desde a constituição até operações complexas de reestruturação e M&A. Oferecemos assessoria jurídica personalizada para empresas de todos os portes, com foco em soluções práticas e estratégicas para questões societárias, contratuais e regulatórias.",
    services: [
      "Constituição e estruturação de empresas",
      "Operações societárias (fusões, aquisições, cisões)",
      "Contratos empresariais",
      "Governança corporativa",
      "Compliance empresarial",
      "Reestruturação de empresas"
    ]
  },
  {
    id: 3,
    title: "Direito Civil",
    slug: "direito-civil",
    icon: "file-text",
    shortDescription: "Atuação em litígios civis e assessoria em contratos e obrigações.",
    longDescription: "Nossa equipe especializada em Direito Civil oferece assessoria jurídica completa em questões relacionadas a contratos, responsabilidade civil, direito de família, sucessões e propriedade. Atuamos tanto na prevenção de litígios quanto na representação judicial, buscando sempre a melhor solução para nossos clientes.",
    services: [
      "Contratos civis",
      "Responsabilidade civil",
      "Direito imobiliário",
      "Direito de família e sucessões",
      "Direito do consumidor",
      "Contencioso cível"
    ]
  },
  {
    id: 4,
    title: "Direito Trabalhista",
    slug: "direito-trabalhista",
    icon: "gavel",
    shortDescription: "Soluções preventivas e contenciosas para questões trabalhistas.",
    longDescription: "Nossa área de Direito Trabalhista oferece assessoria completa para empresas e executivos em todas as questões relacionadas às relações de trabalho. Atuamos preventivamente na elaboração de políticas e procedimentos internos, bem como na representação em processos judiciais e administrativos trabalhistas.",
    services: [
      "Consultoria trabalhista preventiva",
      "Elaboração de políticas internas",
      "Negociações sindicais",
      "Contencioso trabalhista",
      "Due diligence trabalhista",
      "Terceirização e contratos especiais"
    ]
  },
  {
    id: 5,
    title: "Contencioso Estratégico",
    slug: "contencioso-estrategico",
    icon: "landmark",
    shortDescription: "Atuação especializada em litígios complexos e de alto valor.",
    longDescription: "Nossa prática de Contencioso Estratégico é focada na condução de litígios complexos e de alto valor, com uma abordagem personalizada e estratégica para cada caso. Nossa equipe possui vasta experiência em tribunais superiores e instâncias administrativas, oferecendo aos clientes uma representação jurídica de excelência.",
    services: [
      "Litígios societários",
      "Disputas contratuais complexas",
      "Recuperação de ativos",
      "Arbitragem e mediação",
      "Ações coletivas",
      "Processos administrativos"
    ]
  },
  {
    id: 6,
    title: "Direito Administrativo",
    slug: "direito-administrativo",
    icon: "building",
    shortDescription: "Assessoria em licitações, contratos administrativos e relações com o poder público.",
    longDescription: "Nossa equipe de Direito Administrativo possui expertise no relacionamento com o poder público, oferecendo assessoria completa em licitações, contratos administrativos, concessões e parcerias público-privadas. Atuamos tanto preventivamente quanto em contenciosos administrativos e judiciais.",
    services: [
      "Licitações e contratos administrativos",
      "Concessões e PPPs",
      "Direito regulatório",
      "Processos administrativos",
      "Desapropriações",
      "Improbidade administrativa"
    ]
  }
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find(area => area.slug === slug);
}