export default function HomePage({ scrollToSection }) {
  return (
    <section id="home" className="home-section relative min-h-screen flex flex-col justify-between">
      {/* Background */}
      <div className="home-bg absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img src="/image1.png" alt="Agri Warehouse Forklift" className="home-bg-img w-full h-full object-cover object-center" />
      </div>

      {/* Content */}
      <div className="relative z-10 home-content px-4 lg:px-6 max-w-[1400px] mx-auto flex flex-col justify-between w-full" style={{minHeight:'100vh', paddingTop:'6rem', paddingBottom:'3rem'}}>
        <div className="home-grid grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">

          {/* LEFT: Hero Text */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[0.98]">POWERING</h1>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.98] mt-0.5"
                style={{ background: 'linear-gradient(105deg, #4d7c0f 0%, #65a30d 18%, #ffffff 35%, #5ea22a 52%, #ffffff 75%, #3f6212 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                EVERY HARVEST
              </h1>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-extrabold text-slate-600 tracking-[0.22em] uppercase">FRESH. SAFE. RELIABLE. DELIVERED.</p>
              <div className="w-10 h-0.5 bg-green-600 rounded-full" />
            </div>

            <div className="space-y-0.5 max-w-md pt-1">
              <h3 className="text-xs font-black text-slate-900 tracking-wider uppercase">AGRI WAREHOUSE SOLUTIONS</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Smart storage, modern handling, and reliable logistics for your crops and produce – from farm to market.
              </p>
            </div>

            <div className="home-btns flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 via-green-600 to-emerald-700 text-white text-[11px] font-black tracking-wider uppercase shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                VIEW CAPABILITIES →
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-slate-800 text-[11px] font-black tracking-wider uppercase shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
              >
                EXPLORE SOLUTIONS →
              </button>
            </div>
          </div>

          {/* RIGHT: Glass Cards */}
          <div className="home-cards lg:col-span-5 flex flex-col gap-3 items-end justify-center ml-auto w-full">
            {[
              { path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'QUALITY STORAGE', desc: 'Protecting freshness and quality' },
              { path: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'FAST DELIVERY', desc: 'On-time, Every time' },
              { path: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', title: 'EXPERT SUPPORT', desc: 'Here to help you grow' },
            ].map((card, i) => (
              <div key={i} className="w-full lg:max-w-[290px] bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl p-3 flex items-center gap-3 hover:bg-white/35 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-white/40 border border-white/60 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.path} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 tracking-wider uppercase">{card.title}</h4>
                  <p className="text-[10px] text-slate-700 font-semibold leading-tight">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
