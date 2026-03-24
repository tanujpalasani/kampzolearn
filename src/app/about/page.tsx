import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Kampzo Learn — our mission, story, and the team empowering students across India with affordable, quality education.',
  alternates: { canonical: '/about' },
};

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every decision we make is guided by one question: does this help a student learn faster?" },
  { icon: Eye, title: "Radical Transparency", desc: "No hidden fees. No vague promises. We are clear about what you will learn and what it costs." },
  { icon: Heart, title: "Community First", desc: "Our learners are not just users — they are a community we actively invest in and grow alongside." },
  { icon: Globe, title: "Made for India", desc: "Designed with Indian students in mind — affordable pricing, relatable examples, and local context." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent pointer-events-none" />
        <div className="section-shell relative z-10 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Kampzo Learn</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We are a team of engineers, marketers, and educators who believe every student in India deserves access to world-class tech education at a fraction of the typical cost.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad">
        <div className="section-shell max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-dark sm:text-4xl">Built by Students, For Students</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Kampzo Learn was founded in 2024 by a group of engineers frustrated with the gap between college education and what the industry actually demands. We had learned the hard way — through months of self-study, YouTube videos, and expensive bootcamps — and decided to fix the problem.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today we serve over 10,000 active learners across India, offering structured, project-based courses in coding, digital marketing, data analysis, and more. Our courses are built with one goal: to make you genuinely job-ready as fast as possible.
              </p>
              <Link href="/courses" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                See Our Courses →
              </Link>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl md:h-96">
              <Image src="/about_team.png" alt="Kampzo Learn team collaborating" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50">
        <div className="section-shell">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">Our Core Values</h2>
            <p className="text-gray-500 max-w-lg mx-auto">The principles that guide every product decision we make.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg md:p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-dark">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="section-pad bg-dark text-white">
        <div className="section-shell">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Kampzo By The Numbers</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-8">
            {[
              { value: "10,000+", label: "Active Learners" },
              { value: "50+", label: "Expert-Led Courses" },
              { value: "92%", label: "Completion Rate" },
              { value: "4.8★", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2 rounded-xl bg-white/5 px-3 py-4">
                <span className="text-4xl font-bold text-primary">{s.value}</span>
                <span className="text-gray-400 text-sm uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center">
        <div className="section-shell">
          <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">Join Our Growing Community</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">10,000+ students can&apos;t be wrong. Start your free learning journey today.</p>
          <Link href="/courses" className="inline-flex items-center justify-center rounded-md font-semibold transition-colors bg-primary text-white hover:bg-primary-dark h-12 px-10 text-lg shadow-lg">
            Explore Courses
          </Link>
        </div>
      </section>

    </div>
  );
}
