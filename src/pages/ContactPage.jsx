import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function Counter({ to, suffix }) {
  const [val, setVal] = useState(0)
  const [ref, inView] = useInView(0.5)
  useEffect(() => {
    if (!inView) return
    let cur = 0
    const inc = Math.ceil(to / 50)
    const id = setInterval(() => {
      cur += inc
      if (cur >= to) { setVal(to); clearInterval(id) } else setVal(cur)
    }, 25)
    return () => clearInterval(id)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

const SERVICES = [
  'Scientific Warehousing', 'Collateral Management',
  'Commodity Receipt Finance', 'Trade Facilitation & Hedging',
  'Quality Inspection & Audit', 'General Corporate Inquiry',
]

const STATS = [
  { label: 'Farmer Partners', n: 500, suf: '+' },
  { label: 'Warehouses',      n: 12,  suf: '+' },
  { label: 'MT Capacity',     n: 50,  suf: 'K+' },
  { label: 'Satisfaction',    n: 98,  suf: '%' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Scientific Warehousing', message: '' })
  const [sent, setSent] = useState(false)

  const [hdrRef, hdrIn]   = useInView(0.1)
  const [leftRef, leftIn] = useInView(0.07)
  const [formRef, formIn] = useInView(0.07)

  const dots = useRef(
    Array.from({ length: 16 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      r: 4 + Math.random() * 6, d: 5 + Math.random() * 5, dl: Math.random() * 4,
    }))
  ).current

  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const reveal = (dir, active, delay = 0) => ({
    opacity: active ? 1 : 0,
    transform: active ? 'none'
      : dir === 'left'  ? 'translateX(-26px)'
      : dir === 'right' ? 'translateX(26px)'
      : 'translateY(24px)',
    transition: `opacity .58s ease ${delay}s, transform .58s ease ${delay}s`,
  })

  return (
    <>
      <style>{`
        @keyframes cp-dot  { 0%,100%{transform:translateY(0);opacity:.22} 50%{transform:translateY(-13px) scale(1.3);opacity:.48} }
        @keyframes cp-leaf { 0%,100%{transform:rotate(-6deg)} 50%{transform:rotate(7deg) translateY(-9px)} }
        @keyframes cp-lf2  { 0%,100%{transform:rotate(9deg)} 50%{transform:rotate(-5deg) translateY(-8px)} }
        @keyframes cp-ring { 0%{box-shadow:0 0 0 0 #16a34a55} 70%{box-shadow:0 0 0 8px #16a34a00} 100%{box-shadow:0 0 0 0 #16a34a00} }
        @keyframes cp-bar  { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes cp-pop  { 0%{opacity:0;transform:scale(.35)} 60%{transform:scale(1.06)} 80%{transform:scale(.96)} 100%{opacity:1;transform:scale(1)} }

        .cp-card  { transition:transform .26s,box-shadow .26s }
        .cp-card:hover { transform:translateY(-3px); box-shadow:0 16px 36px -6px rgba(16,185,129,.17) }

        .cp-inp,.cp-sel,.cp-ta {
          width:100%; box-sizing:border-box; border-radius:11px;
          border:1.5px solid #e2e8f0; background:#f8fafc;
          font-size:13px; color:#0f172a; font-family:inherit; outline:none;
          transition:border-color .2s,box-shadow .2s,background .2s;
        }
        .cp-inp { padding:10px 12px 10px 36px }
        .cp-sel { padding:10px 12px; cursor:pointer }
        .cp-ta  { padding:10px 12px; resize:vertical; min-height:94px }
        .cp-inp:focus,.cp-sel:focus,.cp-ta:focus {
          border-color:#16a34a; background:#fff; box-shadow:0 0 0 3px rgba(22,163,74,.12)
        }
        .cp-inp::placeholder,.cp-ta::placeholder { color:#94a3b8 }

        .cp-btn {
          width:100%; padding:12px; border:none; cursor:pointer; border-radius:12px;
          font-size:13px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; color:#fff;
          background:linear-gradient(110deg,#84cc16,#16a34a,#047857); background-size:200% auto;
          box-shadow:0 5px 18px rgba(22,163,74,.32);
          transition:background-position .38s,transform .18s,box-shadow .18s;
          display:flex; align-items:center; justify-content:center; gap:7px;
        }
        .cp-btn:hover { background-position:right center; transform:translateY(-2px); box-shadow:0 10px 26px rgba(22,163,74,.4) }
        .cp-btn:active { transform:scale(.98) }

        .cp-trust {
          display:flex; flex-direction:column; align-items:center; gap:2px;
          padding:9px 4px; border-radius:11px; background:#f8fafc; border:1px solid #e2e8f0;
          transition:transform .2s,background .2s; cursor:default;
        }
        .cp-trust:hover { transform:scale(1.05); background:#f0fdf4; border-color:#bbf7d0 }

        .cp-clink {
          display:flex; align-items:center; gap:9px; padding:8px 12px; border-radius:11px;
          border:1px solid rgba(255,255,255,.11); background:rgba(255,255,255,.07);
          text-decoration:none; color:#d1fae5; font-size:12px; font-weight:600;
          transition:background .2s,color .2s,transform .2s;
        }
        .cp-clink:hover { background:rgba(52,211,153,.17); color:#fff; transform:translateX(3px) }

        .cp-map {
          display:inline-flex; align-items:center; gap:4px; margin-top:7px;
          font-size:11.5px; font-weight:700; color:#16a34a; text-decoration:none;
          transition:gap .18s;
        }
        .cp-map:hover { gap:8px }
        .cp-lbl { display:block; font-size:10.5px; font-weight:900; color:#334155; text-transform:uppercase; letter-spacing:.1em; margin-bottom:6px }
      `}</style>

      <section id="contact" style={{
        position:'relative', overflow:'hidden',
        padding:'0 0 40px',
        background:'linear-gradient(150deg,#f0fdf4 0%,#f8fafc 50%,#ecfdf5 100%)',
        width:'100%',
      }}>

        {/* Floating dots */}
        <div aria-hidden style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
          {dots.map((d,i) => (
            <div key={i} style={{
              position:'absolute', left:d.x+'%', top:d.y+'%',
              width:d.r, height:d.r, borderRadius:'50%',
              background:'radial-gradient(circle,#22c55e44,transparent)',
              animation:'cp-dot '+d.d+'s ease-in-out '+d.dl+'s infinite',
            }}/>
          ))}
        </div>

        {/* Leaf SVGs */}
        <div aria-hidden style={{position:'absolute',inset:0,pointerEvents:'none'}}>
          {[
            {w:120,t:10,l:-25,a:'cp-leaf 6s ease-in-out infinite', op: 0.15},
            {w:88, t:28,r:-10,a:'cp-lf2  7.5s ease-in-out 1s infinite', op: 0.18},
            {w:66, b:68,l:'12%',a:'cp-leaf 9s ease-in-out 2s infinite', op: 0.14},
            {w:76, b:30,r:'8%',a:'cp-lf2  8s ease-in-out 1.5s infinite', op: 0.16},
            {w:50, t:'40%',l:'4%',a:'cp-leaf 7s ease-in-out 3s infinite', op: 0.12},
            {w:95, t:'65%',r:-20,a:'cp-lf2  8.5s ease-in-out 0.5s infinite', op: 0.20},
            {w:60, t:'20%',l:'45%',a:'cp-leaf 10s ease-in-out 4s infinite', op: 0.08},
            {w:70, b:15,l:'35%',a:'cp-lf2  9.5s ease-in-out 2.5s infinite', op: 0.11},
          ].map((l,i) => (
            <svg key={i} viewBox="0 0 60 80" fill="none" style={{
              position:'absolute', width:l.w, opacity:l.op,
              top:l.t, left:l.l, right:l.r, bottom:l.b, animation:l.a,
            }}>
              <path d="M30 3 C6 16 4 54 30 77 C56 54 54 16 30 3Z" fill="#16a34a"/>
              <line x1="30" y1="8" x2="30" y2="72" stroke="#14532d" strokeWidth="1.2"/>
            </svg>
          ))}
        </div>

        {/* Glow orbs */}
        <div aria-hidden style={{position:'absolute',top:'5%',right:'8%',width:300,height:300,borderRadius:'50%',background:'radial-gradient(circle,#bbf7d01a,transparent 70%)',pointerEvents:'none'}}/>
        <div aria-hidden style={{position:'absolute',bottom:'7%',left:'2%',width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle,#d1fae51a,transparent 70%)',pointerEvents:'none'}}/>

        <div style={{maxWidth:1140,margin:'0 auto',position:'relative',zIndex:10,padding:'0 20px'}}>

          {/* ── HEADER + STATS ── */}
          <div ref={hdrRef} style={{textAlign:'center', marginBottom:16, paddingTop:16, ...reveal('up', hdrIn)}}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'5px 16px', borderRadius:999,
              background:'rgba(255,255,255,.9)', backdropFilter:'blur(12px)',
              border:'1px solid rgba(255,255,255,.95)',
              boxShadow:'0 2px 10px rgba(0,0,0,.06)', marginBottom:8,
            }}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#16a34a',display:'inline-block',animation:'cp-ring 2s ease infinite'}}/>
              <span style={{fontSize:10.5,fontWeight:900,color:'#15803d',letterSpacing:'.13em',textTransform:'uppercase'}}>
                Let&#x2019;s Build Sustainable Agri-Business Together
              </span>
            </div>

            <h2 style={{fontSize:'clamp(1.8rem,4.5vw,3rem)',fontWeight:900,color:'#0f172a',margin:'0 0 6px',lineHeight:1.08}}>
              CONTACT{' '}
              <span style={{background:'linear-gradient(120deg,#65a30d,#16a34a,#047857)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                OUR TEAM
              </span>
            </h2>

            <p style={{fontSize:14,color:'#475569',fontWeight:500,maxWidth:450,margin:'0 auto 14px',lineHeight:1.5}}>
              We&#x2019;re here to help you build a stronger, smarter and more profitable supply chain.
            </p>

            {/* Stats inline strip */}
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:8}}>
              {STATS.map((s,i) => (
                <div key={i} className="cp-card" style={{
                  display:'flex', flexDirection:'column', alignItems:'center',
                  padding:'9px 16px',
                  background:'rgba(255,255,255,.4)', backdropFilter:'blur(20px)',
                  border:'1.5px solid rgba(255,255,255,.5)', borderRadius:14, minWidth:92,
                }}>
                  <span style={{fontSize:18,fontWeight:900,color:'#15803d',lineHeight:1.1}}>
                    <Counter to={s.n} suffix={s.suf}/>
                  </span>
                  <span style={{fontSize:10,color:'#64748b',fontWeight:600,marginTop:2}}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="cp-main-grid" style={{display:'grid',gridTemplateColumns:'5fr 7fr',gap:20,alignItems:'stretch'}}>

            {/* LEFT COLUMN */}
            <div ref={leftRef} style={{display:'flex',flexDirection:'column',gap:12,justify:'space-between',...reveal('left',leftIn,0.08)}}>

              {/* Office photo */}
              <div className="cp-card" style={{borderRadius:16,overflow:'hidden',height:140,position:'relative',boxShadow:'0 8px 24px rgba(0,0,0,.08)'}}>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Kisaan Agri Offices"
                  style={{width:'100%',height:'100%',objectFit:'cover'}}
                />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(15,23,42,.8),rgba(15,23,42,.08) 55%,transparent)'}}/>
                <div style={{position:'absolute',top:10,right:10,background:'rgba(255,255,255,.15)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,.25)',borderRadius:8,padding:'3px 9px'}}>
                  <span style={{color:'#fff',fontSize:10.5,fontWeight:700}}>📍 2 Offices</span>
                </div>
                <div style={{position:'absolute',bottom:10,left:12,color:'#fff'}}>
                  <p style={{margin:0,fontSize:13.5,fontWeight:900}}>Mathura &amp; Lucknow Offices</p>
                  <p style={{margin:'1px 0 0',fontSize:10.5,color:'#86efac',fontWeight:700}}>Uttar Pradesh, India</p>
                </div>
              </div>

              {/* 2 Office cards side-by-side */}
              <div className="cp-office-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{display:'flex',alignItems:'center',gap:7,marginBottom:6}}>
                      <div style={{width:30,height:30,borderRadius:9,background:'linear-gradient(135deg,#22c55e,#15803d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,color:'#fff',boxShadow:'0 2px 7px rgba(22,163,74,.25)',flexShrink:0}}>📍</div>
                      <div>
                        <p style={{margin:0,fontSize:8.5,fontWeight:900,color:'#16a34a',textTransform:'uppercase',letterSpacing:'.1em'}}>Official Location</p>
                        <p style={{margin:0,fontSize:12,fontWeight:900,color:'#0f172a'}}>Registered Office</p>
                      </div>
                    </div>
                    <p style={{margin:0,fontSize:11,color:'#475569',fontWeight:600,lineHeight:1.45}}>
                      House No.- 8, Transport Nagar Co. Mathura, District- Mathura, UP – 281001
                    </p>
                  </div>
                  <a className="cp-map" href="https://maps.google.com/?q=Transport+Nagar+Mathura" target="_blank" rel="noreferrer" style={{marginTop:6}}>View Map →</a>
                </div>

                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{display:'flex',alignItems:'center',gap:7,marginBottom:6}}>
                      <div style={{width:30,height:30,borderRadius:9,background:'linear-gradient(135deg,#84cc16,#16a34a)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,color:'#fff',boxShadow:'0 2px 7px rgba(132,204,22,.25)',flexShrink:0}}>🏢</div>
                      <div>
                        <p style={{margin:0,fontSize:8.5,fontWeight:900,color:'#16a34a',textTransform:'uppercase',letterSpacing:'.1em'}}>Executive Hub</p>
                        <p style={{margin:0,fontSize:12,fontWeight:900,color:'#0f172a'}}>Corporate Office</p>
                      </div>
                    </div>
                    <p style={{margin:0,fontSize:11,color:'#475569',fontWeight:600,lineHeight:1.45}}>
                      House No.- 670, Pink City, Mohan Road, Lucknow, District- Lucknow, UP – 226017
                    </p>
                  </div>
                  <a className="cp-map" href="https://maps.google.com/?q=Pink+City+Lucknow" target="_blank" rel="noreferrer" style={{marginTop:6}}>View Map →</a>
                </div>
              </div>

              {/* CEO Card */}
              <div className="cp-card" style={{background:'linear-gradient(135deg,rgba(6,78,59,.75),rgba(6,95,70,.85) 50%,rgba(15,32,39,.9))',backdropFilter:'blur(20px)',borderRadius:16,padding:'15px 16px',color:'#fff',boxShadow:'0 10px 30px rgba(6,66,57,.3)',border:'1px solid rgba(52,211,153,.3)',position:'relative',overflow:'hidden',flex:1,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div style={{position:'absolute',top:-30,right:-30,width:140,height:140,borderRadius:'50%',background:'radial-gradient(circle,rgba(52,211,153,.1),transparent 70%)',pointerEvents:'none'}}/>

                <div>
                  <p style={{margin:'0 0 10px',fontSize:9.5,fontWeight:900,color:'#6ee7b7',textTransform:'uppercase',letterSpacing:'.12em'}}>
                    ★ Director &amp; CEO Direct Contact
                  </p>

                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
                    <div style={{width:38,height:38,borderRadius:11,background:'linear-gradient(135deg,#34d399,#059669)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,boxShadow:'0 3px 9px rgba(52,211,153,.3)',flexShrink:0}}>👤</div>
                    <div>
                      <p style={{margin:0,fontSize:14.5,fontWeight:900,lineHeight:1.2,color:'#fff'}}>Janmajay Prasad Kharwar</p>
                      <p style={{margin:'2px 0 0',fontSize:10.5,color:'#6ee7b7',fontWeight:600}}>Co-founder Director and CEO</p>
                    </div>
                  </div>

                  <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:10}}>
                    {[
                      {icon:'📞', text:'+91 9978993711', href:'tel:+919978993711'},
                      {icon:'✉️', text:'janmajay.kharwar@kisanagri.co.in', href:'mailto:janmajay.kharwar@kisanagri.co.in'},
                      {icon:'🌐', text:'www.kisanagri.co.in', href:'http://www.kisanagri.co.in', ext:true},
                    ].map(r => (
                      <a key={r.href} href={r.href} target={r.ext?'_blank':undefined} rel={r.ext?'noreferrer':undefined}
                        style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none',color:'#e2e8f0',fontSize:11.5,fontWeight:600,transition:'color .18s'}}
                        onMouseEnter={e=>e.currentTarget.style.color='#6ee7b7'}
                        onMouseLeave={e=>e.currentTarget.style.color='#e2e8f0'}
                      >
                        <span style={{width:24,height:24,borderRadius:7,background:'rgba(255,255,255,.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,flexShrink:0}}>{r.icon}</span>
                        <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{r.text}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{borderTop:'1px solid rgba(255,255,255,.12)',paddingTop:8,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:4}}>
                  <p style={{margin:0,fontSize:10.5,color:'#94a3b8'}}>
                    <span style={{fontWeight:800,color:'#fff'}}>Board Directors: </span>Mr. Lalit • Mr. Saumya Ranjan Mallick
                  </p>
                  <p style={{margin:0,fontSize:9,color:'#6ee7b7',fontFamily:'monospace'}}>CIN: U15200LO2024PTC234413</p>
                </div>
              </div>

            </div>

            {/* RIGHT: FORM */}
            <div ref={formRef} style={{height:'100%',display:'flex',flexDirection:'column',...reveal('right',formIn,0.12)}}>
              <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

                <div>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4}}>
                    <div style={{width:38,height:38,borderRadius:11,background:'linear-gradient(135deg,#dcfce7,#bbf7d0)',border:'1.5px solid rgba(34,197,94,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>
                      💬
                    </div>
                    <div>
                      <h3 style={{margin:0,fontSize:17,fontWeight:900,color:'#0f172a'}}>Send Us a Message</h3>
                      <p style={{margin:0,fontSize:11.5,color:'#64748b',fontWeight:500}}>We respond within 24 hours</p>
                    </div>
                  </div>
                  <p style={{margin:'6px 0 14px',fontSize:11.5,color:'#94a3b8',fontWeight:500,lineHeight:1.45}}>
                    Inquire about warehousing, collateral management, or agri-commodity trade services.
                  </p>

                  {sent ? (
                    <div style={{background:'linear-gradient(135deg,#f0fdf4,#ecfdf5)',border:'1.5px solid #bbf7d0',borderRadius:14,padding:'24px 16px',textAlign:'center',animation:'cp-pop .5s ease forwards'}}>
                      <div style={{width:46,height:46,borderRadius:'50%',background:'linear-gradient(135deg,#22c55e,#15803d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,margin:'0 auto 10px',boxShadow:'0 5px 16px rgba(22,163,74,.32)',animation:'cp-ring 2s ease infinite'}}>
                        ✓
                      </div>
                      <h3 style={{margin:'0 0 6px',fontSize:17,fontWeight:900,color:'#0f172a'}}>Inquiry Received!</h3>
                      <p style={{margin:'0 0 14px',fontSize:12.5,color:'#475569',fontWeight:500}}>Thank you. Our team will respond within 24 hours.</p>
                      <button
                        onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', service:'Scientific Warehousing', message:'' }) }}
                        style={{padding:'8px 20px',borderRadius:50,background:'linear-gradient(135deg,#16a34a,#047857)',color:'#fff',fontSize:11.5,fontWeight:800,border:'none',cursor:'pointer',letterSpacing:'.07em',textTransform:'uppercase',boxShadow:'0 3px 12px rgba(22,163,74,.32)',transition:'transform .18s'}}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{display:'flex',flexDirection:'column',gap:10}}>

                      <div className="cp-form-grid-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                        {[
                          { label:'Full Name',     key:'name',  type:'text',  icon:'👤', ph:'e.g. Rahul Sharma' },
                          { label:'Email Address', key:'email', type:'email', icon:'✉️', ph:'email@example.com' },
                        ].map(f => (
                          <div key={f.key}>
                            <label className="cp-lbl">{f.label} <span style={{color:'#16a34a'}}>*</span></label>
                            <div style={{position:'relative'}}>
                              <span style={{position:'absolute',left:10,top:'50%',transform:'translateY(-50%)',fontSize:13,pointerEvents:'none'}}>{f.icon}</span>
                              <input type={f.type} required value={form[f.key]} onChange={upd(f.key)} placeholder={f.ph} className="cp-inp"/>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="cp-form-grid-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                        <div>
                          <label className="cp-lbl">Phone Number <span style={{color:'#16a34a'}}>*</span></label>
                          <div style={{position:'relative'}}>
                            <span style={{position:'absolute',left:10,top:'50%',transform:'translateY(-50%)',fontSize:13,pointerEvents:'none'}}>📞</span>
                            <input type="tel" required value={form.phone} onChange={upd('phone')} placeholder="+91 98765 43210" className="cp-inp"/>
                          </div>
                        </div>
                        <div>
                          <label className="cp-lbl">Service Required</label>
                          <select value={form.service} onChange={upd('service')} className="cp-sel">
                            {SERVICES.map(s => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="cp-lbl">Message / Requirements <span style={{color:'#16a34a'}}>*</span></label>
                        <textarea required value={form.message} onChange={upd('message')}
                          placeholder="Tell us about your commodity storage, location, or financial requirements..."
                          className="cp-ta" style={{minHeight:'82px'}}/>
                      </div>

                      <button type="submit" className="cp-btn" style={{padding:'11px'}}>
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                        Submit Inquiry →
                      </button>

                    </form>
                  )}
                </div>

                <div className="cp-trust-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginTop:12}}>
                  {[
                    { icon:'🛡️', t:'Secure',  s:'& Reliable' },
                    { icon:'⚡', t:'Quick',   s:'Response'   },
                    { icon:'🎧', t:'24/7',    s:'Support'    },
                    { icon:'🤝', t:'Trusted', s:'Partner'    },
                  ].map(b => (
                    <div key={b.t} className="cp-trust" style={{padding:'7px 3px'}}>
                      <span style={{fontSize:15}}>{b.icon}</span>
                      <span style={{fontSize:10,fontWeight:800,color:'#0f172a'}}>{b.t}</span>
                      <span style={{fontSize:9,color:'#94a3b8',fontWeight:600}}>{b.s}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
