import profileImage from "../assets/optimized/profile.webp";

import aurionImage from "../assets/optimized/project-aurion.webp";
import featherflowImage from "../assets/optimized/project-featherflow.webp";
import taxEaseImage from "../assets/optimized/project-taxease.webp";
import daakImage from "../assets/optimized/project-daak.webp";
import shishuCareImage from "../assets/optimized/project-shishucare.webp";

import uiuLogo from "../assets/optimized/logo-uiu.webp";
import umrtLogo from "../assets/optimized/logo-umrt.webp";
import ariesLogo from "../assets/optimized/logo-aries.webp";
import cairLogo from "../assets/optimized/logo-cair.webp";
import cdipLogo from "../assets/optimized/logo-cdip.webp";
import dsrLogo from "../assets/optimized/logo-dsr.webp";
import fiverrLogo from "../assets/optimized/logo-fiverr.webp";
import youtubeLogo from "../assets/optimized/logo-youtube.webp";
import rnarLogo from "../assets/optimized/logo-rnar.webp";

import type {
  AffiliatedOrg,
  Achievement,
  EducationItem,
  ExperienceItem,
  FeaturedVideo,
  NavLink,
  PinterestPin,
  Project,
  ServiceItem,
  SkillGroup,
  LanguageSkill,
  StatItem,
} from "../types";

/**
 * Central place for every external URL used across the site.
 * Unknown links are left as empty strings — components hide the
 * corresponding button/link automatically when a value is empty.
 * Fill these in as accounts/repos/deployments go live.
 */
export const portfolioLinks = {
  email: "mailto:abraradib21@gmail.com",
  emailRaw: "abraradib21@gmail.com",
  phone: "tel:+8801842049477",
  phoneDisplay: "01842049477",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/AbrarAdib18",
  linkedin: "https://www.linkedin.com/in/abrar-habib-adib-b0b086332/",
  youtube: "https://www.youtube.com/@AbrarAdib",
  fiverr: "https://www.fiverr.com/andrew2649",
  pinterest: "https://uk.pinterest.com/rayan_stark_/",
  // No CV file exists in the project yet. Add one (e.g. /ABRAR-CV.pdf in
  // /public) and set this path to enable the Download CV buttons.
  cv: "",
};

