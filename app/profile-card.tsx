"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Settings, Mail, Github, Linkedin, Globe, Sun, Moon, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"
import "../i18n-config"

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState("about")
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only accessed client-side
  useEffect(() => {
    // Detect user's language preference
    const detectLanguage = () => {
      const userLang = navigator.language
      if (userLang.toLowerCase().includes("sk")) {
        i18n.changeLanguage("sk")
      } else {
        i18n.changeLanguage("en")
      }
    }

    // Set theme based on time of day - only sets initial default
    const setThemeBasedOnTime = () => {
      const currentHour = new Date().getHours()
      // If time is between 8 PM (20:00) and 8 AM (08:00), use dark theme
      if (currentHour >= 20 || currentHour < 8) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }

    detectLanguage()

    // Only set the theme based on time if it hasn't been manually set before
    if (!localStorage.getItem("theme")) {
      setThemeBasedOnTime()
    }

    setMounted(true)
  }, [i18n, setTheme])

  const skills = {
    frontend: ["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "React", "Next.js", "Vue.js", "Webpack", "Tailwind CSS", "Gulp.js"],
    backend: ["PHP", "MySQL", "WordPress", "Node.js", "Express", "Firebase", "Supabase"],
    devops: ["Version Control", "AWS", "CI/CD"],
    ai: ["Natural Language Processing", "Image Generation"],
    dependencyManagement: ["npm", "yarn", "pnpm", "Bower", "bun"],
    tools: ["Adobe Photoshop", "Adobe XD", "Adobe Illustrator", "Sketch"],
    methodology: ["SCRUM"],
    security: ["JWT", "Auth0", "OAuth2"],
    apiTools: ["REST API", "Postman"],
    operatingSystems: ["MacOS", "Windows"]
  }

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setSettingsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setSettingsOpen(false)
  }

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center min-h-screen p-4 epoxy-background">
      <div className="w-full max-w-[600px] frosted-glass rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
        {/* Header */}
        <div className="relative p-6 flex justify-between items-center border-b border-gray-100/50 dark:border-gray-700/50">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{t("name")}</h1>
          <div className="relative">
            <button
              onClick={toggleSettings}
              className="p-2 rounded-full hover:bg-gray-100/70 dark:hover:bg-gray-700/70 transition-colors data-[state=open]:bg-gray-100/70 dark:data-[state=open]:bg-gray-700/70"
              aria-label="Settings"
              data-state={settingsOpen ? "open" : "closed"}
            >
              <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Settings Dropdown */}
            <AnimatePresence>
              {settingsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg z-10 overflow-hidden border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-3">
                    {/* Language Toggler */}
                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("settings.language")}:
                      </span>
                      <div className="flex w-[88px]">
                        <Toggle
                          pressed={i18n.language === "en"}
                          onPressedChange={() => {
                            if (i18n.language === "en") return;
                            changeLanguage("en")
                          }}
                          className="flex-1 rounded-r-none data-[state=on]:bg-gray-100 dark:data-[state=on]:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                          variant="outline"
                          size="sm"
                        >
                          EN
                        </Toggle>
                        <Toggle
                          pressed={i18n.language === "sk"}
                          onPressedChange={() => {
                            if (i18n.language === "sk") return;
                            changeLanguage("sk")
                          }}
                          className="flex-1 rounded-l-none border-l-0 data-[state=on]:bg-gray-100 dark:data-[state=on]:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                          variant="outline"
                          size="sm"
                        >
                          SK
                        </Toggle>
                      </div>
                    </div>

                    {/* Theme Toggler */}
                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("settings.theme")}:
                      </span>
                      <div className="flex w-[88px]">
                        <Toggle
                          pressed={theme === "light"}
                          onPressedChange={() => {
                            if (theme === "light") return;
                            setTheme("light")
                            setSettingsOpen(false)
                          }}
                          className="flex-1 rounded-r-none data-[state=on]:bg-gray-100 dark:data-[state=on]:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                          variant="outline"
                          size="sm"
                        >
                          <Sun className="h-[1.2rem] w-[1.2rem]" />
                        </Toggle>
                        <Toggle
                          pressed={theme === "dark"}
                          onPressedChange={() => {
                            if (theme === "dark") return;
                            setTheme("dark")
                            setSettingsOpen(false)
                          }}
                          className="flex-1 rounded-l-none border-l-0 data-[state=on]:bg-gray-100 dark:data-[state=on]:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                          variant="outline"
                          size="sm"
                        >
                          <Moon className="h-[1.2rem] w-[1.2rem]" />
                        </Toggle>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-6 relative overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm"></div>
          <div className="relative flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
              KČ
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Kevin Čížik</h2>
              <p className="text-gray-600 dark:text-gray-400">{t("title")}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-between border-b border-gray-200/50 dark:border-gray-700/50">
          {["about", "skills", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              {t(`tabs.${tab}`)}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative h-[350px] frosted-glass rounded-b-xl p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="absolute inset-0 overflow-y-auto p-4 custom-scrollbar"
            >
              {activeTab === "about" && (
                <div className="prose dark:prose-invert max-w-full">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{t("about.bio")}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm leading-snug">{t("about.experience")}</p>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-4 pr-2">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        {t(`skills.categories.${category}`)}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-200/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-full text-sm border border-white/20 dark:border-gray-600/20 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "contact" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-2">
                  <a
                    href="mailto:kevincizik@gmail.com"
                    className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:shadow-md hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/70 flex items-center justify-center mr-3 shadow-inner">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{t("contact.email")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">kevincizik@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+421904615692"
                    className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-all duration-300 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:shadow-md hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/70 flex items-center justify-center mr-3 shadow-inner">
                      <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{t("contact.phone")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">+421 904 615 692</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/kevincizik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:shadow-md hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/70 flex items-center justify-center mr-3 shadow-inner">
                      <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{t("contact.linkedin")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        linkedin.com/in/kevincizik
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/keevvinc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-gray-50/50 dark:hover:bg-gray-600/50 transition-all duration-300 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:shadow-md hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800/70 flex items-center justify-center mr-3 shadow-inner">
                      <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{t("contact.github")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">github.com/keevvinc</div>
                    </div>
                  </a>

                  {/* <a
                    href="https://kevincizik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-all duration-300 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:shadow-md hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/70 flex items-center justify-center mr-3 shadow-inner">
                      <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{t("contact.website")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">kevincizik.com</div>
                    </div>
                  </a> */}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
