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
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* PAIMANA Logo */}
              <div className="mb-6">
                <img
                  src="/logo3.svg"
                  alt="PAIMANA"
                  className="h-20 md:h-24 lg:h-28 w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Subtitle */}
              <div className="space-y-2">
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
                  to="/nie-i-state" 
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

            {/* Right Content - All Projects */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-3 gap-2 xl:gap-2.5 max-w-lg">
                {keyInitiatives.map((initiative) => (
                  <Link
                    key={initiative.title}
                    to={initiative.path}
                    className="group relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {/* Image Background */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${initiative.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-2 flex flex-col justify-end text-white">
                        {/* Title */}
                        <h3 className="font-poppins font-semibold text-[10px] xl:text-xs mb-0.5 leading-tight">{initiative.title}</h3>
                        
                        {/* Description */}
                        <p className="text-[9px] xl:text-[10px] text-white/90 leading-tight line-clamp-2">{initiative.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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
