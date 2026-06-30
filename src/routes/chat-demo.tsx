import { createFileRoute, Link } from "@tanstack/react-router";
import ChatWidget from "~/components/ChatWidget";

export const Route = createFileRoute("/chat-demo")({
  component: ChatDemo,
  head: () => ({
    meta: [
      { title: "LeadTalk Chat Demo — See the AI in Action" },
      {
        name: "description",
        content:
          "Experience LeadTalk's AI-powered conversational interface. See how it engages leads with human-like chat, product suggestions, and seamless human handoff.",
      },
    ],
  }),
});

function ChatDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-gray-50 via-white to-brand-gray-50">
      <nav className="border-b border-brand-gray-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="LeadTalk" className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-indigo/20 px-4 py-2 text-sm font-semibold text-brand-navy transition-all hover:border-brand-indigo/40 hover:bg-brand-indigo/5"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-indigo/20 bg-brand-indigo/5 px-4 py-1.5 text-sm font-medium text-brand-indigo">
              Interactive Demo
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Experience the LeadTalk conversation
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-600">
              Try a live simulation of the LeadTalk AI chat interface. Ask about pricing, features, or tell it you're ready to buy — and watch the human handoff in action.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
            <div className="w-full max-w-md">
              <ChatWidget />
            </div>

            <div className="space-y-6 lg:pt-8">
              <div className="rounded-2xl border border-brand-gray-200/60 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-indigo/10 text-xs font-bold text-brand-indigo">1</span>
                  AI Conversation
                </h3>
                <p className="mt-2 text-sm text-brand-gray-600">Natural, human-like chat that builds rapport and answers questions instantly.</p>
              </div>
              <div className="rounded-2xl border border-brand-gray-200/60 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-indigo/10 text-xs font-bold text-brand-indigo">2</span>
                  Product Cards
                </h3>
                <p className="mt-2 text-sm text-brand-gray-600">Rich product suggestions appear inline when discussing plans or pricing.</p>
              </div>
              <div className="rounded-2xl border border-brand-gray-200/60 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-indigo/10 text-xs font-bold text-brand-indigo">3</span>
                  Human Handoff
                </h3>
                <p className="mt-2 text-sm text-brand-gray-600">Try saying "I'm ready to buy" to see how the AI hands off to a human with full context.</p>
              </div>
              <div className="rounded-2xl border border-brand-gray-200/60 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-indigo/10 text-xs font-bold text-brand-indigo">4</span>
                  Typing Indicators
                </h3>
                <p className="mt-2 text-sm text-brand-gray-600">Realistic loading states that simulate natural conversation pacing.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-emerald px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-all hover:shadow-xl hover:shadow-brand-indigo/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
