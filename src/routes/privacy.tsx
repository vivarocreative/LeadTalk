import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — LeadTalk" },
      {
        name: "description",
        content: "LeadTalk's privacy policy — how we handle your data and protect your privacy.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-brand-gray-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="LeadTalk" className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="rounded-xl border-2 border-brand-indigo/20 px-4 py-2 text-sm font-semibold text-brand-navy transition-all hover:border-brand-indigo/40 hover:bg-brand-indigo/5"
          >
            Back
          </Link>
        </div>
      </nav>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-brand-gray-600">Last updated: June 30, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-gray-800">
            <Section title="1. Introduction">
              LeadTalk ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our CRM conversation agent service.
            </Section>

            <Section title="2. Information We Collect">
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you sign up or request a demo.</li>
                <li><strong>Lead Data:</strong> Conversation transcripts, lead scores, and engagement metrics collected through the AI conversation agent.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including feature usage and performance metrics.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our CRM conversation agent service</li>
                <li>To qualify and score leads based on conversation analysis</li>
                <li>To communicate with you about your account, updates, and support</li>
                <li>To analyze usage patterns and improve AI conversation quality</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </Section>

            <Section title="4. Data Sharing and Disclosure">
              <p className="mb-3">We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our platform (hosting, analytics, AI model providers).</li>
                <li><strong>CRM Integrations:</strong> Your connected CRM platforms to sync lead data as you direct.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>
            </Section>

            <Section title="5. Data Security">
              We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
            </Section>

            <Section title="6. Data Retention">
              We retain your personal information and lead data for as long as your account is active or as needed to provide you services. You can request deletion of your data at any time by contacting us.
            </Section>

            <Section title="7. Your Rights">
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </Section>

            <Section title="8. Cookies">
              We use essential cookies to operate our platform. We may also use analytics cookies to understand usage patterns. You can control cookie preferences through your browser settings.
            </Section>

            <Section title="9. Changes to This Policy">
              We may update this Privacy Policy from time to time. We will notify you of material changes by email or through a notice on our website.
            </Section>

            <Section title="10. Contact Us">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@lead-talk.com" className="text-brand-indigo underline underline-offset-2 hover:text-brand-indigo/80">
                privacy@lead-talk.com
              </a>
            </Section>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-gray-200/60 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-brand-gray-600">
          &copy; {new Date().getFullYear()} LeadTalk. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-brand-navy">{title}</h2>
      <div className="text-brand-gray-600">{children}</div>
    </div>
  );
}
