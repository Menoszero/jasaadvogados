export interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  education: string[];
  specializations: string[];
  oab: string;
  languages: string[];
  bio: string;
  email: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Jorge Jaeger Amarante",
    position: "Sócio Fundador e Gestor",
    photo: "/src/assets/images/Dr-Jorge-2020.jpeg",
    education: [
      "Master of Business Administration (MBI) em Direito da Economia e da Empresa - Fundação Getúlio Vargas (FGV)",
      "Pós-graduação em Direito Tributário - Instituto Luiz Flávio Gomes",
      "Curso em Direito Civil - Escola de Magistratura do Distrito Federal (AMAGIS-DF)",
      "Master em Direito Imobiliário - GRUPO ATAME",
      "Curso de Direito Arbitral - Tribunal de Justiça Arbitral Empresarial do Brasil e Mercosul",
      "Aluno Especial do Curso de Mestrado - Universidade de Brasília (UNB)"
    ],
    specializations: [
      "Direito Constitucional",
      "Direito Civil (Familiar, Sucessório e Securitário)",
      "Direito Autoral",
      "Direito Eleitoral",
      "Direito Administrativo",
      "Direito Tributário",
      "Direito Empresarial",
      "Direito do Consumidor",
      "Direito Concorrencial",
      "Direito Arbitral"
    ],
    oab: "OAB/DF",
    languages: ["Português", "Inglês"],
    bio: "O sócio Jorge Jaeger Amarante, gestor da sociedade, iniciou suas atividades advocatícias no renomado escritório Lacombe & Neves da Silva Advogados Associados, onde lidou frequentemente com Direito Constitucional, Civil – familiar, sucessório e securitário – e Autoral, bem como laborou com diversas causas de foco Eleitoral, vez que tal escritório fora constituído por dois ex-Ministros do Tribunal Superior Eleitoral. Após, tornou-se advogado sênior da Azevedo Sette Advogados, um dos maiores escritórios de advocacia da América Latina, onde participou do patrocínio nas áreas de Direito Administrativo, Tributário, Civil – direitos personalíssimos, obrigações, contratos, empresarial e etc. –, Consumerista, Concorrencial e Arbitral para clientes como Credicard, Claro, Microsoft, Fóton, Eucatur, Biobrás, Só Frango, Marelli, Pier 21, GSA Participações, Santa Mônica, Casa Maior, Construtora RV, Toctao, Via Empreendimentos, Via Engenharia, JCGontijo, Caenge, dentre outros, até que resolveu sair para constituir uma sociedade própria, a Jaeger & Alves da Costa Advogados Associados, posteriormente designada Jaeger Amarante & Mattos Pontual Advogados Associados e atualmente denominada Jaeger Amarante Sociedade de Advocacia.\n\nTem trabalhos publicados sobre Danos Morais e sobre Sanções Administrativas Licitatórias, assim como artigo divulgado no jornal Valor Econômico. Foi por três oportunidades membro da Comissão de Prerrogativas e da Comissão de Direito Imobiliário da Seccional do Distrito Federal da Ordem dos Advogados do Brasil.\n\nFoi contratado pelo Centro de Apoio ao Desenvolvimento Tecnológico da Universidade de Brasília (UNB) para trabalhar no projeto de elaboração do Estudo de Viabilidade Técnica e Econômica (EVETEC) do Parque Tecnológico Capital Digital (PTCD). Participa ainda como integrante do grupo designado pela UNB para fins de implementação do Projeto Atlas, por contratação do Ministério da Justiça, que visa explicitar o funcionamento do Sistema de Acesso à Justiça.",
    email: "jorge.amarante@jasaadvogados.com"
  }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find(member => member.name.toLowerCase().replace(/\s+/g, '-') === slug);
}