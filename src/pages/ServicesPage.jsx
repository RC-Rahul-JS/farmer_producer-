import React from 'react';
import { motion } from 'framer-motion';

const CAPABILITIES = [
  { title: 'Professional Warehousing', icon: '🏢', desc: 'Scientific storage & pest control.' },
  { title: 'Collateral Management', icon: '🛡️', desc: 'Safe crop collateral & risk control.' },
  { title: 'Trade & Supply Chain', icon: '🔄', desc: 'Buyer-seller market linkages.' },
  { title: 'Agri-Commodity Procurement', icon: '🌾', desc: 'Direct farm gate sourcing.' },
  { title: 'Quality Assaying & Inspection', icon: '🔬', desc: 'Certified stock grading & audit.' },
  { title: 'Pest Management & Fumigation', icon: '🧪', desc: 'Preventive crop preservation.' },
  { title: 'Warehouse Audit', icon: '📋', desc: 'Stock audit & compliance support.' },
  { title: 'Commodity Receipt Finance', icon: '💰', desc: 'Instant liquidity & credit access.' },
];

const KEY_AREAS = [
  { id: '01', tag: 'Agri Ecosystem', title: 'Agriculture & Agri-Business', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80', points: ['Agri-business development', 'Farmer and market linkages', 'Value-chain opportunities', 'Rural marketing intelligence'] },
  { id: '02', tag: 'Warehousing', title: 'Warehousing & Collateral', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', points: ['Warehouse management support', 'Collateral management', 'Stock inspection and evaluation', 'Risk monitoring & compliance'] },
  { id: '03', tag: 'Agri Finance', title: 'Agri & Commodity Finance', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80', points: ['Warehouse Receipt Finance', 'Commodity Stock Management', 'Financial & risk analysis', 'Value chain financial services'] },
  { id: '04', tag: 'Trade Services', title: 'Trade Facilitation & Business', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', points: ['Commodity funding', 'Trade facilitation & hedging', 'Buyer–seller linkages', 'Corporate & institutional relationships'] },
  { id: '05', tag: 'Rural Banking', title: 'Rural Financial Services', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80', points: ['Rural enterprise finance', 'Stakeholder financial linkages', 'Working capital solutions', 'Institutional financial coordination'] },
];

export default function ServicesPage({ scrollToSection }) {
  return (
    <section id="services" className="relative z-10 py-16 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-green-200/60 shadow-md shadow-green-950/5">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 animate-pulse" />
          <span className="text-[10px] font-black bg-gradient-to-r from-lime-700 to-emerald-800 bg-clip-text text-transparent tracking-[0.2em] uppercase">
            Operational Excellence & Core Pillars
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-800">Business Pillars</span>
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
          Professional warehousing, collateral management, commodity finance, and market linkage solutions designed for scale.
        </p>
      </motion.div>

      {/* Capabilities Section: Compact Grid */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6 px-1">
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Our Core Services</h3>
          </div>
          <div className="hidden sm:block h-[1px] flex-grow mx-6 bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:border-green-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-50 to-green-50/50 border border-slate-100 shadow-inner flex items-center justify-center text-xl mb-3.5 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h4 className="text-xs font-black text-slate-900 mb-1.5 group-hover:text-green-800 transition-colors">{cap.title}</h4>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">{cap.desc}</p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5 Key Areas: Asymmetric Split Feature Showcase */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6 px-1">
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Key Areas of Business</h3>
          </div>
          <div className="hidden sm:block h-[1px] flex-grow mx-6 bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <div className="space-y-4">
          {KEY_AREAS.map((area, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:shadow-xl hover:border-green-200 transition-all duration-500"
              >
                {/* Image Side */}
                <div className={`lg:col-span-4 relative h-48 lg:h-auto overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={area.img} alt={area.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-green-900 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-sm">
                    {area.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 lg:top-3 lg:left-auto lg:right-3 bg-gradient-to-br from-lime-500 to-emerald-700 text-white w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shadow-md">
                    {area.id}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-8 p-6 md:p-8 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-green-800 transition-colors tracking-tight">
                    {area.title}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {area.points.map((pt, j) => (
                      <div key={j} className="flex items-center gap-2.5 bg-slate-50/80 border border-slate-100 p-3 rounded-xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 flex-shrink-0" />
                        <span className="text-[11px] text-slate-700 font-semibold">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modern Gradient CTA Banner */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-lime-500 via-green-600 to-emerald-900 rounded-3xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-900/20 relative overflow-hidden"
      >
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-1 text-center md:text-left z-10">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-lime-200 block">Ready to Scale?</span>
          <h3 className="text-lg md:text-2xl font-black tracking-tight">
            Need Custom Warehousing & Logistics Solutions?
          </h3>
          <p className="text-xs text-white/90 font-medium">
            Partner with Kisaan Agri Warehousing Private Limited today.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="px-6 py-3 rounded-full bg-white text-slate-900 text-xs font-black tracking-widest uppercase shadow-xl hover:bg-slate-50 transition-all flex-shrink-0 z-10"
        >
          Contact Our Team →
        </motion.button>
      </motion.div> */}

    </section>
  );
}