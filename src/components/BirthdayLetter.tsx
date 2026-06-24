import { motion } from 'framer-motion'

export default function BirthdayLetter() {
  const paragraphs = [
    "Dear Dudu,",
    "Today is all about celebrating you—the brilliant mind, the warm heart, and the beautiful soul that you are. You make the world a much warmer, cozier place just by being in it.",
    "I watch you look at the world, always finding lines of beauty, sketching out ideas, and dreaming big. Your dedication to your craft as an architect is inspiring, but what is even more inspiring is your patience, your kindness, and the gentle way you carry yourself.",
    "You are the warm coffee that comforts a cold morning, the peaceful night sky full of stars, and the quiet mountain peak where dreams find their scale.",
    "Thank you for being the wonderful person you are. Thank you for the small observations, the warm smiles, and the beautiful memories we share. I treasure every single one of them.",
    "As you step into another beautiful year of life, I hope your canvas is filled with vibrant colors, your blueprints translate into reality, and your heart is always filled with joy, peace, and endless love.",
    "Happy Birthday, Dudu. May this year be as wonderful and inspiring as you are.",
    "With all my love and admiration,",
    "Bubu 🐼🤍"
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  }



  return (
    <section className="py-28 bg-[#FAF6EE] px-4 md:px-8 border-t border-gold/10 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Grid Pattern and layout lines */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-red-200/40 hidden md:block" /> {/* Margin line for writing paper */}

      {/* Interactive Sticker Card - Dudu & Bubu Selfie (Desktop) */}
      <div className="absolute right-[4%] lg:right-[7%] bottom-[20%] w-60 h-60 hidden md:block z-20">
        <motion.div
          whileHover={{ scale: 1.06, rotate: 3 }}
          className="p-3 bg-white border border-border/80 rounded-full shadow-lg polaroid-shadow flex items-center justify-center cursor-pointer select-none"
        >
          <div className="w-52 h-52 rounded-full overflow-hidden border border-border/50 bg-[#FCFAF7] flex items-center justify-center">
            <img src={import.meta.env.BASE_URL + "assets/dudu-bubu-selfie.jpg"} alt="Dudu and Bubu" className="w-full h-full object-cover scale-110" />
          </div>
        </motion.div>
      </div>

      {/* The Letter Sheet Container */}
      <motion.div
        className="w-full max-w-2xl bg-white border border-gold/15 rounded-xl polaroid-shadow p-8 sm:p-12 md:p-16 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Paper Header Elements */}
        <div className="flex justify-between items-center border-b border-gold/20 pb-4 mb-8">
          <span className="font-cute text-xs text-gold-dark font-semibold uppercase tracking-widest">
            Personal Correspondence
          </span>
          <span className="font-cute text-xs text-coffee-light/60">
            Date: June 30, 2026
          </span>
        </div>

        {/* Lined paper effect on letter body */}
        <div className="space-y-6 text-left relative z-10">
          {paragraphs.map((para, index) => {
            const isHeader = index === 0
            const isClosing = index >= paragraphs.length - 2
            
            return (
              <motion.p
                key={index}
                variants={itemVariants}
                className={`font-cursive text-coffee leading-relaxed ${
                  isHeader 
                    ? "text-3xl font-bold mb-4" 
                    : isClosing 
                    ? "text-2xl italic font-semibold pt-4" 
                    : "text-2xl font-medium"
                } ${isClosing && index === paragraphs.length - 1 ? "text-gold-dark font-bold text-3xl" : ""}`}
              >
                {para}
              </motion.p>
            )
          })}
        </div>

        {/* Wax Seal Overlay Graphic */}
        <div className="absolute -bottom-6 right-8 w-16 h-16 rounded-full bg-[#8b2635] shadow-lg border-2 border-gold flex items-center justify-center text-white pointer-events-none">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Sticker (shown only on small screens) */}
      <div className="mt-8 block md:hidden z-20">
        <motion.div
          whileHover={{ scale: 1.06, rotate: 3 }}
          className="p-3 bg-white border border-border/80 rounded-full shadow-lg polaroid-shadow flex items-center justify-center cursor-pointer select-none"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border border-border/50 bg-[#FCFAF7] flex items-center justify-center">
            <img src={import.meta.env.BASE_URL + "assets/dudu-bubu-selfie.jpg"} alt="Dudu and Bubu" className="w-full h-full object-cover scale-110" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
