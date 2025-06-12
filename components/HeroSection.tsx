/**
 * Hero Section Component for KalkConnect Website
 *
 * Features:
 * - Full-screen hero with parallax effect
 * - Animated text and CTA button
 * - Scroll indicator arrow
 * - Responsive typography
 * - Enhanced gradient background
 *
 * To modify:
 * - Adjust gradient colors in the background
 * - Change animation timings in motion props
 * - Update typography sizes in className props
 * - Modify parallax effect strength in useTransform
 */

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Translations } from "@/lib/i18n"

interface HeroSectionProps {
  translations: Translations
  onNavigate: (sectionId: string) => void
}

export default function HeroSection({ translations, onNavigate }: HeroSectionProps) {
  // Parallax effect for background
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-emerald-100">
      {/* Enhanced Background Pattern with Parallax */}
      <motion.div
        style={{ y: heroY }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
        }}
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-stone-100/40" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 mb-8 tracking-tight leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {translations.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-stone-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {translations.hero.subtitle}
        </motion.p>

        {/* CTA Button and Arrow Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Call to Action Button */}
          <Button
            onClick={() => onNavigate("association")}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {translations.hero.cta}
          </Button>

          {/* Scroll Indicator Arrow - positioned under the button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden md:block"
          >
            <button
              onClick={() => onNavigate("association")}
              className="text-stone-400 hover:text-emerald-600 transition-all duration-300 p-4 rounded-full hover:bg-emerald-50"
              aria-label="Scroll to association section"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
                className="w-8 h-8 flex items-center justify-center"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
