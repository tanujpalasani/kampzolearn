import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/kampzolearn/",
      label: "Instagram",
      icon: FaInstagram,
      className: "hover:bg-pink-500/20 hover:text-pink-300",
    },
    {
      href: "https://www.youtube.com/channel/UCtA6Rd7Zyu7HuUe0Bpl_2sw",
      label: "YouTube",
      icon: FaYoutube,
      className: "hover:bg-red-500/20 hover:text-red-300",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61577422469903",
      label: "Facebook",
      icon: FaFacebookF,
      className: "hover:bg-blue-500/20 hover:text-blue-300",
    },
    {
      href: "https://whatsapp.com/channel/0029Vb6vEMu5q08j5jXfTq1K",
      label: "WhatsApp Channel",
      icon: FaWhatsapp,
      className: "hover:bg-green-500/20 hover:text-green-300",
    },
  ];

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
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 ${social.className}`}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
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
