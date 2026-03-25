import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Get Started", href: "/pricing" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/contact" },
    { label: "Support", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-card mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/20">
                c
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                codecamp
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Create stunning AI-powered characters and mascots for your brand,
              games, and social media.
            </p>
            <a
              href="mailto:cossmikus@gmail.com"
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              cossmikus@gmail.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} codecamp.asia. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Payments securely processed by{" "}
            <span className="text-slate-500">Paddle</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
