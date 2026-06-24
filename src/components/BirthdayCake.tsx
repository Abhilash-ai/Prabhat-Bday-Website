import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { RefreshCw } from 'lucide-react'

interface Candle {
  id: number
  lit: boolean
  x: number // percentage width
}

export default function BirthdayCake() {
  const [candles, setCandles] = useState<Candle[]>([
    { id: 1, lit: true, x: 30 },
    { id: 2, lit: true, x: 50 },
    { id: 3, lit: true, x: 70 },
  ])
  const [allBlownOut, setAllBlownOut] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const blowCandle = (id: number) => {
    setCandles(prev =>
      prev.map(c => {
        if (c.id === id && c.lit) {
          // Trigger a tiny splash of confetti on the candle
          confetti({
            particleCount: 15,
            spread: 40,
            origin: { y: 0.7, x: 0.5 }
          })
          return { ...c, lit: false }
        }
        return c
      })
    )
  }

  useEffect(() => {
    if (candles.length > 0 && candles.every(c => !c.lit)) {
      setAllBlownOut(true)
      // Trigger massive confetti celebration
      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 60 }

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)
        
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      }, 250)

      // Open sweet card after a brief delay
      const timer = setTimeout(() => {
        setShowCard(true)
      }, 800)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    }
  }, [candles])

  const resetCake = () => {
    setCandles([
      { id: 1, lit: true, x: 30 },
      { id: 2, lit: true, x: 50 },
      { id: 3, lit: true, x: 70 },
    ])
    setAllBlownOut(false)
    setShowCard(false)
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 relative select-none">
      <h3 className="text-xl font-serif text-charcoal font-semibold mb-2 flex items-center gap-1.5 justify-center">
        <span>🎂</span> Dudu's Birthday Cake
      </h3>
      
      <p className="text-xs text-muted-foreground text-center mb-8 max-w-xs leading-relaxed">
        Click on each candle's flame to blow it out and make a birthday wish! 🕯️💨
      </p>

      {/* Cake Design */}
      <div className="relative w-64 h-56 flex items-end justify-center">
        {/* Plate */}
        <div className="absolute bottom-0 w-64 h-5 bg-[#EAEAEA] rounded-full border border-border/80 z-10" />

        {/* Cake Base Tier */}
        <div className="absolute bottom-4 w-52 h-24 bg-[#FFF8F2] rounded-t-3xl border border-border/80 flex flex-col justify-end overflow-hidden shadow-sm z-20">
          {/* Strawberry Frosting Drips */}
          <div className="w-full h-8 bg-[#E0535D]/10 rounded-b-xl border-b border-[#E0535D]/20 flex justify-around items-start">
            <div className="w-6 h-6 bg-[#E0535D]/10 rounded-full" />
            <div className="w-5 h-8 bg-[#E0535D]/10 rounded-full" />
            <div className="w-6 h-5 bg-[#E0535D]/10 rounded-full" />
            <div className="w-4 h-7 bg-[#E0535D]/10 rounded-full" />
            <div className="w-5 h-6 bg-[#E0535D]/10 rounded-full" />
          </div>
          {/* Cream Lines */}
          <div className="w-full h-2 bg-[#C5A880]/15" />
          <div className="w-full h-4 bg-white/20" />
        </div>

        {/* Cake Top Tier */}
        <div className="absolute bottom-28 w-36 h-16 bg-white rounded-t-2xl border border-border/80 flex flex-col justify-end overflow-hidden shadow-sm z-30">
          {/* Cream Swirl Drips */}
          <div className="w-full h-5 bg-[#E0535D]/10 rounded-b-lg border-b border-[#E0535D]/20 flex justify-around items-start">
            <div className="w-4 h-4 bg-[#E0535D]/10 rounded-full" />
            <div className="w-3 h-5 bg-[#E0535D]/10 rounded-full" />
            <div className="w-4 h-4 bg-[#E0535D]/10 rounded-full" />
            <div className="w-3 h-4 bg-[#E0535D]/10 rounded-full" />
          </div>
          <div className="w-full h-2 bg-[#C5A880]/15" />
        </div>

        {/* Candles Container */}
        <div className="absolute bottom-44 w-36 h-12 flex justify-around px-2 z-40">
          {candles.map((candle) => (
            <div
              key={candle.id}
              className="relative flex flex-col items-center justify-end h-full"
              style={{ width: '20%' }}
            >
              {/* Flame */}
              <AnimatePresence>
                {candle.lit && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.15, 1], 
                      y: [0, -2, 0],
                      opacity: 1 
                    }}
                    exit={{ 
                      scale: 0, 
                      opacity: 0,
                      transition: { duration: 0.2 } 
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2 + candle.id * 0.2,
                      ease: "easeInOut"
                    }}
                    onClick={() => blowCandle(candle.id)}
                    className="absolute bottom-7 w-4 h-6 bg-gradient-to-t from-yellow-400 via-red-500 to-orange-400 rounded-full cursor-pointer filter drop-shadow-[0_0_6px_rgba(251,191,36,0.8)] z-50 origin-bottom"
                    title="Click to blow out!"
                  />
                )}
              </AnimatePresence>

              {/* Candle Body */}
              <div 
                className="w-2.5 h-8 rounded-t-sm border border-black/10"
                style={{
                  backgroundImage: candle.id % 2 === 0 
                    ? 'linear-gradient(45deg, #E0535D 25%, #C5A880 25%, #C5A880 50%, #E0535D 50%, #E0535D 75%, #C5A880 75%, #C5A880 100%)'
                    : 'linear-gradient(45deg, #C5A880 25%, #FFF8F2 25%, #FFF8F2 50%, #C5A880 50%, #C5A880 75%, #FFF8F2 75%, #FFF8F2 100%)',
                  backgroundSize: '8px 8px'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reset button if all blown out */}
      <AnimatePresence>
        {allBlownOut && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={resetCake}
            className="mt-6 flex items-center gap-1.5 px-4 py-2 bg-charcoal text-white rounded-full text-xs font-semibold hover:bg-charcoal/80 cursor-pointer shadow-sm transition-all focus:outline-none"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Light Candles Again</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Birthday Wish Card Modal */}
      <AnimatePresence>
        {showCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCard(false)}
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 max-w-sm w-full bg-cream border border-primary/20 rounded-3xl p-8 text-center shadow-2xl flex flex-col items-center"
              style={{ boxShadow: "0 20px 50px rgba(224, 83, 93, 0.12)" }}
            >
              {/* Confetti icons */}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl mb-4 animate-bounce">
                🎂
              </div>

              <h4 className="font-serif text-2xl text-charcoal font-semibold mb-3">
                Wish Made! ✨
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "May your candles burn bright and your biggest dreams come true. Bubu's wish is for Dudu to always be happy and healthy. 🐼💕"
              </p>

              <button
                onClick={() => setShowCard(false)}
                className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer shadow-md"
              >
                Close & Enjoy the Celebration 🎉
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
