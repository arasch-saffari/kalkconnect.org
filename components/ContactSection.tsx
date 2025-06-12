/**
 * Contact Section Component
 *
 * Features:
 * - Contact information display
 * - Modal dialogs for imprint and privacy
 * - Hover animations for interactive elements
 * - Enhanced gradient background
 *
 * To modify:
 * - Update contact information in translations JSON
 * - Adjust modal content and styling
 * - Change background gradients
 * - Add new contact methods or social links
 */

"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Phone, Mail, FileText, Shield } from "lucide-react"
import type { Translations } from "@/lib/i18n"

interface ContactSectionProps {
  translations: Translations
}

export default function ContactSection({ translations }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-br from-stone-100 via-stone-50 to-emerald-50/40 relative overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-200/30 via-transparent to-emerald-100/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-stone-900 mb-16 tracking-tight leading-tight text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {translations.contact.heading}
          </motion.h2>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start justify-center space-x-3">
              <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
              <div className="text-center">
                <p className="text-xl md:text-2xl text-stone-700 font-medium leading-relaxed">KalkConnect e.V.</p>
                <p className="text-lg text-stone-600">Kapellenstr. 9A</p>
                <p className="text-lg text-stone-600">51103 Köln</p>
              </div>
            </div>

            {/* Phone and Email */}
            <div className="space-y-4">
              <motion.a
                href={`tel:${translations.contact.phone}`}
                className="flex items-center justify-center space-x-3 text-stone-600 hover:text-emerald-700 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-5 h-5" />
                <span>{translations.contact.phone}</span>
              </motion.a>
              <motion.a
                href={`mailto:${translations.contact.email}`}
                className="flex items-center justify-center space-x-3 text-stone-600 hover:text-emerald-700 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5" />
                <span>{translations.contact.email}</span>
              </motion.a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
              {/* Imprint Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 transition-colors underline text-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FileText className="w-4 h-4" />
                    <span>{translations.contact.imprint}</span>
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{translations.imprint.title}</DialogTitle>
                  </DialogHeader>
                  <div
                    className="prose prose-stone max-w-none"
                    dangerouslySetInnerHTML={{ __html: translations.imprint.content }}
                  />
                </DialogContent>
              </Dialog>

              {/* Privacy Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    className="flex items-center space-x-2 text-stone-500 hover:text-emerald-700 transition-colors underline text-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Shield className="w-4 h-4" />
                    <span>{translations.contact.privacy}</span>
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{translations.privacy.title}</DialogTitle>
                  </DialogHeader>
                  <div
                    className="prose prose-stone max-w-none"
                    dangerouslySetInnerHTML={{ __html: translations.privacy.content }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
