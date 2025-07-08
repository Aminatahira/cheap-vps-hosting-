import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-hotpink bg-clip-text text-transparent"
            >
              ARZ Host
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
            >
              VPS Hosting Hong Kong
            </a>
            <a
              href="https://arzhost.com/region-based-vps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
            >
              VPS Region
            </a>
            <a
              href="https://arzhost.com/lifetime-web-hosting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
            >
              Lifetime Web Hosting
            </a>
            <a
              href="https://arzhost.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="https://arzhost.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
            >
              Contact Us
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-brand-purple to-brand-hotpink hover:from-brand-hotpink hover:to-brand-aqua text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
              >
                VPS Hosting Hong Kong
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://arzhost.com/about-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="https://arzhost.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
              >
                Contact Us
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-brand-purple to-brand-hotpink hover:from-brand-hotpink hover:to-brand-aqua text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 self-start"
              >
                <a
                  href="https://arzhost.com/vps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
