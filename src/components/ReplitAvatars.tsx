import { motion } from 'framer-motion'

// Photo references from Replit
export const DUDO_PHOTO = "/assets/dudu-real-vbnJtF7Z.jpg"
export const BUBO_PHOTO = "/assets/bubu-real-DuD00zem.jpg"

interface CiProps {
  src: string
  alt: string
  size: number
  className?: string
  objectPosition?: string
  animate?: any
  transition?: any
}

export function Ci({
  src,
  alt,
  size,
  className = "",
  objectPosition = "center center",
  animate,
  transition
}: CiProps) {
  return (
    <motion.div
      className={`rounded-full overflow-hidden shrink-0 select-none border border-border bg-white ${className}`}
      style={{ width: size, height: size }}
      animate={animate}
      transition={transition}
      draggable={false}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          display: "block",
          userSelect: "none",
          pointerEvents: "none"
        }}
        draggable={false}
      />
    </motion.div>
  )
}

export const R3 = ({ size = 120, className = "" }) => (
  <Ci
    src={DUDO_PHOTO}
    alt="Dudu the bear"
    size={size}
    className={className}
    objectPosition="50% 62%"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
  />
)

export const F0 = ({ size = 120, className = "" }) => (
  <Ci
    src={DUDO_PHOTO}
    alt="Dudu the bear happy"
    size={size}
    className={className}
    objectPosition="50% 62%"
    animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
  />
)

export const M3 = ({ size = 120, className = "" }) => (
  <Ci
    src={DUDO_PHOTO}
    alt="Dudu the bear peeking"
    size={size}
    className={className}
    objectPosition="50% 20%"
    animate={{ rotate: [-2, 2, -2] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
)

export const D3 = ({ size = 120, className = "" }) => (
  <Ci
    src={DUDO_PHOTO}
    alt="Dudu the bear thinking"
    size={size}
    className={className}
    objectPosition="80% 38%"
    animate={{ rotate: [-3, 3, -3] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
)

export const Z0 = ({ size = 120, className = "" }) => (
  <Ci
    src={BUBO_PHOTO}
    alt="Bubu the panda"
    size={size}
    className={className}
    objectPosition="50% 50%"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
  />
)

export const W0 = ({ size = 120, className = "" }) => (
  <Ci
    src={BUBO_PHOTO}
    alt="Bubu the panda with heart"
    size={size}
    className={className}
    objectPosition="50% 50%"
    animate={{ y: [0, -9, 0], scale: [1, 1.03, 1] }}
    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
  />
)

export const O3 = ({ size = 220, className = "" }) => {
  const a = Math.round(size * 0.5)
  return (
    <motion.div
      className={`flex items-end gap-3 ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Ci src={DUDO_PHOTO} alt="Dudu the bear" size={a} objectPosition="50% 62%" />
      <Ci src={BUBO_PHOTO} alt="Bubu the panda" size={a} objectPosition="50% 50%" />
    </motion.div>
  )
}
