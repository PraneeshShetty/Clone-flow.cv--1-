export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Proficient' | 'Fluent' | 'Native';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  url?: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface Personal {
  firstName: string;
  lastName: string;
  title: string;
  summary: string;
  photo?: string;
}

export interface ResumeData {
  id: string;
  personal: Personal;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  certifications: Certification[];
  customSections?: {
    id: string;
    title: string;
    items: {
      id: string;
      content: string;
    }[];
  }[];
}

export interface ResumeTemplate {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: string[];
}

export type SectionType =
  | 'personal'
  | 'contact'
  | 'experience'
  | 'education'
  | 'skills'
  | 'languages'
  | 'projects'
  | 'certifications'
  | 'custom';

export interface TemplateConfig {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: string;
  spacing: string;
  layoutType: 'single-column' | 'two-column' | 'modern';
}