export const profile = {
  name: "Abrar Habib Adib",
  initials: "AH",
  image: profileImage,
  imageAlt: "Portrait of Abrar Habib Adib",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    slug: "aurion",
    title: "AURION",
    categoryLabel: "Robotics • R&D • Mechanical Engineering • Computer Vision",
    filterCategories: ["Robotics"],
    description:
      "AURION is the 5th-generation flagship planetary rover built by the UIU Mars Rover Team. The rover combines custom 3D-printed flexible mesh wheels, a high-torque carbon-fiber manipulator, dual Intel RealSense stereo cameras, and an advanced biochemical assay chamber for planetary exploration and scientific analysis.",
    achievement:
      "Secured 3rd place globally at the University Rover Challenge 2026 in Hanksville, Utah.",
    tags: [
      "Robotics",
      "Computer Vision",
      "Mechanical Design",
      "3D Printing",
      "Stereo Vision",
      "Research & Development",
      "Mars Rover",
    ],
    image: aurionImage,
    imageAlt: "AURION planetary rover with a raised robotic arm on a grass field at sunset",
    shortDescription:
      "UIU Mars Rover Team's flagship rover — 3rd place globally at URC 2026.",
    links: { live: "https://uiumarsrover.org/" },
  },
  {
    slug: "featherflow",
    title: "Featherflow",
    categoryLabel: "Full-Stack Platform • Agriculture • Machine Learning • UX",
    filterCategories: ["Software", "Web", "ML"],
    status: "In active development",
    description:
      "Featherflow is an industry-oriented agricultural platform designed to connect farmers, researchers, administrators, delivery partners, and communities in one coordinated ecosystem. The platform includes farmer services, research workflows, administration tools, disease detection, subscriptions, payments, approvals, delivery coordination, community features, and machine-learning-assisted agricultural support.",
    tags: [
      "Full-Stack",
      "Agriculture",
      "Machine Learning",
      "UX Design",
    ],
    features: [
      "Farmer dashboard",
      "Research panel",
      "Admin panel",
      "Disease detection",
      "Payment & subscription flows",
      "Role-based access",
      "Approval systems",
      "Delivery workflows",
      "Community features",
      "API & database integration",
      "ML model integration",
    ],
    image: featherflowImage,
    imageAlt: "A farmer smiling while holding a swaddled infant beside a hay stack",
    shortDescription:
      "An agricultural platform connecting farmers, researchers, and admins with ML-assisted support.",
    links: { github: "https://github.com/AbrarAdib18/Featherflow" },
  },
  {
    slug: "taxease",
    title: "TaxEase",
    categoryLabel: "FinTech • Web Application • UX",
    filterCategories: ["Web", "UI/UX"],
    description:
      "TaxEase is a user-friendly tax management platform designed to simplify tax-related tasks through a clear, structured, and accessible digital experience. The project focuses on making tax information, calculations, document handling, and user workflows easier to understand and manage.",
    tags: ["FinTech", "Web Application", "UX Design"],
    features: [
      "Tax calculation workflows",
      "Document handling",
      "Structured user dashboard",
    ],
    image: taxEaseImage,
    imageAlt: "A person in a suit calculating figures with a calculator and cash on a desk",
    shortDescription: "A tax management platform that simplifies calculations and document handling.",
    links: { github: "https://github.com/AbrarAdib18/TaxEase" },
  },
  {
    slug: "daak",
    title: "Daak",
    categoryLabel: "Civic Technology • Safety • Full-Stack Web",
    filterCategories: ["Web"],
    description:
      "Daak is a crime alert and community safety website designed to help people report incidents, discover nearby alerts, and stay informed about safety issues in their surroundings. The platform is intended to improve communication between citizens and relevant authorities by organizing incident information in a more accessible and actionable way.",
    tags: ["Civic Technology", "Community Safety", "Full-Stack Web"],
    features: [
      "Incident reporting",
      "Incident categories",
      "Search & filtering",
      "Community awareness",
      "Report status tracking",
    ],
    image: daakImage,
    imageAlt: "An investigator reviewing a corkboard covered in notes, photos, and a map",
    links: {},
  },
  {
    slug: "shishucare",
    title: "ShishuCare",
    categoryLabel: "Healthcare • Child Care • Web Application • UX",
    filterCategories: ["Web", "UI/UX", "Software"],
    description:
      "ShishuCare is a child-care-focused website designed to help parents and guardians access organized information and services related to children's care, well-being, and support. The project emphasizes a friendly, accessible, and trustworthy experience for families.",
    tags: ["Healthcare", "Child Care", "UX Design"],
    features: [
      "Child-care information",
      "Parent resources",
      "Service discovery",
    ],
    image: shishuCareImage,
    imageAlt: "A caregiver tending to hens in a farm corridor, representing hands-on care",
    shortDescription: "A child-care platform helping families access organized care information.",
    links: { github: "https://github.com/AbrarAdib18/shishu_care" },
  },
];

/** The subset of `projects` highlighted in the "Recent Work" strip, in display order. */
export const recentWork: Project[] = ["aurion", "featherflow", "shishucare", "taxease"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined);

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "aurion-video",
    youtubeId: "_a23Pg7axjw",
    title: "UIU Mars Rover | AURION",
  },
  {
    id: "top-gun",
    youtubeId: "loxExnuHTvU",
    title: 'Top Gun: Maverick — Pete "Maverick" Mitchell',
  },
  {
    id: "the-batman",
    youtubeId: "XXTOT6XyOmI",
    title: "The Batman — Bruce Wayne | City of Lies",
  },
  {
    id: "american-psycho",
    youtubeId: "RSPSd_XojsA",
    title: "American Psycho — Patrick Bateman | Reaper",
  },
  {
    id: "attack-on-titan",
    youtubeId: "bEb7otrbM2g",
    title: "Attack on Titan — Sasha Braus | Remember Me",
  },
  {
    id: "once-upon-a-time-hollywood",
    youtubeId: "_xkhBLi9VpQ",
    title: "Once Upon a Time... in Hollywood",
  },
];

