import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { CheckCircle2, Users, BookOpen, Star, Zap, Award, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Online Learning Platform India | Kampzo Learn",
  description:
    "Kampzo Learn is an online learning platform India students trust for the best courses for students, including programs to learn coding online with practical projects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Online Learning Platform India | Kampzo Learn",
    description:
      "Kampzo Learn is an online learning platform India students trust for the best courses for students and coding-focused career growth.",
    url: "/",
    type: "website",
  },
};

const stats = [
  { label: "Active Learners", value: "10,000+", icon: Users },
  { label: "Courses Available", value: "50+", icon: BookOpen },
  { label: "Average Rating", value: "4.8 / 5", icon: Star },
  { label: "Completion Rate", value: "92%", icon: TrendingUp },
];

const features = [
  { icon: Zap, title: "Industry Curriculums", desc: "No outdated textbooks. Learn exactly what tech companies demand in 2026." },
  { icon: Award, title: "Affordable Pricing", desc: "Quality education is a right. Highly competitive pricing tailored for Indian students." },
  { icon: CheckCircle2, title: "Project-Based Learning", desc: "Build real-world applications in every course — not just watch videos." },
  { icon: Clock, title: "Learn at Your Pace", desc: "Lifetime access to all course material. Study whenever, wherever suits you best." },
  { icon: Users, title: "Expert Mentors", desc: "Learn from instructors who work at top product companies like Google, Microsoft, and more." },
  { icon: TrendingUp, title: "Career Support", desc: "Resume reviews, LinkedIn optimization, and mock interview preparation." },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Frontend Developer @ Flipkart", quote: "Kampzo Learn's Next.js course was a game-changer. The projects were real and the content was sharp. I got my first job within 3 months of completing it.", avatar: "/about_team.png" },
  { name: "Priya Nair", role: "Digital Marketer @ Zoho", quote: "The Digital Marketing course covered everything from Google Ads to content strategy. I now run campaigns with an ROI of over 400%. Worth every rupee.", avatar: "/about_team.png" },
  { name: "Arjun Mehta", role: "Backend Engineer @ Razorpay", quote: "The DSA course prepared me better than any college course. The way they explain Dynamic Programming with visual examples is unmatched.", avatar: "/about_team.png" },
];

export default function Home() {
  const featuredCourses = courses.slice(0, 3);
  const featuredBlogs = blogs.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-dark py-20 text-white md:py-28 lg:py-32">
        <Image src="/hero_bg.png" alt="Online learning platform India background for students learning coding and digital skills" fill priority className="object-cover opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-shell relative z-10 flex flex-col items-center text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/30">
            🚀 India&apos;s Fastest-Growing EdTech Platform
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Online Learning Platform India Students Use To <span className="text-primary">Build Real Skills</span>
          </h1>
          <p className="mb-9 max-w-2xl text-base leading-relaxed text-balance text-gray-300 sm:text-lg md:text-xl">
            Kampzo Learn helps you access the best courses for students across India, with practical programs to learn coding online, digital marketing, and job-ready technical skills.
          </p>
          <p className="mb-9 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            If you are searching for affordable, structured learning paths with mentor-backed support, explore our curated tracks and start progressing from beginner to professional.
            <Link href="/courses" className="ml-1 font-semibold text-primary hover:underline">Browse courses now</Link>.
          </p>
          <div className="mb-14 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button href="/courses" size="lg" className="w-full sm:w-auto">Browse Courses</Button>
            <Button href="/about" variant="outline" size="lg" className="border-gray-600 bg-transparent text-white hover:bg-white/10 hover:text-white">
              Learn More About Us
            </Button>
          </div>
          {/* Stats Row */}
          <div className="mt-2 grid w-full max-w-4xl grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:gap-6 md:grid-cols-4 md:pt-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 rounded-xl bg-white/5 px-3 py-4">
                <s.icon className="h-6 w-6 text-primary" />
                <span className="text-2xl font-bold">{s.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="section-pad bg-gray-50">
        <div className="section-shell">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">Featured Courses</h2>
            <p className="mx-auto max-w-2xl text-base text-gray-500 sm:text-lg">Hand-picked, project-based courses built to take you from zero to job-ready.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group flex flex-col h-full overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white">
                <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                  <Image src={course.image} alt={`${course.title} - learn coding online and career-ready skills`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">{course.level}</div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{course.shortDescription}</p>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-primary text-xl font-bold">{course.price}</span>
                    <span className="text-gray-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button href={`/courses/${course.slug}`} className="w-full">View Course →</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/courses" variant="outline" size="lg">Browse All {courses.length} Courses</Button>
          </div>
        </div>
      </section>

      {/* ── WHY KAMPZO ── */}
      <section className="section-pad bg-white">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">Why 10,000+ Students Choose Kampzo</h2>
            <p className="text-gray-500 max-w-lg mx-auto">We built this platform with one purpose: get students job-ready, fast.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-dark">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-dark text-white">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Real Outcomes, Real Students</h2>
            <p className="text-gray-400 max-w-lg mx-auto">Hear directly from learners who transformed their careers with Kampzo Learn.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="italic text-gray-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED BLOG ── */}
      <section className="section-pad bg-gray-50">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">From The Blog</h2>
              <p className="text-gray-500">Guides and insights for ambitious learners.</p>
            </div>
            <Link href="/blog" className="text-primary font-semibold hover:underline hidden md:inline">View all articles →</Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredBlogs.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white flex flex-col">
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image src={post.image} alt={`${post.title} - student learning insights from Kampzo Learn`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute top-3 left-3 bg-dark/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">{post.category}</div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-gray-500 text-sm leading-relaxed">{post.preview}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button href={`/blog/${post.slug}`} variant="outline" className="group/btn">
                    Read Article <span className="ml-1 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="text-primary font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-pad bg-primary">
        <div className="section-shell text-center text-white">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Start Learning for Free Today</h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-white/80 sm:text-lg">
            Join over 10,000 students who are already mastering the skills of tomorrow. No credit card required to browse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/courses" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold shadow-lg">
              Browse All Courses
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="text-white border border-white/40 hover:bg-white/10">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
