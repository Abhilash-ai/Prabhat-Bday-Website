import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
      decay: number
      type: 'heart' | 'star'
      color: string
    }> = []

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn 2 particles per mouse movement
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.8, // Float gently upwards
          size: Math.random() * 8 + 6,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          type: Math.random() > 0.4 ? 'heart' : 'star',
          color: Math.random() > 0.5 ? '#E0535D' : '#C5A880' // Pink or Gold
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      const topCurveHeight = size * 0.3
      ctx.moveTo(x, y + topCurveHeight)
      // top left curve
      ctx.bezierCurveTo(
        x - size / 2, y - topCurveHeight,
        x - size, y + topCurveHeight,
        x, y + size
      )
      // top right curve
      ctx.bezierCurveTo(
        x + size, y + topCurveHeight,
        x + size / 2, y - topCurveHeight,
        x, y + topCurveHeight
      )
      ctx.closePath()
      ctx.fill()
    }

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      const spikes = 5
      const outerRadius = size / 2
      const innerRadius = size / 4
      let rot = (Math.PI / 2) * 3
      let cx = x
      let cy = y
      let step = Math.PI / spikes

      ctx.moveTo(cx, cy - outerRadius)
      for (let i = 0; i < spikes; i++) {
        cx = x + Math.cos(rot) * outerRadius
        cy = y + Math.sin(rot) * outerRadius
        ctx.lineTo(cx, cy)
        rot += step

        cx = x + Math.cos(rot) * innerRadius
        cy = y + Math.sin(rot) * innerRadius
        ctx.lineTo(cx, cy)
        rot += step
      }
      ctx.lineTo(x, y - outerRadius)
      ctx.closePath()
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color

        if (p.type === 'heart') {
          drawHeart(ctx, p.x, p.y, p.size)
        } else {
          drawStar(ctx, p.x, p.y, p.size)
        }
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60] w-full h-full"
    />
  )
}
