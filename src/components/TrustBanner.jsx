import { motion } from 'framer-motion'

const STATS = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '100%', label: 'Quality Assured',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    stat: '500+', label: 'Happy Clients',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    stat: '50K+', label: 'Tons Stored',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    stat: '200+', label: 'Locations Served',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    stat: '24/7', label: 'Customer Support',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

// Smoke blob config: each blob drifts right-to-left repeatedly
const smokeBlobs = [
  { size: 220, top: '5%', delay: 0, duration: 11, opacity: 0.55, blur: 30 },
  { size: 170, top: '35%', delay: 3, duration: 15, opacity: 0.45, blur: 25 },
  { size: 260, top: '50%', delay: 1, duration: 13, opacity: 0.50, blur: 35 },
  { size: 150, top: '-15%', delay: 5, duration: 10, opacity: 0.40, blur: 22 },
  { size: 190, top: '65%', delay: 2.5, duration: 17, opacity: 0.48, blur: 28 },
]

export default function TrustBanner() {
  return (
    <div className="relative z-10 px-4 lg:px-8 -mt-6">
      <div className="max-w-6xl mx-auto">

        {/* Glass panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative bg-white/25 backdrop-blur-2xl border border-white/55 rounded-2xl shadow-xl shadow-slate-900/8 overflow-hidden px-6 py-5"
        >
          {/* ── Smoke blobs drifting right → left ── */}
          {smokeBlobs.map((b, i) => (
            <motion.div
              key={i}
              aria-hidden
              className="pointer-events-none absolute rounded-full"
              style={{
                width: b.size,
                height: b.size,
                top: b.top,
                filter: `blur(${b.blur}px)`,
                background: 'radial-gradient(circle, rgba(101,163,13,1) 0%, rgba(52,211,153,0.6) 50%, transparent 80%)',
                opacity: b.opacity,
              }}
              animate={{
                x: ['110%', '-30%'],
                y: [0, -18, 10, -8, 0],
                scale: [1, 1.15, 0.95, 1.08, 1],
                opacity: [0, b.opacity, b.opacity * 1.3, b.opacity * 0.7, 0],
              }}
              transition={{
                duration: b.duration,
                delay: b.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Top shine edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
          {/* White shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none rounded-2xl" />

          {/* Content */}
          <div className="trust-banner-inner relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">

            {/* Left label */}
            <motion.div variants={fadeUp} className="trust-banner-label flex-shrink-0 text-center sm:text-left sm:pr-6 sm:border-r sm:border-white/40">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                <span className="text-green-600 text-[10px]">★</span>
                <span className="text-[8px] font-black text-green-700 uppercase tracking-[0.26em]">
                  Established &amp; Trusted
                </span>
                <span className="text-green-600 text-[10px]">★</span>
              </div>
              <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                Trusted By{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600">
                  Thousands
                </span>
                <br className="hidden sm:block" />
                {' '}Across India
              </p>
            </motion.div>

            {/* Stats */}
            <div className="trust-banner-stats flex-1 grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-2">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="flex flex-col items-center text-center gap-1.5 group cursor-default"
                >
                  {/* Icon bubble */}
                  <div className="w-10 h-10 rounded-xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm flex items-center justify-center text-green-600 group-hover:bg-gradient-to-br group-hover:from-lime-500 group-hover:to-emerald-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-green-400/25 transition-all duration-250">
                    {s.icon}
                  </div>
                  <div className="text-sm font-black text-slate-900 leading-none">{s.stat}</div>
                  <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
