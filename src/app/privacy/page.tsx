import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Kampzo Learn privacy policy to understand how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-dark py-16 text-white md:py-20">
        <div className="section-shell">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Your privacy matters to us. This page explains what data we collect and how we use it.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell max-w-3xl space-y-8 rounded-2xl border border-gray-100 bg-white p-6 text-gray-700 shadow-sm leading-relaxed md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">1. Information We Collect</h2>
            <p>
              We may collect information that you provide directly, such as your name, email address,
              and message details when you contact us or subscribe to updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">2. How We Use Information</h2>
            <p>
              We use your information to respond to inquiries, improve our courses and platform
              experience, and share important updates related to Kampzo Learn.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">3. Cookies and Analytics</h2>
            <p>
              We may use analytics tools and cookies to understand site usage and improve performance.
              You can manage cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">4. Data Security</h2>
            <p>
              We implement reasonable safeguards to protect your data. However, no internet
              transmission is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">5. Contact</h2>
            <p>
              For privacy-related questions, contact us at support@kampzolearn.com.
            </p>
          </div>

          <p className="text-sm text-gray-500">Last updated: March 24, 2026</p>
        </div>
      </section>
    </div>
  );
}
