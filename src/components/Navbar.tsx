import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-indigo-600">
            <ShieldCheck className="w-8 h-8 focus:outline-none" />
            <span className="font-bold text-xl tracking-tight text-gray-900">SchemeNav</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Schemes</Link>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">Home</Link>
          <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">Schemes</Link>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">About</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 mt-2">
            <Link
              to="/login"
              className="block w-full text-center px-4 py-2.5 rounded-lg text-base font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center px-4 py-2.5 rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}