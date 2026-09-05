import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, Instagram, Facebook, Linkedin, Music2 } from 'lucide-react';
import { submitContactForm } from '@/lib/api';

const contactMethods = [
  { icon: Mail, label: 'ehtesham918605@gmail.com', href: 'mailto:ehtesham918605@gmail.com' },
  { icon: Phone, label: '+92 308 7629734', href: 'tel:+923087629734' },
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/ehtesham_ul_haq007/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/Malikehtesham077', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ehtesham-ul-haq-173b54288', label: 'LinkedIn' },
  { icon: Music2, href: 'https://www.tiktok.com/@ehtesham_ul_haq4', label: 'TikTok' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await submitContactForm(name, email, message, 'contact');
      setSuccess('Thanks for reaching out! We will get back to you soon.');
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
    <div className="bg-white">
      <PageHeader
        eyebrow="Company"
        title="Get in touch"
        description="Questions, feedback, or just want to say hello? We'd love to hear from you."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14">
          <Reveal variant="fade-right" duration={600}>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Contact details</h2>
              <div className="flex flex-col gap-4 mb-10">
                {contactMethods.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <contact.icon className="w-4.5 h-4.5 text-primary-600" />
                    </div>
                    {contact.label}
                  </a>
                ))}
              </div>

              <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Follow along</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-neutral-100 hover:bg-primary-50 flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5 text-neutral-600 hover:text-primary-600" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-left" duration={600}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
