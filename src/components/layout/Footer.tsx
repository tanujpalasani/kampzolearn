import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo.png" alt="Kampzo Learn Logo" width={32} height={32} className="object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <span className="text-xl font-bold tracking-tight">
                Kampzo <span className="text-primary">Learn</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 text-balance">
              The premium, affordable online learning platform for students in India. Master coding, digital marketing, and more with expert-led content.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
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
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-dark"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kampzo Learn. All rights reserved. Designed for students globally and locally in India.</p>
        </div>
      </div>
    </footer>
  );
}
