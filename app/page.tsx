"use client"

import { useState, useEffect } from "react"
import { detectLanguage, loadTranslations, getAvailableLanguages } from "@/lib/i18n"
import type { Language, Translations } from "@/lib/i18n"

// Import all section components
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AssociationSection from "@/components/AssociationSection"
import DonateSection from "@/components/DonateSection"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"

export default function KalkConnectWebsite() {
  // State management
  const [currentLang, setCurrentLang] = useState<Language>("de")
  const [translations, setTranslations] = useState<Translations | null>(null)
  const [availableLanguages, setAvailableLanguages] = useState<Record<Language, string>>({} as Record<Language, string>)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize language and load translations
  useEffect(() => {
    async function initializeLanguage() {
      try {
        // Detect user's preferred language
        const detectedLang = detectLanguage()
        setCurrentLang(detectedLang)

        // Load translations for detected language
        const translationData = await loadTranslations(detectedLang)
        setTranslations(translationData)

        // Load all available languages for the switcher
        const languages = await getAvailableLanguages()
        setAvailableLanguages(languages)

        setIsLoading(false)
      } catch (error) {
        console.error("Failed to initialize language:", error)
        // Fallback to German if initialization fails
        const fallbackTranslations = await loadTranslations("de")
        setTranslations(fallbackTranslations)
        setCurrentLang("de")
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [])

  // Handle language change
  const handleLanguageChange = async (newLang: Language) => {
    try {
      setCurrentLang(newLang)
      const newTranslations = await loadTranslations(newLang)
      setTranslations(newTranslations)
    } catch (error) {
      console.error(`Failed to load translations for ${newLang}:`, error)
    }
  }

  // Smooth scroll navigation helper
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Show loading state while translations are being loaded
  if (isLoading || !translations) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-stone-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header with Navigation */}
      <Header
        translations={translations}
        currentLang={currentLang}
        availableLanguages={availableLanguages}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigation}
      />

      {/* Hero Section */}
      <HeroSection translations={translations} onNavigate={handleNavigation} />

      {/* Association Section */}
      <AssociationSection translations={translations} />

      {/* Donate Section */}
      <DonateSection translations={translations} />

      {/* Services Section */}
      <ServicesSection translations={translations} />

      {/* Contact Section */}
      <ContactSection translations={translations} />

      {/* Footer */}
      <Footer translations={translations} />

      {/* Back to Top Button */}
      <BackToTopButton translations={translations} />
    </div>
  )
}
