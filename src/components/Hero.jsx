import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Check, Play } from 'lucide-react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.3])

  return (
    <section ref={ref} className="relative min-h-[120vh] w-full overflow-hidden bg-[#0b1e39] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradients for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1e39]/70 via-[#0b1e39]/40 to-[#0b1e39]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b1e39]" />

      <motion.div style={{ y, opacity }} className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 sm:pt-32 lg:px-8">
        <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          <span className="text-white/80">Real-Time Job Costing Software</span>
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
          Build Desk
          <span className="block text-2xl font-semibold text-white/80 sm:text-3xl">for Small Construction Contractors</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Stop waiting 30 days for job cost reports. Track every dollar in real-time and know if your project is profitable today, not next month.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Check className="h-4 w-4 text-orange-400" /> Real-time job costing
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Check className="h-4 w-4 text-orange-400" /> Unlimited users
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Check className="h-4 w-4 text-orange-400" /> Financial-first approach
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#features" className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none">
            Get Started — $350/mo, unlimited users
          </a>
          <button className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white/90 transition hover:bg-white/20">
            <Play className="h-4 w-4" /> Watch demo
          </button>
        </div>

        <p className="mt-4 text-sm text-white/70">
          Built for small contractors, not enterprise giants.
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
