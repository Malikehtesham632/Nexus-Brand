import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import { User, Mail, Calendar, LogOut } from 'lucide-react';
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

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        eyebrow="Account"
        title="Profile Center"
        description="Manage your account details and preferences."
      />

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Reveal variant="scale" duration={500}>
            <div className="rounded-2xl border border-neutral-200 shadow-sm p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <span className="text-2xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-neutral-900">{user.name}</h2>
                  <p className="text-neutral-500 text-sm">{user.email}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50">
                  <User className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Full name</p>
                    <p className="text-sm font-semibold text-neutral-900">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Email address</p>
                    <p className="text-sm font-semibold text-neutral-900">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <div>
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
