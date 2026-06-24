import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Calendar } from 'lucide-react'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  isBirthday: boolean
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthday: false
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      // Use 2026 as the current year per metadata
      const targetYear = now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() >= 30) 
        ? now.getFullYear() + 1 
        : now.getFullYear()
      
      const targetDate = new Date(`June 30, ${targetYear} 00:00:00`)
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true })
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds, isBirthday: false })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Floating elements
  const sparklesArray = Array.from({ length: 12 })

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-grid-pattern px-4 py-16 overflow-hidden">
      {/* Architectural Line Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[95%] h-[1px] bg-gold/20" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-[1px] bg-gold/20" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-[90%] bg-gold/20 hidden md:block" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[1px] h-[90%] bg-gold/20 hidden md:block" />
      </div>

      {/* Floating Sparkles Background */}
      {sparklesArray.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gold/30 hidden sm:block pointer-events-none"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -15, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      ))}

      {/* Dudu & Bubu Drawing Board Scene */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8 z-10 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Floor Shadow */}
          <ellipse cx="200" cy="350" rx="140" ry="15" fill="rgba(74, 53, 37, 0.1)" />

          {/* Architectural Drawing Board */}
          <g transform="translate(100, 260)">
            <rect x="0" y="0" width="200" height="15" rx="5" fill="#4A3525" />
            <polygon points="40,15 20,80 60,80" fill="#6E533F" />
            <polygon points="160,15 140,80 180,80" fill="#6E533F" />
            <line x1="20" y1="80" x2="180" y2="80" stroke="#4A3525" strokeWidth="4" />
          </g>

          {/* Bubu (Cute Bear) - Left */}
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Bear Shadow */}
            <ellipse cx="140" cy="270" rx="35" ry="10" fill="rgba(74, 53, 37, 0.15)" />
            {/* Bear Body */}
            <ellipse cx="140" cy="225" rx="45" ry="40" fill="#d2a078" />
            <ellipse cx="140" cy="225" rx="35" ry="32" fill="#e8c4a0" />
            {/* Bear Head */}
            <g transform="translate(140, 160)">
              {/* Ears */}
              <circle cx="-35" cy="-30" r="16" fill="#d2a078" />
              <circle cx="-35" cy="-30" r="9" fill="#fbb6b8" />
              <circle cx="35" cy="-30" r="16" fill="#d2a078" />
              <circle cx="35" cy="-30" r="9" fill="#fbb6b8" />
              {/* Head Base */}
              <ellipse cx="0" cy="0" rx="48" ry="42" fill="#d2a078" />
              {/* Snout */}
              <ellipse cx="0" cy="12" rx="16" ry="12" fill="#ffffff" />
              {/* Nose */}
              <ellipse cx="0" cy="8" rx="5" ry="3.5" fill="#2B2B2B" />
              {/* Eyes */}
              <circle cx="-18" cy="-2" r="4.5" fill="#2B2B2B" />
              <circle cx="18" cy="-2" r="4.5" fill="#2B2B2B" />
              {/* Blush */}
              <ellipse cx="-30" cy="10" rx="7" ry="4" fill="#ffccd5" opacity="0.8" />
              <ellipse cx="30" cy="10" rx="7" ry="4" fill="#ffccd5" opacity="0.8" />
            </g>
            {/* Scarf */}
            <path d="M 105 192 Q 140 215 175 192 Q 165 230 115 220 Z" fill="#C5A880" />
            {/* Left Arm holding Cupcake */}
            <path d="M 100 220 Q 120 225 130 235" stroke="#d2a078" strokeWidth="12" strokeLinecap="round" />
          </motion.g>

          {/* Dudu (Cute Panda) - Right */}
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {/* Panda Shadow */}
            <ellipse cx="260" cy="270" rx="35" ry="10" fill="rgba(74, 53, 37, 0.15)" />
            {/* Panda Body */}
            <ellipse cx="260" cy="225" rx="45" ry="40" fill="#ffffff" stroke="#2B2B2B" strokeWidth="2" />
            {/* Black Arms and Legs */}
            <path d="M 220 220 Q 235 228 250 235" stroke="#2B2B2B" strokeWidth="12" strokeLinecap="round" />
            <path d="M 300 220 Q 285 240 270 250" stroke="#2B2B2B" strokeWidth="12" strokeLinecap="round" />
            {/* Panda Head */}
            <g transform="translate(260, 160)">
              {/* Ears */}
              <circle cx="-35" cy="-30" r="16" fill="#2B2B2B" />
              <circle cx="35" cy="-30" r="16" fill="#2B2B2B" />
              {/* Head Base */}
              <ellipse cx="0" cy="0" rx="48" ry="42" fill="#ffffff" stroke="#2B2B2B" strokeWidth="2" />
              {/* Eye Patches */}
              <ellipse cx="-18" cy="-2" rx="11" ry="8" fill="#2B2B2B" transform="rotate(-15, -18, -2)" />
              <ellipse cx="18" cy="-2" rx="11" ry="8" fill="#2B2B2B" transform="rotate(15, 18, -2)" />
              {/* White eyes inside patches */}
              <circle cx="-16" cy="-2" r="3" fill="#ffffff" />
              <circle cx="16" cy="-2" r="3" fill="#ffffff" />
              {/* Snout */}
              <ellipse cx="0" cy="12" rx="12" ry="9" fill="#ffffff" />
              {/* Nose */}
              <ellipse cx="0" cy="9" rx="4.5" ry="3" fill="#2B2B2B" />
              {/* Blush */}
              <ellipse cx="-30" cy="12" rx="7" ry="4" fill="#ffccd5" opacity="0.8" />
              <ellipse cx="30" cy="12" rx="7" ry="4" fill="#ffccd5" opacity="0.8" />
            </g>
          </motion.g>

          {/* Birthday Cupcake held between them */}
          <g transform="translate(180, 210)">
            {/* Cupcake Base */}
            <polygon points="12,30 28,30 35,12 5,12" fill="#C5A880" />
            {/* Cream */}
            <path d="M 2 12 Q 20 -5 38 12 C 43 5 35 -10 20 -8 C 5 -10 -3 5 2 12 Z" fill="#ffffff" />
            <circle cx="20" cy="-6" r="4" fill="#ff3b30" /> {/* Cherry */}
            {/* Candle */}
            <rect x="18" y="-22" width="4" height="16" fill="#6E533F" />
            {/* Flame */}
            <motion.path
              d="M 20 -24 Q 23 -32 20 -38 Q 17 -32 20 -24"
              fill="#ffb300"
              animate={{ scale: [1, 1.2, 1], y: [0, -1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </g>

          {/* Cute Little Drafting Pencil/Ruler */}
          <rect x="230" y="268" width="40" height="4" fill="#C5A880" transform="rotate(15, 230, 268)" />
          <path d="M 120 275 Q 140 285 160 275" stroke="#4A3525" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </motion.svg>
      </div>

      {/* Typography Content */}
      <div className="text-center max-w-2xl z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-cute text-sm tracking-widest text-gold-dark font-medium uppercase mb-3 block">
            The Prabhat Edition • Vol. 1
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-coffee leading-tight font-medium mb-4">
          Happy Birthday Dudu <span className="inline-block animate-pulse">🐼🤍</span>
        </h1>

        <motion.p
          className="text-base sm:text-lg font-cute text-coffee-light/80 mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A beautiful digital storybook & journey made especially for you.
        </motion.p>
      </div>

      {/* Countdown Timer */}
      <motion.div
        className="w-full max-w-xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="glass-panel rounded-2xl border border-gold/20 p-6 sm:p-8 polaroid-shadow flex flex-col items-center">
          {!timeLeft.isBirthday ? (
            <>
              <div className="flex items-center gap-2 mb-4 text-gold-dark font-cute text-xs sm:text-sm tracking-wider uppercase">
                <Calendar className="w-4 h-4" />
                <span>Countdown to June 30th</span>
              </div>
              <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full text-center">
                {/* Days */}
                <div className="flex flex-col p-2 sm:p-4 bg-white/70 rounded-xl border border-gold/10">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-coffee">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-cute uppercase tracking-wider text-coffee-light/70 mt-1">
                    Days
                  </span>
                </div>
                {/* Hours */}
                <div className="flex flex-col p-2 sm:p-4 bg-white/70 rounded-xl border border-gold/10">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-coffee">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-cute uppercase tracking-wider text-coffee-light/70 mt-1">
                    Hours
                  </span>
                </div>
                {/* Minutes */}
                <div className="flex flex-col p-2 sm:p-4 bg-white/70 rounded-xl border border-gold/10">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-coffee">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-cute uppercase tracking-wider text-coffee-light/70 mt-1">
                    Mins
                  </span>
                </div>
                {/* Seconds */}
                <div className="flex flex-col p-2 sm:p-4 bg-white/70 rounded-xl border border-gold/10">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-coffee">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-cute uppercase tracking-wider text-coffee-light/70 mt-1">
                    Secs
                  </span>
                </div>
              </div>
            </>
          ) : (
            <motion.div
              className="text-center py-4"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-coffee font-semibold mb-2">
                It's June 30th! 🎂
              </h3>
              <p className="font-cute text-sm text-gold-dark uppercase tracking-widest">
                Happy Birthday to our favorite Architect, Dudu!
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center cursor-pointer pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-cute uppercase tracking-widest text-coffee-light/60 mb-2">
          Scroll to enter the story
        </span>
        <div className="w-[1px] h-10 bg-gold" />
      </motion.div>
    </section>
  )
}
