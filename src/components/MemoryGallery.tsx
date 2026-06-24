import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, X, ZoomIn } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  date: string
  caption: string
  rotation: string
  size: string // for masonry effect
  svg: () => React.ReactNode
}


export default function MemoryGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Mountain Escape",
      date: "October 2025",
      caption: "Dudu & Bubu scaling the snow-capped hills together, discovering new heights and breathing the fresh forest air.",
      rotation: "-rotate-2 hover:rotate-0",
      size: "md:col-span-1 md:row-span-1",
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#E5ECEE]">
          {/* Mountains */}
          <polygon points="50,300 130,120 220,300" fill="#B0C4DE" />
          <polygon points="130,120 110,165 140,175" fill="#FFFFFF" /> {/* Mountain Snow */}
          <polygon points="120,300 220,80 300,300" fill="#778899" />
          <polygon points="220,80 200,125 235,130" fill="#FFFFFF" /> {/* Mountain Snow */}

          {/* Pine Trees */}
          <polygon points="30,300 45,260 60,300" fill="#2E8B57" />
          <polygon points="70,300 85,250 100,300" fill="#2E8B57" />
          <polygon points="230,300 250,240 270,300" fill="#2E8B57" />

          {/* Sun */}
          <circle cx="80" cy="80" r="20" fill="#C5A880" opacity="0.8" />

          {/* Cute Hiking Dudu & Bubu */}
          <g transform="translate(110, 230)">
            {/* Bubu (Bear) with Backpack */}
            <g transform="translate(0, 0)">
              <ellipse cx="20" cy="40" rx="14" ry="12" fill="#d2a078" />
              <circle cx="20" cy="20" r="12" fill="#d2a078" />
              {/* Ears */}
              <circle cx="10" cy="10" r="4" fill="#d2a078" />
              <circle cx="30" cy="10" r="4" fill="#d2a078" />
              {/* Face */}
              <ellipse cx="20" cy="23" rx="4" ry="3" fill="#ffffff" />
              <circle cx="20" cy="22" r="1" fill="#2B2B2B" />
              {/* Backpack */}
              <rect x="3" y="28" width="8" height="15" rx="2" fill="#C5A880" />
            </g>
            {/* Dudu (Panda) */}
            <g transform="translate(35, 5)">
              <ellipse cx="20" cy="40" rx="14" ry="12" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1" />
              <circle cx="20" cy="20" r="12" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1" />
              {/* Ears */}
              <circle cx="10" cy="10" r="4.5" fill="#2B2B2B" />
              <circle cx="30" cy="10" r="4.5" fill="#2B2B2B" />
              {/* Patches */}
              <ellipse cx="16" cy="19" rx="3.5" ry="2.5" fill="#2B2B2B" />
              <ellipse cx="24" cy="19" rx="3.5" ry="2.5" fill="#2B2B2B" />
              <circle cx="20" cy="24" r="1" fill="#2B2B2B" />
            </g>
          </g>
        </svg>
      )
    },
    {
      id: 2,
      title: "Midnight Coffee Ritual",
      date: "December 2025",
      caption: "Creating blueprint layout guidelines at 2:00 AM, with the rich aroma of pour-over coffee warming the quiet room.",
      rotation: "rotate-3 hover:rotate-0",
      size: "md:col-span-1 md:row-span-1",
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#FAF0E6]">
          {/* Window showing crescent moon */}
          <rect x="180" y="30" width="80" height="100" rx="2" fill="#2B2B2B" />
          <path d="M 230 50 Q 240 60 230 70 Q 220 60 230 50 Z" fill="#C5A880" /> {/* Moon */}
          <line x1="220" y1="30" x2="220" y2="130" stroke="#FAF0E6" strokeWidth="1" opacity="0.3" />
          <line x1="180" y1="80" x2="260" y2="80" stroke="#FAF0E6" strokeWidth="1" opacity="0.3" />

          {/* Table */}
          <rect x="30" y="190" width="240" height="10" fill="#4A3525" />
          <rect x="50" y="200" width="15" height="100" fill="#4A3525" />
          <rect x="235" y="200" width="15" height="100" fill="#4A3525" />

          {/* Drafting Lamp */}
          <path d="M 60 190 Q 40 130 90 120" fill="none" stroke="#2B2B2B" strokeWidth="3" />
          <polygon points="85,110 115,115 105,135 75,130" fill="#C5A880" />
          {/* Light cone */}
          <polygon points="90,130 50,190 150,190" fill="#C5A880" opacity="0.15" />

          {/* Coffee Mug steaming */}
          <rect x="150" y="165" width="18" height="25" rx="2" fill="#5C4033" />
          <path d="M 140 155 Q 143 145 140 135" fill="none" stroke="#C5A880" strokeWidth="1.5" />
          
          {/* Dudu sketching */}
          <g transform="translate(70, 130)">
            <ellipse cx="20" cy="35" rx="14" ry="12" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1.5" />
            <circle cx="20" cy="18" r="11" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1.5" />
            <ellipse cx="15" cy="18" rx="3" ry="2" fill="#2B2B2B" />
            <ellipse cx="25" cy="18" rx="3" ry="2" fill="#2B2B2B" />
            <circle cx="20" cy="22" r="1" fill="#2B2B2B" />
            {/* Arm drafting */}
            <path d="M 32 35 Q 45 35 48 42" stroke="#2B2B2B" strokeWidth="6" strokeLinecap="round" />
            <rect x="44" y="40" width="15" height="4" fill="#C5A880" transform="rotate(45, 44, 40)" />
          </g>
        </svg>
      )
    },
    {
      id: 3,
      title: "Blueprint Studio",
      date: "January 2026",
      caption: "Bubu providing cute guidance while Dudu measures details on the drafting board. Teamwork makes the dream work!",
      rotation: "-rotate-1 hover:rotate-0",
      size: "md:col-span-1 md:row-span-2", // Taller
      svg: () => (
        <svg viewBox="0 0 300 450" className="w-full h-full bg-[#ECE5DE]">
          {/* Architectural Blueprint Backdrop */}
          <g opacity="0.15">
            <line x1="0" y1="50" x2="300" y2="50" stroke="#4A3525" strokeWidth="0.5" />
            <line x1="0" y1="150" x2="300" y2="150" stroke="#4A3525" strokeWidth="0.5" />
            <line x1="0" y1="250" x2="300" y2="250" stroke="#4A3525" strokeWidth="0.5" />
            <line x1="0" y1="350" x2="300" y2="350" stroke="#4A3525" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="450" stroke="#4A3525" strokeWidth="0.5" />
            <line x1="150" y1="0" x2="150" y2="450" stroke="#4A3525" strokeWidth="0.5" />
            <line x1="250" y1="0" x2="250" y2="450" stroke="#4A3525" strokeWidth="0.5" />
          </g>

          {/* Large Architectural Drafting Table */}
          <rect x="30" y="160" width="240" height="180" rx="4" fill="#FFFFFF" stroke="#4A3525" strokeWidth="3" />
          {/* Blueprint sheet on board */}
          <rect x="50" y="180" width="200" height="140" fill="#4A3525" />
          {/* Building wireframe */}
          <line x1="60" y1="300" x2="240" y2="300" stroke="#C5A880" strokeWidth="1" />
          <rect x="80" y="240" width="40" height="60" fill="none" stroke="#C5A880" strokeWidth="1" />
          <rect x="130" y="220" width="40" height="80" fill="none" stroke="#C5A880" strokeWidth="1" />
          <rect x="180" y="250" width="40" height="50" fill="none" stroke="#C5A880" strokeWidth="1" />
          <polygon points="100,210 80,240 120,240" fill="none" stroke="#C5A880" strokeWidth="1" />
          <polygon points="150,195 130,220 170,220" fill="none" stroke="#C5A880" strokeWidth="1" />
          
          {/* Compass layout curves */}
          <circle cx="150" cy="300" r="110" fill="none" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />

          {/* Bubu (left, standing on chair) */}
          <g transform="translate(50, 310)">
            <ellipse cx="20" cy="35" rx="12" ry="10" fill="#d2a078" />
            <circle cx="20" cy="18" r="10" fill="#d2a078" />
            <circle cx="12" cy="10" r="3.5" fill="#d2a078" />
            <circle cx="28" cy="10" r="3.5" fill="#d2a078" />
            <ellipse cx="20" cy="20" rx="3.5" ry="2.5" fill="#ffffff" />
            <circle cx="20" cy="19" r="0.8" fill="#2B2B2B" />
          </g>

          {/* Dudu (right, pointing with ruler) */}
          <g transform="translate(190, 290)">
            <ellipse cx="20" cy="40" rx="14" ry="12" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1.5" />
            <circle cx="20" cy="22" r="11" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1.5" />
            <ellipse cx="15" cy="22" rx="3" ry="2" fill="#2B2B2B" />
            <ellipse cx="25" cy="22" rx="3" ry="2" fill="#2B2B2B" />
            <circle cx="20" cy="26" r="1" fill="#2B2B2B" />
            {/* Holding yellow T-square */}
            <path d="M 10 40 L -15 35" stroke="#C5A880" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Table stand */}
          <line x1="80" y1="340" x2="60" y2="420" stroke="#4A3525" strokeWidth="4" />
          <line x1="220" y1="340" x2="240" y2="420" stroke="#4A3525" strokeWidth="4" />
          <line x1="60" y1="420" x2="240" y2="420" stroke="#4A3525" strokeWidth="4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Star Gazing",
      date: "March 2026",
      caption: "Wrapped in a warm blanket, identifying constellations under a velvet night sky. The universe looks cozy from here.",
      rotation: "rotate-2 hover:rotate-0",
      size: "md:col-span-1 md:row-span-1",
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#1A1A2E]">
          {/* Twinkling stars */}
          <circle cx="50" cy="50" r="1" fill="#FFFFFF" opacity="0.6" />
          <circle cx="120" cy="80" r="1.5" fill="#FFFFFF" />
          <circle cx="260" cy="40" r="1" fill="#FFFFFF" opacity="0.8" />
          <circle cx="220" cy="90" r="2" fill="#C5A880" />
          <circle cx="80" cy="120" r="1" fill="#FFFFFF" opacity="0.4" />

          {/* Shooting star */}
          <line x1="280" y1="10" x2="210" y2="45" stroke="#C5A880" strokeWidth="1.5" opacity="0.7" />
          
          {/* Telescope */}
          <line x1="90" y1="210" x2="150" y2="150" stroke="#C5A880" strokeWidth="3" />
          <line x1="100" y1="210" x2="90" y2="250" stroke="#C5A880" strokeWidth="2" />
          <line x1="100" y1="210" x2="110" y2="250" stroke="#C5A880" strokeWidth="2" />

          {/* Cozy hill */}
          <path d="M -10 270 Q 150 200 310 270 L 310 300 L -10 300 Z" fill="#2E3B2E" />

          {/* Dudu & Bubu sitting together wrapped in blanket */}
          <g transform="translate(130, 195)">
            {/* Blanket outline */}
            <path d="M 0 45 C 5 25 45 25 50 45 Z" fill="#C5A880" opacity="0.9" />
            
            {/* Bubu Head peeking */}
            <circle cx="15" cy="25" r="8" fill="#d2a078" />
            <circle cx="10" cy="18" r="2.5" fill="#d2a078" />
            <circle cx="20" cy="18" r="2.5" fill="#d2a078" />
            
            {/* Dudu Head peeking */}
            <circle cx="35" cy="24" r="8" fill="#ffffff" />
            <circle cx="30" cy="17" r="2.8" fill="#2B2B2B" />
            <circle cx="40" cy="17" r="2.8" fill="#2B2B2B" />
            <ellipse cx="32" cy="24" rx="2.5" ry="2" fill="#2B2B2B" />
            <ellipse cx="38" cy="24" rx="2.5" ry="2" fill="#2B2B2B" />
          </g>
        </svg>
      )
    },
    {
      id: 5,
      title: "Birthday Cupcake",
      date: "June 2026",
      caption: "Bubu surprising Dudu with a giant birthday cupcake! Complete with a flickering candle and gold-dusted cherry.",
      rotation: "-rotate-2 hover:rotate-0",
      size: "md:col-span-1 md:row-span-1",
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#FDF5E6]">
          {/* Confetti */}
          <path d="M 40 40 L 50 35" stroke="#C5A880" strokeWidth="2" />
          <circle cx="250" cy="50" r="3" fill="#ffb3ba" />
          <polygon points="120,40 128,48 115,50" fill="#baffc9" />
          <rect x="220" y="90" width="8" height="5" fill="#ffdfba" transform="rotate(30, 220, 90)" />

          {/* Giant Cupcake */}
          <g transform="translate(110, 130)">
            <polygon points="15,70 65,70 75,30 5,30" fill="#C5A880" />
            <path d="M -2 30 Q 40 -10 82 30 C 90 20 80 -15 40 -12 C 0 -15 -10 20 -2 30 Z" fill="#ffffff" stroke="#4A3525" strokeWidth="1" />
            <circle cx="40" cy="-10" r="8" fill="#ff3b30" /> {/* Cherry */}
            {/* Candle */}
            <rect x="37" y="-35" width="6" height="25" fill="#6E533F" />
            <path d="M 40 -38 Q 43 -48 40 -56 Q 37 -48 40 -38" fill="#ffb300" />
          </g>

          {/* Dudu (surprised, eyes closed in joy) */}
          <g transform="translate(40, 160)">
            <ellipse cx="20" cy="40" rx="14" ry="12" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1.5" />
            <circle cx="20" cy="22" r="11" fill="#ffffff" stroke="#2B2B2B" strokeWidth="1.5" />
            {/* Happy curved eyes */}
            <path d="M 12 21 Q 15 18 18 21" fill="none" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 22 21 Q 25 18 28 21" fill="none" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="20" cy="26" r="1" fill="#2B2B2B" />
          </g>

          {/* Bubu (cheering) */}
          <g transform="translate(200, 160)">
            <ellipse cx="20" cy="40" rx="14" ry="12" fill="#d2a078" />
            <circle cx="20" cy="22" r="11" fill="#d2a078" />
            <circle cx="11" cy="13" r="3.5" fill="#d2a078" />
            <circle cx="29" cy="13" r="3.5" fill="#d2a078" />
            {/* Happy closed eyes */}
            <path d="M 12 21 Q 15 18 18 21" fill="none" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 22 21 Q 25 18 28 21" fill="none" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      )
    }
  ]

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % galleryItems.length)
    }
  }

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + galleryItems.length) % galleryItems.length)
    }
  }

  return (
    <section className="py-24 bg-white px-4 md:px-8 border-t border-gold/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-cute text-xs sm:text-sm uppercase tracking-widest text-gold-dark font-semibold">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-coffee font-medium mt-2">
            Memory Polaroid Gallery
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            const ActiveSVG = item.svg
            return (
              <motion.div
                key={item.id}
                className={`w-full bg-cream p-4 border border-gold/15 rounded-lg polaroid-shadow tape-effect cursor-pointer group flex flex-col justify-between ${item.rotation} ${item.size} transition-all duration-300`}
                onClick={() => setActiveIdx(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-white border border-gold/10 rounded overflow-hidden relative">
                  <ActiveSVG />
                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-coffee/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-coffee flex items-center justify-center shadow">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Caption Details */}
                <div className="pt-4 text-center">
                  <h4 className="font-serif text-base text-coffee font-semibold">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-cute text-gold-dark tracking-wider block mt-0.5">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {activeIdx !== null && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-coffee/95 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveIdx(null)}
              />

              {/* Lightbox Content Container */}
              <motion.div
                className="relative z-10 w-full max-w-2xl bg-cream rounded-2xl overflow-hidden polaroid-shadow border border-gold/30 flex flex-col sm:flex-row"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* Visual SVG Panel */}
                <div className="w-full sm:w-1/2 aspect-square bg-white flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gold/15">
                  {(() => {
                    const ActiveLightboxSVG = galleryItems[activeIdx].svg
                    return <ActiveLightboxSVG />
                  })()}
                </div>

                {/* Description info */}
                <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-cute text-xs text-gold-dark font-semibold uppercase tracking-wider block mb-1">
                      {galleryItems[activeIdx].date}
                    </span>
                    <h3 className="font-serif text-2xl text-coffee font-medium mb-3">
                      {galleryItems[activeIdx].title}
                    </h3>
                    <p className="font-cute text-sm text-coffee-light/90 leading-relaxed">
                      {galleryItems[activeIdx].caption}
                    </p>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between border-t border-gold/15 pt-6 mt-6 sm:mt-0">
                    <button
                      onClick={handlePrev}
                      className="flex items-center gap-1 font-cute text-xs text-coffee-light hover:text-gold font-semibold transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>
                    <span className="font-cute text-xs text-gold-dark font-medium">
                      {activeIdx + 1} / {galleryItems.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-1 font-cute text-xs text-coffee-light hover:text-gold font-semibold transition-colors cursor-pointer"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Close Button top-right */}
                <button
                  onClick={() => setActiveIdx(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-coffee shadow flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
