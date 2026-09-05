import { useParams, Navigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import { staticPages } from '@/lib/pageContent';

export default function StaticPage() {
  const { slug } = useParams();
  const page = slug ? staticPages[slug] : undefined;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white">
      <PageHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {page.updated && (
            <Reveal variant="fade-up" duration={500}>
              <p className="text-sm text-neutral-400 mb-10">{page.updated}</p>
            </Reveal>
          )}
          <div className="flex flex-col gap-12">
            {page.sections.map((section, index) => (
              <Reveal key={section.heading} variant="fade-up" delay={index * 100} duration={600}>
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-3">{section.heading}</h2>
                  <p className="text-neutral-600 leading-relaxed">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
