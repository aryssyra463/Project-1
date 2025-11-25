import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">FluentEdge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              Home
            </Link>
            <Link to="/courses" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              Courses
            </Link>
            <Link to="/about" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              About
            </Link>
            <Link to="/testimonials" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              Testimonials
            </Link>
            <Link to="/blog" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              Blog
            </Link>
            <Link to="/free-resources" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              Resources
            </Link>
            <Link to="/faq" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              FAQ
            </Link>
            <Link to="/contact" className="text-sm font-medium text-blue-900 hover:text-blue-700 transition">
              Contact
            </Link>
            <Link to="/book-demo" className="px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition">
              Book Demo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                Home
              </Link>
              <Link to="/courses" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                Courses
              </Link>
              <Link to="/about" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                About
              </Link>
              <Link to="/testimonials" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                Testimonials
              </Link>
              <Link to="/blog" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                Blog
              </Link>
              <Link to="/free-resources" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                Resources
              </Link>
              <Link to="/faq" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium text-blue-900 hover:text-blue-700 py-2">
                Contact
              </Link>
              <Link to="/book-demo" className="text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-lg text-center">
                Book Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
