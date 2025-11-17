import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Check, Play, Hammer, HardHat, Wrench } from 'lucide-react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.35])

  // Interactive parallax/tilt controls
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 })
  const [enableInteraction, setEnableInteraction] = useState(true)

  useEffect(() => {
    // Reduce heavy effects on small screens
    const onResize = () => setEnableInteraction(window.innerWidth >= 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handlePointerMove = (e) => {
    if (!enableInteraction) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    mx.set(px - 0.5)
    my.set(py - 0.5)
  }

  const handlePointerLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section ref={ref} className="relative min-h-[120vh] w-full overflow-hidden bg-[#0b1e39] text-white">
      {/* Interactive 3D background */}
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={enableInteraction ? { rotateX, rotateY } : {}}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Depth overlays and brand tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1e39]/70 via-[#0b1e39]/40 to-[#0b1e39]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b1e39]" />

      {/* Subtle construction icon backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-6 top-24 hidden rotate-12 sm:block">
          <Hammer className="h-10 w-10 text-orange-400/60" />
        </div>
        <div className="absolute right-6 top-16 hidden -rotate-6 sm:block">
          <HardHat className="h-10 w-10 text-orange-400/60" />
        </div>
        <div className="absolute bottom-24 left-8 hidden rotate-[-8deg] sm:block">
          <Wrench className="h-10 w-10 text-orange-400/60" />
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 sm:pt-32 lg:px-8">
        <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur" aria-label="Build Desk status">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          <span className="text-white/85">Real-Time Job Costing for Contractors</span>
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
          Build Desk
          <span className="block text-2xl font-semibold text-white/85 sm:text-3xl">Your Construction Financial Command Center</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Track labor, materials, POs, and change orders as they happen. Know your job profitability today—without waiting for month‑end.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90" aria-label="Key benefits">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Check className="h-4 w-4 text-orange-400" /> Real-time job costing
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Check className="h-4 w-4 text-orange-400" /> Built for field & office
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Check className="h-4 w-4 text-orange-400" /> Unlimited users
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
            aria-label="Get started for 350 dollars per month, unlimited users"
          >
            Get Started — $350/mo, unlimited users
          </a>
          <button
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white/90 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Watch product demo"
          >
            <Play className="h-4 w-4" /> Watch demo
          </button>
        </div>

        <p className="mt-4 text-sm text-white/75">
          For small to mid-size contractors managing crews, materials, and tight schedules.
        </p>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs">Scroll</span>
          <span className="mt-1 h-8 w-[2px] animate-pulse bg-white/40" />
        </div>
      </div>
    </section>
  )
}

export default Hero
