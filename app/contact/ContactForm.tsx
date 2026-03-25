"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Placeholder — integrate with your preferred email service
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (formState === "success") {
    return (
      <div className="card flex flex-col items-center justify-center text-center py-16 h-full">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl mb-5">
          ✅
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
        <p className="text-slate-400 mb-6 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <strong className="text-slate-300">{form.email}</strong> within 24
          hours.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="btn-secondary text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Name <span className="text-violet-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email <span className="text-violet-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Subject <span className="text-violet-400">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors appearance-none"
          >
            <option value="" disabled className="text-slate-600">
              Select a subject...
            </option>
            <option value="general">General question</option>
            <option value="billing">Billing or subscription</option>
            <option value="refund">Refund request</option>
            <option value="technical">Technical support</option>
            <option value="feature">Feature request</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Message <span className="text-violet-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-600">
            By submitting, you agree to our{" "}
            <a
              href="/privacy"
              className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            disabled={formState === "submitting"}
            className="btn-primary text-sm px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {formState === "submitting" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
