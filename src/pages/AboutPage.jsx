import React from "react";
import { motion } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────── */
const PILLARS = [
  {
    num: "01", icon: "🎯", label: "OUR MISSION",
    tagline: "Delivering Value. Strengthening Every Harvest.",
    text: "To deliver reliable, innovative, and sustainable agri-warehousing solutions that empower clients and strengthen the agriculture supply chain.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=75",
    g: "from-lime-500 to-green-600",
  },
  {
    num: "02", icon: "👁️", label: "OUR VISION",
    tagline: "Building Trust. Setting Global Benchmarks.",
    text: "To be India's most trusted agri warehouse partner, setting global benchmarks in quality, care, transparency, and customer satisfaction.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=75",
    g: "from-green-500 to-emerald-600",
  },
  {
    num: "03", icon: "💎", label: "OUR PROMISE",
    tagline: "Precision. Trust. Innovation. Always.",
    text: "Every farmer, trader, and partner deserves world-class service. We commit to precision, trust, and continuous innovation in everything we do.",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=400&q=75",
    g: "from-emerald-500 to-teal-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 5, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

/* ─── Component ────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <section id="about" className="relative z-0 overflow-hidden -mt-10 pt-20 pb-16">

      {/* ── Left-to-Right Green Gradient Base Background ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 via-white/90 to-lime-50/70 pointer-events-none -z-20" />

      {/* ══════════════════════════════════════════════════
          Hero Section (Spacious layout)
          LEFT: Intro text + Mini Stats + Promise Pill
          RIGHT: Mission / Vision / Promise Glass Cards
      ══════════════════════════════════════════════════ */}
      <div className="py-14 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >

            {/* ── LEFT: Intro text ── */}
            <motion.div variants={fadeUp} className="space-y-6">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-green-200/80 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 animate-pulse" />
                <span className="text-[9px] font-black text-green-700 uppercase tracking-[0.24em]">About Us</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.05]">
                Building The Backbone<br />Of India&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-700">
                  Agri Supply Chain
                </span>
              </h2>

              {/* Accent bar */}
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600" />

              {/* Description */}
              <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                Professionally managed and farmer-first — building sustainable opportunities across agriculture, warehousing, and financial services.
              </p>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">
                We partner with farmers, FPOs, traders, exporters, banks, and corporates to build sustainable supply-chain solutions — from farm to market.
              </p>

              {/* Mini stats */}
              <motion.div variants={stagger} className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { stat: "10+", label: "Years of\nExcellence" },
                  { stat: "500+", label: "Happy\nClients" },
                  { stat: "50K+", label: "Tons\nStored" },
                  { stat: "200+", label: "Locations\nServed" },
                  { stat: "24/7", label: "Customer\nSupport" },
                ].map((s, i) => (
                  <motion.div key={i} variants={fadeUp}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex flex-col items-center bg-white/80 backdrop-blur-xl border border-white/90 rounded-xl px-3.5 py-2.5 shadow-md hover:border-green-300 hover:bg-white transition-all cursor-default group"
                  >
                    <div className="text-sm font-black text-slate-900 group-hover:text-green-700 transition-colors leading-none">{s.stat}</div>
                    <div className="text-[8px] font-semibold text-slate-500 uppercase tracking-wide mt-1 whitespace-pre-line leading-tight text-center">{s.label}</div>
                  </motion.div>
                ))}

                {/* Promise pill */}
                <motion.div variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-green-200/80 rounded-xl px-3.5 py-2.5 shadow-md cursor-default"
                >
                  <span className="text-base">🌿</span>
                  <div>
                    <p className="text-[9px] font-black text-slate-900 leading-none">Our Promise</p>
                    <p className="text-[8px] text-green-600 font-semibold mt-0.5">Fresh · Safe · Reliable</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Mission / Vision / Promise Glass Cards ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-4"
            >
              {/* Small "Our Purpose" hub header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-300 animate-[spin_22s_linear_infinite]" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-lime-500 to-emerald-700 flex items-center justify-center text-white text-base shadow-md">
                    🎯
                  </div>
                </div>
                <div>
                  <p className="text-[8px] font-black text-green-600 uppercase tracking-[0.26em]">Our Purpose</p>
                  <p className="text-[10px] font-semibold text-slate-700">Empowering Agriculture. Enriching Futures.</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-green-300 to-transparent ml-2" />
              </motion.div>

              {PILLARS.map((p, i) => (
                <motion.div key={i} variants={fadeUp}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group flex items-stretch bg-white/75 backdrop-blur-xl border border-white/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:bg-white hover:border-green-200 transition-all duration-250"
                >
                  {/* Green chevron side */}
                  <div className={`flex-shrink-0 w-10 bg-gradient-to-b ${p.g} flex items-center justify-center relative`}>
                    <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-emerald-600 border-t-[14px] border-b-[14px] border-t-transparent border-b-transparent z-10" />
                    <span className="text-lg text-white relative z-20">{p.icon}</span>
                  </div>
                  {/* Text */}
                  <div className="flex-1 px-4 py-4">
                    <p className="text-[8px] font-black text-green-600 uppercase tracking-[0.26em] mb-0.5">{p.label}</p>
                    <h4 className="text-sm font-black text-slate-900 mb-1 leading-snug group-hover:text-green-800 transition-colors">{p.tagline}</h4>
                    <p className="text-[10px] text-slate-600 font-medium leading-relaxed">{p.text}</p>
                  </div>
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-24 overflow-hidden relative">
                    <img src={p.img} alt={p.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