/** Pinterest pins showcasing design/content work — 7M+ total views across this content. */
export const pinterestPins: PinterestPin[] = [
  { id: "pin-1", url: "https://uk.pinterest.com/pin/745205069634058084/" },
  { id: "pin-2", url: "https://uk.pinterest.com/pin/745205069632906196/" },
  { id: "pin-3", url: "https://uk.pinterest.com/pin/745205069633341618/" },
  { id: "pin-4", url: "https://uk.pinterest.com/pin/745205069634057846/" },
  { id: "pin-5", url: "https://uk.pinterest.com/pin/745205069632903554/" },
  { id: "pin-6", url: "https://uk.pinterest.com/pin/745205069632903512/" },
  { id: "pin-7", url: "https://uk.pinterest.com/pin/745205069631366756/" },
  { id: "pin-8", url: "https://uk.pinterest.com/pin/745205069629695734/" },
  { id: "pin-9", url: "https://uk.pinterest.com/pin/745205069629695662/" },
];

export const experience: ExperienceItem[] = [
  {
    id: "mars-rover",
    organization: "UIU Mars Rover Team",
    role: "Mechanical & Media Subteam",
    dateRange: "2025–present",
    description:
      'Contributed across mechanical and media activities. Created the "2 Minute Robotics" shorts/reels series, where team members explain robotics components and concepts.',
    skills: ["Mechanical Assembly", "Video Production", "Technical Communication", "Robotics"],
    logo: umrtLogo,
    logoAlt: "UIU Mars Rover Team logo",
  },
  {
    id: "pros-and-comms",
    organization: "PROS AND COMMS",
    role: "Communication Apprentice",
    dateRange: "United International University, 2025",
    description:
      "Served as a student representative at events including Mastermind Chronicles 2025, Innovation Hub 2025, and The Business Standard Roundtable.",
    skills: ["Public Speaking", "Event Communication", "Community Engagement"],
    logo: uiuLogo,
    logoAlt: "United International University logo",
  },
  {
    id: "content-writer",
    organization: "Freelance",
    role: "Content Writer",
    dateRange: "2020–2021",
    description:
      "After completing HSC, I wrote Amazon product reviews and later transitioned into agency scriptwriting for YouTube videos across multiple niches.",
    skills: ["Content Writing", "Scriptwriting", "Research"],
    logo: youtubeLogo,
    logoAlt: "YouTube logo",
  },
  {
    id: "fiverr-editor",
    organization: "Fiverr",
    role: "Video Editor",
    dateRange: "2019–present",
    description:
      "I turned my passion for editing into professional freelance work, collaborating on content for YouTube channels and digital platforms.",
    skills: ["Video Editing", "Client Communication", "Visual Storytelling"],
    logo: fiverrLogo,
    logoAlt: "Fiverr logo",
  },
];

