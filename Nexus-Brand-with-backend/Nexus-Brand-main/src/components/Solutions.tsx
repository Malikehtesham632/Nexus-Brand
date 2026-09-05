import { useState } from 'react';
import { CheckCircle2, FileText, Cpu, BarChart3, Rocket, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    icon: FileText,
    title: 'Connect your data',
    description: 'Import from any source in one click. CSV, databases, APIs, or your existing tools — Nexus pulls it all in automatically.',
    points: ['200+ native integrations', 'Smart data mapping', 'Zero-config setup'],
  },
  {
    icon: Cpu,
    title: 'Automate everything',
    description: 'Build workflows visually. Set triggers, conditions, and actions with drag-and-drop simplicity. No engineers needed.',
    points: ['Visual workflow builder', 'AI-assisted automation', 'Conditional logic & branching'],
  },
  {
    icon: BarChart3,
    title: 'Measure & optimize',
    description: 'Get real-time insights into every part of your business. Spot bottlenecks, track KPIs, and make smarter decisions.',
    points: ['Live customizable dashboards', 'Predictive analytics', 'Automated reports'],
  },
  {
    icon: Rocket,
    title: 'Scale with confidence',
    description: 'From 5 people to 5,000 — Nexus grows with you. Enterprise-grade infrastructure that never slows down.',
    points: ['Unlimited team members', '99.99% uptime SLA', 'Dedicated support'],
  },
];

export default function Solutions() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-600 text-sm font-semibold mb-4">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Up and running in
              <span className="gradient-text"> four steps</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
              No lengthy onboarding. No consultants. Just results.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="fade-right" duration={700}>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${
                    activeStep === index
                      ? 'bg-white border-primary-300 shadow-xl shadow-primary-100'
                      : 'bg-white/50 border-neutral-200/70 hover:border-neutral-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30 scale-110 rotate-3'
                        : 'bg-neutral-100 text-neutral-400 group-hover:scale-105 group-hover:bg-neutral-200'
                    }`}>
                      <step.icon className="w-6 h-6 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold transition-colors ${
                          activeStep === index ? 'text-primary-600' : 'text-neutral-400'
                        }`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-lg font-bold transition-colors duration-300 ${
                          activeStep === index ? 'text-neutral-900' : 'text-neutral-600'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      {activeStep === index && (
                        <p className="mt-3 text-neutral-500 text-[15px] leading-relaxed animate-fade-in">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal variant="fade-left" delay={200} duration={700}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl blur-2xl animate-glow" />
              <div className="relative bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-2xl shadow-neutral-200/40 card-shine">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    key={activeStep}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg animate-scale-in"
                  >
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-600">
                      Step 0{activeStep + 1} of 0{steps.length}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p key={`desc-${activeStep}`} className="text-neutral-500 leading-relaxed mb-6 animate-fade-in">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-3 mb-8">
                  {steps[activeStep].points.map((point, i) => (
                    <div
                      key={`${activeStep}-${point}`}
                      className="flex items-center gap-3"
                      style={{
                        opacity: 0,
                        transform: 'translateX(-12px)',
                        animation: `fadeInUp 0.5s ease-out ${i * 0.15}s forwards`,
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === activeStep ? 'w-8 bg-primary-500' : 'w-1.5 bg-neutral-200 hover:bg-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    Next step
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
