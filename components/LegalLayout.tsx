interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated = "March 25, 2026",
  children,
}: LegalLayoutProps) {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Disclaimer banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
          <strong>Legal Disclaimer:</strong> This document is a template and
          should be reviewed by a qualified legal professional before use. It
          does not constitute legal advice.
        </div>

        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2">
            Last updated: {lastUpdated}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {title}
          </h1>
        </div>

        <div className="prose prose-invert prose-slate max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-200 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-slate-400 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-slate-400 [&_ul]:space-y-1.5 [&_ul]:mb-4 [&_li]:leading-relaxed [&_a]:text-violet-400 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-violet-300 [&_strong]:text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}
