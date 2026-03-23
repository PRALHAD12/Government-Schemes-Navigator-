import { ArrowRight, ShieldCheck, ScrollText, BellRing } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_6s_ease-in-out_infinite_2000ms]"></div>
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_6s_ease-in-out_infinite_4000ms]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Over 500+ government schemes indexed
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Discover schemes that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                empower your future
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Navigate seamlessly through government initiatives. We match your profile with eligible schemes to ensure you never miss out on opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link
                to="/signup"
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all hover:-translate-y-1"
              >
                Find My Schemes
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why choose us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A smarter way to navigate government aid
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6">
                    <ScrollText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Matching</h3>
                  <p className="text-gray-600">
                    Input your details and let our algorithm instantly filter out schemes you are eligible for, saving you hours of research.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Information</h3>
                  <p className="text-gray-600">
                    Get accurate, up-to-date data directly sourced from official portals. No more confusing jargon or outdated forms.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                    <BellRing className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Alerts</h3>
                  <p className="text-gray-600">
                    Never miss a deadline. Receive notifications when new schemes relevant to you open for application or are about to close.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-white mb-4 md:mb-0">
            <ShieldCheck className="w-6 h-6 text-indigo-400" />
            <span className="font-bold text-lg tracking-tight">SchemeNav</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Government Schemes Navigator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
