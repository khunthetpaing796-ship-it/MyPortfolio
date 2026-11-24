// src/components/AnimatedBackground.tsx
import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 🌟 Canvas particles (ကြယ်လေးတွေ လှုပ်ရှားနေတာ)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // reduced motion ကို လေးစားပါ
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let animationId: number
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; alpha: number; pulse: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.5 + 0.15,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        // လှုပ်ရှားမှု
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02

        // ဘောင်ထဲ ပြန်ထည့်
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const flicker = 0.5 + Math.sin(p.pulse) * 0.5
        const alpha = p.alpha * flicker

        // glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        gradient.addColorStop(0, `rgba(249, 115, 22, ${alpha})`)
        gradient.addColorStop(0.4, `rgba(251, 146, 60, ${alpha * 0.4})`)
        gradient.addColorStop(1, 'rgba(249, 115, 22, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()

        // core dot
        ctx.fillStyle = `rgba(253, 186, 116, ${alpha + 0.2})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* ─── LAYER 1: Base gradient ───────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      {/* ─── LAYER 2: Animated mesh orbs ─────────────── */}
      <div className="bg-mesh-1 absolute -top-40 -left-32 h-[600px] w-[600px] rounded-full bg-flame-500/25 blur-[110px] dark:bg-flame-500/20" />
      <div className="bg-mesh-2 absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-amber-400/20 blur-[120px] dark:bg-amber-500/15" />
      <div className="bg-mesh-3 absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[100px] dark:bg-orange-600/15" />

      {/* ─── LAYER 3: Subtle grid pattern ─────────────── */}
      <div
        className="bg-grid-slide absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      {/* ─── LAYER 4: Sparkle dots (CSS-only) ─────────── */}
      <div className="absolute inset-0">
        {[
          { top: '12%', left: '8%',  size: 4, delay: '0s'   },
          { top: '22%', left: '78%', size: 3, delay: '0.6s' },
          { top: '45%', left: '20%', size: 5, delay: '1.2s' },
          { top: '35%', left: '55%', size: 3, delay: '0.3s' },
          { top: '68%', left: '85%', size: 4, delay: '1.5s' },
          { top: '75%', left: '15%', size: 3, delay: '0.9s' },
          { top: '85%', left: '60%', size: 5, delay: '2.1s' },
          { top: '55%', left: '92%', size: 3, delay: '1.8s' },
          { top: '15%', left: '40%', size: 4, delay: '2.4s' },
          { top: '60%', left: '35%', size: 3, delay: '0.4s' },
        ].map((dot, i) => (
          <span
            key={i}
            className="bg-sparkle absolute rounded-full bg-flame-500/60 shadow-[0_0_8px_rgba(249,115,22,0.8)] dark:bg-flame-400/70"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* ─── LAYER 5: Canvas particles ────────────────── */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* ─── LAYER 6: Vignette (ဘောင်လေးတောက်နေတာ) ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,23,42,0.08)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  )
}