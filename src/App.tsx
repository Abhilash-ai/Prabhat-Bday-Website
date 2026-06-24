import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion'
import { X, ZoomIn, ArrowLeft, ArrowRight, Play, Pause, Square } from 'lucide-react'
import { R3, F0, M3, D3, Z0, W0, O3 } from './components/ReplitAvatars'
import BubusNotes from './components/BubusNotes'
import BirthdayLetter from './components/BirthdayLetter'
import CursorTrail from './components/CursorTrail'
import BirthdayCake from './components/BirthdayCake'


// Animation Variants
const Zt = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as any } }
}


const N3 = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } }
}

// Scroll Reveal Helper
function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-70px" })
  return (
    <motion.div
      ref={ref}
      variants={N3}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Helper: Small Category Tag
function CategoryTag({ text }: { text: string }) {
  return (
    <motion.p
      variants={Zt}
      className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3 font-sans"
    >
      {text}
    </motion.p>
  )
}

// Helper: Section Title
function SectionTitle({ text, italic }: { text: string; italic?: string }) {
  return (
    <motion.h2
      variants={Zt}
      className="text-4xl md:text-5xl font-serif text-charcoal leading-tight mb-10"
    >
      {text}
      {italic && (
        <>
          {" "}
          <em className="text-primary not-italic">{italic}</em>
        </>
      )}
    </motion.h2>
  )
}

// Divider Line
function SectionDivider() {
  return <div className="w-12 h-[1px] bg-border my-12 mx-auto md:mx-0" />
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Replit Wishes Data
  const wishesList = [
    "May every blueprint you draw this year become something extraordinary, Dudu.",
    "May your coffee always be strong and your deadlines always kind. 🐻☕",
    "May the mountains remind you how far you've already climbed.",
    "May this year bring projects that make you proud to put your name on them.",
    "Bubu will always be cheering for you — in every quiet night and busy day.",
    "Happy Birthday, Dudu. You deserve every single good thing. 🐼💕🐻"
  ]

  const [activeWishIdx, setActiveWishIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWishIdx((prev) => (prev + 1) % wishesList.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [])

  // Replit Timeline Data
  const timelineData = [
    {
      period: "The beginning",
      label: "A Little Bear with Big Dreams",
      desc: "Even before you knew what an architect was, you noticed how light falls through windows. How rooms breathe. How things are built to last."
    },
    {
      period: "Architecture school",
      label: "Where Craft Met Calling",
      desc: "Late nights, blueprints, hand-built models. Bubu knows you gave everything to it — and it gave you a purpose worth keeping."
    },
    {
      period: "Rising",
      label: "Projects & Exhibitions",
      desc: "Ideas moved off paper and into the world. Dudu built things that outlast the moment."
    },
    {
      period: "Today",
      label: "The Architect Bubu Adores",
      desc: "Steady, grounded, creating. And celebrating his birthday — finally, it's your day, Dudu. 🐻🎂"
    }
  ]

  // Replit World Parameters
  const worldParameters = [
    {
      icon: "🏗️",
      label: "Architecture",
      desc: "You see beauty in structure before anyone else. A gift for building things that outlast the moment."
    },
    {
      icon: "☕",
      label: "Coffee Lover",
      desc: "Always a cup ready. Fueling the late-night sketchpads and early morning blueprints."
    },
    {
      icon: "🌙",
      label: "Night Owl",
      desc: "Your best hours are when the world goes quiet. Bubu knows this well."
    },
    {
      icon: "🏔️",
      label: "Mountains",
      desc: "You find perspective at altitude. Dudu always climbs to the top."
    },
    {
      icon: "🎨",
      label: "Creative Work",
      desc: "Exhibitions, sketches, models — your hands are always making something."
    },
    {
      icon: "📐",
      label: "Precision",
      desc: "Every line placed with intention. That's just who you are, Dudu."
    }
  ]

  // Replit Qualities Badges
  const badgesList = [
    { word: "Patient", bg: "#f0e6d3", text: "#6b543b" },
    { word: "Grounded", bg: "#d4e8d8", text: "#3d5c46" },
    { word: "Thoughtful", bg: "#d8e4f0", text: "#3c506b" },
    { word: "Hardworking", bg: "#f0dbd4", text: "#6e473d" },
    { word: "Cute", bg: "#e4d8f0", text: "#5c3d6e" },
    { word: "Creative", bg: "#f0ead4", text: "#69603b" }
  ]


  // Photos List (For Polaroid Memory Gallery)
  // Feel free to replace these photo files in public/assets or reference URLs!
  const photosList = [
    {
      id: 1,
      title: "Student Life",
      date: "The Academic Years",
      caption: "Late night study sessions, drawing boards, and big dreams. Where Dudu's passion for structural design and architecture first took root.",
      imgUrl: import.meta.env.BASE_URL + "assets/student-life.jpg", // Add student photo path here! (e.g. "/assets/student-life.jpg")
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#FCFAF2]">
          {/* T-Square */}
          <path d="M 60 70 L 240 70 M 70 50 L 70 230" stroke="#C5A880" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          {/* Sketchbook / Drawing board */}
          <rect x="80" y="90" width="150" height="110" rx="3" fill="#FFFFFF" stroke="#4A3525" strokeWidth="3" />
          {/* Compass Sketch circles */}
          <circle cx="155" cy="145" r="28" stroke="#E0535D" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 130 145 L 180 145 M 155 120 L 155 170" stroke="#E0535D" strokeWidth="1.5" opacity="0.5" />
          {/* Cute small graduation cap floating top-right */}
          <g transform="translate(200, 45) scale(0.6)">
            <polygon points="40,25 70,10 100,25 70,40" fill="#E0535D" />
            <rect x="55" y="30" width="30" height="15" fill="#4A3525" />
            <path d="M 100 25 L 100 45" stroke="#E0535D" strokeWidth="2" strokeLinecap="round" />
            <circle cx="100" cy="45" r="3" fill="#C5A880" />
          </g>
          {/* Cute drawing pencil */}
          <path d="M 210 210 L 240 180 M 235 185 L 240 180 L 235 175" stroke="#4A3525" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Architecture Life",
      date: "The Creative Profession",
      caption: "Turning complex blueprints into modern realities. Shaping spaces with meticulous precision, creative vision, and a constant cup of coffee nearby.",
      imgUrl: import.meta.env.BASE_URL + "assets/architecture-life.jpg", // Add architecture photo path here! (e.g. "/assets/architecture-life.jpg")
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#1A2634]">
          {/* Grid lines */}
          <path d="M 0 50 L 300 50 M 0 100 L 300 100 M 0 150 L 300 150 M 0 200 L 300 200 M 0 250 L 300 250" stroke="#253548" strokeWidth="1" />
          <path d="M 50 0 L 50 300 M 100 0 L 100 300 M 150 0 L 150 300 M 200 0 L 200 300 M 250 0 L 250 300" stroke="#253548" strokeWidth="1" />
          {/* Modern Building 1 */}
          <rect x="60" y="110" width="50" height="140" fill="none" stroke="#E0535D" strokeWidth="2.5" />
          <line x1="60" y1="140" x2="110" y2="140" stroke="#E0535D" strokeWidth="1" opacity="0.6" />
          <line x1="60" y1="170" x2="110" y2="170" stroke="#E0535D" strokeWidth="1" opacity="0.6" />
          <line x1="60" y1="200" x2="110" y2="200" stroke="#E0535D" strokeWidth="1" opacity="0.6" />
          {/* Modern Building 2 (Tall Gold Frame) */}
          <rect x="125" y="70" width="60" height="180" fill="none" stroke="#C5A880" strokeWidth="3" />
          {/* Diagonal blueprint alignment line */}
          <line x1="30" y1="250" x2="270" y2="50" stroke="#4D7097" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Modern Building 3 */}
          <rect x="200" y="130" width="45" height="120" fill="none" stroke="#68B0AB" strokeWidth="2" />
          {/* Compass tool in top left */}
          <path d="M 30 40 L 45 75 M 30 40 L 15 75 M 15 75 L 45 75" fill="none" stroke="#C5A880" strokeWidth="2" opacity="0.7" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Cute Dudu",
      date: "Everyday Adorable Bear",
      caption: "Bubu's absolute favorite phase—just Dudu being Dudu! Sweet, caring, and unconditionally adorable in every single cozy moment.",
      imgUrl: import.meta.env.BASE_URL + "assets/cute-dudu.jpg", // Add cute dudu photo path here! (e.g. "/assets/cute-dudu.jpg")
      svg: () => (
        <svg viewBox="0 0 300 300" className="w-full h-full bg-[#FDF0EE]">
          {/* Cute Bear Ears */}
          <circle cx="105" cy="115" r="24" fill="#5C4033" />
          <circle cx="105" cy="115" r="13" fill="#FFA5A5" />
          <circle cx="195" cy="115" r="24" fill="#5C4033" />
          <circle cx="195" cy="115" r="13" fill="#FFA5A5" />
          {/* Bear Head */}
          <circle cx="150" cy="155" r="54" fill="#5C4033" />
          {/* Muzzle */}
          <ellipse cx="150" cy="172" rx="22" ry="16" fill="#FFFFFF" />
          {/* Nose & Mouth */}
          <path d="M 144 167 Q 150 174 156 167" fill="none" stroke="#1E1E24" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="150" cy="164" r="4.5" fill="#1E1E24" />
          {/* Eyes with white sparkle */}
          <circle cx="128" cy="148" r="6" fill="#1E1E24" />
          <circle cx="126" cy="146" r="2" fill="#FFFFFF" />
          <circle cx="172" cy="148" r="6" fill="#1E1E24" />
          <circle cx="174" cy="146" r="2" fill="#FFFFFF" />
          {/* Cheeks */}
          <circle cx="114" cy="164" r="8" fill="#FFA5A5" opacity="0.8" />
          <circle cx="186" cy="164" r="8" fill="#FFA5A5" opacity="0.8" />
          {/* Floating Hearts */}
          <path d="M 220 90 C 220 80, 205 80, 205 95 C 205 110, 220 120, 220 120 C 220 120, 235 110, 235 95 C 235 80, 220 80, 220 90 Z" fill="#E0535D" />
          <path d="M 80 85 C 80 77, 68 77, 68 89 C 68 101, 80 109, 80 109 C 80 109, 92 101, 92 89 C 92 77, 80 77, 80 85 Z" fill="#E0535D" transform="scale(0.8) translate(20, 20)" />
        </svg>
      )
    }
  ]

  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null)
  const [playMusic, setPlayMusic] = useState(false)
  const [youtubeId, setYoutubeId] = useState("wJiFLSJzMjo") // Default: Soft Classic Piano Instrumental (No Drums)
  const [showMusicSettings, setShowMusicSettings] = useState(false)
  const [inputUrl, setInputUrl] = useState("")
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [hasEntered])

  const extractYoutubeId = (urlOrId: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = urlOrId.match(regExp)
    if (match && match[2].length === 11) {
      return match[2]
    }
    if (urlOrId.trim().length === 11) {
      return urlOrId.trim()
    }
    return ""
  }



  return (
    <div className="relative min-h-screen bg-cream text-charcoal overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* 00. CURSOR HEART & SPARKLE TRAIL */}
      <CursorTrail />
      {/* 0. WELCOME / CARD ENTRY SCREEN */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -24, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-6 py-12"
          >
            {/* Elegant Background Grid Patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #E0535D 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-border/85 text-center relative flex flex-col items-center shadow-xl"
              style={{ boxShadow: "0 24px 60px rgba(224, 83, 93, 0.08)" }}
            >
              {/* Cute Floating Avatars */}
              <div className="flex gap-5 mb-6 select-none pointer-events-none">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
                  <Z0 size={80} />
                </motion.div>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.35 }}>
                  <F0 size={80} />
                </motion.div>
              </div>

              <h1 className="text-3xl font-serif font-semibold text-charcoal mb-4">
                Dudu's Birthday Surprise 🎂
              </h1>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
                Bubu has prepared a special interactive page for Prabhat (Dudu). Tap below to open and start the melody.
              </p>

              {/* Envelope / Gift Trigger */}
              <motion.button
                onClick={() => {
                  setPlayMusic(true)
                  setHasEntered(true)
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold text-base shadow-md hover:bg-primary-hover hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span>Open Bubu's Gift 🎁</span>
              </motion.button>
              
              <p className="text-[10px] text-muted-foreground/60 mt-5 uppercase tracking-widest font-sans font-semibold">
                Tap to unlock & play soft piano music
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* 1. HERO LANDING SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/5 blur-[80px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Header pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border/60 shadow-sm text-xs text-muted-foreground mb-8"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
          >
            <span>🐼</span>
            <span className="font-medium">A birthday made by Bubu, for Dudu</span>
            <span>🐻</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl font-serif font-semibold text-charcoal leading-[1.05] mb-5"
          >
            Happy Birthday<br />
            <motion.em
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-primary not-italic"
            >
              Dudu 🐻
            </motion.em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="text-muted-foreground text-lg md:text-xl font-light max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Architect. Coffee lover. Mountain soul. Night thinker.<br />
            <span className="text-charcoal/70 font-medium">Prabhat Tripathy</span> — today is all yours.
          </motion.p>

          {/* Character circles block with bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-center gap-6"
          >
            {/* Bubu */}
            <div className="flex flex-col items-center gap-1.5">
              <W0 size={110} />
              <span className="text-xs text-muted-foreground font-medium">
                Bubu 🐼 <em className="text-primary not-italic">(me!)</em>
              </span>
            </div>

            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.5, ease: "backOut" }}
              className="mb-10 px-5 py-3 bg-white border border-border rounded-2xl shadow-sm text-sm text-charcoal/80 font-medium replit-shadow-sm select-none"
            >
              Happy Birthday, Dudu! 🎉
            </motion.div>

            {/* Dudu */}
            <div className="flex flex-col items-center gap-1.5">
              <R3 size={110} />
              <span className="text-xs text-muted-foreground font-medium">
                Dudu 🐻 <em className="text-primary not-italic">(Prabhat!)</em>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-border rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-muted-foreground/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. NOTE FROM BUBU SECTION */}
      <section className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div
              className="bg-white rounded-3xl p-8 sm:p-10 border border-border/60 relative overflow-hidden replit-shadow"
            >
              <div className="absolute -top-4 -right-4 text-6xl opacity-10 select-none">🐼</div>
              <div className="absolute -bottom-4 -left-4 text-6xl opacity-10 select-none">🐻</div>
              
              <p className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-5 font-sans">
                A note from Bubu
              </p>
              <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-6">
                "Dear Dudu, I made this just for you. Because you deserve a whole page — actually, a whole website — dedicated to how wonderful you are. Happy Birthday. 🐼💕"
              </p>
              
              <div className="flex items-center gap-3 mt-4">
                <Z0 size={52} />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Bubu 🐼</p>
                  <p className="text-xs text-muted-foreground">Your biggest fan</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. WHO IS DUDU SECTION */}
      <section className="py-28 px-6 bg-[#FCFAF7] border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <CategoryTag text="The bear Bubu adores" />
            <SectionTitle text="Who is" italic="Dudu?" />
            <SectionDivider />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="space-y-5">
              <p className="text-charcoal/85 text-lg leading-relaxed">
                Dudu — Prabhat Tripathy — is the kind of bear who brings calm into every room he enters. An architect by profession and by nature: he sees structure in everything, beauty in the well-placed detail, meaning in the spaces between things.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quietly hardworking, never loud about it. The type who disappears into a project and emerges with something extraordinary. Exhibitions, models, late-night sketches — Dudu's creative life is full and ongoing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bubu sees all of it. Every late night, every effort, every act of care. And Bubu thinks you're extraordinary, Dudu.
              </p>
            </ScrollReveal>

            {/* Badges and avatar */}
            <ScrollReveal className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap gap-2.5 justify-center">
                {badgesList.map((badge) => (
                  <motion.span
                    key={badge.word}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm font-semibold border border-border/60 cursor-default"
                    style={{ backgroundColor: badge.bg, color: badge.text }}
                  >
                    {badge.word}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col items-center gap-2">
                <D3 size={130} />
                <p className="text-xs text-muted-foreground italic">Dudu pondering his next masterpiece</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. DUDU'S WORLD SECTION */}
      <section className="py-28 px-6 bg-white border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <CategoryTag text="Things Bubu loves about Dudu's world" />
            <SectionTitle text="Dudu's" italic="World" />
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-2">
            {worldParameters.map((param, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-white rounded-2xl p-6 border border-border/70 flex flex-col gap-3 cursor-default"
              >
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 3.5 + idx * 0.4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                >
                  {param.icon}
                </motion.span>
                <h3 className="font-semibold text-charcoal font-sans text-base">
                  {param.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {param.desc}
                </p>
              </motion.div>
            ))}
          </ScrollReveal>

          {/* Table quote banner */}
          <ScrollReveal className="mt-20">
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-8 bg-[#FCFAF7] rounded-3xl border border-border/60 p-8 md:p-10 replit-shadow-sm"
            >
              <M3 size={120} />
              <div className="max-w-xs text-center md:text-left">
                <p className="text-charcoal/75 italic text-base leading-relaxed font-serif">
                  "There's something about that first sip at midnight — the city quiet, the drawing unfinished. That's when the best ideas come."
                </p>
                <p className="text-muted-foreground text-xs mt-3">
                  — Dudu, probably. Bubu knows him too well.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. HOW DUDU GOT HERE TIMELINE */}
      <section className="py-28 px-6 bg-[#FCFAF7] border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <CategoryTag text="Bubu's favourite Dudu moments" />
            <SectionTitle text="How Dudu" italic="Got Here" />
          </ScrollReveal>

          <div className="relative mt-4">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
            <ScrollReveal className="space-y-12">
              {timelineData.map((item, idx) => (
                <div key={idx} className="pl-16 relative">
                  <motion.div
                    className="absolute left-[15px] top-1 w-5 h-5 rounded-full border-2 border-primary bg-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 300 }}
                  />
                  <p className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-1 font-sans">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-serif text-charcoal mb-2">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. ADDED FEATURE: DUDU'S PHOTO MEMORIES (Polaroid Masonry Gallery) */}
      <section className="py-28 px-6 bg-white border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <CategoryTag text="Dudu's life phases" />
            <SectionTitle text="Life" italic="Phases" />
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {photosList.map((photo, index) => {
              const PhotoSVG = photo.svg
              return (
                <motion.div
                  key={photo.id}
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="bg-cream p-4 border border-border/80 rounded-lg polaroid-shadow tape-effect cursor-pointer group flex flex-col justify-between"
                  onClick={() => setActivePhotoIdx(index)}
                >
                  {/* Photo area */}
                  <div className="aspect-square bg-white border border-border/30 rounded overflow-hidden relative flex items-center justify-center">
                    {photo.imgUrl ? (
                      <img src={photo.imgUrl} alt={photo.title} className="w-full h-full object-cover" />
                    ) : (
                      <PhotoSVG />
                    )}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-sm">
                        <ZoomIn className="w-4.5 h-4.5" />
                      </div>
                    </div>
                  </div>
                  {/* Caption */}
                  <div className="pt-4 text-center">
                    <h4 className="font-serif text-base text-charcoal font-semibold">{photo.title}</h4>
                    <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block mt-0.5">{photo.date}</span>
                  </div>
                </motion.div>
              )
            })}
          </ScrollReveal>

          {/* Photo Lightbox */}
          <AnimatePresence>
            {activePhotoIdx !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActivePhotoIdx(null)}
                />
                <motion.div
                  className="relative z-10 w-full max-w-2xl bg-cream rounded-2xl overflow-hidden polaroid-shadow border border-border flex flex-col sm:flex-row"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                >
                  {/* Image render */}
                  <div className="w-full sm:w-1/2 aspect-square bg-white flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border">
                    {(() => {
                      const LightboxSVG = photosList[activePhotoIdx].svg
                      return photosList[activePhotoIdx].imgUrl ? (
                        <img src={photosList[activePhotoIdx].imgUrl} alt={photosList[activePhotoIdx].title} className="w-full h-full object-cover" />
                      ) : (
                        <LightboxSVG />
                      )
                    })()}
                  </div>
                  {/* Caption Details */}
                  <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">
                        {photosList[activePhotoIdx].date}
                      </span>
                      <h3 className="font-serif text-2xl text-charcoal font-medium mb-3">
                        {photosList[activePhotoIdx].title}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {photosList[activePhotoIdx].caption}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border pt-6 mt-6 sm:mt-0">
                      <button
                        onClick={() => setActivePhotoIdx((activePhotoIdx - 1 + photosList.length) % photosList.length)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary font-semibold transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Prev</span>
                      </button>
                      <span className="text-xs text-muted-foreground">{activePhotoIdx + 1} / {photosList.length}</span>
                      <button
                        onClick={() => setActivePhotoIdx((activePhotoIdx + 1) % photosList.length)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary font-semibold transition-colors cursor-pointer"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setActivePhotoIdx(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white shadow-md text-charcoal flex items-center justify-center cursor-pointer hover:bg-white/80"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 7. WHAT MAKES DUDU SPECIAL SECTION */}
      <section className="py-28 px-6 bg-[#FCFAF7] border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <CategoryTag text="Why Bubu thinks the world of Dudu" />
            <SectionTitle text="What Makes Dudu" italic="Special" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 mt-2">
            <ScrollReveal className="space-y-5">
              {[
                {
                  title: "He always comes back",
                  body: "When life gets busy — and with architecture, it always does — Dudu still finds a moment to check in, to explain, to stay. Bubu notices this every time."
                },
                {
                  title: "His calm is a superpower",
                  body: "Steady. Measured. Operating at a different frequency from the rest. The kind of calm that makes Bubu (and everyone around him) breathe a little easier."
                },
                {
                  title: "He creates beauty for others to live in",
                  body: "Every project is a gift to people he'll never meet — spaces shaped by his care and precision. Bubu finds that incredibly beautiful."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="bg-white rounded-2xl p-6 border border-border/70 replit-shadow-sm"
                >
                  <h3 className="font-semibold text-charcoal mb-2 font-sans text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </ScrollReveal>

            {/* Avatars sending love */}
            <ScrollReveal className="flex flex-col items-center justify-center gap-5">
              <div className="flex items-end gap-6">
                <div className="flex flex-col items-center gap-1">
                  <W0 size={130} />
                  <p className="text-xs text-muted-foreground font-medium">Bubu 🐼 sending love</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <F0 size={110} />
                  <p className="text-xs text-muted-foreground font-medium">Dudu 🐻 being Dudu</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. WISHES CAROUSEL LOOP */}
      <section className="py-28 px-6 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <CategoryTag text="From Bubu's heart to Dudu" />
            <SectionTitle text="Birthday" italic="Wishes" />
          </ScrollReveal>

          {/* Slideshow element */}
          <div className="relative min-h-[110px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeWishIdx}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl md:text-2xl font-serif italic text-charcoal/80 leading-relaxed max-w-xl"
              >
                "{wishesList[activeWishIdx]}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Floating YouTube Music Controller */}
          <div className="fixed bottom-20 right-6 z-40 flex flex-col items-end">
            <AnimatePresence>
              {showMusicSettings && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="mb-3 p-4 bg-white/95 backdrop-blur-md border border-border/80 rounded-2xl shadow-xl w-72 text-left font-sans text-xs flex flex-col gap-3"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                >
                  <p className="font-semibold text-charcoal text-sm flex items-center gap-1.5">
                    <span>🎵</span> Background Music Settings
                  </p>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Paste any YouTube video link below to change the background song:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-[#FCFAF7] border border-border rounded-lg focus:outline-none focus:border-primary text-xs"
                    />
                    <button
                      onClick={() => {
                        const id = extractYoutubeId(inputUrl)
                        if (id) {
                          setYoutubeId(id)
                          setPlayMusic(true)
                          setInputUrl("")
                          setShowMusicSettings(false)
                        } else {
                          alert("Invalid YouTube Link. Please copy a valid link.")
                        }
                      }}
                      className="px-3 py-1.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors cursor-pointer"
                    >
                      Set
                    </button>
                  </div>
                  <div className="text-[10px] text-muted-foreground/80 flex flex-col gap-1 border-t border-border/55 pt-2.5">
                    <span className="font-medium text-charcoal">Suggested Soft Birthday Tracks:</span>
                    <button
                      onClick={() => {
                        setYoutubeId("wJiFLSJzMjo")
                        setPlayMusic(true)
                        setShowMusicSettings(false)
                      }}
                      className="text-left text-primary hover:underline truncate cursor-pointer"
                    >
                      • Soft Classic Piano (Default)
                    </button>
                    <button
                      onClick={() => {
                        setYoutubeId("KefowEMil1H")
                        setPlayMusic(true)
                        setShowMusicSettings(false)
                      }}
                      className="text-left text-primary hover:underline truncate cursor-pointer"
                    >
                      • Sweet Music Box Version
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-2">
              <AnimatePresence>
                {playMusic && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="px-3 py-1 bg-white border border-border text-[9px] uppercase font-bold tracking-widest text-primary rounded-md shadow-sm select-none font-sans"
                    style={{ boxShadow: "0 2px 8px rgba(224, 83, 93, 0.08)" }}
                  >
                    Playing BGM 🎵
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-border/60 p-1 rounded-full shadow-md">
                <motion.button
                  onClick={() => setShowMusicSettings(!showMusicSettings)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full bg-cream text-charcoal/70 shadow-sm flex items-center justify-center cursor-pointer hover:bg-white hover:text-primary transition-all focus:outline-none"
                  title="Music Settings"
                >
                  <span className="text-[13px]">⚙️</span>
                </motion.button>

                <motion.button
                  onClick={() => setPlayMusic(!playMusic)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full bg-primary hover:bg-primary-hover text-white shadow-sm flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none"
                  title={playMusic ? "Pause BGM" : "Play BGM"}
                >
                  {playMusic ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </motion.button>

                {playMusic && (
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={() => setPlayMusic(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full bg-charcoal hover:bg-charcoal/80 text-white shadow-sm flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none"
                    title="Stop BGM"
                  >
                    <Square className="w-3.5 h-3.5 fill-white" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {playMusic && youtubeId && (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0`}
              allow="autoplay; encrypted-media"
              className="w-1 h-1 absolute bottom-0 right-0 opacity-0 pointer-events-none"
            />
          )}


          {/* Dots pagination */}
          <div className="flex justify-center gap-2 mb-16">
            {wishesList.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveWishIdx(idx)}
                className="h-2 rounded-full cursor-pointer"
                animate={{
                  width: idx === activeWishIdx ? 24 : 8,
                  backgroundColor: idx === activeWishIdx ? "#E0535D" : "#EAEAEA"
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          {/* Mini character display */}
          <ScrollReveal>
            <div className="flex justify-center items-end gap-3">
              <div className="flex flex-col items-center gap-1">
                <Z0 size={90} />
                <span className="text-xs text-muted-foreground font-medium">Bubu 🐼</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <F0 size={96} />
                <span className="text-xs text-muted-foreground font-medium">Dudu 🐻</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. ADDED FEATURE: BUBU'S REMINDERS & STICKY NOTES */}
      <BubusNotes />

      {/* 10. ADDED FEATURE: HANDWRITTEN BIRTHDAY LETTER */}
      <BirthdayLetter />

      {/* 11. REPLIT GRAND FINALE */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-[#F2EFE9] border-t border-border">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-8 leading-tight">
              Happy Birthday,<br />
              <em className="text-primary not-italic">Dudu. 🐻</em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl mx-auto">
              May this year bring beautiful architecture, strong coffee, clear mountain air, and every quiet late night that ends in something you're proud of.
            </p>
            <p className="text-charcoal/70 text-base leading-relaxed mb-12 max-w-md mx-auto font-serif italic">
              Bubu will always be here — cheering the loudest, loving the most. 🐼💕
            </p>
            
            {/* Interactive Birthday Cake */}
            <div className="mb-12">
              <BirthdayCake />
            </div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="inline-block px-9 py-3.5 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-wide cursor-default select-none"
            >
              With all my love, Bubu 🐼
            </motion.div>
          </ScrollReveal>

          {/* Footer characters illustration */}
          <ScrollReveal className="mt-16 flex flex-col items-center gap-3">
            <O3 size={240} />
            <p className="text-sm text-charcoal/60 font-serif italic mt-2">Dudu 🐻 & Bubu 🐼 — always together</p>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border bg-white text-center">
        <p className="text-xs text-muted-foreground">
          Made with 🐼 love by Bubu, for Dudu's birthday · {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-1">
          Dudu (bear) & Bubu (panda) — characters by Huang Xiao B
        </p>
      </footer>
    </div>
  )
}
