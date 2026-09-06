import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { User, Mail, Calendar, LogOut, ShieldCheck } from 'lucide-react';
import { getMe } from '@/lib/api';

type UserData = {
  name: string;
  email: string;
  created_at: string;
};

export default function Profile() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notAuthenticated, setNotAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setNotAuthenticated(true);
      setLoading(false);
      return;
    }

    getMe(token)
      .then((data) => setUser(data))
      .catch(() => {
        localStorage.removeItem('access_token');
        setNotAuthenticated(true);
      })
      .finally(() => setLoading(false));
  }, []);

  function handleSignOut() {
    localStorage.removeItem('access_token');
    window.location.href = '/';
  }

  if (loading) {
    return <div className="min-h-screen bg-white" />;
  }

  if (notAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  const joinedDate = new Date(user.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const firstName = user.name.split(' ')[0];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <Reveal variant="scale" duration={500}>
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl mb-5">
              <span className="text-3xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={100} duration={500}>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Welcome back, {firstName}</h1>
            <p className="text-white/60 text-sm">{user.email}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative -mt-14 sm:-mt-16 pb-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Reveal variant="fade-up" duration={500}>
            <div className="rounded-2xl bg-white border border-neutral-200 shadow-xl shadow-neutral-900/5 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6 text-secondary-600 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Account verified
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50">
                  <User className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Full name</p>
                    <p className="text-sm font-semibold text-neutral-900 truncate">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50">
                  <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Email address</p>
                    <p className="text-sm font-semibold text-neutral-900 truncate">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50">
                  <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Member since</p>
                    <p className="text-sm font-semibold text-neutral-900">{joinedDate}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="flex-1 text-center px-6 py-3 rounded-xl border border-neutral-200 text-neutral-700 font-semibold hover:bg-neutral-50 transition-all"
                >
                  Back to home
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
