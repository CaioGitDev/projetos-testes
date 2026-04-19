export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "cultural";
  location: string;
  year: number;
  area: string;
  description: string;
  images: string[];
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const mockProjects: Project[] = [
  {
    id: "1",
    slug: "casa-luminosa",
    title: "Casa Luminosa",
    category: "residential",
    location: "Lisboa, Portugal",
    year: 2024,
    area: "350 m²",
    description:
      "Uma residência moderna que privilegia a luz natural e a conexão com o exterior. O projeto explora materiais sustentáveis e espaços abertos que se integrem harmoniosamente com a paisagem.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "torre-comercial-baia",
    title: "Torre Comercial Baía",
    category: "commercial",
    location: "Porto, Portugal",
    year: 2023,
    area: "2800 m²",
    description:
      "Edifício de escritórios com fachada ventilada e sistemas inteligentes de gestão energética. O design contemporâneo reflete a identidade moderna da empresa.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "centro-cultural-aveiro",
    title: "Centro Cultural Aveiro",
    category: "cultural",
    location: "Aveiro, Portugal",
    year: 2023,
    area: "1500 m²",
    description:
      "Espaço multifuncional para exposições, concertos e eventos. A cobertura em arco cria um marco arquitetónico distintivo na paisagem urbana.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    ],
    featured: false,
  },
  {
    id: "4",
    slug: "moradia-geminada-oasis",
    title: "Moradia Geminada Oasis",
    category: "residential",
    location: "Cascais, Portugal",
    year: 2024,
    area: "220 m²",
    description:
      "Duplex moderno com jardim privativo e piscina. O interior fluida entre espaços sociais e privados, maximizando a sensação de amplitude.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    ],
    featured: true,
  },
  {
    id: "5",
    slug: "centro-logistico-norte",
    title: "Centro Logístico Norte",
    category: "commercial",
    location: "Maia, Portugal",
    year: 2022,
    area: "8500 m²",
    description:
      "Complexo industrial com design modular e soluções logísticas avançadas. Eficiência operacional aliada a uma estética arquitetónica cuidada.",
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"],
    featured: false,
  },
  {
    id: "6",
    slug: "museu-marinha",
    title: "Museu da Marinha",
    category: "cultural",
    location: "Lisboa, Portugal",
    year: 2025,
    area: "4200 m²",
    description:
      "Requalificação do Museu da Marinha com nova ala de exposição permanente. O projeto dialoga com a arquitetura existente enquanto introduce elementos contemporâneos.",
    images: [
      "https://images.unsplash.com/photo-1565799475640-cc58a6b6255c?w=800",
      "https://images.unsplash.com/photo-1541411104954-e03b3a1c493c?w=800",
    ],
    featured: true,
  },
];

export const mockTeam: TeamMember[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: "Direção Criativa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Arquiteta com 20 anos de experiência, especializada em design sustentável e projetos culturais.",
  },
  {
    id: "2",
    name: "João Ferreira",
    role: "Direção de Projeto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Responsável pela gestão de projetos e coordenação de equipas multidisciplinares.",
  },
  {
    id: "3",
    name: "Ana Rodrigues",
    role: "Design de Interiores",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Especialista em espaços habitáveis e comerciais, com forte enfoque em materiais sustentáveis.",
  },
  {
    id: "4",
    name: "Pedro Costa",
    role: "Engenharia Estrutural",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "Engenheiro com formação em estruturas de betão e aço, especializado em soluções inovadoras.",
  },
];

export async function getProjects(): Promise<Project[]> {
  return mockProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return mockProjects.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return mockProjects.filter((p) => p.featured);
}

export async function getTeam(): Promise<TeamMember[]> {
  return mockTeam;
}
