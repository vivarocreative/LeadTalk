import { useState, useEffect, useRef } from "react";

type Message = {
  id: string;
  role: "lead" | "ai" | "human";
  content: string;
  timestamp: Date;
  products?: Product[];
};

type Product = {
  name: string;
  description: string;
  price: string;
};

const SUGGESTED_PRODUCTS: Product[] = [
  { name: "Enterprise Plan", description: "Full CRM suite with AI lead scoring", price: "$499/mo" },
  { name: "Sales Booster", description: "AI conversation agent add-on", price: "$199/mo" },
  { name: "Analytics Pro", description: "Advanced reporting & insights", price: "$149/mo" },
];

const AI_REPLIES: Record<string, string> = {
  hello: "Hi there! 👋 Welcome to LeadTalk. I'm your AI sales assistant. How can I help you today? Are you looking to improve your lead response time or streamline your sales process?",
  hi: "Hi there! 👋 Welcome to LeadTalk. I'm your AI sales assistant. How can I help you today? Are you looking to improve your lead response time or streamline your sales process?",
  pricing: "Great question! We offer three tiers:\n\n• **Starter** — $199/agent/month (up to 500 leads)\n• **Growth** — $499/agent/month (up to 2,000 leads) — Most Popular\n• **Enterprise** — Custom pricing for unlimited leads\n\nPlus a small per-handoff fee for qualified leads connected to your team. Which tier sounds right for your team size?",
  features: "Here are some features our customers love:\n\n• 🤖 **Human-like AI conversations** — natural, context-aware\n• ⚡ **Sub-30s response time** — strike while leads are hot\n• 🎯 **Smart qualification** — only surfaced qualified leads\n• 🔄 **Seamless handoff** — full context transfers to humans\n• 📊 **Analytics dashboard** — data-driven insights\n\nWant me to dive deeper into any of these?",
  demo: "I'd love to show you around! Our team can set up a personalized demo at your convenience. Would you prefer this week or next? I'll have a product specialist ready to walk through everything.",
  buy: "That's great to hear! Let me qualify a few things to make sure we find the perfect fit. How many leads does your team handle per month, and what CRM are you currently using?",
};

function getAIResponse(input: string): { text: string; products?: Product[] } {
  const lower = input.toLowerCase();
  if (lower.includes("product") || lower.includes("plan") || lower.includes("offer")) {
    return { text: AI_REPLIES.pricing, products: SUGGESTED_PRODUCTS };
  }
  for (const [key, reply] of Object.entries(AI_REPLIES)) {
    if (lower.includes(key)) {
      if (key === "pricing") return { text: reply, products: SUGGESTED_PRODUCTS };
      return { text: reply };
    }
  }
  return {
    text: "That's an interesting point! Let me connect you with more info. Our AI handles every lead with personalized conversations, qualifies them based on buying intent, and hands off only the hot ones to your team. Would you like to see our pricing options or maybe book a quick demo?",
  };
}

