/**
 * Services Section Component
 *
 * Features:
 * - Grid layout for service cards
 * - Hover animations and effects
 * - Staggered animation on scroll
 * - Enhanced card styling without top border
 *
 * To modify:
 * - Add/remove service cards in translations JSON
 * - Adjust grid layout (currently 2 columns on md+)
 * - Change hover effects and animations
 * - Update card styling and colors
 */

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Network, GraduationCap } from "lucide-react"
import type { Translations } from "@/lib/i18n"

interface ServicesSectionProps {
  translations: Translations
}

export default function ServicesSection({ translations }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-stone-900 mb-16 tracking-tight leading-tight text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {translations.services.heading}
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {translations.services.cards.map((card, index) => {
            // Define icons for each service
            const icons = [MessageCircle, Users, Network, GraduationCap]
            const IconComponent = icons[index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Card className="h-full border-stone-200 hover:shadow-2xl transition-all duration-500 overflow-hidden relative bg-gradient-to-br from-white to-stone-50 group-hover:from-emerald-50 group-hover:to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-emerald-100 group-hover:bg-emerald-200 rounded-lg transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {card.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-stone-600 text-lg leading-relaxed font-light">
                      {card.text}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
