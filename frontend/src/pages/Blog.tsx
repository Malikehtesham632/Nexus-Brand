import { Reveal } from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'How we cut internal reporting time by 70%',
    excerpt: 'A look inside how our own team used Nexus automations to remove a weekly reporting chore entirely.',
    tag: 'Product',
    date: 'Aug 2026',
  },
  {
    title: 'The hidden cost of tool sprawl',
    excerpt: 'Why the average team loses hours every week just switching between disconnected apps, and what to do about it.',
    tag: 'Insights',
    date: 'Jul 2026',
  },
  {
    title: 'Designing Nexus for speed, not just features',
    excerpt: 'A behind-the-scenes look at the performance work that went into our latest release.',
    tag: 'Engineering',
    date: 'Jun 2026',
  },
  {
    title: 'From spreadsheet to system: one team\'s migration story',
    excerpt: 'How a 12-person operations team moved off spreadsheets and into Nexus in under a week.',
    tag: 'Customer Story',
    date: 'May 2026',
  },
];

export default function Blog() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Company"
        title="The Nexus Blog"
        description="Product updates, engineering deep-dives, and lessons from teams building better workflows."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Reveal key={post.title} variant="fade-up" delay={index * 100} duration={600}>
                <a
                  href="#"
                  className="group block p-7 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600">{post.tag}</span>
                    <span className="text-xs text-neutral-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-start gap-2">
                    {post.title}
                    <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{post.excerpt}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
