/**
 * Header Component for KalkConnect Website
 *
 * Features:
 * - Sticky navigation with backdrop blur
 * - Responsive mobile menu
 * - Language switcher with dropdown
 * - Smooth scroll navigation
 * - Accessibility features (ARIA labels, keyboard navigation)
 *
 * To modify:
 * - Update navigation items in the nav object
 * - Adjust styling in className props
 * - Add new navigation items by extending the nav structure
 */

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import type { Translations, Language } from "@/lib/i18n"
import { SUPPORTED_LANGUAGES } from "@/lib/i18n"

interface HeaderProps {
  translations: Translations
  currentLang: Language
  availableLanguages: Record<Language, string>
  onLanguageChange: (lang: Language) => void
  onNavigate: (sectionId: string) => void
}

export default function Header({
  translations,
  currentLang,
  availableLanguages,
  onLanguageChange,
  onNavigate,
}: HeaderProps) {
  // State management for mobile menu and language dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  // Handle clicks outside language menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".lang-menu")) {
        setLangMenuOpen(false)
      }
    }

    // Handle keyboard navigation (ESC to close menus)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
        setLangMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Navigation helper function
  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId)
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand - clickable to scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-xl text-stone-800 hover:text-emerald-700 transition-colors duration-300 cursor-pointer"
        >
          KalkConnect e.V.
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links */}
          <button
            onClick={() => handleNavigation("association")}
            className="text-stone-600 hover:text-emerald-700 relative group transition-colors duration-300 px-3 py-2"
          >
            <span className="relative z-10">{translations.nav.association}</span>
            <div className="absolute inset-0 bg-emerald-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-10"></div>
          </button>
          <button
            onClick={() => handleNavigation("donate")}
            className="text-stone-600 hover:text-emerald-700 relative group transition-colors duration-300 px-3 py-2"
          >
            <span className="relative z-10">{translations.nav.donate}</span>
            <div className="absolute inset-0 bg-emerald-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-10"></div>
          </button>
          <button
            onClick={() => handleNavigation("services")}
            className="text-stone-600 hover:text-emerald-700 relative group transition-colors duration-300 px-3 py-2"
          >
            <span className="relative z-10">{translations.nav.services}</span>
            <div className="absolute inset-0 bg-emerald-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-10"></div>
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="text-stone-600 hover:text-emerald-700 relative group transition-colors duration-300 px-3 py-2"
          >
            <span className="relative z-10">{translations.nav.contact}</span>
            <div className="absolute inset-0 bg-emerald-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-10"></div>
          </button>

          {/* Language Switcher */}
          <div className="relative lang-menu">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 text-stone-600 hover:text-emerald-700 transition-colors px-3 py-2 rounded-lg hover:bg-emerald-100"
              aria-label="Sprache wählen"
              aria-expanded={langMenuOpen}
              aria-haspopup="true"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{translations.langLabel}</span>
            </button>

            {/* Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg border border-stone-200">
                {SUPPORTED_LANGUAGES.map((langCode) => (
                  <button
                    key={langCode}
                    onClick={() => {
                      onLanguageChange(langCode)
                      setLangMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${
                      currentLang === langCode ? "text-emerald-700 font-medium" : "text-stone-600"
                    }`}
                    aria-label={`Sprache zu ${availableLanguages[langCode]} wechseln`}
                    aria-current={currentLang === langCode ? "true" : "false"}
                  >
                    {availableLanguages[langCode]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Language Switcher */}
          <div className="relative lang-menu">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 text-stone-600 hover:text-emerald-700 transition-colors"
              aria-label="Sprache wählen"
              aria-expanded={langMenuOpen}
              aria-haspopup="true"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* Mobile Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg border border-stone-200">
                {SUPPORTED_LANGUAGES.map((langCode) => (
                  <button
                    key={langCode}
                    onClick={() => {
                      onLanguageChange(langCode)
                      setLangMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${
                      currentLang === langCode ? "text-emerald-700 font-medium" : "text-stone-600"
                    }`}
                    aria-label={`Sprache zu ${availableLanguages[langCode]} wechseln`}
                    aria-current={currentLang === langCode ? "true" : "false"}
                  >
                    {availableLanguages[langCode]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-600 hover:text-emerald-700 transition-colors"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-stone-200"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavigation("association")}
              className="block w-full text-left text-stone-600 hover:text-emerald-700 transition-colors py-2"
            >
              {translations.nav.association}
            </button>
            <button
              onClick={() => handleNavigation("donate")}
              className="block w-full text-left text-stone-600 hover:text-emerald-700 transition-colors py-2"
            >
              {translations.nav.donate}
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className="block w-full text-left text-stone-600 hover:text-emerald-700 transition-colors py-2"
            >
              {translations.nav.services}
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="block w-full text-left text-stone-600 hover:text-emerald-700 transition-colors py-2"
            >
              {translations.nav.contact}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
