export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-hotpink bg-clip-text text-transparent"
            >
              ARZ Host
            </a>
            <p className="mt-4 text-gray-300 max-w-md">
              "Fast, secure, and reliable VPS hosting solutions that scale with
              your business. Experience premium performance at affordable
              prices."
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://arzhost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-aqua hover:text-brand-mint transition-colors"
                >
                  arzhost.com
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+16315948060"
                  className="text-brand-aqua hover:text-brand-mint transition-colors"
                >
                  +1 (631) 594-8060
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://arzhost.com/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/region-based-vps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  VPS Regions
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/lifetime-web-hosting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  Lifetime Hosting
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://arzhost.com/terms-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/disclaimer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-aqua transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {currentYear}{" "}
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-aqua hover:text-brand-mint transition-colors"
            >
              ARZ Host
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
