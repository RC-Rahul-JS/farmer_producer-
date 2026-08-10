import React from "react";
import { motion } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────── */
const TIMELINE = [
  { year: "2012", title: "Our Beginning", icon: "🌱", text: "Started with a simple mission to support farmers with safe storage solutions." },
  { year: "2015", title: "Expanding Roots", icon: "🏛️", text: "Expanded warehousing in multiple regions ensuring better reach and reliability." },
  { year: "2018", title: "Growth & Trust", icon: "🛡️", text: "Trusted by thousands of farmers and partners across India." },
  { year: "2021", title: "Tech-Driven Leap", icon: "⚙️", text: "Integrated modern technology for smarter inventory and logistics." },
  { year: "2024+", title: "Sustainable Future", icon: "♻️", text: "Continuously innovating for a stronger, greener, and sustainable agri ecosystem." },
];

const WHO_POINTS = [
  "Farmer-first approach",
  "Modern & safe storage",
  "Pan-India presence",
  "End-to-end logistics support",
  "Sustainable & responsible practices",
];

const VALUES = [
  { icon: "⭐", label: "Quality First", desc: "We ensure the highest standards in every process and every promise." },
  { icon: "💡", label: "Innovation", desc: "We embrace new ideas and technology to create smarter solutions." },
  { icon: "🤝", label: "Integrity", desc: "We operate with honesty, transparency, and fairness in all our relationships." },
  { icon: "🌱", label: "Sustainability", desc: "We build for the future with responsible and environment-friendly practices." },
  { icon: "🎯", label: "Commitment", desc: "We deliver on our promises with dedication and accountability." },
  { icon: "👥", label: "Teamwork", desc: "Together we achieve more, with respect, collaboration and trust." },
];

