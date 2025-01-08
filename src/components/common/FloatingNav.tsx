import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-50" style={{ top: '2rem' }}>
      <nav className={`
        bg-white/80 backdrop-blur-md
        px-6 py-3 rounded-full
        shadow-lg shadow-orange-100/50
        border border-orange-100
        transition-all duration-300
        ${scrollPosition > 100 ? 'shadow-xl' : ''}
      `}>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-orange-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-4 py-2 bg-white rounded-2xl shadow-xl border border-orange-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default FloatingNav;