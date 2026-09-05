import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/Reveal';

const stats = [
  { value: '10K+', label: 'Companies powered', sub: 'From startups to Fortune 500', bars: [60, 70, 50, 80, 65, 90, 100] },
  { value: '99.99%', label: 'Uptime guaranteed', sub: 'SLA-backed reliability', bars: [100, 100, 100, 100, 99, 100, 100] },
  { value: '200+', label: 'Integrations', sub: 'Connect every tool you use', bars: [40, 55, 70, 85, 95, 100, 100] },
  { value: '4.9/5', label: 'Customer rating', sub: 'Across 3,200+ reviews', bars: [90, 92, 95, 93, 96, 98, 100] },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden gradient-bg">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.7s ease-out ${index * 150}ms`,
              }}
            >
              <div className="flex items-end justify-center gap-1 h-8 mb-4 opacity-60">
                {stat.bars.map((h, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-t bg-gradient-to-t from-primary-400 to-secondary-400 transition-all duration-700 ease-out group-hover:from-secondary-400 group-hover:to-primary-400"
                    style={{
                      height: animated ? `${h}%` : '0%',
                      transitionDelay: `${index * 150 + i * 60}ms`,
                    }}
                  />
                ))}
              </div>

              <p
                className="text-5xl lg:text-6xl font-extrabold gradient-text tracking-tight"
                style={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'scale(1)' : 'scale(0.8)',
                  transition: `all 0.8s ease-out ${index * 150 + 200}ms`,
                }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-white font-semibold text-lg">
                {stat.label}
              </p>
              <p className="mt-1 text-white/50 text-sm">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
