import { motion } from 'framer-motion'
import { Check, Star, Heart } from 'lucide-react'

interface TraitItem {
  title: string
  body: string
}

interface BadgeItem {
  word: string
  bg: string
  text: string
}

export default function SpecialSection() {
  const traits: TraitItem[] = [
    {
      title: "He always comes back",
      body: "When life gets busy — and with architecture, it always does — Dudu still finds a moment to check in, to explain, to stay. Bubu notices this every time, and it means the world."
    },
    {
      title: "His calm is a superpower",
      body: "Steady. Measured. Operating at a different frequency from the rest. The kind of calm that makes Bubu (and everyone around him) breathe a little easier in a hectic world."
    },
    {
      title: "He creates beauty for others to live in",
      body: "Every project is a gift to people he cares about. Dudu designs spaces with his heart first, drafting structural blueprints that are not just beautiful, but filled with warmth."
    }
  ]

  const badges: BadgeItem[] = [
    { word: "Patient", bg: "#f0e6d3", text: "#6e553c" },
    { word: "Grounded", bg: "#d4e8d8", text: "#3c5e47" },
    { word: "Thoughtful", bg: "#d8e4f0", text: "#3d546e" },
    { word: "Hardworking", bg: "#f0dbd4", text: "#704c40" },
    { word: "Cute", bg: "#e4d8f0", text: "#563d70" },
    { word: "Creative", bg: "#f0ead4", text: "#6b623c" }
  ]


  return (
    <section className="py-24 bg-white px-4 md:px-8 border-t border-gold/10 relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-blueprint-pattern pointer-events-none opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-cute text-xs sm:text-sm uppercase tracking-widest text-gold-dark font-semibold">
            Appreciation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-coffee font-medium mt-2">
            What Makes Dudu Special
          </h2>
          <p className="font-cute text-xs text-coffee-light/60 mt-2">
            Why Bubu thinks the world of Dudu
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Traits List */}
          <div className="lg:col-span-7 space-y-6">
            {traits.map((trait, idx) => (
              <motion.div
                key={idx}
                className="glass-panel rounded-2xl border border-gold/15 p-6 sm:p-8 polaroid-shadow relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center shrink-0 mt-1">
                    <Heart className="w-4.5 h-4.5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-coffee font-semibold mb-2">
                      {trait.title}
                    </h3>
                    <p className="font-cute text-sm text-coffee-light/90 leading-relaxed">
                      {trait.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Floating Personality Badges */}
          <div className="lg:col-span-5 space-y-6 bg-cream border border-gold/10 rounded-3xl p-6 sm:p-8 polaroid-shadow relative">
            <div className="absolute top-3 right-4 text-gold/30"><Star className="w-5 h-5 animate-pulse" /></div>
            
            <h4 className="font-serif text-lg text-coffee font-semibold border-b border-gold/20 pb-3 mb-6">
              Dudu's Qualities
            </h4>

            <p className="font-cute text-xs text-coffee-light/80 leading-relaxed mb-6">
              A blueprint breakdown of Dudu's core parameters. Hover and touch to see them expand:
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  style={{
                    backgroundColor: badge.bg,
                    color: badge.text,
                    border: `1px solid ${badge.text}30`
                  }}
                  className="px-4 py-2.5 rounded-full font-cute text-xs sm:text-sm font-semibold shadow-sm cursor-default select-none flex items-center gap-1.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 3 : -3 }}
                >
                  <Check className="w-3.5 h-3.5" style={{ strokeWidth: 3 }} />
                  <span>{badge.word}</span>
                </motion.div>
              ))}
            </div>

            {/* Whimsical note from Bubu */}
            <div className="bg-white/40 border border-gold/15 rounded-2xl p-4 mt-8">
              <p className="font-cursive text-xl text-coffee-light/95 leading-relaxed text-center italic">
                "Every single quality checked and certified. Bubu loves them all."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
