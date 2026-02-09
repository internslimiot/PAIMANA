import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const keyInitiatives = [
    {
      title: 'NIE-I State',
      description: 'Monitoring key initiatives at the state level.',
      image: '/project-nie-state.jpg',
      gradient: 'from-blue-600 to-blue-500',
      path: '/nie-i-state',
    },
    {
      title: 'NIE-I Ministry',
      description: 'Tracking key projects at the ministry level.',
      image: '/project-nie-ministry.jpg',
      gradient: 'from-orange-500 to-orange-400',
      path: '/nie-i-ministry',
    },
    {
      title: 'Project Monitoring',
      description: 'Comprehensive monitoring of various projects.',
      image: '/project-monitoring.jpg',
      gradient: 'from-green-500 to-green-400',
      path: '/project-monitoring',
    },
    {
      title: 'Performance Monitoring',
      description: 'Assessing & improving project performance.',
      image: '/project-performance.jpg',
      gradient: 'from-blue-400 to-blue-300',
      path: '/performance-monitoring',
    },
    {
      title: 'TPP',
      description: 'Managing technical & professional personnel data.',
      image: '/project-tpp.jpg',
      gradient: 'from-purple-500 to-purple-400',
      path: '/tpp',
    },
  ];

  const quickAccess = [
    {
      title: 'Public Dashboard',
      description: 'View public analytics dashboard, showing project metrics & statistics.',
      image: '/quick-dashboard.jpg',
      path: '/public-dashboard',
    },
    {
      title: 'User Manuals',
      description: 'Download user manuals and guides for various projects.',
      image: '/quick-manuals.jpg',
      path: '/user-manuals',
    },
    {
      title: 'Helpdesk & Support',
      description: 'Contact helpdesk for support and assistance.',
      image: '/quick-helpdesk.jpg',
      path: '/contact',
    },
    {
      title: 'Login Portal',
      description: 'Login to access the PAIMANA platform and its projects.',
      image: '/quick-login.jpg',
      path: '/login',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #e8f4fc 0%, #f0f4f8 50%, #ffffff 100%)',
        }}
      >
        {/* Background Pattern - Circular Tech Graphic */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <radialGradient id="circleGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#1e4a7e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2d6da8" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              {/* Concentric circles */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#circleGradient)" strokeWidth="2" opacity="0.6" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#circleGradient)" strokeWidth="2" opacity="0.5" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="url(#circleGradient)" strokeWidth="2" opacity="0.4" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#circleGradient)" strokeWidth="2" opacity="0.3" />
              {/* Interconnecting lines */}
              <line x1="200" y1="20" x2="200" y2="80" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
              <line x1="200" y1="320" x2="200" y2="380" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
              <line x1="20" y1="200" x2="80" y2="200" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
              <line x1="320" y1="200" x2="380" y2="200" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
              <line x1="60" y1="60" x2="100" y2="100" stroke="#1e4a7e" strokeWidth="2" opacity="0.3" />
              <line x1="340" y1="340" x2="300" y2="300" stroke="#1e4a7e" strokeWidth="2" opacity="0.3" />
              <line x1="60" y1="340" x2="100" y2="300" stroke="#1e4a7e" strokeWidth="2" opacity="0.3" />
              <line x1="340" y1="60" x2="300" y2="100" stroke="#1e4a7e" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* PAIMANA Title */}
              <div className="space-y-2">
                <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-paimana-dark-blue leading-tight">
                  PAIMANA
                </h1>
                <p className="text-xl md:text-2xl text-paimana-blue font-medium">
                  Project Analytics, Monitoring & Assessment Platform
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Integrated platform for project analytics, monitoring and assessment of key initiatives of the Government of India.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="#key-initiatives" 
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #f4b942 0%, #e5a532 100%)',
                    color: '#0f2d52',
                    boxShadow: '0 4px 15px rgba(244, 185, 66, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 185, 66, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(244, 185, 66, 0.3)';
                  }}
                >
                  Explore Projects
                </Link>
                <Link 
                  to="/public-dashboard" 
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 border-2"
                  style={{
                    borderColor: '#1e4a7e',
                    background: '#1e4a7e',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = '#2d6da8';
                    e.currentTarget.style.borderColor = '#2d6da8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#1e4a7e';
                    e.currentTarget.style.borderColor = '#1e4a7e';
                  }}
                >
                  Public Dashboard
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Graphic */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Large Circular Tech Graphic */}
                <div className="relative w-[500px] h-[500px]">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <radialGradient id="heroGradient" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#1e4a7e" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#2d6da8" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#e8f4fc" stopOpacity="0.3" />
                      </radialGradient>
                      <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e4a7e" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#2d6da8" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    {/* Outer glowing rings */}
                    <circle cx="200" cy="200" r="190" fill="none" stroke="url(#ringGradient)" strokeWidth="3" opacity="0.6" />
                    <circle cx="200" cy="200" r="160" fill="none" stroke="url(#ringGradient)" strokeWidth="2.5" opacity="0.5" />
                    <circle cx="200" cy="200" r="130" fill="none" stroke="url(#ringGradient)" strokeWidth="2" opacity="0.4" />
                    <circle cx="200" cy="200" r="100" fill="none" stroke="url(#ringGradient)" strokeWidth="1.5" opacity="0.3" />
                    {/* Inner core */}
                    <circle cx="200" cy="200" r="70" fill="url(#heroGradient)" opacity="0.7" />
                    {/* Interconnecting lines */}
                    <line x1="200" y1="10" x2="200" y2="90" stroke="#1e4a7e" strokeWidth="2.5" opacity="0.5" />
                    <line x1="200" y1="310" x2="200" y2="390" stroke="#1e4a7e" strokeWidth="2.5" opacity="0.5" />
                    <line x1="10" y1="200" x2="90" y2="200" stroke="#1e4a7e" strokeWidth="2.5" opacity="0.5" />
                    <line x1="390" y1="200" x2="310" y2="200" stroke="#1e4a7e" strokeWidth="2.5" opacity="0.5" />
                    {/* Diagonal connections */}
                    <line x1="50" y1="50" x2="120" y2="120" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
                    <line x1="350" y1="350" x2="280" y2="280" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
                    <line x1="50" y1="350" x2="120" y2="280" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
                    <line x1="350" y1="50" x2="280" y2="120" stroke="#1e4a7e" strokeWidth="2" opacity="0.4" />
                    {/* Additional connection points */}
                    <circle cx="200" cy="50" r="8" fill="#1e4a7e" opacity="0.6" />
                    <circle cx="200" cy="350" r="8" fill="#1e4a7e" opacity="0.6" />
                    <circle cx="50" cy="200" r="8" fill="#1e4a7e" opacity="0.6" />
                    <circle cx="350" cy="200" r="8" fill="#1e4a7e" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section id="key-initiatives" className="section-padding bg-white">
        <div className="container-custom">
          {/* Projects Grid - 5 cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {keyInitiatives.map((initiative) => (
              <Link
                key={initiative.title}
                to={initiative.path}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${initiative.gradient} opacity-80`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    {/* Title */}
                    <h3 className="font-poppins font-semibold text-lg mb-2">{initiative.title}</h3>
                    
                    {/* Description */}
                    <p className="text-sm text-white/90 leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paimana-dark-blue mb-4">
              Quick Access for Projects
            </h2>
          </div>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Area */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-paimana-dark-blue mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
