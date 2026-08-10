import React from "react";
import { motion } from "framer-motion";

const CAREER = [
  { org: "Shree Subham Logistics Ltd.",    role: "Assistant General Manager"                },
  { org: "Jana Small Finance Bank Ltd.",   role: "Associate VP, Rural Financial Services"   },
  { org: "IndusInd Bank Ltd.",             role: "Regional Manager, Agri Business Group"    },
  { org: "ING Vysya Bank Ltd.",            role: "Relationship Manager, Agri Rural Banking" },
  { org: "L&T Finance Ltd.",               role: "State Head, Rural Enterprise Finance"     },
  { org: "National Bulk Handling Corp.",   role: "Cluster Head, Business Dev."              },
  { org: "Jayamb International Agencies",  role: "State Head, Warehousing"                  },
  { org: "Directorate of Seed Research",   role: "Technical Officer"                        },
];

const BOARD = [
  {
    initials: "L",
    name: "Mr. Lalit",
    role: "Director",
    gradient: "from-lime-400 via-green-500 to-emerald-600",
    glow: "shadow-lime-400/30",
    bg: "from-lime-50/80 via-white/90 to-emerald-50/60",
  },
  {
    initials: "SM",
    name: "Mr. Saumya Ranjan Mallick",
    role: "Director",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    glow: "shadow-green-400/30",
    bg: "from-green-50/80 via-white/90 to-teal-50/60",
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function LeadershipPage() {
  return (
    <section id="leadership" className="relative z-10 py-20 px-4 lg:px-8 overflow-hidden">

      {/* ── Breathing ambient glows ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-lime-200/40 via-green-200/30 to-transparent rounded-full blur-[140px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-200/40 via-teal-200/20 to-transparent rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-6xl mx-auto space-y-16">

        {/* ── Header ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-green-200/60 shadow-md">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 animate-pulse" />
            <span className="text-[10px] font-black bg-gradient-to-r from-lime-700 to-emerald-800 bg-clip-text text-transparent tracking-[0.22em] uppercase">
              Executive Management
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {"Director's Profile & "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-700">
              Leadership
            </span>
          </h2>
        </motion.div>

        {/* ── CEO Section ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >

          {/* Left Column */}
          <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col gap-5">

            {/* Photo */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative rounded-3xl overflow-hidden h-[340px] border border-white/70 shadow-2xl shadow-green-900/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Janmajay Prasad Kharwar"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-106"
              />
              {/* Glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-800/20 to-white/5" />

              {/* Name area */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[2px]">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[8px] font-black text-lime-300 uppercase tracking-widest mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                  Co-founder Director & CEO
                </span>
                <h3 className="text-xl font-black text-white leading-tight tracking-tight">
                  Janmajay Prasad Kharwar
                </h3>
              </div>

              {/* Floating exp badge */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl px-3 py-2.5 text-center shadow-lg">
                <div className="text-xl font-black text-white leading-none">20+</div>
                <div className="text-[8px] font-bold text-white/60 uppercase tracking-widest mt-0.5">Yrs</div>
              </div>
            </motion.div>

            {/* Education — glass card */}
            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-white/80 via-white/70 to-green-50/40 backdrop-blur-2xl border border-white/80 rounded-2xl p-5 shadow-xl shadow-slate-200/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-lime-200/40 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center text-sm shadow-md">🎓</span>
                <span className="text-[9px] font-black text-green-700 uppercase tracking-[0.22em]">Education</span>
              </div>
              <ul className="space-y-3">
                {[
                  { deg: "M.Sc. (Agriculture)", sub: "Plant Protection — Allahabad Agricultural Institute" },
                  { deg: "B.Sc.",               sub: "Allahabad University" },
                ].map((edu, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-lime-500 to-emerald-600 mt-1.5 flex-shrink-0" />
                    <span className="text-[11px] text-slate-600 font-medium leading-relaxed">
                      <strong className="text-slate-900">{edu.deg}</strong> — {edu.sub}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeUp} className="lg:col-span-8 flex flex-col gap-5">

            {/* Overview — glass with shimmer */}
            <div className="relative bg-gradient-to-br from-white/75 via-white/65 to-green-50/30 backdrop-blur-2xl border border-white/80 rounded-2xl p-7 shadow-xl shadow-slate-200/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-green-100/50 via-lime-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />
              <p className="text-[9px] font-black text-green-700 uppercase tracking-[0.24em] mb-1">Professional Overview</p>
              <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Leadership &amp; Expertise</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">
                Mr. Janmajay Prasad Kharwar is an agriculture and rural business expert with{" "}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-lime-100 to-green-100 border border-green-200/50 text-green-800 font-black text-xs">
                  20+ years
                </span>
                {" "}of expertise across agriculture, warehousing, rural banking, agri-finance, commodity finance, trade facilitation, and strategic business growth.
              </p>
            </div>

            {/* Career — glass panel */}
            <div className="relative bg-gradient-to-br from-white/70 via-white/60 to-emerald-50/20 backdrop-blur-2xl border border-white/75 rounded-2xl p-6 shadow-xl shadow-slate-200/25 overflow-hidden flex-1">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-300/40 to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.22em] whitespace-nowrap">Career Track Record</span>
                <div className="flex-grow h-px bg-gradient-to-r from-slate-200/80 to-transparent" />
              </div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6"
              >
                {CAREER.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="group flex items-start gap-3 py-3 border-b border-white/60 last:border-0 cursor-default"
                  >
                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-lime-400 to-emerald-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                      <div className="w-2 h-2 rounded-full bg-white/90" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-slate-800 leading-snug group-hover:text-green-800 transition-colors">
                        {item.org}
                      </div>
                      <div className="text-[10px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── Board of Directors ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-200" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500" />
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.28em]">Board of Directors</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-200" />
          </div>

          {/* Director cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
          >
            {BOARD.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 270, damping: 20 }}
                className={`relative bg-gradient-to-br ${d.bg} backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-xl ${d.glow} overflow-hidden group cursor-default`}
              >
                {/* Top shimmer line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${d.gradient} opacity-70`} />
                {/* Corner glow */}
                <div className={`absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br ${d.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${d.gradient} text-white flex items-center justify-center text-lg font-black flex-shrink-0 shadow-lg ${d.glow} group-hover:scale-110 transition-transform duration-300`}>
                    {d.initials}
                    {/* Ring */}
                    <div className={`absolute inset-0 rounded-2xl ring-4 ring-white/40 group-hover:ring-white/60 transition-all duration-300`} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-green-800 transition-colors leading-snug">
                      {d.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${d.gradient}`} />
                      <p className="text-[9px] font-black text-green-600 uppercase tracking-[0.2em]">{d.role}</p>
                    </div>
                    <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">
                      Kisaan Agri Warehousing
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
