/**
 * Donate Section Component
 *
 * Features:
 * - Enhanced gradient background
 * - IBAN copy functionality with feedback
 * - Animated donation card
 * - Rich text content support
 * - Responsive layout
 *
 * To modify:
 * - Update IBAN in translations JSON files
 * - Adjust card styling and animations
 * - Change gradient colors in background
 * - Modify copy feedback timing
 */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import type { Translations } from "@/lib/i18n"

interface DonateSectionProps {
  translations: Translations
}

export default function DonateSection({ translations }: DonateSectionProps) {
  const [copied, setCopied] = useState(false)

  // IBAN copy functionality
  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(translations.donate.iban)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy IBAN:", err)
    }
  }

  return (
    <section
      id="donate"
      className="py-24 md:py-32 bg-gradient-to-br from-stone-50 via-emerald-50/30 to-stone-100 relative overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-transparent to-stone-200/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-stone-900 mb-16 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {translations.donate.heading}
          </motion.h2>

          {/* Section Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Rich Text Content */}
            <div
              className="prose prose-xl prose-stone max-w-none space-y-8 text-left"
              dangerouslySetInnerHTML={{ __html: translations.donate.body }}
            />

            {/* IBAN Donation Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 md:p-12 rounded-2xl border border-emerald-200 text-center shadow-lg max-w-2xl mx-auto"
            >
              <p className="text-sm text-stone-500 uppercase tracking-wider font-medium mb-4">
                {translations.donate.bankTransfer}
              </p>
              <p className="text-2xl md:text-3xl font-mono font-bold text-stone-900 mb-8 break-all">
                {translations.donate.iban}
              </p>
              <Button
                onClick={copyIban}
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-100 rounded-full px-8 py-3 transition-all duration-300"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Kopiert!" : translations.donate.cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
