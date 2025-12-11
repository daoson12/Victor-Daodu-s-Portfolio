// Project interfaces
export interface Project {
  id: number;
  title: string;
  desc: string;
  livedemo: string;
  githurl: string;
  mediumlink: string;
  imgUrl: string;
  tech: string;
}

// Skills interfaces
export interface Skill {
  id: string;
  skill: string;
  progress: string;
}

// Education interfaces
export interface Education {
  id: string;
  from_to_year: string;
  education: string;
  stream: string;
  info: string;
  institution: string;
  grade: string;
  sememterGrade: string;
  certificate: string;
  position?: string; // Optional field
}

// Experience interfaces
export interface Experience {
  id: number;
  company: string;
  location: string;
  timeline: string;
  role: string;
  work: string;
}

// Contact form interface
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Pagination config interface
export interface PaginationConfig {
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
}
