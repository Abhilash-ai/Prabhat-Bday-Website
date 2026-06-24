import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Coffee, Moon, Mountain, Lightbulb, X, CheckCircle2 } from 'lucide-react'

interface PersonaItem {
  id: number
  icon: any
  title: string
  emoji: string
  shortDesc: string
  bgPattern: string
  stats: {
    label: string
    value: string
  }[]
  extendedDesc: string
}

export default function AboutSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const personas: PersonaItem[] = [
    {
      id: 1,
      icon: Compass,
      title: "The Architect",
      emoji: "🏗️",
      shortDesc: "Designing blueprints, dreaming structures. Dudu sees the world as a canvas of lines, volumes, and inspiring spaces.",
      bgPattern: "bg-blueprint-pattern",
      stats: [
        { label: "Design Philosophy", value: "Minimal Luxury with Warm Soul" },
        { label: "Favorite Tool", value: "0.5mm Rotring Pencil" },
        { label: "Drafting Mode", value: "Precision Grid & Soft Music" }
      ],
      extendedDesc: "Architecture isn't just a profession; it's how Dudu navigates life. He looks at spaces and immediately visualizes light, materials, and emotions. From sketchbooks filled with technical drafts to detailed 3D models, he pours his creativity into every corner."
    },
    {
      id: 2,
      icon: Coffee,
      title: "Coffee Lover",
      emoji: "☕",
      shortDesc: "Fueled by roasted beans and warm cups. To Dudu, coffee is a sacred ritual that sparks imagination.",
      bgPattern: "bg-grid-pattern",
      stats: [
        { label: "Standard Brew", value: "Double Shot Espresso / AeroPress" },
        { label: "Cups Per Day", value: "2 (Optimal Creativity Zone)" },
        { label: "Coffee Partner", value: "A warm plate of cookies" }
      ],
      extendedDesc: "A day without coffee is like a blueprint without measurements. The aroma of brewing coffee marks the start of Dudu's design process. It's a cozy companion during long sketch sessions and a warm handholder during early mornings."
    },
    {
      id: 3,
      icon: Moon,
      title: "Night Owl",
      emoji: "🌙",
      shortDesc: "When the sun goes down, the drafting lamp turns on. Peak inspiration hits when the world goes quiet.",
      bgPattern: "bg-grid-pattern",
      stats: [
        { label: "Peak Hours", value: "11:00 PM – 3:00 AM" },
        { label: "Ambient Audio", value: "Lofi Beats & Cozy Rain" },
        { label: "Drafting Companion", value: "Warm Desk Lamp Glow" }
      ],
      extendedDesc: "There's a special magic in the quiet hours of the night. For Dudu, the world becomes a peaceful studio free of distractions. It's during these midnight sessions that his most innovative drawings and architectural ideas come to life."
    },
    {
      id: 4,
      icon: Mountain,
      title: "Mountain Lover",
      emoji: "🏔️",
      shortDesc: "Drawn to the heights, fresh alpine wind, and snow-capped peaks. The mountains are where Dudu finds his peace.",
      bgPattern: "bg-blueprint-pattern",
      stats: [
        { label: "Ideal Elevation", value: "3000+ Meters" },
        { label: "Hike Level", value: "Adventurous Explorer" },
        { label: "Vibe", value: "Misty pine woods & bonfire chats" }
      ],
      extendedDesc: "Whenever the city gets too loud, Dudu hears the mountains calling. The massive scale of nature reminds him of architectural grandeur. Climbing peaks, breathing in fresh pine-scented air, and sleeping under a dome of stars is his ultimate reset button."
    },
    {
      id: 5,
      icon: Lightbulb,
      title: "Creative Thinker",
      emoji: "✨",
      shortDesc: "Bridging logic and magic. Every challenge is just a beautiful design problem waiting to be solved.",
      bgPattern: "bg-grid-pattern",
      stats: [
        { label: "Thinking Mode", value: "Doodling on Sticky Notes" },
        { label: "Focus State", value: "Deep Dive flow" },
        { label: "Motto", value: "Form follows feeling" }
      ],
      extendedDesc: "Dudu's mind never truly stops designing. He links structure with storytelling, finding inspiration in small observations—the way light filters through leaves, the texture of a brick wall, or a page layout in a vintage magazine."
    }
  ]

  const activePersona = personas.find(p => p.id === selectedId)

  return (
    <section className="py-24 bg-cream px-4 md:px-8 border-t border-gold/10 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-cute text-xs sm:text-sm uppercase tracking-widest text-gold-dark font-semibold">
            Facets
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-coffee font-medium mt-2">
            The Person Behind The Architect
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.id}
                layoutId={`card-container-${persona.id}`}
                onClick={() => setSelectedId(persona.id)}
                className="glass-panel hover:bg-white rounded-2xl border border-gold/10 p-6 md:p-8 polaroid-shadow cursor-pointer relative overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Background Pattern Hint */}
                <div className={`absolute inset-0 pointer-events-none opacity-[0.03] ${persona.bgPattern}`} />

                <div className="relative z-10">
                  {/* Icon & Emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-coffee-light">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl">{persona.emoji}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-coffee font-medium mb-3">
                    {persona.title}
                  </h3>
                  <p className="font-cute text-sm text-coffee-light/80 leading-relaxed mb-6">
                    {persona.shortDesc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center text-xs font-cute text-gold-dark font-semibold tracking-wider uppercase gap-1 mt-auto">
                  <span>Blueprint Details</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    →
                  </motion.span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Expandable Dialog Modal Overlay */}
        <AnimatePresence>
          {selectedId !== null && activePersona && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-coffee/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />

              {/* Expanded Card */}
              <motion.div
                layoutId={`card-container-${activePersona.id}`}
                className="w-full max-w-lg bg-cream rounded-3xl overflow-hidden polaroid-shadow border border-gold/25 relative z-10 flex flex-col"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                {/* Header Graphic */}
                <div className={`relative p-6 sm:p-8 bg-coffee text-white flex items-center justify-between overflow-hidden`}>
                  {/* Design pattern background */}
                  <div className="absolute inset-0 bg-blueprint-pattern opacity-10" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold/30 flex items-center justify-center text-gold">
                      <activePersona.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-white font-medium">
                        {activePersona.title} {activePersona.emoji}
                      </h3>
                      <span className="text-[10px] font-cute uppercase tracking-wider text-gold">
                        Spec Sheet • #0{activePersona.id}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedId(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors relative z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                  <div>
                    <h4 className="font-serif text-sm uppercase tracking-wider text-gold-dark font-bold mb-2">
                      Overview
                    </h4>
                    <p className="font-cute text-sm text-coffee-light leading-relaxed">
                      {activePersona.extendedDesc}
                    </p>
                  </div>

                  {/* Character stats - Architectural breakdown */}
                  <div>
                    <h4 className="font-serif text-sm uppercase tracking-wider text-gold-dark font-bold mb-3">
                      Personality Parameters
                    </h4>
                    <div className="space-y-3 bg-white/50 border border-gold/15 rounded-2xl p-4">
                      {activePersona.stats.map((stat, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs pb-2 last:pb-0 last:border-0 border-b border-gold/10">
                          <span className="font-cute text-coffee-light/70">{stat.label}:</span>
                          <span className="font-cute text-coffee font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer notes */}
                <div className="bg-gold/10 p-4 border-t border-gold/10 text-center">
                  <span className="font-cute text-[10px] uppercase tracking-widest text-gold-dark font-medium">
                    Certified Dudu Trait 🐼🤍
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
