/**
 * Internationalization utilities for KalkConnect website
 *
 * This file handles:
 * - Language detection from browser/OS
 * - Loading translation files
 * - Fallback to German as default
 * - Easy language management (add/remove languages)
 *
 * To add a new language:
 * 1. Create a new JSON file in /locales/[lang].json
 * 2. Add the language code to SUPPORTED_LANGUAGES (keep alphabetical order)
 * 3. Add the import case in loadTranslations()
 *
 * To remove a language:
 * 1. Remove the language code from SUPPORTED_LANGUAGES
 * 2. Remove the import case from loadTranslations()
 * 3. Delete the JSON file from /locales/
 */

// Supported language codes - ALPHABETICALLY ORDERED
// To remove a language: simply delete it from this array
export const SUPPORTED_LANGUAGES = [
  "ar", // Arabic
  "bs", // Bosnian
  "de", // German (default)
  "en", // English
  "es", // Spanish
  "fa", // Farsi/Persian
  "fr", // French
  "it", // Italian
  "ku", // Kurdish
  "pl", // Polish
  "ro", // Romanian
  "tr", // Turkish
] as const

export type Language = (typeof SUPPORTED_LANGUAGES)[number]

// Translation type definition - matches the structure of JSON files
export interface Translations {
  langLabel: string
  nav: {
    association: string
    donate: string
    services: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  association: {
    heading: string
    body: string
  }
  donate: {
    heading: string
    body: string
    iban: string
    cta: string
    bankTransfer: string // Added for "Banküberweisung" translation
  }
  services: {
    heading: string
    cards: Array<{
      title: string
      text: string
    }>
  }
  contact: {
    heading: string
    address: string
    phone: string
    email: string
    imprint: string
    privacy: string
  }
  footer: {
    nonprofit: string
    description: string
    quickLinks: string
    legal: string
    connect: string
  }
  imprint: {
    title: string
    content: string
  }
  privacy: {
    title: string
    content: string
  }
  backToTop: string
}

/**
 * Detects the user's preferred language from browser settings
 * Falls back to German if no supported language is found
 */
export function detectLanguage(): Language {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return "de" // Default to German on server-side
  }

  // Get browser language preferences
  const browserLang = navigator.language || navigator.languages?.[0] || "de"

  // Extract language code (e.g., 'de-DE' -> 'de')
  const langCode = browserLang.split("-")[0].toLowerCase()

  // Check if the detected language is supported
  if (SUPPORTED_LANGUAGES.includes(langCode as Language)) {
    return langCode as Language
  }

  // Fallback to German
  return "de"
}

/**
 * Loads translation data for a specific language
 * Returns the translation object or falls back to German
 *
 * To remove a language: delete the corresponding case
 */
export async function loadTranslations(lang: Language): Promise<Translations> {
  try {
    let translations: Translations

    // Dynamic import based on language - ALPHABETICALLY ORDERED
    switch (lang) {
      case "ar":
        translations = (await import("../locales/ar.json")).default
        break
      case "bs":
        translations = (await import("../locales/bs.json")).default
        break
      case "de":
        translations = (await import("../locales/de.json")).default
        break
      case "en":
        translations = (await import("../locales/en.json")).default
        break
      case "es":
        translations = (await import("../locales/es.json")).default
        break
      case "fa":
        translations = (await import("../locales/fa.json")).default
        break
      case "fr":
        translations = (await import("../locales/fr.json")).default
        break
      case "it":
        translations = (await import("../locales/it.json")).default
        break
      case "ku":
        translations = (await import("../locales/ku.json")).default
        break
      case "pl":
        translations = (await import("../locales/pl.json")).default
        break
      case "ro":
        translations = (await import("../locales/ro.json")).default
        break
      case "tr":
        translations = (await import("../locales/tr.json")).default
        break
      default:
        // Fallback to German
        translations = (await import("../locales/de.json")).default
    }

    return translations
  } catch (error) {
    console.error(`Failed to load translations for ${lang}, falling back to German:`, error)
    // Fallback to German if loading fails
    return (await import("../locales/de.json")).default
  }
}

/**
 * Gets all available languages with their labels
 * Used for the language switcher dropdown
 * Languages are automatically sorted alphabetically by their codes
 */
export async function getAvailableLanguages(): Promise<Record<Language, string>> {
  const languages: Record<Language, string> = {} as Record<Language, string>

  // Load all language labels (already in alphabetical order)
  for (const lang of SUPPORTED_LANGUAGES) {
    try {
      const translations = await loadTranslations(lang)
      languages[lang] = translations.langLabel
    } catch (error) {
      console.error(`Failed to load label for ${lang}:`, error)
    }
  }

  return languages
}
