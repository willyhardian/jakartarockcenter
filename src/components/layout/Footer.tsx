import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jakarta Rock Center</h3>
            <p className="text-gray-300 mb-4">
              We help you to fulfill your destiny
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">📞 +62 21 1234 5678</p>
              <p className="text-gray-300">✉️ info@jakartarockcenter.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/kings-word"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  King's Word
                </Link>
              </li>
              <li>
                <Link
                  href="/small-groups"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Small Groups
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Kingdom Celebration & Rocky : Every Sunday</li>
              <li>5th Floor, Rajawali Place (Samping St. Regis Kuningan)</li>
              <li>11.00 WIB</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Jakarta Rock Center. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
