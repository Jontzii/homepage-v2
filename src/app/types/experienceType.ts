export interface WorkExperience {
  company: string;
  title: string;
  years: string;
  description: string[];
  technologies: string[];
}

export interface EducationExperience {
  university: string;
  years: string;
  level: string;
  major: string;
  subject: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  url: string;
}

export interface Project {
  name: string;
  description: string[];
  url: string;
  git: string;
  technologies: string[];
}
