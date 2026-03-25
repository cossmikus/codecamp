import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the codecamp.asia team. We typically respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag mb-4">✦ Contact</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
            Get in <span className="gradient-text">touch</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Have a question, feedback, or need help? We&apos;d love to hear from
            you. We typically respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl mb-4">
                📧
              </div>
              <h3 className="font-semibold text-white mb-1">Email Support</h3>
              <p className="text-sm text-slate-500 mb-2">
                For general questions and support
              </p>
              <a
                href="mailto:cossmikus@gmail.com"
                className="text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
              >
                cossmikus@gmail.com
              </a>
            </div>

            <div className="card">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-white mb-1">Response Time</h3>
              <p className="text-sm text-slate-500">
                We aim to respond within{" "}
                <strong className="text-slate-300">24 hours</strong> on business
                days. Pro and Business subscribers receive priority support.
              </p>
            </div>

            <div className="card">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl mb-4">
                📚
              </div>
              <h3 className="font-semibold text-white mb-2">
                Before you reach out
              </h3>
              <p className="text-sm text-slate-500 mb-3">
                You might find a quick answer in our FAQ section.
              </p>
              <Link
                href="/#features"
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
              >
                Visit FAQ →
              </Link>
            </div>

            <div className="card">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl mb-4">
                💳
              </div>
              <h3 className="font-semibold text-white mb-1">
                Billing & Refunds
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                Billing is handled by Paddle. For refund requests, see our
                policy.
              </p>
              <Link
                href="/refund"
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
              >
                Refund Policy →
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
