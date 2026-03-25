"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for trying out mascotcraft",
    highlighted: false,
    features: {
      "Characters per month": "3",
      Styles: "Basic only",
      Exports: "PNG (watermarked)",
      Resolution: "Standard",
      "Commercial license": false,
      "API access": false,
      "Team collaboration": false,
      Support: "Community",
      "GIF exports": false,
      "SVG exports": false,
      "Custom style training": false,
      "Priority support": false,
    },
    cta: "Start for Free",
    href: "#",
  },
  {
    name: "Pro",
    monthlyPrice: 9,
    annualPrice: 7,
    description: "For creators and freelancers",
    highlighted: true,
    badge: "Most Popular",
    features: {
      "Characters per month": "Unlimited",
      Styles: "All styles",
      Exports: "PNG, SVG, GIF",
      Resolution: "HD (up to 4K)",
      "Commercial license": true,
      "API access": false,
      "Team collaboration": false,
      Support: "Priority email",
      "GIF exports": true,
      "SVG exports": true,
      "Custom style training": false,
      "Priority support": true,
    },
    cta: "Start Pro",
    href: "#",
  },
  {
    name: "Business",
    monthlyPrice: 29,
    annualPrice: 24,
    description: "For teams and agencies",
    highlighted: false,
    features: {
      "Characters per month": "Unlimited",
      Styles: "All styles + custom",
      Exports: "PNG, SVG, GIF",
      Resolution: "HD (up to 4K)",
      "Commercial license": true,
      "API access": true,
      "Team collaboration": true,
      Support: "Dedicated manager",
      "GIF exports": true,
      "SVG exports": true,
      "Custom style training": true,
      "Priority support": true,
    },
    cta: "Start Business",
    href: "#",
  },
];

const featureRows = [
  "Characters per month",
  "Styles",
  "Exports",
  "Resolution",
  "GIF exports",
  "SVG exports",
  "Commercial license",
  "API access",
  "Team collaboration",
  "Custom style training",
  "Priority support",
  "Support",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-violet-400 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-slate-700 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function PricingClient() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 text-center">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <span className="section-tag mb-6">✦ Pricing</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
            Simple,{" "}
            <span className="gradient-text">honest</span> pricing
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises.
            Cancel anytime.
          </p>

          {/* Annual / Monthly toggle */}
          <div className="inline-flex items-center gap-1 bg-brand-card border border-brand-border rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annual
              <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-violet-500 bg-gradient-to-b from-violet-500/10 to-brand-card shadow-2xl shadow-violet-500/20"
                    : "border-brand-border bg-brand-card hover:border-brand-border-light"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-600 text-white whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">
                    {plan.name}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-slate-500 text-sm">/month</span>
                    )}
                  </div>
                  {annual && plan.monthlyPrice > 0 && (
                    <p className="text-xs text-slate-500 mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                </div>

                <Link
                  href={plan.href}
                  className={
                    plan.highlighted
                      ? "btn-primary w-full text-center text-sm py-3 mb-6 block"
                      : "btn-secondary w-full text-center text-sm py-3 mb-6 block"
                  }
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {Object.entries(plan.features).map(([key, val]) => (
                    <li key={key} className="flex items-start gap-2.5 text-sm">
                      {typeof val === "boolean" ? (
                        val ? (
                          <svg
                            className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )
                      ) : (
                        <svg
                          className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          typeof val === "boolean" && !val
                            ? "text-slate-600"
                            : "text-slate-300"
                        }
                      >
                        {typeof val === "string" ? (
                          <>
                            <span className="text-slate-500">{key}: </span>
                            {val}
                          </>
                        ) : (
                          <span className={!val ? "line-through" : ""}>{key}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 sm:py-24 bg-brand-card/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-black text-white text-center mb-12">
            Full feature comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-brand-border">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b border-brand-border bg-brand-card">
                  <th className="text-left p-4 text-sm font-semibold text-slate-400">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`p-4 text-center text-sm font-bold ${
                        plan.highlighted ? "text-violet-300" : "text-white"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, i) => (
                  <tr
                    key={row}
                    className={`border-b border-brand-border last:border-0 ${
                      i % 2 === 0 ? "bg-brand-dark/30" : ""
                    }`}
                  >
                    <td className="p-4 text-sm text-slate-400">{row}</td>
                    {plans.map((plan) => {
                      const val =
                        plan.features[row as keyof typeof plan.features];
                      return (
                        <td key={plan.name} className="p-4 text-center">
                          {typeof val === "boolean" ? (
                            val ? <CheckIcon /> : <XIcon />
                          ) : (
                            <span className="text-sm text-slate-300">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Money back */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 text-3xl mb-6">
            🛡️
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            14-Day Money-Back Guarantee
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto">
            Not happy with mascotcraft? Get a full refund within 14 days of your
            first paid subscription — no questions asked. Processed through
            Paddle, our trusted payment partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#" className="btn-primary px-8">
              Start Your Free Trial
            </Link>
            <Link
              href="/refund"
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
            >
              Read our refund policy
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-brand-card/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white text-center mb-12">
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans at any time?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, and you'll be charged the prorated difference. Downgrades take effect at the start of your next billing cycle.",
              },
              {
                q: "What happens to my characters if I cancel?",
                a: "Your characters are yours. Download them before canceling. After cancellation, you'll retain access on the Free plan with existing characters viewable but no new generation.",
              },
              {
                q: "Do you offer discounts for nonprofits or students?",
                a: "Yes, we offer 50% discounts for verified nonprofits and students. Contact us at cossmikus@gmail.com with proof of eligibility.",
              },
              {
                q: "How does annual billing work?",
                a: "Annual plans are billed once per year upfront. You save ~20% compared to monthly billing. You can cancel before renewal to avoid being charged for the next year.",
              },
            ].map((faq) => (
              <div key={faq.q} className="card hover:bg-brand-card-hover group">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
