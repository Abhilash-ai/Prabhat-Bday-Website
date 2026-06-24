import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface StickyNote {
  id: number
  title: string
  emoji: string
  message: string
  color: string
  initialRotation: number
  xOffset: number // position adjustments on board
  yOffset: number
}

export default function BubusNotes() {
  const [clickedNoteId, setClickedNoteId] = useState<number | null>(null)
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([])

  const notes: StickyNote[] = [
    {
      id: 1,
      title: "Drink Water",
      emoji: "💧",
      message: "Bubu says: Keep a glass next to your blueprint sheet at all times. Hydration makes your drafts crisper!",
      color: "bg-[#E8F4F8] border-[#B8D5E5]",
      initialRotation: -3,
      xOffset: -40,
      yOffset: -20
    },
    {
      id: 2,
      title: "Sleep On Time",
      emoji: "🌙",
      message: "Bubu says: Midnight designs are cool, but your eyes need rest. Turn off the blueprint lamp by midnight!",
      color: "bg-[#FFF9E6] border-[#E8D4A2]",
      initialRotation: 2,
      xOffset: 40,
      yOffset: -35
    },
    {
      id: 3,
      title: "Don't Work Too Hard",
      emoji: "🏗️",
      message: "Bubu says: You are an amazing architect, but please don't stress. Breaks are mandatory for creative minds!",
      color: "bg-[#F0F7F4] border-[#BDDFCD]",
      initialRotation: -1,
      xOffset: -30,
      yOffset: 30
    },
    {
      id: 4,
      title: "Keep Smiling",
      emoji: "😊",
      message: "Bubu says: Your smile is my favorite design. Sending you the warmest bear hug. Happy birthday, Dudu!",
      color: "bg-[#FFF0F2] border-[#E8C2C7]",
      initialRotation: 4,
      xOffset: 50,
      yOffset: 25
    }
  ]

  const handleNoteClick = (id: number, e: React.MouseEvent) => {
    setClickedNoteId(id)
    
    // Add floating heart particles
    const rect = e.currentTarget.getBoundingClientRect()
    const newHearts = Array.from({ length: 6 }).map((_, idx) => ({
      id: Date.now() + idx,
      x: e.clientX - rect.left + (Math.random() * 40 - 20),
      y: e.clientY - rect.top - 20
    }))
    
    setHearts((prev) => [...prev, ...newHearts])
    
    // Clean up hearts after animation completes
    setTimeout(() => {
      setHearts((prev) => prev.filter(h => !newHearts.map(nh => nh.id).includes(h.id)))
    }, 1200)
  }

  return (
    <section className="py-24 bg-cream px-4 md:px-8 border-t border-gold/10 relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-cute text-xs sm:text-sm uppercase tracking-widest text-gold-dark font-semibold">
            Reminders
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-coffee font-medium mt-2">
            Bubu's Sticky Notes
          </h2>
          <p className="font-cute text-xs text-coffee-light/70 mt-2">
            (Hint: You can drag them around, and tap them for love!)
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Notice Board Workspace */}
        <div className="relative w-full min-h-[500px] bg-white border border-gold/20 rounded-3xl p-6 sm:p-12 polaroid-shadow bg-blueprint-pattern overflow-hidden flex items-center justify-center">
          {/* Board Frame Lines */}
          <div className="absolute inset-4 border border-gold/10 pointer-events-none rounded-2xl" />

          {/* Core Interactive Sticky Notes Wrapper */}
          <div className="relative w-full h-full max-w-2xl min-h-[400px] flex flex-wrap justify-center items-center gap-8">
            {notes.map((note) => {
              return (
                <motion.div
                  key={note.id}
                  drag
                  dragElastic={0.1}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
                  onClick={(e) => handleNoteClick(note.id, e)}
                  style={{
                    rotate: note.initialRotation,
                  }}
                  className={`w-64 p-5 rounded-md border polaroid-shadow cursor-grab active:cursor-grabbing relative ${note.color} transition-shadow duration-200 select-none`}
                  whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
                  whileDrag={{ scale: 1.1, zIndex: 50, rotate: 2 }}
                >
                  {/* Sticky Tape Graphic */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gold/30 border-l border-r border-gold/10 backdrop-blur-[1px] rotate-[-1deg]" />

                  {/* Note Content */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3 border-b border-coffee/15 pb-1">
                      <span className="font-serif text-base text-coffee font-semibold">
                        {note.title}
                      </span>
                      <span className="text-lg">{note.emoji}</span>
                    </div>
                    <p className="font-cute text-xs text-coffee-light/95 leading-relaxed">
                      {note.message}
                    </p>
                  </div>

                  {/* Heart click animation layer */}
                  {clickedNoteId === note.id && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-md">
                      {hearts.map((heart) => (
                        <motion.div
                          key={heart.id}
                          className="absolute text-gold"
                          style={{ left: heart.x, top: heart.y }}
                          initial={{ opacity: 1, scale: 0.5, y: 0 }}
                          animate={{ opacity: 0, scale: 1.5, y: -80, rotate: Math.random() * 60 - 30 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        >
                          <Heart className="w-5 h-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
