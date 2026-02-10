import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';

interface NavbarProps {
  variant?: 'main' | 'project';
}

const projectLinks = [
  { label: 'NIE-I State', path: '/nie-i-state' },
  { label: 'NIE-I Ministry', path: '/nie-i-ministry' },
  { label: 'Project Monitoring', path: '/project-monitoring' },
  { label: 'Performance Monitoring', path: '/performance-monitoring' },
  { label: 'TPP', path: '/tpp' },
];

const Navbar = ({ variant = 'main' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/public-dashboard' },
    { label: 'User Manual', path: '/user-manuals' },
    { label: 'About Us', path: '/about' },
  ];

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
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/navbar_logo.png"
              alt="Government of India - Ministry of Statistics and Programme Implementation"
              className="h-12 md:h-14 w-auto object-contain"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1)',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-paimana-blue text-xs font-bold">GOI</span>';
              }}
            />
          </Link>

          {/* Desktop Navigation & Login Button - All aligned to right */}
          <div className="flex items-center gap-2 xl:gap-4 flex-1 justify-end">
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-wrap justify-end">
              {/* Home */}
              <Link
                to="/"
                className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 relative group whitespace-nowrap ${
                  isActive('/') ? 'text-paimana-blue' : 'text-gray-700 hover:text-paimana-blue'
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-paimana-blue transition-all duration-250 ${
                    isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
              {/* Projects dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-0.5 whitespace-nowrap ${
                    projectLinks.some((p) => isActive(p.path)) ? 'text-paimana-blue' : 'text-gray-700 hover:text-paimana-blue'
                  }`}
                >
                  Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProjectsOpen && (
                  <div className="absolute top-full left-0 mt-1 py-1 min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                    {projectLinks.map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        onClick={() => setIsProjectsOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive(p.path) ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* User Manual, About Us */}
              {mainNavItems.filter((item) => item.path !== '/').map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 relative group whitespace-nowrap ${
                    isActive(item.path) ? 'text-paimana-blue' : 'text-gray-700 hover:text-paimana-blue'
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
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/') ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProjectsOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {projectLinks.map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileProjectsOpen(false);
                        }}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive(p.path) ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {mainNavItems
                .filter((item) => item.path !== '/')
                .map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
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
