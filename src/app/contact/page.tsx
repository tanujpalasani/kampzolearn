import type { Metadata } from 'next';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Kampzo Learn team for course queries, partnership opportunities, or general support.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Kampzo Learn',
    description:
      'Reach out to Kampzo Learn for support, partnerships, and student course guidance in India.',
    url: '/contact',
    type: 'website',
  },
};

const contactDetails = [
  { icon: Mail, label: "Email Support", value: "support@kampzolearn.com" },
  { icon: MessageSquare, label: "Business Inquiries", value: "partnerships@kampzolearn.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Office", value: "Connaught Place, New Delhi, India 110001" },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-dark py-16 text-white md:py-20">
        <div className="section-shell text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-xl text-base text-gray-400 sm:text-lg">
            Have a question, a partnership idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section-pad">
        <div className="section-shell max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-dark">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{c.label}</p>
                      <p className="text-dark font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="surface-card p-6">
                <h3 className="font-bold text-dark mb-2">Office Hours</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Monday – Friday: 9:00 AM – 6:00 PM IST<br />Saturday: 10:00 AM – 2:00 PM IST<br />Sunday: Closed</p>
              </div>
            </div>

            {/* Form */}
            <div className="surface-card p-6 md:p-10">
              <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-dark">Full Name</label>
                    <input id="name" type="text" placeholder="John Doe" className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-base text-dark placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-dark">Email Address</label>
                    <input id="email" type="email" placeholder="john@example.com" className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-base text-dark placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-dark">Subject</label>
                  <input id="subject" type="text" placeholder="Course enquiry, partnership, etc." className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-base text-dark placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-dark">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us how we can help you..." className="flex w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-base text-dark placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full h-12 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-sm">
                  Send Message
                </button>
                <p className="text-center text-xs text-gray-400">We typically respond within 24 hours on business days.</p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
