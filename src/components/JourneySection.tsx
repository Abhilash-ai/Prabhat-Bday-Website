import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, GraduationCap, School, Baby } from 'lucide-react'

interface TimelineItem {
  icon: any
  title: string
  subtitle: string
  period: string
  story: string
  illustration: () => React.ReactNode
}


export default function JourneySection() {
  const timelineItems: TimelineItem[] = [
    {
      icon: Baby,
      title: "Cozy Beginnings",
      subtitle: "Childhood Days",
      period: "The Early Years",
      story: "Once upon a time, a little panda named Dudu took his very first steps. Even then, he loved stacking wooden blocks, building tiny castles, and dreaming big dreams in a warm, cozy nursery.",
      illustration: () => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Blocks */}
          <rect x="50" y="140" width="30" height="30" rx="3" fill="#C5A880" />
          <rect x="85" y="140" width="30" height="30" rx="3" fill="#4A3525" />
          <polygon points="100,105 85,135 115,135" fill="#C5A880" />
          <rect x="120" y="140" width="30" height="30" rx="3" fill="#DBC8B6" />
          
          {/* Baby Panda */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{ transformOrigin: "120px 140px" }}
          >
            <circle cx="110" cy="110" r="22" fill="#FFFFFF" stroke="#4A3525" strokeWidth="2" />
            <circle cx="95" cy="95" r="7" fill="#2B2B2B" />
            <circle cx="125" cy="95" r="7" fill="#2B2B2B" />
            {/* Eye patches */}
            <ellipse cx="102" cy="108" rx="5" ry="4" fill="#2B2B2B" />
            <ellipse cx="118" cy="108" rx="5" ry="4" fill="#2B2B2B" />
            <circle cx="102" cy="108" r="1.5" fill="#FFFFFF" />
            <circle cx="118" cy="108" r="1.5" fill="#FFFFFF" />
            {/* Nose */}
            <ellipse cx="110" cy="114" rx="2" ry="1.5" fill="#2B2B2B" />
            {/* Blush */}
            <circle cx="98" cy="114" r="2.5" fill="#ffccd5" />
            <circle cx="122" cy="114" r="2.5" fill="#ffccd5" />
            {/* Pacifier */}
            <circle cx="110" cy="119" r="4" fill="#C5A880" />
          </motion.g>
        </svg>
      )
    },
    {
      icon: School,
      title: "Curious Explorer",
      subtitle: "School Memories",
      period: "Growing Up",
      story: "School days were filled with pencils, sketchbooks, and a growing curiosity about how the world is put together. Dudu could always be found sketching maps, drawing houses, and reading stories.",
      illustration: () => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Notebook & Drawing */}
          <rect x="40" y="110" width="80" height="60" rx="4" fill="#FFFFFF" stroke="#4A3525" strokeWidth="2" />
          <line x1="40" y1="120" x2="120" y2="120" stroke="#4A3525" strokeWidth="1" />
          <line x1="50" y1="135" x2="110" y2="135" stroke="#C5A880" strokeWidth="1" />
          <line x1="50" y1="145" x2="100" y2="145" stroke="#C5A880" strokeWidth="1" />
          <line x1="50" y1="155" x2="110" y2="155" stroke="#C5A880" strokeWidth="1" />

          {/* Compass & Pencil */}
          <line x1="140" y1="90" x2="140" y2="160" stroke="#4A3525" strokeWidth="3" />
          <polygon points="140,85 137,92 143,92" fill="#4A3525" />
          <path d="M 120 150 Q 140 170 160 150" fill="none" stroke="#C5A880" strokeWidth="2" strokeDasharray="2 2" />

          {/* Panda Head looking at drawing */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <circle cx="80" cy="85" r="25" fill="#FFFFFF" stroke="#4A3525" strokeWidth="2" />
            {/* Ears */}
            <circle cx="58" cy="65" r="8" fill="#2B2B2B" />
            <circle cx="102" cy="65" r="8" fill="#2B2B2B" />
            {/* Eye Patches */}
            <ellipse cx="70" cy="85" rx="6" ry="5" fill="#2B2B2B" />
            <ellipse cx="90" cy="85" rx="6" ry="5" fill="#2B2B2B" />
            <circle cx="70" cy="85" r="2" fill="#FFFFFF" />
            <circle cx="90" cy="85" r="2" fill="#FFFFFF" />
            {/* Snout */}
            <ellipse cx="80" cy="92" rx="3" ry="2" fill="#2B2B2B" />
            {/* Blush */}
            <circle cx="66" cy="92" r="3" fill="#ffccd5" />
            <circle cx="94" cy="92" r="3" fill="#ffccd5" />
          </motion.g>
        </svg>
      )
    },
    {
      icon: GraduationCap,
      title: "The Blueprint of Dreams",
      subtitle: "College Years",
      period: "Higher Education",
      story: "College was where the passion for structures truly came alive. Amidst late nights, endless coffee cups, blueprint rolls, and T-squares, Dudu learned to draft his dreams onto paper.",
      illustration: () => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Blueprint rolled */}
          <rect x="40" y="130" width="120" height="25" rx="6" fill="#FAF6EE" stroke="#C5A880" strokeWidth="2" />
          <ellipse cx="40" cy="142.5" rx="4" ry="12.5" fill="#C5A880" />
          <ellipse cx="160" cy="142.5" rx="4" ry="12.5" fill="#FAF6EE" stroke="#C5A880" strokeWidth="2" />

          {/* Coffee Mug */}
          <rect x="135" y="80" width="25" height="30" rx="3" fill="#4A3525" />
          <path d="M 160 87.5 Q 170 95 160 102.5" fill="none" stroke="#4A3525" strokeWidth="3" />
          {/* Steam */}
          <motion.path
            d="M 142 75 Q 146 65 142 55"
            fill="none"
            stroke="#C5A880"
            strokeWidth="1.5"
            animate={{ y: [0, -5, 0], opacity: [0, 0.8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Graduation Cap */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ transformOrigin: "90px 75px" }}
          >
            <polygon points="90,45 130,55 90,65 50,55" fill="#2B2B2B" />
            <rect x="80" y="58" width="20" height="15" fill="#2B2B2B" />
            {/* Tassel */}
            <path d="M 110 55 L 125 70" fill="none" stroke="#C5A880" strokeWidth="2" />
            <circle cx="125" cy="70" r="2.5" fill="#C5A880" />
          </motion.g>

          {/* Panda wearing graduation details */}
          <circle cx="90" cy="95" r="22" fill="#FFFFFF" stroke="#4A3525" strokeWidth="2" />
          {/* Ears */}
          <circle cx="70" cy="78" r="7" fill="#2B2B2B" />
          <circle cx="110" cy="78" r="7" fill="#2B2B2B" />
          {/* Patches */}
          <ellipse cx="82" cy="95" rx="5.5" ry="4.5" fill="#2B2B2B" />
          <ellipse cx="98" cy="95" rx="5.5" ry="4.5" fill="#2B2B2B" />
          <circle cx="82" cy="95" r="1.5" fill="#FFFFFF" />
          <circle cx="98" cy="95" r="1.5" fill="#FFFFFF" />
          {/* Nose */}
          <ellipse cx="90" cy="100" rx="2.5" ry="1.5" fill="#2B2B2B" />
        </svg>
      )
    },
    {
      icon: Landmark,
      title: "Designing the World",
      subtitle: "Current Architect Life",
      period: "Today",
      story: "Now, as a full-fledged Architect, Dudu designs spaces that are elegant, minimal, and filled with emotion. With precision, style, and cozy breaks, he builds blueprints of the future.",
      illustration: () => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Drafting Table Lines */}
          <line x1="30" y1="160" x2="170" y2="160" stroke="#4A3525" strokeWidth="2" />
          
          {/* Blueprint Draft */}
          <rect x="50" y="80" width="100" height="70" rx="2" fill="#4A3525" opacity="0.9" />
          {/* Architectural Drawing on Board */}
          <line x1="60" y1="140" x2="140" y2="140" stroke="#C5A880" strokeWidth="1" />
          <rect x="70" y="105" width="20" height="35" fill="none" stroke="#C5A880" strokeWidth="1" />
          <rect x="110" y="95" width="20" height="45" fill="none" stroke="#C5A880" strokeWidth="1" />
          <polygon points="80,90 70,105 90,105" fill="none" stroke="#C5A880" strokeWidth="1" />
          <polygon points="120,80 110,95 130,95" fill="none" stroke="#C5A880" strokeWidth="1" />

          {/* Golden Ruler */}
          <rect x="40" y="70" width="6" height="85" fill="#C5A880" />
          <line x1="46" y1="80" x2="43" y2="80" stroke="#4A3525" strokeWidth="1" />
          <line x1="46" y1="100" x2="43" y2="100" stroke="#4A3525" strokeWidth="1" />
          <line x1="46" y1="120" x2="43" y2="120" stroke="#4A3525" strokeWidth="1" />
          <line x1="46" y1="140" x2="43" y2="140" stroke="#4A3525" strokeWidth="1" />

          {/* Architect Panda holding pencil */}
          <motion.g
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <circle cx="150" cy="70" r="20" fill="#FFFFFF" stroke="#4A3525" strokeWidth="2" />
            <circle cx="134" cy="55" r="6" fill="#2B2B2B" />
            <circle cx="166" cy="55" r="6" fill="#2B2B2B" />
            <ellipse cx="143" cy="70" rx="5" ry="4" fill="#2B2B2B" />
            <ellipse cx="157" cy="70" rx="5" ry="4" fill="#2B2B2B" />
            <circle cx="143" cy="70" r="1" fill="#FFFFFF" />
            <circle cx="157" cy="70" r="1" fill="#FFFFFF" />
            <ellipse cx="150" cy="75" rx="2" ry="1.5" fill="#2B2B2B" />
            {/* Pencil hand */}
            <path d="M 125 80 L 135 70" stroke="#C5A880" strokeWidth="4" strokeLinecap="round" />
          </motion.g>
        </svg>
      )
    }
  ]

  return (
    <section className="relative py-24 bg-white px-4 md:px-8 border-t border-gold/10 overflow-hidden">
      {/* Background blueprint guide lines */}
      <div className="absolute inset-0 bg-blueprint-pattern pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="font-cute text-xs sm:text-sm uppercase tracking-widest text-gold-dark font-semibold">
            Chronology
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-coffee font-medium mt-2">
            A Journey Through Time
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Timeline Path (Central line) */}
        <div className="absolute left-4 md:left-1/2 top-48 bottom-12 w-[2px] bg-gold/30 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-20 relative">
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0
            const Icon = item.icon

            return (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row items-stretch w-full ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Visual Card (Polaroid Frame) */}
                <div className="w-full sm:w-1/2 flex justify-center px-4 md:px-8">
                  <motion.div
                    className="w-full max-w-sm bg-cream rounded-lg p-4 border border-gold/10 polaroid-shadow tape-effect flex flex-col justify-between"
                    initial={{ opacity: 0, x: isEven ? -40 : 40, rotate: isEven ? -2 : 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                  >
                    {/* Portrait Area */}
                    <div className="aspect-square bg-white border border-gold/10 rounded-md overflow-hidden p-4 flex items-center justify-center relative">
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-gold/15 text-gold-dark rounded font-cute text-[10px] uppercase font-bold tracking-wider">
                        {item.period}
                      </div>
                      <item.illustration />
                    </div>
                    {/* Caption */}
                    <div className="pt-4 pb-2 text-center">
                      <h4 className="font-serif text-lg text-coffee font-medium">{item.title}</h4>
                      <p className="font-cute text-xs text-gold-dark tracking-wider mt-1">{item.subtitle}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node Icon (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 justify-center items-center z-20 hidden sm:flex mt-32">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-cream border-2 border-gold flex items-center justify-center text-coffee-light polaroid-shadow"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Description Card */}
                <div className="w-full sm:w-1/2 flex items-center px-4 md:px-8 mt-6 sm:mt-0">
                  <motion.div
                    className="w-full glass-panel rounded-2xl border border-gold/10 p-6 md:p-8 polaroid-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <span className="font-cute text-[11px] uppercase tracking-wider text-gold-dark font-semibold">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-coffee font-medium mt-1 mb-3">
                      {item.subtitle}
                    </h3>
                    <p className="font-cute text-sm text-coffee-light/95 leading-relaxed">
                      {item.story}
                    </p>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
