import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — LeadTalk" },
      {
        name: "description",
        content: "LeadTalk's terms of service — the rules and guidelines for using our CRM conversation agent platform.",
      },
    ],
  }),
});

function TermsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-brand-gray-600">Last updated: June 30, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-gray-800">
            <Section title="1. Acceptance of Terms">
              By accessing or using LeadTalk ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </Section>

            <Section title="2. Description of Service">
              LeadTalk provides an AI-powered CRM conversation agent that engages, qualifies, and hands off sales leads to human sales representatives. The Service integrates with third-party CRM platforms and uses artificial intelligence to conduct conversations with potential customers.
            </Section>

            <Section title="3. Account Registration">
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and complete information when creating an account.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You must notify us immediately of any unauthorized use of your account.</li>
                <li>You must be at least 18 years old to use the Service.</li>
              </ul>
            </Section>

            <Section title="4. Subscription and Billing">
              <ul className="list-disc pl-6 space-y-2">
                <li>Service fees are billed monthly per sales agent seat.</li>
                <li>A per-handoff fee applies for each qualified lead connected to a human representative.</li>
                <li>All fees are non-refundable except as expressly stated in our refund policy.</li>
                <li>We may change our fees with 30 days' notice.</li>
                <li>Late payments may result in service suspension.</li>
              </ul>
            </Section>

            <Section title="5. Acceptable Use">
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to reverse engineer, decompile, or hack the Service</li>
                <li>Use the Service to send deceptive, fraudulent, or unsolicited communications</li>
                <li>Impersonate any person or entity or falsely represent your affiliation</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Use the Service in a way that could damage our reputation or business</li>
              </ul>
            </Section>

            <Section title="6. AI Conversation Agent">
              <ul className="list-disc pl-6 space-y-2">
                <li>The AI agent is designed to conduct human-like conversations but should be clearly identified as AI when required.</li>
                <li>We continuously improve the AI's performance but do not guarantee perfect conversation outcomes.</li>
                <li>You are responsible for reviewing AI-generated conversations for compliance with your industry regulations.</li>
                <li>We may use anonymized conversation data to improve the AI model.</li>
              </ul>
            </Section>

            <Section title="7. Data Ownership">
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of all lead data and conversation content you input into the Service.</li>
                <li>We own the AI models, algorithms, and platform technology.</li>
                <li>We may use aggregated, de-identified data for analytics and product improvement.</li>
              </ul>
            </Section>

            <Section title="8. Limitation of Liability">
              To the maximum extent permitted by law, LeadTalk shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </Section>

            <Section title="9. Termination">
              Either party may terminate this agreement with 30 days' written notice. We may terminate immediately if you violate these terms. Upon termination, your access to the Service will cease, and we will delete your data within 90 days unless required to retain it by law.
            </Section>

            <Section title="10. Changes to Terms">
              We reserve the right to modify these terms at any time. We will notify you of material changes via email or through the Service. Continued use after changes constitutes acceptance of the new terms.
            </Section>

            <Section title="11. Governing Law">
              These terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.
            </Section>

            <Section title="12. Contact">
              For questions about these terms, please contact us at{" "}
              <a href="mailto:legal@lead-talk.com" className="text-brand-indigo underline underline-offset-2 hover:text-brand-indigo/80">
                legal@lead-talk.com
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
