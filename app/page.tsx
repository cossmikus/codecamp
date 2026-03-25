import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "mascotcraft — AI-Powered Character & Mascot Creator",
  description:
    "Create stunning AI-powered custom characters and mascots in seconds. Export in PNG, SVG, and GIF. Perfect for branding, social media, and games.",
};

const features = [
  {
    emoji: "✨",
    title: "AI-Powered Generation",
    description:
      "Describe your character in plain English and watch our AI bring it to life in seconds. No design skills required.",
  },
  {
    emoji: "🎨",
    title: "Full Customization",
    description:
      "Fine-tune every detail — colors, styles, expressions, poses, accessories. Make it uniquely yours.",
  },
  {
    emoji: "📦",
    title: "Multi-Format Export",
    description:
      "Download your characters as PNG, SVG, or animated GIF. All formats, all resolutions, ready to use.",
  },
  {
    emoji: "🚀",
    title: "Instant Branding",
    description:
      "Perfect for brand mascots, social media avatars, game characters, sticker packs, and more.",
  },
  {
    emoji: "⚡",
    title: "Lightning Fast",
    description:
      "Generate a complete character set in under 30 seconds. Iterate quickly without waiting hours.",
  },
  {
    emoji: "🔒",
    title: "You Own It",
    description:
      "Pro and Business subscribers get full commercial rights to every character they create.",
  },
];

const faqs = [
  {
    q: "Do I need design skills to use mascotcraft?",
    a: "Not at all! Just describe your character in plain language — like \"a friendly robot with blue eyes and a space helmet\" — and our AI handles the rest. You can then tweak the result with our visual editor.",
  },
  {
    q: "Can I use my characters commercially?",
    a: "Yes! Pro and Business plan subscribers receive full commercial rights to all characters they create. Free plan exports include a watermark and are for personal use only.",
  },
  {
    q: "What file formats can I export?",
    a: "You can export your characters as high-resolution PNG, scalable SVG vector files, and animated GIFs. Business plan users also get access to our API for programmatic exports.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel anytime from your account dashboard. You'll retain access until the end of your billing period. We also offer a 14-day money-back guarantee for first-time subscribers.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! The Free plan lets you create up to 3 characters per month with basic styles. Exports include a watermark. Upgrade to Pro or Business for unlimited characters and HD exports.",
  },
  {
    q: "How does the API access work?",
    a: "Business plan subscribers get a REST API key to generate and retrieve characters programmatically. This is great for integrating character generation into your own apps or workflows.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Perfect for trying out mascotcraft",
    features: [
      "3 characters per month",
      "Basic styles only",
      "Watermarked exports",
      "PNG export",
      "Community support",
    ],
    cta: "Start for Free",
    href: "#",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For creators and freelancers",
    features: [
      "Unlimited characters",
      "All styles & expressions",
      "HD exports, no watermark",
      "PNG, SVG & GIF export",
      "Commercial license",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "#",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "API access",
      "Team collaboration",
      "Commercial license",
      "Dedicated support",
      "Custom style training",
    ],
    cta: "Start Business",
    href: "#",
    highlighted: false,
  },
];

const characterEmojis = ["🤖", "🧙‍♂️", "🦊", "🐉", "🧚", "👾", "🦸", "🐼"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Background glow */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Now with animated GIF exports
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 animate-fade-up">
            Create{" "}
            <span className="gradient-text-pink">AI Characters</span>
            <br />
            That Actually{" "}
            <span className="gradient-text">Pop</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up">
            Design custom mascots, avatars, and characters in seconds. Just
            describe what you want and let our AI do the heavy lifting — no
            design degree needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Link href="/pricing" className="btn-primary text-base px-8 py-3.5">
              Create Your Character
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#features"
              className="btn-secondary text-base px-8 py-3.5"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-600 animate-fade-in">
            Free plan available · No credit card required
          </p>

          {/* Floating character previews */}
          <div className="mt-16 relative">
            <div className="flex items-end justify-center gap-3 sm:gap-5 flex-wrap">
              {characterEmojis.map((emoji, i) => (
                <div
                  key={i}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-3xl sm:text-4xl shadow-xl hover:scale-110 hover:border-violet-500/40 transition-all duration-300 cursor-pointer"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.4}s`,
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600 italic">
              ↑ Sample characters — yours will be fully customized to your
              brand
            </p>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-brand-border bg-brand-card/50 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-500">
            <span>
              <strong className="text-white">5,000+</strong> characters created
            </span>
            <span className="hidden sm:block text-brand-border-light">|</span>
            <span>
              <strong className="text-white">1,200+</strong> happy creators
            </span>
            <span className="hidden sm:block text-brand-border-light">|</span>
            <span>
              <strong className="text-white">4.9/5</strong> average rating
            </span>
            <span className="hidden sm:block text-brand-border-light">|</span>
            <span>
              <strong className="text-white">30 seconds</strong> to first
              character
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">
              ✦ Features
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
              Everything you need to{" "}
              <span className="gradient-text">build your brand</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              From initial concept to production-ready assets in minutes, not
              days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group card hover:bg-brand-card-hover hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                  {feature.emoji}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 sm:py-32 bg-brand-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">✦ How It Works</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
              Three steps to your{" "}
              <span className="gradient-text">perfect character</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-violet-500/20 via-violet-500/40 to-violet-500/20" />

            {[
              {
                step: "01",
                emoji: "💬",
                title: "Describe Your Character",
                desc: "Tell us about your character in plain language. Include style, personality, colors, and any specific details.",
              },
              {
                step: "02",
                emoji: "⚡",
                title: "AI Generates It",
                desc: "Our AI creates multiple variations of your character in seconds. Pick your favorite or mix and match elements.",
              },
              {
                step: "03",
                emoji: "🎁",
                title: "Export & Use",
                desc: "Download in your preferred format — PNG, SVG, or GIF — and start using your character immediately.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-4xl group-hover:border-violet-500/40 group-hover:scale-105 transition-all">
                    {item.emoji}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                    {item.step.slice(-1)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">✦ Pricing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
              Simple,{" "}
              <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Start free. Upgrade when you&apos;re ready. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-violet-500 bg-gradient-to-b from-violet-500/10 to-brand-card shadow-xl shadow-violet-500/20 scale-[1.02]"
                    : "border-brand-border bg-brand-card hover:border-brand-border-light"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-500 text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-2.5 h-2.5 text-violet-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={
                    plan.highlighted
                      ? "btn-primary w-full text-center text-sm py-2.5"
                      : "btn-secondary w-full text-center text-sm py-2.5"
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
            >
              See full pricing comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-brand-card/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">✦ FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="card hover:bg-brand-card-hover group"
              >
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
              >
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600/20 via-brand-card to-blue-600/20 border border-violet-500/30 p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-card-glow pointer-events-none" />
            <div className="relative">
              <div className="text-5xl mb-6">🎨</div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                Ready to create your{" "}
                <span className="gradient-text">first character?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Join 1,200+ creators already using mascotcraft. Start for free —
                no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="btn-primary text-base px-10 py-3.5"
                >
                  Start Creating for Free
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  View all plans →
                </Link>
              </div>
              <p className="mt-5 text-xs text-slate-600">
                14-day money-back guarantee on paid plans
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
