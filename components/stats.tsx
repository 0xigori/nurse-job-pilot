export function Stats() {
  const stats = [
    {
      value: "29,000+",
      label: "NHS nursing vacancies at any time",
      note: "Each requiring a tailored application",
    },
    {
      value: "3–5 hrs",
      label: "Average manual application time",
      note: "Per tailored NHS application",
    },
    {
      value: "<45 min",
      label: "Target time with NurseJobPilot",
      note: "From listing to submitted form",
    },
    {
      value: "43%",
      label: "UK graduates now use AI for applications",
      note: "Nursing candidates are no exception",
    },
  ]

  const testimonials = [
    {
      quote:
        "I spent my first month in the UK struggling with supporting statements. I did not understand STAR format at all. NurseJobPilot explained each criterion and built my examples from my ICU experience. I got two interview callbacks in week two.",
      name: "Amara K.",
      role: "ICU Staff Nurse, Band 5",
      location: "London NHS Trust",
      initials: "AK",
    },
    {
      quote:
        "I was applying to five roles at once and spending entire weekends just on applications. Now I open the listing, click Tailor CV, review it, and I am done. The autofill is genuinely impressive — it even reads the weird custom fields on trust-specific forms.",
      name: "Priya M.",
      role: "Community Nurse, Band 6",
      location: "Midlands NHS Trust",
      initials: "PM",
    },
    {
      quote:
        "Coming back after a career break, I had no idea how much NHS applications had changed. The contextual chat helped me understand what the hiring panel expects at Band 6, and the supporting statement captured my experience in a way I could not have written myself.",
      name: "Sarah T.",
      role: "Returning Band 5 Nurse",
      location: "Manchester",
      initials: "ST",
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-[10px] overflow-hidden mb-20">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-background p-6 md:p-8 flex flex-col gap-2">
              <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            From nurses using NurseJobPilot
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-balance">
            Written for nurses. Trusted by nurses.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-[10px] p-6 flex flex-col gap-4 hover:border-accent/30 hover:shadow-sm transition-all"
            >
              {/* Quote marks */}
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                className="text-accent/40"
                aria-hidden="true"
              >
                <path
                  d="M0 18V10.5C0 4.7 3.5 1.3 10.5 0l1 2C7 3 5 5 5 8h5v10H0zm13 0V10.5C13 4.7 16.5 1.3 23.5 0l1 2C20 3 18 5 18 8h5v10h-10z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-sm text-foreground leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-bold text-primary-foreground">{t.initials}</span>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-foreground">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
