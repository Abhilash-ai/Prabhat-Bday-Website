import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles } from 'lucide-react'

export default function GrandFinale() {
  const wishes = [
    "May every blueprint you draw this year become something extraordinary, Dudu.",
    "May your coffee always be strong and your deadlines always kind. 🐻☕",
    "May the mountains remind you how far you have come, and how high you can climb.",
    "May every quiet late night end in something you love."
  ]

  const [activeWishIdx, setActiveWishIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWishIdx((prev) => (prev + 1) % wishes.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [])

  const triggerCelebration = () => {
    // Launch fireworks
    const duration = 6 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 }

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      // Fire multiple bursts at different screen origins
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)
  }

  // Automatic trigger on mount
  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 }
    })
  }, [])

  return (
    <motion.section
      onViewportEnter={triggerCelebration}
      className="relative min-h-screen bg-[#0B0B1E] px-4 py-20 overflow-hidden flex flex-col justify-between items-center text-center select-none"
    >
      {/* Starry night sky background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sparkles */}
        <div className="absolute top-1/4 left-1/3 text-gold/30 animate-pulse"><Sparkles className="w-5 h-5" /></div>
        <div className="absolute top-1/3 right-1/4 text-white/40 animate-pulse delay-500"><Sparkles className="w-4 h-4" /></div>
        <div className="absolute top-10 right-10 text-gold/20 animate-pulse"><Sparkles className="w-6 h-6" /></div>
        
        {/* Tiny stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}

        {/* Floating Fireflies */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FFE5EC] shadow-[0_0_8px_#C5A880]"
            style={{
              width: '6px',
              height: '6px',
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Top Banner */}
      <div className="mt-12 z-10">
        <motion.span
          className="font-cute text-xs sm:text-sm uppercase tracking-widest text-gold font-bold mb-3 block"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Grand Finale
        </motion.span>
        <h3 className="font-serif text-lg text-gold/80 italic">"Wishing you a lifetime of blueprints coming to life."</h3>
      </div>

      {/* Main Wish Text & Slideshow */}
      <div className="z-10 my-auto w-full max-w-2xl px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white font-semibold leading-tight tracking-tight">
            Happy Birthday<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold-dark">
              Dudu 🤍
            </span>
          </h2>
          <p className="font-cute text-xs sm:text-sm text-gold/90 max-w-sm mx-auto uppercase tracking-widest pt-2">
            Designed with love • Timeless & True
          </p>
        </motion.div>

        {/* Wishes Loop Carousel */}
        <div className="relative min-h-[120px] flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeWishIdx}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#FFF0F2] leading-relaxed max-w-xl"
            >
              "{wishes[activeWishIdx]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {wishes.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveWishIdx(idx)}
              className="h-2 rounded-full cursor-pointer"
              animate={{
                width: idx === activeWishIdx ? 24 : 8,
                backgroundColor: idx === activeWishIdx ? "#C5A880" : "#C5A88040"
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Replay fireworks button */}
        <motion.button
          onClick={triggerCelebration}
          className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-gold/30 text-gold font-cute text-xs uppercase tracking-widest rounded-full cursor-pointer transition-colors backdrop-blur-sm shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Launch Fireworks 🎆
        </motion.button>
      </div>

      {/* Bottom Scene: Dudu & Bubu Sitting on Grassy Hill Gaging up */}
      <div className="relative w-full h-44 z-10 flex justify-center overflow-visible">
        {/* Hill Silhouette */}
        <path
          d="M -10 120 Q 150 70 310 120 L 310 200 L -10 200 Z"
          fill="#050510"
          className="absolute bottom-0 left-0 right-0 h-28 w-full object-cover scale-110 pointer-events-none"
        />

        {/* Characters Sitting Back-to-Viewer */}
        <svg viewBox="0 0 200 100" className="w-48 sm:w-64 h-24 absolute bottom-4 pointer-events-none">
          {/* Bubu (Bear) Sitting on Left */}
          <g transform="translate(60, 20)">
            {/* Body */}
            <ellipse cx="20" cy="45" rx="14" ry="12" fill="#a67c52" />
            <circle cx="20" cy="25" r="10" fill="#a67c52" />
            {/* Ears */}
            <circle cx="12" cy="18" r="3.5" fill="#a67c52" />
            <circle cx="28" cy="18" r="3.5" fill="#a67c52" />
            {/* Back shadow */}
            <path d="M12 45 Q 20 40 28 45" stroke="#7e5934" strokeWidth="2" fill="none" />
          </g>

          {/* Dudu (Panda) Sitting on Right */}
          <g transform="translate(100, 20)">
            {/* Body */}
            <ellipse cx="20" cy="45" rx="14" ry="12" fill="#ffffff" stroke="#000000" strokeWidth="1" />
            {/* Black arms/ears back silhouette */}
            <circle cx="20" cy="25" r="10" fill="#ffffff" stroke="#000000" strokeWidth="1" />
            <circle cx="11" cy="18" r="3.5" fill="#2B2B2B" />
            <circle cx="29" cy="18" r="3.5" fill="#2B2B2B" />
            {/* Black base shoulders */}
            <path d="M6 42 Q 20 48 34 42" stroke="#2B2B2B" strokeWidth="6" fill="none" />
          </g>

          {/* Glowing cupcake glow between them */}
          <circle cx="95" cy="58" r="6" fill="#ffb300" opacity="0.8" className="animate-ping" />
          <circle cx="95" cy="58" r="3" fill="#ffdfba" />
        </svg>
      </div>
    </motion.section>
  )
}
