/**
 * Footer Component
 *
 * Features:
 * - Simplified, elegant design
 * - Organization description and nonprofit status
 * - Copyright information
 * - Animated content on scroll
 *
 * To modify:
 * - Add social media links if needed
 * - Change styling and colors
 * - Update organization description
 */

"use client"

import { motion } from "framer-motion"
import type { Translations } from "@/lib/i18n"

interface FooterProps {
  translations: Translations
}

export default function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 text-stone-300 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Organization Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">KalkConnect e.V.</h3>
          <p className="text-stone-400 mb-6 leading-relaxed">{translations.footer.description}</p>
          <div className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-300 rounded-full text-sm font-medium">
            {translations.footer.nonprofit}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-stone-700 pt-6"
        >
          <p className="text-stone-400">&copy; {currentYear} KalkConnect e.V.</p>
        </motion.div>
      </div>
    </footer>
  )
}
