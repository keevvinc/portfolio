import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// English translations
const enTranslations = {
  name: "Developer Profile",
  title: "Software Engineer",
  tabs: {
    about: "About",
    skills: "Skills",
    contact: "Contact",
  },
  about: {
    bio: "I am a web developer with a passion for creating intuitive and engaging user experiences. My expertise lies in building responsive and dynamic web applications, while I also have a strong foundation in UI/UX design.",
    experience: "With over 13 years of experience in web development, I have worked on various projects that enhance user interaction and satisfaction.",
  },
  skills: {
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      ai: "Artificial Intelligence",
      dependencyManagement: "Dependency Management",
      operatingSystems: "Operating Systems",
      tools: "Design Tools",
      methodology: "Methodology",
      security: "Security",
      apiTools: "API Development"
    },
  },
  contact: {
    email: "Email",
    phone: "Phone",
    github: "GitHub",
    linkedin: "LinkedIn",
    website: "Website",
  },
  settings: {
    language: "Language",
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
  },
}

// Slovak translations
const skTranslations = {
  name: "Profil vývojára",
  title: "Softvérový inžinier",
  tabs: {
    about: "O mne",
    skills: "Zručnosti",
    contact: "Kontakt",
  },
  about: {
    bio: "Som webový vývojár s vášňou pre vytváranie intuitívnych a pútavých používateľských zážitkov. Moje odborné zručnosti spočívajú vo vytváraní responzívnych a dynamických webových aplikácií, pričom mám aj silný základ v UI/UX dizajne.",
    experience: "S viac ako 13-ročnými skúsenosťami vo webovom vývoji som pracoval na rôznych projektoch, ktoré zlepšujú interakciu a spokojnosť používateľov.",
  },
  skills: {
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      ai: "Umelá inteligencia",
      dependencyManagement: "Správa závislostí",
      operatingSystems: "Operačné systémy",
      tools: "Dizajnérske nástroje",
      methodology: "Metodológia",
      security: "Bezpečnosť",
      apiTools: "Vývoj API"
    },
  },
  contact: {
    email: "Email",
    phone: "Telefón",
    github: "GitHub",
    linkedin: "LinkedIn",
    website: "Webstránka",
  },
  settings: {
    language: "Jazyk",
    theme: "Téma"
  },
}

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sk: { translation: skTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
