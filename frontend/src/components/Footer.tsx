import { Link } from 'react-router-dom';
import { Layers, Linkedin, Instagram, Facebook, Music2, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/#features' },
      { label: 'Integrations', to: '/page/integrations' },
      { label: 'Pricing', to: '/#pricing' },
      { label: 'Changelog', to: '/page/changelog' },
      { label: 'Roadmap', to: '/page/roadmap' },
      { label: 'API Docs', to: '/page/api-docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press Kit', to: '/page/press-kit' },
      { label: 'Partners', to: '/page/partners' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', to: '/page/help-center' },
      { label: 'Community', to: '/page/community' },
      { label: 'Tutorials', to: '/page/tutorials' },
      { label: 'Webinars', to: '/page/webinars' },
      { label: 'Templates', to: '/page/templates' },
      { label: 'Status', to: '/page/status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/page/privacy' },
      { label: 'Terms', to: '/page/terms' },
      { label: 'Security', to: '/page/security' },
      { label: 'GDPR', to: '/page/gdpr' },
      { label: 'DPA', to: '/page/dpa' },
      { label: 'SOC 2', to: '/page/soc2' },
    ],
  },
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/ehtesham_ul_haq007/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/Malikehtesham077', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ehtesham-ul-haq-173b54288', label: 'LinkedIn' },
  { icon: Music2, href: 'https://www.tiktok.com/@ehtesham_ul_haq4', label: 'TikTok' },
];

const contactDetails = [
  { icon: Mail, label: 'ehtesham918605@gmail.com', href: 'mailto:ehtesham918605@gmail.com' },
  { icon: Phone, label: '+92 308 7629734', href: 'tel:+923087629734' },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          <Reveal variant="fade-right" duration={600}>
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Layers className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-extrabold tracking-tight">Nexus</span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
                The all-in-one business platform that helps teams automate workflows,
                unify data, and scale faster.
              </p>
              <div className="flex flex-col gap-2 mb-6">
                {contactDetails.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
                  >
                    <contact.icon className="w-4 h-4" />
                    {contact.label}
                  </a>
                ))}
              </div>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  >
                    <social.icon className="w-4.5 h-4.5 text-white/60 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {footerSections.map((section, index) => (
            <Reveal key={section.title} variant="fade-up" delay={index * 100} duration={500}>
              <div>
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-white/50 text-sm hover:text-white transition-all duration-200 inline-block hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
