/**
 * Back to Top Button Component
 *
 * Features:
 * - Appears after scrolling down 400px
 * - Smooth scroll to top functionality
 * - Animated entrance/exit
 * - Accessible with proper ARIA label
 *
 * To modify:
 * - Adjust scroll threshold (currently 400px)
 * - Change button position or styling
 * - Update animation effects
 * - Modify scroll behavior
 */

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import type { Translations } from "@/lib/i18n"

interface BackToTopButtonProps {
  translations: Translations
}

export default function BackToTopButton({ translations }: BackToTopButtonProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400) // Show after 400px scroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Don't render if not visible
  if (!showBackToTop) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label={translations.backToTop}
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  )
}
