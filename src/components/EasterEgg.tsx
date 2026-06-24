import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, X } from 'lucide-react'

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false)

  // Floating petals
  const petals = Array.from({ length: 15 })

  return (
    <>
      {/* Small Hidden Tulip Widget */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: 0.6 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, opacity: 1 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 rounded-full bg-cream border border-gold/45 text-gold-dark shadow-md flex items-center justify-center cursor-pointer transition-shadow hover:shadow-lg focus:outline-none"
          title="Bubu's secret..."
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2C11.5 2 10 5 10 8C10 9.8 10.8 11.2 12 12.3C13.2 11.2 14 9.8 14 8C14 5 12.5 2 12 2Z" />
            <path d="M16.5 6C15 6.5 13.8 8.2 13.8 10.5C13.8 12.5 15.5 14.5 17 15.5C18.2 13.5 18.5 11 18.5 9.5C18.5 7.5 17.5 6.2 16.5 6Z" opacity="0.8" />
            <path d="M7.5 6C9 6.5 10.2 8.2 10.2 10.5C10.2 12.5 8.5 14.5 7 15.5C5.8 13.5 5.5 11 5.5 9.5C5.5 7.5 6.5 6.2 7.5 6Z" opacity="0.8" />
            <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 16Q15 17 15 19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 14Q9 15 9 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>

      {/* Secret Garden Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#12121E]/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Falling Petals Background */}
            <div className="absolute inset-0 pointer-events-none">
              {petals.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute"
                  style={{
                    top: `-10%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: ['0vh', '110vh'],
                    x: ['0vw', `${Math.random() * 20 - 10}vw`],
                    rotate: [0, 360],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{
                    duration: Math.random() * 6 + 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5
                  }}
                >
                  {/* Small watercolor petal SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#FFF0F2] text-gold opacity-60">
                    <path d="M12 2C15 2 22 9 22 14C22 19 17 22 12 22C7 22 2 19 2 14C2 9 9 2 12 2Z" />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Glowing growing tulips at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none flex justify-around items-end">
              {Array.from({ length: 6 }).map((_, idx) => (
                <svg key={idx} viewBox="0 0 100 200" className="w-16 sm:w-24 h-full text-gold/30">
                  {/* Stem */}
                  <motion.path
                    d="M 50 200 Q 45 120 50 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                  />
                  {/* Leaves */}
                  <motion.path
                    d="M 50 140 Q 20 120 30 90 Q 40 110 50 120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: idx * 0.2 + 0.4 }}
                  />
                  {/* Flower Head */}
                  <motion.g
                    transform="translate(50, 40)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 1, delay: idx * 0.2 + 1 }}
                  >
                    <path d="M0 -20 C-10 -20 -15 -5 -15 15 C-15 25 -5 30 0 30 C5 30 15 25 15 15 C15 -5 10 -20 0 -20 Z" fill="#FFE5EC" stroke="#C5A880" strokeWidth="1" />
                    <path d="M-8 -15 C-18 -10 -10 10 -5 15" fill="none" stroke="#C5A880" strokeWidth="1" />
                    <path d="M8 -15 C18 -10 10 10 5 15" fill="none" stroke="#C5A880" strokeWidth="1" />
                  </motion.g>
                </svg>
              ))}
            </div>

            {/* The Hidden Letter Card */}
            <motion.div
              className="relative z-10 w-full max-w-md bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 border border-gold/30 polaroid-shadow flex flex-col items-center text-center overflow-hidden"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            >
              {/* Paper Grid background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mb-6 relative">
                <Sparkles className="w-8 h-8 animate-spin-slow" />
                <Heart className="w-4 h-4 text-gold absolute" />
              </div>

              <span className="font-cute text-xs uppercase tracking-widest text-gold-dark font-bold mb-2">
                Secret Garden Unlocked
              </span>
              <h3 className="font-serif text-2xl text-coffee font-medium mb-4">
                Bubu's Hidden Note 🌷
              </h3>
              
              <div className="w-12 h-[1px] bg-gold mb-6" />

              <p className="font-cursive text-2xl text-coffee-light/95 leading-relaxed mb-6 italic">
                "No matter how complex the blueprints of life get, my foundation of love and admiration for you remains absolute. You build beautiful things, Dudu, but you are the most beautiful creation of all."
              </p>

              <p className="font-cute text-xs text-gold-dark/80 tracking-wider">
                — Love, Bubu 🤍
              </p>

              {/* Close Button inside card */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 px-6 py-2 bg-coffee hover:bg-coffee-light text-white font-cute text-xs uppercase tracking-widest rounded-full cursor-pointer transition-colors shadow"
              >
                Close Garden
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-coffee-light hover:text-coffee cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
