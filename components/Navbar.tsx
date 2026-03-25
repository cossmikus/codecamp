"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
              c
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              codecamp
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link href="/pricing" className="btn-primary text-sm px-4 py-2">
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
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
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-brand-border py-4 space-y-3 animate-fade-in">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-400 hover:text-white transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-400 hover:text-white transition-colors py-2"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-400 hover:text-white transition-colors py-2"
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors py-2"
              >
                Sign in
              </Link>
              <Link href="/pricing" className="btn-primary text-sm text-center">
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
