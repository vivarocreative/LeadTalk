import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-gray-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="LeadTalk" className="h-8 w-auto" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-brand-gray-600 hover:text-brand-navy transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-brand-gray-600 hover:text-brand-navy transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-brand-gray-600 hover:text-brand-navy transition-colors">
              Pricing
            </a>
            <a href="/chat-demo" className="text-sm font-medium text-brand-gray-600 hover:text-brand-navy transition-colors">
              Chat Demo
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-emerald px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-all hover:shadow-xl hover:shadow-brand-indigo/30 hover:scale-[1.02] active:scale-[0.98]">
              Get a Demo
            </a>
          </div>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-emerald px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-all hover:shadow-xl hover:shadow-brand-indigo/30 hover:scale-[1.02] active:scale-[0.98] md:hidden">
            Get a Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 via-white to-brand-emerald/5" />
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-indigo/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-brand-emerald/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-indigo/20 bg-brand-indigo/5 px-4 py-1.5 text-sm font-medium text-brand-indigo">
              <span className="h-2 w-2 rounded-full bg-brand-emerald animate-pulse" />
              AI-Powered Lead Qualification
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">AI handles your leads.</span>
              <span className="mt-2 block bg-gradient-to-r from-brand-indigo to-brand-emerald bg-clip-text text-transparent">
                Humans close the deals.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-gray-600 sm:text-xl">
              LeadTalk plugs into your CRM and engages every inbound lead with human-like AI conversations.
              Only when a lead is ready to buy — qualified, interested, and warmed up — do we hand them off
              to your sales team.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-emerald px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-all hover:shadow-xl hover:shadow-brand-indigo/30 hover:scale-[1.02] active:scale-[0.98]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.406 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.954l-7.108 4.062A1.125 1.125 0 013 16.312V8.688zM12.75 8.688c0-.864.933-1.406 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.954l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                See LeadTalk in Action
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-indigo/20 px-6 py-3 text-base font-semibold text-brand-navy transition-all hover:border-brand-indigo/40 hover:bg-brand-indigo/5">
                Explore Features
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-brand-gray-600">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>&lt; 30s response time</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 lead engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>3x conversion rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Bar */}
      <section className="border-y border-brand-gray-200/60 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-brand-gray-600">
            Trusted by forward-thinking sales teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["Acme Motors", "Pinnacle Realty", "InsureFlow", "CloudLeads", "GrowthPoint"].map((name) => (
              <span key={name} className="text-lg font-bold text-brand-gray-200/70 tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Everything you need to convert more leads
            </h2>
            <p className="mt-4 text-lg text-brand-gray-600">
              LeadTalk handles the grunt work of lead engagement so your sales team can focus on closing.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
                title: "Human-Like AI Conversations",
                description:
                  "Natural, context-aware conversations that build rapport. Your leads won't know they're talking to AI — until you tell them.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
                title: "Smart Lead Qualification",
                description:
                  "AI asks the right questions, scores interest, and only surfaces leads that meet your criteria. No more chasing cold leads.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                ),
                title: "Seamless Human Handoff",
                description:
                  "When a lead is ready, the full conversation history transfers to your sales rep in real-time. They pick up without missing a beat.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Lightning-Fast Response",
                description:
                  "Average response time under 30 seconds — compared to the industry average of hours. Strike while the lead is hot.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Multi-Industry Adaptability",
                description:
                  "Trained for automotive, real estate, insurance, and more. LeadTalk adapts to your industry's specific sales language and workflows.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                ),
                title: "Actionable Analytics",
                description:
                  "See exactly how leads engage, what questions they ask, and where they drop off. Data-driven insights to refine your sales process.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-brand-gray-200/60 p-8 transition-all hover:border-brand-indigo/20 hover:shadow-lg hover:shadow-brand-indigo/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-indigo to-brand-emerald text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-brand-navy">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-brand-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              From lead to close in three steps
            </h2>
            <p className="mt-4 text-lg text-brand-gray-600">
              LeadTalk transforms your inbound lead pipeline into a predictable conversion machine.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect & Engage",
                description:
                  "Connect LeadTalk to your CRM. When a new lead comes in, the AI instantly starts a personalized conversation — answering questions, building rapport, and keeping them engaged.",
              },
              {
                step: "02",
                title: "Qualify & Score",
                description:
                  "The AI asks smart qualifying questions, gauges buying intent, and scores each lead. Only leads that meet your criteria move forward. Dead ends are handled gracefully.",
              },
              {
                step: "03",
                title: "Handoff & Close",
                description:
                  "When a lead is ready, the full conversation — context, questions asked, interest level — transfers to your sales rep in real-time. Humans close deals they're prepped for.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-emerald text-xl font-bold text-white shadow-lg shadow-brand-indigo/20">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "30s", label: "Avg. lead response time" },
              { value: "3x", label: "Higher conversion rate" },
              { value: "24/7", label: "Lead engagement uptime" },
              { value: "85%", label: "Leads qualified automatically" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-indigo to-brand-emerald bg-clip-text text-transparent sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-brand-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-white to-brand-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-brand-gray-600">
              Start small, scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$199",
                period: "/agent/month",
                description: "For small teams getting started with AI lead engagement.",
                features: [
                  "Up to 500 active leads/month",
                  "AI conversation engine",
                  "Basic lead qualification",
                  "Slack & email notifications",
                  "CRM integration (HubSpot, Salesforce)",
                ],
                cta: "Start Free Trial",
                popular: false,
              },
              {
                name: "Growth",
                price: "$499",
                period: "/agent/month",
                description: "For growing sales teams ready to scale.",
                features: [
                  "Up to 2,000 active leads/month",
                  "Advanced AI conversations",
                  "Smart scoring & qualification",
                  "Real-time handoff to humans",
                  "Analytics dashboard",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For organizations with complex sales workflows.",
                features: [
                  "Unlimited active leads",
                  "Custom AI training",
                  "Multi-CRM integration",
                  "Dedicated account manager",
                  "SLA guarantees",
                  "On-premise deployment option",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all ${
                  plan.popular
                    ? "border-brand-indigo/30 bg-white shadow-xl shadow-brand-indigo/10 ring-2 ring-brand-indigo/20"
                    : "border-brand-gray-200/60 bg-white hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-indigo to-brand-emerald px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-brand-navy">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-brand-navy">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-brand-gray-600">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-brand-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-brand-gray-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`mt-8 flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-indigo to-brand-emerald text-white shadow-lg shadow-brand-indigo/25 hover:shadow-xl hover:shadow-brand-indigo/30"
                      : "border-2 border-brand-indigo/20 text-brand-navy hover:border-brand-indigo/40 hover:bg-brand-indigo/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-gray-600">
            Plus a small per-handoff fee for each qualified lead connected to a human.{" "}
            <a href="#demo" className="font-medium text-brand-indigo hover:text-brand-indigo/80 underline underline-offset-2">
              Contact us for details
            </a>
          </p>
        </div>
      </section>

      {/* Demo / CTA Section */}
      <section id="demo" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-brand-navy" />
        <div className="absolute top-[-30%] right-[-20%] h-[600px] w-[600px] rounded-full bg-brand-indigo/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-20%] h-[500px] w-[500px] rounded-full bg-brand-emerald/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to stop chasing leads and start closing deals?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            See how LeadTalk can transform your sales pipeline. Book a personalized demo and we'll show you
            what AI-powered lead engagement looks like for your business.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-brand-navy shadow-lg transition-all hover:bg-brand-gray-100 hover:scale-[1.02] active:scale-[0.98]"
              onClick={(e) => {
                e.preventDefault();
                alert("Thanks for your interest! Demo booking will be available soon. In the meantime, reach out to sales@lead-talk.com");
              }}
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              onClick={(e) => {
                e.preventDefault();
                alert("Start your 14-day free trial! Email us at sales@lead-talk.com to get set up.");
              }}
            >
              Start Free Trial
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-gray-200/60 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="LeadTalk" className="h-7 w-auto" />
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-gray-600">
              <a href="#features" className="hover:text-brand-navy transition-colors">Features</a>
              <a href="#pricing" className="hover:text-brand-navy transition-colors">Pricing</a>
              <a href="/privacy" className="hover:text-brand-navy transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-brand-navy transition-colors">Terms</a>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-gray-200/40 pt-8 text-center text-sm text-brand-gray-600">
            &copy; {new Date().getFullYear()} LeadTalk. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
