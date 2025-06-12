/**
 * Association Section Component
 *
 * Features:
 * - Centered layout with consistent styling
 * - Animated content on scroll
 * - HTML content rendering for rich text
 * - Responsive typography
 *
 * To modify:
 * - Update animation triggers in viewport props
 * - Adjust content width with max-w-* classes
 * - Change animation delays and durations
 * - Modify typography styles in prose classes
 */

"use client"

import { motion } from "framer-motion"
import type { Translations } from "@/lib/i18n"

interface AssociationSectionProps {
  translations: Translations
}

export default function AssociationSection({ translations }: AssociationSectionProps) {
  return (
    <section id="association" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
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
            {translations.association.heading}
          </motion.h2>

          {/* Section Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="prose prose-xl prose-stone max-w-none space-y-6 text-left"
          >
            <div
              className="text-stone-600 leading-relaxed text-xl font-light"
              dangerouslySetInnerHTML={{ __html: translations.association.body }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
