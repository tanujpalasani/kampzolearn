import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { blogs } from "@/data/blogs";
import { Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Coding Courses Insights and Skills for Students 2026 | Kampzo Learn',
  description:
    'Explore free coding courses guidance, practical tutorials, and skills for students 2026 to help learners build real-world career readiness.',
};

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-dark py-16 text-white md:py-20">
        <div className="section-shell text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Free Coding Courses and Skills for Students 2026</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            Get practical insights on free coding courses, roadmap planning, and skills for students 2026 from mentors and industry practitioners.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Ready to apply what you learn?
            <Link href="/courses" className="ml-1 font-semibold text-primary hover:underline">Explore our courses</Link>
            for structured learning paths.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-pad bg-gray-50">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Latest Article</p>
          <div className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white border border-gray-100">
            <div className="relative h-64 md:h-auto bg-gray-100 overflow-hidden">
              <Image src={blogs[0].image} alt={`${blogs[0].title} - free coding courses and skills for students 2026`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-400 md:gap-3">
                <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{blogs[0].category}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blogs[0].readTime}</span>
                <span>·</span>
                <span>{blogs[0].date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-tight">{blogs[0].title}</h2>
              <p className="mb-7 text-gray-500 leading-relaxed">{blogs[0].preview}</p>
              <Button href={`/blog/${blogs[0].slug}`} className="self-start">Read Article →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* All posts grid */}
      <section className="section-pad">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-dark mb-10">All Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <Card key={post.id} className="group flex flex-col h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image src={post.image} alt={`${post.title} article cover for coding students in India`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3 bg-dark/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">{post.category}</div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-gray-500 text-sm leading-relaxed">{post.preview}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button href={`/blog/${post.slug}`} variant="outline" className="text-sm">
                    Read More →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
