import React, { useState } from 'react';

// Inline SVG Icons
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const MySchemeFooter = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  // Reference for the quick link section to scroll to it
  const quickLinkSectionRef = React.useRef(null);

  const quickLinks = [
    {
      id: 'about-us',
      title: 'About Us',
      description: 'Learn more about myScheme',
      content: 'Our platform is an AI-powered initiative designed to help citizens easily discover and understand government welfare schemes available in India. The goal is to simplify access to important scheme information by providing a single, user-friendly platform where users can explore schemes based on their eligibility, needs, and personal details such as age, occupation, or income group. By using intelligent technology, the system suggests relevant schemes, explains their benefits, eligibility criteria, and application process in a clear and simple manner. This approach reduces the time and effort required to search across multiple government websites and ensures that citizens can quickly find the schemes that are most beneficial to them.'
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      description: 'Get in touch with our support team',
      content: 'You can reach our support team through various channels. Email: support-myscheme@digitalindia.gov.in, Phone: (011) 24303714 (9:00 AM to 5:30 PM IST). Our team is available to assist you with any queries or issues related to myScheme portal and government schemes.'
    },
    {
      id: 'screen-reader',
      title: 'Screen Reader',
      description: 'Accessibility features',
      content: 'myScheme is designed to be accessible to all users including those with visual impairments. The portal supports screen readers and follows Web Accessibility Guidelines (WCAG) standards. Users can navigate the portal using keyboard shortcuts and screen reader compatible features.'
    },
    {
      id: 'accessibility',
      title: 'Accessibility Statement',
      description: 'Commitment to accessibility',
      content: 'We are committed to ensuring that myScheme is accessible to people with disabilities. We have implemented various accessibility features including alt text for images, proper heading structure, keyboard navigation, and compatibility with assistive technologies. If you face any accessibility issues, please contact our support team.'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      description: 'Common questions and answers',
      content: 'Q: How do I register on myScheme? A: You can register using your email or phone number. Q: What documents do I need? A: Different schemes require different documents. Q: How long does the process take? A: Processing time varies by scheme. Q: Can I apply for multiple schemes? A: Yes, you can apply for multiple schemes for which you are eligible.'
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      description: 'Legal disclaimer',
      content: 'myScheme portal is provided on an "as is" basis without any warranties or guarantees. The Government of India does not provide any representations or warranties regarding the accuracy, completeness, or reliability of the information provided. Users are advised to verify information independently before taking any action based on the portal.'
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      description: 'Terms of use',
      content: 'By using myScheme portal, you agree to comply with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your login credentials. The government reserves the right to modify or discontinue services without notice. Users must not engage in any activity that violates the terms or harms the portal.'
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Your personal dashboard',
      content: 'The Dashboard is your personal hub where you can view all your applications, track their status, and access important documents. You can see pending applications, approved schemes, and historical records. The dashboard provides real-time updates on your applications and helps you manage all your scheme-related activities in one place.'
    },
  ];

  const usefulLinks = [
    { name: 'Digital India', url: 'https://digitalindia.gov.in/', logo: 'https://yt3.googleusercontent.com/ytc/AIdro_mHgjBFdgkwv3JZ5ua65SRuwYnRKtXtPvHPbraK6N_x50Y=s900-c-k-c0x00ffffff-no-rj', abbr: 'DI' },
    { name: 'DigiLocker', url: 'https://www.digilocker.gov.in/', logo: 'https://play-lh.googleusercontent.com/EqNJ0V0N0vzNKxdOl-Uz4OW5t8b4BhROYEKvQVqi1s1O_Ng2E_AobK1YB5hVFvpD5Yk', abbr: 'DL' },
    { name: 'UMANG', url: 'https://www.umang.gov.in/', logo: 'https://yt3.googleusercontent.com/ytc/AIdro_mHgjBFdgkwv3JZ5ua65SRuwYnRKtXtPvHPbraK6N_x50Y=s900-c-k-c0x00ffffff-no-rj', abbr: 'UM' },
    { name: 'Aadhaar', url: 'https://uidai.gov.in/', logo: 'https://instabizfilings.com/admin_images/blog/25691735107313.webp', abbr: 'AA' },
    { name: 'MyGov', url: 'https://www.mygov.in/', logo: 'https://play-lh.googleusercontent.com/jCxGTNdjWLu48wO4hprnVknonkElpwpY_eeN6LteGqxfHorTAsVojPsEmusWBn30j-E=w3840-h2160-rw', abbr: 'MG' },
    { name: 'Data.Gov', url: 'https://data.gov.in/', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeYP-RsacbhXb4d8izuy7WMULu5QsCTpn1Q&s', abbr: 'DG' },
    { name: 'iGOD', url: 'https://igod.gov.in/', logo: 'https://igod.gov.in/assets/images/goi-banner5.gif', abbr: 'iG' },
  ];

  const socialMediaLinks = [
    { name: 'Facebook', icon: '👍', color: 'from-blue-600 to-blue-700', handle: '@mySchemeGov' },
    { name: 'Twitter/X', icon: '𝕏', color: 'from-black to-gray-800', handle: '@mySchemeIndia' },
    { name: 'LinkedIn', icon: 'in', color: 'from-blue-700 to-blue-800', handle: 'myScheme-gov' },
    { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600', handle: '@myscheme_gov' },
    { name: 'YouTube', icon: '▶️', color: 'from-red-600 to-red-700', handle: 'myScheme Official' },
    { name: 'Telegram', icon: '✈️', color: 'from-blue-500 to-cyan-500', handle: '@mySchemeGov' },
  ];

  const styles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes shimmer {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }

    .animate-slideInRight {
      animation: slideInRight 0.6s ease-out forwards;
    }

    .footer-gradient {
      background: linear-gradient(135deg, #0a1428 0%, #0f1a2e 50%, #0a1428 100%);
    }

    .logo-pulse:hover {
      animation: shimmer 0.6s ease-in-out;
    }

    .link-hover {
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .link-hover::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #1db954;
      transition: width 0.3s ease;
    }

    .link-hover:hover::after {
      width: 100%;
    }

    .link-hover:hover {
      color: #1db954;
    }

    .nav-bracket {
      color: #1db954;
      font-weight: bold;
      font-size: 1.2rem;
      margin-right: 8px;
      transition: transform 0.3s ease;
    }

    .link-hover:hover .nav-bracket {
      transform: translateX(4px);
    }

    @media (max-width: 1024px) {
      .footer-container {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    @media (max-width: 768px) {
      .footer-container {
        grid-template-columns: 1fr !important;
      }

      .quick-links-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
    }

    @media (max-width: 480px) {
      .quick-links-grid {
        grid-template-columns: 1fr;
      }

      .logo-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    .modal-overlay {
      animation: fadeInUp 0.3s ease-out;
    }

    .modal-content {
      animation: slideInUp 0.3s ease-out;
      max-height: 80vh;
      overflow-y: auto;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .close-btn {
      font-size: 28px;
      font-weight: bold;
      color: #1db954;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .close-btn:hover {
      transform: scale(1.2);
    }

    .quick-link-btn {
      cursor: pointer;
      background: none;
      border: none;
      color: inherit;
      font-size: inherit;
      font-family: inherit;
      padding: 0;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #111827;
    }

    ::-webkit-scrollbar-thumb {
      background: #1db954;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #1ed760;
    }
  `;

  const activeLink = quickLinks.find(l => l.id === activeQuickLink);

  return (
    <div className="w-full bg-black text-white min-h-screen flex flex-col">
      <style>{styles}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 footer-gradient flex-1">
        <div className="text-center max-w-2xl animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-green-500">my</span>
            <span className="text-white">Scheme</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 font-light">
            A unified portal for Government of India schemes
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 text-sm sm:text-base">
            Explore Schemes
          </button>
        </div>
      </section>

      {/* Quick Link Content Section (Inline instead of Modal) */}
      {activeQuickLink && activeLink && (
        <section ref={quickLinkSectionRef} className="bg-gray-900 border-y border-gray-800 py-12 px-4 sm:px-6 animate-fadeInUp">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {activeLink.title}
                </h2>
                <p className="text-gray-400">
                  {activeLink.description}
                </p>
              </div>
              <button
                onClick={() => setActiveQuickLink(null)}
                className="text-gray-500 hover:text-green-500 transition-colors bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold flex-shrink-0"
              >
                ×
              </button>
            </div>

            <div className="bg-black/50 p-6 sm:p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                {activeLink.content}
              </p>

              {/* Additional Info based on link type */}
              {activeQuickLink === 'about-us' && (
                <div className="bg-gray-800/80 p-5 rounded-lg border border-gray-700">
                  <h3 className="text-green-500 font-bold flex items-center gap-2 mb-2">
                    <ChevronRight /> Our Mission
                  </h3>
                  <p className="text-sm text-gray-300">
                    To make government services accessible, transparent, and efficient for all citizens of India.
                  </p>
                </div>
              )}

              {activeQuickLink === 'contact-us' && (
                <div className="bg-gray-800/80 p-5 rounded-lg border border-gray-700">
                  <h3 className="text-green-500 font-bold flex items-center gap-2 mb-2">
                    <ChevronRight /> Support Hours
                  </h3>
                  <p className="text-sm text-gray-300">
                    Monday to Friday: 9:00 AM to 5:30 PM IST
                  </p>
                </div>
              )}

              {activeQuickLink === 'faq' && (
                <div className="bg-gray-800/80 p-5 rounded-lg border border-gray-700">
                  <h3 className="text-green-500 font-bold flex items-center gap-2 mb-3">
                    <ChevronRight /> Popular Topics
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Registration and Login</li>
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Document Requirements</li>
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Application Status</li>
                  </ul>
                </div>
              )}

              {activeQuickLink === 'accessibility' && (
                <div className="bg-gray-800/80 p-5 rounded-lg border border-gray-700">
                  <h3 className="text-green-500 font-bold flex items-center gap-2 mb-3">
                    <ChevronRight /> Accessibility Features
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Screen Reader Support</li>
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Keyboard Navigation</li>
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> High Contrast Mode</li>
                  </ul>
                </div>
              )}

              {activeQuickLink === 'dashboard' && (
                <div className="bg-gray-800/80 p-5 rounded-lg border border-gray-700">
                  <h3 className="text-green-500 font-bold flex items-center gap-2 mb-3">
                    <ChevronRight /> Dashboard Features
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> View All Applications</li>
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Track Application Status</li>
                    <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">•</span> Download Documents</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  setActiveQuickLink(null);
                }}
                className="px-8 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 group"
              >
                Close details
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 footer-gradient py-12 sm:py-16 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="footer-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

            {/* Left Section - Logo & Branding */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  ©2026 <span className="text-green-500">my</span>Scheme
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-3">
                  A unified portal for Government of India schemes
                </p>
              </div>
              <button
                onClick={() => setShowSocialMedia(true)}
                className="w-full py-3 px-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold rounded-lg transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-green-500/50">
                Connect on Social Media
              </button>
            </div>

            {/* Quick Links Section */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-widest relative pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-500"></span>
              </h3>
              <ul className="quick-links-grid space-y-2 sm:space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx} className="flex items-start link-hover group cursor-pointer">
                    <span className="nav-bracket">›</span>
                    <button
                      onClick={() => {
                        setActiveQuickLink(link.id);
                        setTimeout(() => {
                          quickLinkSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                      }}
                      className="text-gray-400 hover:text-green-500 text-xs sm:text-sm transition-colors quick-link-btn text-left"
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-widest relative pb-3">
                Useful Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-500"></span>
              </h3>
              <div className="logo-grid grid grid-cols-3 gap-2 sm:gap-3">
                {usefulLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    onMouseEnter={() => setHoveredLogo(idx)}
                    onMouseLeave={() => setHoveredLogo(null)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 flex items-center justify-center transition-all duration-300 group relative bg-white
                      ${hoveredLogo === idx
                        ? 'border-green-500 transform -translate-y-1 shadow-lg shadow-green-500/50'
                        : 'border-gray-400 hover:border-green-500 hover:shadow-lg'
                      }`}
                  >
                    <img
                      src={link.logo}
                      alt={link.name}
                      className="w-full h-full object-contain p-1 rounded"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.parentNode) {
                          const textDiv = e.target.parentNode.querySelector('[data-fallback]');
                          if (textDiv) textDiv.style.display = 'flex';
                        }
                      }}
                    />
                    <div
                      data-fallback
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-sm rounded-md"
                      style={{ display: 'none' }}
                    >
                      {link.abbr}
                    </div>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-widest relative pb-3">
                Get in touch
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-500"></span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-3 text-xs sm:text-sm">
                  <div className="text-green-500 flex-shrink-0 mt-1">
                    <PinIcon />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    JSPM University, Wagholi, Pune-412207, India.
                  </p>
                </div>
                <div className="flex gap-3 text-xs sm:text-sm">
                  <div className="text-green-500 flex-shrink-0 mt-1">
                    <MailIcon />
                  </div>
                  <a href="mailto:support-myscheme@digitalindia.gov.in" className="text-green-500 hover:text-green-400 transition-colors font-mono break-all">
                    support-myscheme@
                    <br />
                    digitalindia.gov.in
                  </a>
                </div>
                <div className="flex gap-3 text-xs sm:text-sm">
                  <div className="text-green-500 flex-shrink-0 mt-1">
                    <PhoneIcon />
                  </div>
                  <p className="text-gray-300">
                    (011) 24303714
                    <br />
                    <span className="text-xs text-gray-400">(9:00 AM to 5:30 PM IST)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-center text-gray-500 text-xs sm:text-sm">
              © 2026 myScheme. All rights reserved. | Ministry of Electronics & IT (MeitY), Government of India
            </p>
          </div>
        </div>
      </footer>

      {/* Modal for Social Media */}
      {showSocialMedia && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 modal-overlay"
          onClick={() => setShowSocialMedia(false)}
        >
          <div
            className="bg-gray-900 border-2 border-green-500 rounded-lg max-w-2xl w-full modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="border-b-2 border-green-500 p-6 flex items-center justify-between sticky top-0 bg-gray-900">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Follow Us
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Connect with myScheme on social media for latest updates
                </p>
              </div>
              <button
                onClick={() => setShowSocialMedia(false)}
                className="close-btn text-3xl flex-shrink-0"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialMediaLinks.map((social, idx) => (
                  <button
                    key={idx}
                    onClick={() => window.open('javascript:void(0)')}
                    className={`p-6 rounded-lg border-2 border-gray-700 hover:border-green-500 transition-all duration-300 group transform hover:scale-105 bg-gradient-to-br ${social.color}`}
                  >
                    <div className="text-4xl mb-3 text-center">{social.icon}</div>
                    <h3 className="text-white font-bold text-lg mb-1 text-center">
                      {social.name}
                    </h3>
                    <p className="text-gray-200 text-sm text-center">
                      {social.handle}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/20 text-center text-xs text-white font-semibold">
                      Follow
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t-2 border-green-500 p-6 bg-gray-800 rounded-b-lg">
              <button
                onClick={() => setShowSocialMedia(false)}
                className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySchemeFooter;
