export type FilterCategory =
  | "Robotics"
  | "Web"
  | "Software"
  | "ML"
  | "UI/UX"
  | "Creative";

export interface ProjectLinks {
  github?: string;
  live?: string;
  caseStudy?: string;
  external?: string;
}

export interface Project {
  slug: string;
  title: string;
  categoryLabel: string;
  filterCategories: FilterCategory[];
  description: string;
  /** A single-sentence summary used by compact tiles (e.g. the Recent Work strip). */
  shortDescription?: string;
  achievement?: string;
  status?: string;
  tags: string[];
  techTags?: string[];
  features?: string[];
  image: string;
  imageAlt: string;
  links: ProjectLinks;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  dateRange: string;
  description: string;
  skills: string[];
  logo?: string;
  logoAlt?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  dateRange: string;
  credential: string;
  detail?: string;
  logo?: string;
  logoAlt?: string;
  inProgress?: boolean;
}

export type SkillLevel =
  | "Active Practice"
  | "Experienced"
  | "Working Knowledge"
  | "Strong Interest";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  logo?: string;
  logoAlt?: string;
}

export interface AffiliatedOrg {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
}

export interface PinterestPin {
  id: string;
  url: string;
}

export interface FeaturedVideo {
  id: string;
  youtubeId: string;
  title: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
}

export interface NavLink {
  label: string;
  href: string;
}
