import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-dark text-white">
      <div className="section-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo.png" alt="Kampzo Learn logo representing affordable online courses in India" width={32} height={32} className="object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <span className="text-xl font-bold tracking-tight">
                Kampzo <span className="text-primary">Learn</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm text-gray-400 text-balance">
              The premium, affordable online learning platform for students in India. Master coding, digital marketing, and more with expert-led content.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                Twitter
              </Link>
              <Link href="https://github.com/tanujpalasani/kampzo_learn" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Subscribe</h3>
            <p className="mb-4 text-sm text-gray-400">
              Get the latest updates on new courses directly to your inbox.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter email"
                className="h-11 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="h-11 rounded-lg bg-primary px-5 py-2 text-sm font-semibold transition-colors hover:bg-primary-dark"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kampzo Learn. All rights reserved. Designed for students globally and locally in India.</p>
        </div>
      </div>
    </footer>
  );
}
