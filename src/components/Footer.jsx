import { Link } from 'react-router-dom'

export default function Footer({ scrollToSection }) {
  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About & Leadership', id: 'about' },
    { label: 'Business Capabilities', id: 'services' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Privacy Policy', id: '/privacy-policy' },
    { label: 'Terms & Conditions', id: '/terms-conditions' },
  ]

  return (
    <footer className="bg-slate-900 text-white relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Kisaan Agri Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col text-left">
                <div className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                  KISAAN <span className="text-emerald-400 font-black">AGRI</span>
                </div>
                <div className="text-[9px] font-black tracking-[0.22em] text-green-400 uppercase mt-1">
                  WAREHOUSING PRIVATE LIMITED
                </div>
              </div>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              A professionally managed company empowering India's agriculture, rural economy, warehousing, commodity finance, and financial services ecosystem.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">CIN:</span> U52100UW2026PTC256413
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-green-400 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {links.map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)} className="hover:text-green-400 transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-green-400 uppercase tracking-widest">Key Focus Areas</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>🌾 Agriculture & Agri-Business</li>
              <li>🏬 Scientific Warehousing</li>
              <li>🛡️ Collateral Management</li>
              <li>💰 Warehouse Receipt Finance</li>
              <li>🔄 Trade Facilitation & Supply Chain</li>
              <li>🌐 Rural Financial Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-green-400 uppercase tracking-widest">Contact & Offices</h4>
            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div>
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Registered Office:</span>
                House No.- 8, Transport Nagar Co. Mathura, District- Mathura, UP – 281001
              </div>
              <div>
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Corporate Office:</span>
                House No.- 670, Pink City, Mohan Road, Lucknow, District- Lucknow, UP – 226017
              </div>
              <div className="pt-1 space-y-1">
                <div>📞 <a href="tel:+919978993711" className="hover:text-green-400 transition-colors">+91-9978993711</a></div>
                <div>✉️ <a href="mailto:janmajay.kharwar@kissanagri.co.in" className="hover:text-green-400 transition-colors">janmajay.kharwar@kissanagri.co.in</a></div>
                <div>🌐 <a href="http://www.kissanagri.co.in" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">www.kissanagri.co.in</a></div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} Kisaan Agri Warehousing Private Limited. All Rights Reserved.</div>
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-[11px]">
            <span>Agriculture</span> • <span>Rural Business</span> • <span>Warehousing</span> • <span>Agri-Finance</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
