import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      'Up to 5 team members',
      '10 automated workflows',
      '5 active dashboards',
      '20 integrations',
      'Email support',
      '1GB storage',
    ],
    highlighted: false,
    cta: 'Start free trial',
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      'Up to 25 team members',
      'Unlimited workflows',
      'Unlimited dashboards',
      'All 200+ integrations',
      'Priority support',
      '50GB storage',
      'Advanced analytics',
      'Custom roles & permissions',
    ],
    highlighted: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations at scale',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Unlimited team members',
      'Unlimited everything',
      'Dedicated account manager',
      'SSO & SAML',
      '99.99% uptime SLA',
      'Unlimited storage',
      'Custom integrations',
      'On-premise option',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Simple, transparent
              <span className="gradient-text"> pricing</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
              Start free. Upgrade when you're ready. Cancel anytime.
            </p>

            <div className="inline-flex items-center gap-3 mt-8 p-1.5 bg-white rounded-xl border border-neutral-200 shadow-sm">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  !yearly ? 'bg-neutral-900 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  yearly ? 'bg-neutral-900 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Yearly
                <span className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                  yearly ? 'bg-secondary-500 text-white' : 'bg-secondary-100 text-secondary-700'
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              variant="fade-up"
              delay={index * 150}
              duration={600}
            >
              <div
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 card-shine ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-2xl shadow-primary-500/20 lg:scale-105 border-glow'
                    : 'bg-white border border-neutral-200/70 shadow-lg shadow-neutral-200/30 hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold shadow-lg animate-bounce-subtle">
                      <Sparkles className="w-3.5 h-3.5" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm ${plan.highlighted ? 'text-white/60' : 'text-neutral-400'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 h-16">
                  {plan.monthlyPrice !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span
                        key={yearly ? 'yearly' : 'monthly'}
                        className={`text-4xl font-extrabold animate-scale-in ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}
                      >
                        ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/50' : 'text-neutral-400'}`}>
                        /user/mo
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                        Custom
                      </span>
                    </div>
                  )}
                  {plan.monthlyPrice !== null && yearly && (
                    <p className={`mt-1 text-xs ${plan.highlighted ? 'text-secondary-400' : 'text-secondary-600'}`}>
                      Billed annually
                    </p>
                  )}
                </div>

                <a
                  href="#"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mb-8 hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                      style={{
                        opacity: 0,
                        transform: 'translateX(-8px)',
                        animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.08}s forwards`,
                      }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-secondary-500' : 'bg-secondary-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-secondary-600'}`} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-neutral-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={300}>
          <p className="text-center text-neutral-400 text-sm mt-10">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
