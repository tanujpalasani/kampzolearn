import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag, ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.preview,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.preview, type: 'article', images: [{ url: post.image }] },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.preview,
    datePublished: post.date,
    image: `https://kampzolearn.com${post.image}`,
    author: { '@type': 'Organization', name: 'Kampzo Learn' },
    publisher: {
      '@type': 'Organization',
      name: 'Kampzo Learn',
      logo: { '@type': 'ImageObject', url: 'https://kampzolearn.com/Logo.png' },
    },
  };

  const otherPosts = blogs.filter((b) => b.slug !== slug);

  return (
    <div className="bg-gray-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Cover Image */}
      <div className="relative h-64 w-full overflow-hidden bg-dark md:h-96">
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-60" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="section-shell absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-300 md:gap-3">
            <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{post.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-balance text-3xl font-bold leading-tight text-white md:text-5xl">{post.title}</h1>
        </div>
      </div>

      {/* Content */}
      <article className="section-shell max-w-3xl py-10 md:py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="surface-card p-5 sm:p-8 md:p-12">
          <div
            className="prose prose-lg max-w-none prose-headings:text-dark prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-strong:text-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-dark p-6 text-center text-white md:p-10">
          <h3 className="text-2xl font-bold mb-3">Ready to Put This Into Practice?</h3>
          <p className="text-gray-400 mb-6">Browse our structured, affordable courses and go from theory to building real projects.</p>
          <Link href="/courses" className="inline-flex items-center justify-center rounded-lg font-semibold transition-colors bg-primary text-white hover:bg-primary-dark h-12 px-10 text-base shadow-md">
            Explore All Courses →
          </Link>
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-dark mb-6">More From The Blog</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {otherPosts.slice(0, 2).map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{p.category} · {p.readTime}</p>
                    <p className="font-semibold text-dark text-sm leading-snug group-hover:text-primary transition-colors">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
