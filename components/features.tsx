function FeatureIcon({ path }: { path: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-[6px] bg-teal-subtle border border-accent/20 flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent" aria-hidden="true">
        {path}
      </svg>
    </div>
  )
}

const features = [
  {
    icon: (
      <path d="M3 4h12M3 8h8M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    ),
    title: "NHS-specific CV generation",
    description:
      "Generates a tailored CV with a minimum of 3 STAR-format clinical examples per essential criterion — mapped directly from your profile to the job's person specification.",
    badge: "AI-powered",
  },
  {
    icon: (
      <path d="M15 3H3v12h12V3zM6 7h6M6 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: "Supporting statement & cover letter",
    description:
      "Structured NHS supporting statements that address each criterion in sequence, plus a cover letter aligned to the trust's values and the specific role.",
    badge: "STAR format",
  },
  {
    icon: (
      <path d="M14 8h-4V4M14 8l-5 5-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: "AI-driven form autofill",
    description:
      "No hardcoded field mappings. The extension reads each form's DOM and interprets field intent — adapting to every NHS Trust's different application structure automatically.",
    badge: "Smart mapping",
  },
  {
    icon: (
      <path d="M9 3v6l4 2M3 9a6 6 0 1 0 12 0 6 6 0 0 0-12 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: "Application tracker",
    description:
      "Every role you engage with is tracked automatically — from Saved through to Offer or Rejected. Update status with one click. Access documents across devices.",
    badge: "Built-in",
  },
  {
    icon: (
      <path d="M9 2l1.5 3H14l-2.5 2 1 3L9 8.5 6.5 10l1-3L5 5h3.5L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: "Confidence-first generation",
    description:
      "The assistant never guesses. When it cannot produce a confident STAR example at 95% threshold, it pauses and asks a targeted question — then continues with your input.",
    badge: "Honest AI",
  },
  {
    icon: (
      <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: "Contextual job chat",
    description:
      "Ask the assistant anything about the role. It is pre-loaded with your profile and the full job context — so you never have to paste text or re-explain your background.",
    badge: "In context",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance leading-[1.2] mb-4">
            Everything a UK nursing application requires. Nothing it does not.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            NurseJobPilot is purpose-built for NHS job applications — not a
            generic AI CV tool retrofitted for healthcare.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-[10px] p-6 flex flex-col gap-4 hover:border-accent/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <FeatureIcon path={feature.icon} />
                <span className="text-[11px] font-semibold text-accent bg-teal-subtle border border-accent/15 px-2 py-0.5 rounded-full">
                  {feature.badge}
                </span>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supported sites row */}
        <div className="mt-12 p-6 bg-card border border-border rounded-[10px]">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Supported job sites
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "NHS Jobs",
              "TRAC Jobs",
              "HealthJobsUK",
              "NursingNetUK",
              "Nurses.co.uk",
              "HealthJobs.co.uk",
              "Bupa Care Homes",
              "Barchester Healthcare",
              "NHS Trust career pages",
            ].map((site) => (
              <span
                key={site}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-muted border border-border rounded-full text-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {site}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