// Floating organic leaves drifting smoothly right-to-left
const floatingLeaves = [
  { icon: "🍃", top: "12%", startX: "105%", endX: "-10%", duration: 16, delay: 0, scale: 1.1, rot: [0, 180, 360] },
  { icon: "🌿", top: "38%", startX: "110%", endX: "-15%", duration: 20, delay: 4, scale: 0.95, rot: [0, -140, -320] },
  { icon: "🌱", top: "62%", startX: "105%", endX: "-10%", duration: 18, delay: 1.5, scale: 1.05, rot: [0, 210, 420] },
  { icon: "🍃", top: "82%", startX: "115%", endX: "-20%", duration: 22, delay: 7, scale: 1.2, rot: [0, -190, -380] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 30, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ─── Component ────────────────────────────────────────────── */
export default function AboutPage2() {
  return (
    <section id="about-part2" className="relative z-10 overflow-hidden py-10">

      {/* ── Background Image (/image.png) ── */}
      <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
        <img
          src="/image.png"
          alt="Agri Warehouse Background"
          className="w-full h-full object-cover object-right opacity-30"
        />
      </div>

      {/* Transparent glass gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/70 via-white/85 to-lime-50/60 pointer-events-none -z-10" />

      {/* ── Floating Organic Leaves Drifting Right-to-Left ── */}
      {floatingLeaves.map((leaf, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-xl -z-10 select-none opacity-45"
          style={{ top: leaf.top }}
          animate={{
            left: [leaf.startX, leaf.endX],
            y: [0, -22, 16, -12, 0],
            rotate: leaf.rot,
            scale: [leaf.scale, leaf.scale * 1.2, leaf.scale * 0.9, leaf.scale],
            opacity: [0, 0.5, 0.7, 0.4, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {leaf.icon}
        </motion.div>
      ))}

      {/* ══════════════════════════════════════════════════
          SECTION 1 — Journey Timeline "From Farm To Future"
      ══════════════════════════════════════════════════ */}
      <div className="py-10 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-12 space-y-3 relative z-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-green-300/70 text-[9px] font-black text-green-700 uppercase tracking-[0.28em] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600">
                Farm
              </span>
              {" "}To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
                Future
              </span>
            </h2>
          </motion.div>

          {/* Timeline Grid Container */}
          <div className="relative z-10">
            {/* Dashed path connecting timeline nodes */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-green-300/80 z-0" />

            {/* Timeline Nodes */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 z-10"
            >
              {TIMELINE.map((t, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="relative flex flex-col items-center text-center group cursor-default z-10"
                >
                  {/* Icon Card */}
                  <motion.div
                    whileHover={{ scale: 1.14, rotate: [0, -6, 6, 0], y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="relative w-20 h-20 rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-white/90 shadow-lg shadow-green-950/5 flex items-center justify-center text-3xl mb-3 group-hover:border-emerald-400 group-hover:bg-white group-hover:shadow-green-300/40 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-3xl border border-green-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
                    <div className="absolute inset-0 rounded-3xl bg-emerald-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{t.icon}</span>
                  </motion.div>

                  {/* Year badge */}
                  <div className="inline-block px-3 py-0.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 text-white text-xs font-black shadow-md shadow-green-500/20 mb-1.5 transition-transform duration-200 group-hover:scale-105">
                    {t.year}
                  </div>

                  {/* Title */}
                  <div className="text-xs font-black text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
                    {t.title}
                  </div>

                  {/* Description */}
                  <p className="text-[10px] text-slate-700 font-bold leading-relaxed max-w-[170px]">
                    {t.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — Who We Are (image grid + bullet list)
      ══════════════════════════════════════════════════ */}
      <div className="py-10 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left — image collage */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 gap-3.5 h-[300px]"
            >
              <motion.div variants={fadeUp} className="row-span-2 relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=75"
                  alt="Warehouse interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                  <svg className="w-3.5 h-3.5 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=75"
                  alt="Farmer in field"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow">
                  <svg className="w-3 h-3 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=75"
                  alt="Delivery truck"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow">
                  <svg className="w-3 h-3 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — text + bullets */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-5"
            >
              <motion.div variants={fadeUp}>
                <span className="text-[8px] font-black text-green-700 uppercase tracking-[0.28em]">✦ Who We Are</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 leading-tight">
                  More Than Warehousing,<br />We Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600">
                    Relationships.
                  </span>
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-xs text-slate-700 font-bold leading-relaxed">
                At Kisaan Agri, we go beyond storage. We build end-to-end solutions that empower every link of the agri supply chain.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-2">
                {WHO_POINTS.map((pt, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-2.5 group cursor-default">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-green-800 transition-colors">{pt}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 via-green-600 to-emerald-700 text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-green-500/25"
                >
                  Meet Our Leadership →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-slate-800 text-[10px] font-black uppercase tracking-wider shadow-sm hover:border-green-300 transition-all"
                >
                  Get In Touch →
                </motion.button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — Core Values (Transparent Glass Panel)
      ══════════════════════════════════════════════════ */}
      <div className="py-10 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-green-950/85 to-slate-900/90 backdrop-blur-2xl border border-white/20 shadow-2xl px-6 py-8"
          >
            {/* Inner glow orbs */}
            <div className="absolute top-0 left-1/3 w-60 h-60 bg-lime-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Left label */}
              <div className="flex-shrink-0 sm:w-44">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  <span className="text-[8px] font-black text-lime-400 uppercase tracking-[0.26em]">What Drives Us</span>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Our Core{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400">Values</span>
                </h3>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/15 flex-shrink-0" />

              {/* Values chips */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="flex flex-wrap gap-2 flex-1"
              >
                {VALUES.map((v, i) => (
                  <motion.div key={i} variants={fadeUp}
                    whileHover={{ y: -3, scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 340, damping: 22 }}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-green-400/50 cursor-default group transition-all duration-200 shadow-md"
                  >
                    <div className="w-7 h-7 rounded-full border border-green-400/40 bg-gradient-to-br from-green-800/60 to-emerald-900/60 flex items-center justify-center text-sm group-hover:border-green-300 group-hover:scale-110 transition-all">
                      {v.icon}
                    </div>
                    <span className="text-[11px] font-black text-white/90 group-hover:text-white whitespace-nowrap">{v.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
