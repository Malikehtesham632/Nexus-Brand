import { useState } from 'react';
import { X } from 'lucide-react';
import { submitContactForm } from '@/lib/api';

type ContactModalProps = {
  formType: 'trial' | 'demo';
  onClose: () => void;
};

export default function ContactModal({ formType, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const title = formType === 'trial' ? 'Start your free trial' : 'Book a demo';
  const description =
    formType === 'trial'
      ? 'Tell us a bit about you and we will set you up.'
      : 'Tell us about your team and we will schedule a walkthrough.';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await submitContactForm(name, email, message, formType);
      setSuccess('Thanks! We received your request and will be in touch soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative bg-noir-900 border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-noir-400 hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
        <p className="text-noir-400 text-sm mb-6">{description}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-3 rounded-xl bg-noir-800 border border-white/10 text-white placeholder:text-noir-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="email"
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-xl bg-noir-800 border border-white/10 text-white placeholder:text-noir-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <textarea
            placeholder={formType === 'trial' ? 'What are you hoping to achieve?' : 'What would you like to see in the demo?'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="px-4 py-3 rounded-xl bg-noir-800 border border-white/10 text-white placeholder:text-noir-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-primary-300 to-primary-500 text-noir-950 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/20 transition-all disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
