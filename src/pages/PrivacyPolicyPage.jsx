import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (id) => {
    navigate(`/?section=${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-500 selection:text-white">
      {/* We pass a custom scrollToSection that navigates back to Home with a query param */}
      <Navbar activeSection="privacy" scrollToSection={handleNavClick} />
      
      <main className="pt-32 pb-20 px-4 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-lime-500 to-emerald-600 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-500 font-medium">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-slate prose-green max-w-none text-slate-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to <strong>Kisaan Agri Warehousing Private Limited</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard the information you provide us through our website and services.
              </p>
              <p className="leading-relaxed mt-4">
                As a professionally managed company focused on creating business opportunities across the agriculture, rural economy, agri-business, warehousing, commodity, and financial services ecosystem, we process information to better serve farmers, FPOs, traders, and other stakeholders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and professional details when you contact us or use our services.</li>
                <li><strong>Business Information:</strong> Details related to your agricultural business, warehousing needs, commodity trading, or financial service requirements.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website to help us improve user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 marker:text-emerald-500">
                <li>To provide and manage our services, including professional warehousing, collateral management, and trade facilitation.</li>
                <li>To communicate with you regarding your inquiries, partnerships, and service updates.</li>
                <li>To strengthen the agricultural value chain and facilitate connections between farmers, markets, and financial institutions.</li>
                <li>To comply with legal and regulatory requirements (Risk & Compliance).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Protection and Security</h2>
              <p className="leading-relaxed">
                We employ robust security measures to protect your personal and business data. With our strong institutional network and focus on risk monitoring and compliance, we ensure that your information is kept secure from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Sharing Your Information</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share necessary information with our trusted partners—such as banks, financial institutions, and corporate houses—strictly for the purpose of facilitating business solutions and managing our portfolio, under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or request the deletion of your personal data held by us. If you have any concerns regarding your privacy or wish to exercise these rights, please contact us using the details provided below.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-10">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions or concerns about this Privacy Policy, please reach out to us:
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Company:</strong> Kisaan Agri Warehousing Private Limited</p>
                <p><strong>CIN:</strong> U52100UW2026PTC256413</p>
                <p><strong>Registered Office:</strong> House No.- 8, Transport Nagar Co. Mathura, District- Mathura, Uttar Pradesh, India-281001</p>
                <p><strong>Corporate Office:</strong> House No.- 670, Pink City, Mohan Road, Lucknow, District- Lucknow, Uttar Pradesh, India-226017</p>
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
