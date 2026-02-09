import { useState } from 'react';
import { User, Lock, ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

const LoginModal = ({ isOpen, onClose, projectName = 'PAIMANA' }: LoginModalProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('State');
  const [captcha, setCaptcha] = useState('');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const roles = ['State', 'Ministry', 'Admin', 'Viewer'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Login attempted for ${projectName} as ${role}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl p-0 overflow-hidden">
        <DialogHeader className="bg-gradient-to-r from-paimana-blue to-paimana-accent-blue p-6 text-white">
          <DialogTitle className="text-xl font-poppins font-semibold text-center">
            Login to {projectName}
          </DialogTitle>
          <p className="text-white/80 text-sm text-center mt-1">
            Access the {projectName} dashboard
          </p>
        </DialogHeader>

        <div className="p-6 space-y-4">
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-between p-3 rounded-lg bg-paimana-light-blue hover:bg-blue-100 transition-colors text-left">
              <span className="flex items-center gap-2 text-sm font-medium text-paimana-blue">
                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </span>
                Dashboard
              </span>
              <svg className="w-4 h-4 text-paimana-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center justify-between p-3 rounded-lg bg-paimana-light-blue hover:bg-blue-100 transition-colors text-left">
              <span className="flex items-center gap-2 text-sm font-medium text-paimana-blue">
                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Reports
              </span>
              <svg className="w-4 h-4 text-paimana-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center justify-between p-3 rounded-lg bg-paimana-light-blue hover:bg-blue-100 transition-colors text-left">
              <span className="flex items-center gap-2 text-sm font-medium text-paimana-blue">
                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                User Manual
              </span>
              <svg className="w-4 h-4 text-paimana-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center justify-between p-3 rounded-lg bg-paimana-light-blue hover:bg-blue-100 transition-colors text-left">
              <span className="flex items-center gap-2 text-sm font-medium text-paimana-blue">
                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Contact Us
              </span>
              <svg className="w-4 h-4 text-paimana-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t">
            <h4 className="font-poppins font-semibold text-paimana-dark-blue">Login</h4>
            
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Role</Label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="w-full h-11 px-4 border border-gray-200 rounded-lg flex items-center justify-between bg-white hover:border-gray-300 transition-colors"
                >
                  <span className="text-gray-700">{role}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isRoleDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {roles.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          setRole(r);
                          setIsRoleDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-paimana-light-blue transition-colors ${
                          role === r ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="captcha" className="text-sm font-medium text-gray-700">
                Verify: 9 + 1 =
              </Label>
              <Input
                id="captcha"
                type="text"
                placeholder="Enter answer"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Login
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-paimana-blue hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>

          {/* Helpdesk Link */}
          <div className="pt-4 border-t text-center">
            <a href="/contact" className="inline-flex items-center gap-2 text-sm text-paimana-blue hover:underline">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Need help? Contact Helpdesk Support
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
