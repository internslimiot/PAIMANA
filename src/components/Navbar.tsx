import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

interface NavbarProps {
  variant?: 'main' | 'project';
  projectName?: string;
}

const Navbar = ({ variant = 'main', projectName }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { label: 'NIE-I State', path: '/nie-i-state' },
    { label: 'NIE-I Ministry', path: '/nie-i-ministry' },
    { label: 'Project Monitoring', path: '/project-monitoring' },
    { label: 'Performance Monitoring', path: '/performance-monitoring' },
    { label: 'TPP', path: '/tpp' },
    { label: 'User Manuals', path: '/user-manuals' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const projectNavItems = [
    { label: 'Home', path: '/' },
    { label: 'NIE-I State', path: '/nie-i-state' },
    { label: 'NIE-I Ministry', path: '/nie-i-ministry' },
    { label: 'Project Monitoring', path: '/project-monitoring' },
    { label: 'Performance Monitoring', path: '/performance-monitoring' },
    { label: 'TPP', path: '/tpp' },
    { label: 'User Manual', path: '/user-manuals' },
  ];

  const navItems = variant === 'main' ? mainNavItems : projectNavItems;

  const isActive = (path: string) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  const handleLogin = () => {
    window.location.href = 'https://applive.gaurav.club/';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'glass-effect py-3'
          : variant === 'main' 
            ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm'
            : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden bg-transparent">
              <img
                src="/lion_logo2.png"
                alt="Government of India"
                className="h-full w-auto object-contain"
                style={{
                  mixBlendMode: 'multiply',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-paimana-blue text-xs font-bold">GOI</span>';
                }}
              />
            </div>
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-paimana-dark-blue' : 'text-paimana-dark-blue'}`}>
              <span className="font-poppins font-semibold text-sm md:text-base">Government of India</span>
              {projectName && (
                <span className="hidden md:block text-xs opacity-80">{projectName}</span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation & Login Button - All aligned to right */}
          <div className="flex items-center gap-2 xl:gap-4 flex-1 justify-end">
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-wrap justify-end">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 relative group whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-paimana-blue'
                      : isScrolled
                      ? 'text-gray-700 hover:text-paimana-blue'
                      : 'text-gray-700 hover:text-paimana-blue'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-paimana-blue transition-all duration-250 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Login Button - Only show on project pages */}
            {variant === 'project' && (
              <button
                onClick={handleLogin}
                className="hidden md:flex btn-login ml-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-paimana-dark-blue" />
              ) : (
                <Menu className="w-6 h-6 text-paimana-dark-blue" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-paimana-light-blue text-paimana-blue'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Login Button in Mobile Menu - Only show on project pages */}
              {variant === 'project' && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogin();
                  }}
                  className="btn-login mt-2 mx-4"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