export const education: EducationItem[] = [
  {
    id: "uiu",
    institution: "United International University",
    dateRange: "2022–present",
    credential: "BSc in Computer Science and Engineering",
    detail: "Current CGPA: 3.37",
    logo: uiuLogo,
    logoAlt: "United International University logo",
    inProgress: true,
  },
  {
    id: "dhaka-imperial",
    institution: "Dhaka Imperial College",
    dateRange: "2019–2021",
    credential: "Higher Secondary Certificate (HSC)",
  },
  {
    id: "ideal-school",
    institution: "Ideal School & College",
    dateRange: "2011–2019",
    credential: "Secondary School Certificate (SSC)",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "technical",
    title: "Technical",
    skills: [
      { name: "Frontend Development", level: "Active Practice" },
      { name: "Software Development", level: "Active Practice" },
      { name: "Robotics", level: "Active Practice" },
      { name: "Research & Development", level: "Active Practice" },
      { name: "Machine Learning", level: "Working Knowledge" },
      { name: "ML Model Integration", level: "Working Knowledge" },
      { name: "3D Designing", level: "Working Knowledge" },
      { name: "Database & API Workflows", level: "Working Knowledge" },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    skills: [
      { name: "UI/UX Design", level: "Active Practice" },
      { name: "Video Editing", level: "Active Practice" },
      { name: "Visual Storytelling", level: "Active Practice" },
      { name: "Graphic Design", level: "Experienced" },
      { name: "Content Writing", level: "Experienced" },
    ],
  },
];

export const languages: LanguageSkill[] = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const achievements: Achievement[] = [
  {
    id: "urc-2026",
    title:
      "3rd place globally at the University Rover Challenge 2026 in Hanksville, Utah, as part of the UIU Mars Rover Team.",
    organization: "University Rover Challenge",
    logo: umrtLogo,
    logoAlt: "UIU Mars Rover Team logo",
  },
  {
    id: "dbms-2024",
    title: "4th Runner-Up in the DBMS Lab Fall 2024 CSE Project Show.",
    organization: "United International University",
    logo: uiuLogo,
    logoAlt: "United International University logo",
  },
  {
    id: "sn-bose",
    title:
      "1st Runner-Up in the scientific poster presentation segment of BRAC Presents 1st S.N. Bose National Science Festival.",
  },
  {
    id: "aoop-2025",
    title: "4th Runner-Up in the AOOP Lab Fall 2025 CSE Project Show.",
    organization: "United International University",
    logo: uiuLogo,
    logoAlt: "United International University logo",
  },
];

export const affiliatedOrgs: AffiliatedOrg[] = [
  { id: "uiu", name: "United International University", logo: uiuLogo, logoAlt: "United International University logo" },
  { id: "umrt", name: "UIU Mars Rover Team", logo: umrtLogo, logoAlt: "UIU Mars Rover Team logo" },
  { id: "aries", name: "A.R.I.E.S", logo: ariesLogo, logoAlt: "A.R.I.E.S robotics logo" },
  { id: "cair", name: "Centre for AI & Robotics (CAIR)", logo: cairLogo, logoAlt: "Centre for Artificial Intelligence & Robotics logo" },
  { id: "cdip", name: "Center for Development of IT Professionals", logo: cdipLogo, logoAlt: "Center for Development of IT Professionals logo" },
  { id: "fiverr", name: "Fiverr", logo: fiverrLogo, logoAlt: "Fiverr logo" },
  { id: "dsr", name: "DSR Branding", logo: dsrLogo, logoAlt: "DSR Branding logo" },
  { id: "youtube", name: "YouTube", logo: youtubeLogo, logoAlt: "YouTube logo" },
  // TODO: confirm the correct display name for this one — using the asset's
  // filename ("rnar") as a placeholder.
  { id: "rnar", name: "RNAR", logo: rnarLogo, logoAlt: "RNAR logo" },
];

export const services: ServiceItem[] = [
  {
    id: "frontend",
    title: "Frontend Web Development",
    description:
      "Responsive, accessible interfaces built with modern frontend tooling — from landing pages to multi-role platforms.",
    icon: "code-2",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Clean, structured interface design that prioritizes clarity and usability for real users and real workflows.",
    icon: "layout-panel-left",
  },
  {
    id: "video",
    title: "Video Editing",
    description:
      "Professional editing for YouTube, promotional, and social content — pacing, sound, and story-first cuts.",
    icon: "clapperboard",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description:
      "Visual assets, branding pieces, and layouts designed to communicate ideas clearly and consistently.",
    icon: "palette",
  },
  {
    id: "content",
    title: "Content Writing",
    description:
      "Clear, purposeful writing — from product reviews to video scripts — tailored to the platform and audience.",
    icon: "pen-line",
  },
  {
    id: "ml",
    title: "Machine Learning Prototypes",
    description:
      "Applied ML integration for practical use cases, such as detection features within larger platforms.",
    icon: "brain-circuit",
  },
  {
    id: "robotics",
    title: "Robotics & Technical Media",
    description:
      "Hands-on robotics contributions paired with technical media — explainer shorts that make engineering approachable.",
    icon: "bot",
  },
  {
    id: "3d",
    title: "3D Design",
    description:
      "3D modeling and design support for prototyping and visualizing mechanical or product concepts.",
    icon: "box",
  },
];

export const aboutStats: StatItem[] = [
  { id: "urc", label: "3rd globally at URC 2026", value: "🏆" },
  { id: "views", label: "Total views across my Pinterest design content", value: "7M+" },
  { id: "freelance", label: "2019–present in creative freelance work", value: "6+ yrs" },
  { id: "uiu", label: "2022–present at United International University", value: "UIU" },
];

export const aboutInterests: string[] = [
  "Software Development",
  "Human-Computer Interaction",
  "Machine Learning",
  "Robotics",
  "Research and Development",
  "UI/UX Design",
  "3D Design",
  "Video Editing",
  "Content Writing",
  "Graphic Design",
];
