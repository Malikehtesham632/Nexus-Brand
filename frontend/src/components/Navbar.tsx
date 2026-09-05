import { useEffect, useState } from 'react';
import { Menu, X, Layers, User, LogOut } from 'lucide-react';
import AuthModal from '@/components/AuthModal';
import { getMe } from '@/lib/api';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  function checkLoginStatus() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setUserName(null);
      return;
    }
    getMe(token)
      .then((user) => setUserName(user.name))
      .catch(() => {
        localStorage.removeItem('access_token');
        setUserName(null);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('access_token');
    setUserName(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-neutral-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30 transition-transform group-hover:scale-105">
              <Layers className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-extrabold tracking-tight transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}>
              Nexus
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  scrolled
                    ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {userName ? (
              <>
                <span
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    scrolled ? 'text-neutral-700' : 'text-white/90'
                  }`}
                >
                  <User className="w-4 h-4" />
                  Hi, {userName}
                </span>
                <button
                  onClick={handleSignOut}
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    scrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setAuthMode('signin')}
                  className={`text-sm font-semibold transition-colors ${
                    scrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => setAuthMode('signup')}
                  className="text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-2.5 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl border border-neutral-200 mt-2 mb-4 p-4 animate-fade-in-down">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-neutral-200 my-2" />
              {userName ? (
                <>
                  <div className="px-4 py-2 text-sm font-semibold text-neutral-700 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Hi, {userName}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-3 text-sm font-semibold text-neutral-700 hover:text-primary-600 rounded-lg transition-colors text-left flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setAuthMode('signin');
                      setMobileOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-semibold text-neutral-700 hover:text-primary-600 rounded-lg transition-colors text-left"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setMobileOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-center"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onLoginSuccess={checkLoginStatus}
        />
      )}
    </header>
  );
}
