import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-900">About Us</h3>
            <p className="text-gray-600">
              Building a secure and inclusive platform for Indian students to learn, 
              grow, and innovate without barriers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-900">Contact</h3>
            <p className="text-gray-600">
              Have questions? Reach out to us for support.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-orange-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © {currentYear} Educational Platform. All rights reserved.
            </p>
            
            {/* GitHub Link */}
            <a 
              href="https://github.com/rovaa-org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;