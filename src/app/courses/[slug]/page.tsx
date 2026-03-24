import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `Online Coding Course India | ${course.title}`,
    description: `${course.shortDescription} Join this online coding course India learners trust to learn programming for beginners with project-based lessons.`,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `Online Coding Course India | ${course.title}`,
      description: `${course.shortDescription} Learn programming for beginners with Kampzo Learn.`,
      type: 'website'
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.shortDescription,
    provider: { '@type': 'Organization', name: 'Kampzo Learn', sameAs: 'https://kampzolearn.com' },
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Course Header */}
      <section className="bg-dark pb-24 pt-16 text-white md:pt-20">
        <div className="section-shell max-w-6xl">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
            <span>{course.level}</span>
            <span>•</span>
            <span>{course.duration}</span>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Online Coding Course India: {course.title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">{course.shortDescription}</p>
        </div>
      </section>

      {/* Course Content & Enroll CTA */}
      <section className="relative z-10 -mt-10 py-12 md:py-16">
        <div className="section-shell max-w-6xl">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_350px] lg:gap-12">
            <div className="space-y-12">
              <div className="surface-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-dark mb-4">About this course</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{course.fullDescription}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  This path is built as an online coding course India students can follow step by step, especially for anyone who wants to learn programming for beginners without confusion.
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Looking for practical learning strategies and career tips? Visit our
                  <Link href="/blog" className="ml-1 font-semibold text-primary hover:underline">coding blog</Link>
                  for actionable guidance.
                </p>
              </div>
              <div className="surface-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-dark mb-6">What you will learn</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:pl-8">
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg lg:sticky lg:top-24">
                <div className="relative h-48 w-full">
                  <Image src={course.image} alt={`${course.title} online coding course India cover image`} fill className="object-cover" priority />
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-dark mb-6">{course.price}</div>
                  <div className="space-y-4 mb-6 text-sm text-gray-600">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Duration</span>
                      <span className="font-medium text-dark">{course.duration}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Skill Level</span>
                      <span className="font-medium text-dark">{course.level}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Access</span>
                      <span className="font-medium text-dark">Lifetime</span>
                    </div>
                  </div>
                  <Button
                    className="w-full h-12 text-lg font-semibold shadow-sm"
                    gaEvent={{ event: 'button_clicked', value: `enroll_now_${course.slug}` }}
                  >
                    Enroll Now
                  </Button>
                  <p className="text-center text-xs text-gray-400 mt-4">30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
