import { Reveal } from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import { MapPin, Clock } from 'lucide-react';

const openRoles = [
  { title: 'Senior Backend Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Remote', type: 'Full-time' },
  { title: 'Customer Success Manager', team: 'Customer Success', location: 'Remote', type: 'Full-time' },
  { title: 'Growth Marketer', team: 'Marketing', location: 'Remote', type: 'Contract' },
];

export default function Careers() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Company"
        title="Help us build Nexus"
        description="We are a small, remote-first team focused on shipping things that genuinely make work easier. Here is where we currently have openings."
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {openRoles.map((role, index) => (
              <Reveal key={role.title} variant="fade-up" delay={index * 100} duration={500}>
                <a
                  href="#"
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">{role.title}</h3>
                    <p className="text-sm text-neutral-500">{role.team}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {role.type}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade-up" duration={500}>
            <p className="text-center text-neutral-500 text-sm mt-10">
              Don't see a fit? Reach out through our contact page and tell us what you'd like to work on.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