function ChatBubble({ message }: { message: Message }) {
  const isLead = message.role === "lead";
  const isHuman = message.role === "human";
  const isAI = message.role === "ai";

  let bgColor = "bg-brand-gray-100";
  let align = "items-start";
  let textColor = "text-brand-gray-900";
  let name = "LeadTalk AI";
  let avatar = (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-indigo to-brand-emerald text-xs font-bold text-white">
      LT
    </div>
  );

  if (isLead) {
    bgColor = "bg-brand-indigo/10";
    align = "items-end";
    textColor = "text-brand-navy";
    name = "You";
    avatar = (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gray-200 text-xs font-bold text-brand-gray-600">
        Y
      </div>
    );
  }

  if (isHuman) {
    bgColor = "bg-brand-emerald/10";
    textColor = "text-brand-emerald";
    name = "Sarah (Sales Rep)";
    avatar = (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-emerald text-xs font-bold text-white">
        S
      </div>
    );
  }

  return (
    <div className={`flex ${isLead ? "flex-row-reverse" : "flex-row"} gap-3 ${align}`}>
      {avatar}
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${bgColor} ${isLead ? "rounded-tr-md" : "rounded-tl-md"}`}>
        <p className={`text-xs font-semibold ${textColor} mb-1`}>{name}</p>
        <div className="text-sm leading-relaxed text-brand-gray-800 whitespace-pre-line">
          {message.content}
        </div>
        {message.products && message.products.length > 0 && (
          <div className="mt-3 grid gap-2">
            {message.products.map((product) => (
              <div key={product.name} className="rounded-xl border border-brand-gray-200 bg-white p-3 transition-all hover:shadow-md hover:border-brand-indigo/30">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-brand-navy">{product.name}</h4>
                  <span className="text-xs font-medium text-brand-emerald">{product.price}</span>
                </div>
                <p className="mt-1 text-xs text-brand-gray-600">{product.description}</p>
                <button className="mt-2 text-xs font-medium text-brand-indigo hover:text-brand-indigo/80 transition-colors">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        )}
        <p className="mt-1 text-[10px] text-brand-gray-400">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex flex-row gap-3 items-start">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-indigo to-brand-emerald text-xs font-bold text-white">
        LT
      </div>
      <div className="rounded-2xl rounded-tl-md bg-brand-gray-100 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-brand-indigo/60" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 animate-bounce rounded-full bg-brand-indigo/60" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 animate-bounce rounded-full bg-brand-indigo/60" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

function HandoffNotification() {
  return (
    <div className="flex flex-row gap-3 items-start">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-emerald text-xs font-bold text-white">
        S
      </div>
      <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-brand-emerald/10 px-4 py-3">
        <p className="text-xs font-semibold text-brand-emerald mb-1">Sarah (Sales Rep)</p>
        <p className="text-sm text-brand-gray-800">
          👋 Hi! I'm Sarah, and I'll be taking it from here. I've been briefed on everything we discussed.
          Let's find the perfect plan for your team. When would be a good time for a quick call?
        </p>
        <p className="mt-1 text-[10px] text-brand-gray-400">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
}

const QUICK_REPLIES = ["Hi! 👋", "Tell me about pricing", "What features do you have?", "I'm ready to buy"];

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "👋 Hey there! I'm LeadTalk AI. I can answer questions about our platform, share pricing, and help qualify your needs. What brings you here today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const [step, setStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const addMessage = (role: Message["role"], content: string, products?: Product[]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        role,
        content,
        timestamp: new Date(),
        products,
      },
    ]);
  };

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;
    addMessage("lead", text);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(text);
      setIsTyping(false);
      addMessage("ai", response.text, response.products);

      if (text.toLowerCase().includes("buy") || text.toLowerCase().includes("ready")) {
        setTimeout(() => {
          setShowHandoff(true);
          setStep(2);
        }, 1500);
      }
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-brand-gray-200/60 bg-white shadow-xl shadow-brand-indigo/5">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-brand-gray-200/60 bg-gradient-to-r from-brand-navy to-brand-navy-light px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
          LT
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">LeadTalk AI</p>
          <p className="text-[11px] text-white/60">
            {step === 2 ? "Sarah is with you" : "Typically replies instantly"}
          </p>
        </div>
        <div className={`h-2.5 w-2.5 rounded-full ${step === 2 ? "bg-brand-emerald animate-pulse" : "bg-brand-emerald"}`} />
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4" style={{ maxHeight: "420px", minHeight: "420px" }}>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        {showHandoff && !isTyping && <HandoffNotification />}
        {step === 0 && messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="rounded-full border border-brand-indigo/20 bg-white px-3 py-1.5 text-xs font-medium text-brand-indigo transition-all hover:border-brand-indigo/40 hover:bg-brand-indigo/5"
              >
                {reply}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-brand-gray-200/60 p-3">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={step === 2 ? "Chatting with Sarah..." : "Ask me anything..."}
            disabled={step === 2 || isTyping}
            className="flex-1 rounded-xl border border-brand-gray-200/60 bg-brand-gray-50 px-4 py-2.5 text-sm text-brand-gray-900 placeholder-brand-gray-400 outline-none transition-all focus:border-brand-indigo/40 focus:bg-white focus:ring-2 focus:ring-brand-indigo/10 disabled:opacity-50"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping || step === 2}
            className="flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-indigo to-brand-emerald px-4 text-white shadow-lg shadow-brand-indigo/25 transition-all hover:shadow-xl hover:shadow-brand-indigo/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
