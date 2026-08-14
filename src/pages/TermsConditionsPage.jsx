import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TermsConditionsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (id) => {
    if (id.startsWith('/')) {
      navigate(id);
      return;
    }
    navigate(`/?section=${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-500 selection:text-white">
      <Navbar activeSection="/terms-conditions" scrollToSection={handleNavClick} />
      
      <main className="pt-32 pb-20 px-4 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-lime-500 to-emerald-600 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-500 font-medium">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-slate prose-green max-w-none text-slate-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the website and services provided by <strong>Kisaan Agri Warehousing Private Limited</strong>, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Description of Service</h2>
              <p className="leading-relaxed">
                Kisaan Agri Warehousing Private Limited is a professionally managed company focused on creating business opportunities across the agriculture, rural economy, agri-business, warehousing, commodity, and financial services ecosystem. Our services include professional warehousing, collateral management, trade facilitation, quality assaying, pest management, and rural financial services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Conduct</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Users agree to use our services and website strictly for lawful purposes.</li>
                <li>Users shall not compromise the security or integrity of our digital platforms.</li>
                <li>Users shall provide accurate and true information when interacting with our trade and collateral management services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content included on this site, such as text, graphics, logos, and images, is the property of Kisaan Agri Warehousing Private Limited or its content suppliers and protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                While we strive to provide accurate and up-to-date business solutions, Kisaan Agri Warehousing Private Limited shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including warehouse evaluation or commodity-based pledge finance outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-10">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Company:</strong> Kisaan Agri Warehousing Private Limited</p>
                <p><strong>CIN:</strong> U52100UW2026PTC256413</p>
                <p><strong>Phone:</strong> +91-9978993711</p>
                <p><strong>Email:</strong> janmajay.kharwar@kissanagri.co.in</p>
                <p><strong>Website:</strong> www.kissanagri.co.in</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer scrollToSection={handleNavClick} />
    </div>
  );
}
