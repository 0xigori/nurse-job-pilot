export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Build your profile once",
      description:
        "Add your experience, education, certifications, and clinical skills, or import your existing CV in PDF or .docx. Your profile is stored securely and reused across every application.",
      tag: "One-time setup",
      tagColor: "bg-teal-subtle text-accent border-accent/20",
      details: [
        "Upload existing CV or fill in structured forms",
        "AI extracts and maps your profile automatically",
        "Low-confidence fields flagged for your review",
        "NMC number, right-to-work status stored encrypted",
      ],
    },
    {
      number: "2",
      title: "Open any NHS job listing",
      description:
        "NurseJobPilot detects supported job sites and shows a discreet indicator. Click it: the sidebar appears alongside the listing, showing you the role, AfC band, and every essential criterion.",
      tag: "Zero friction",
      tagColor: "bg-teal-subtle text-accent border-accent/20",
      details: [
        "Works on NHS Jobs, TRAC Jobs, HealthJobsUK & more",
        "AfC band, trust, salary, and deadline surfaced instantly",
        "Person specification criteria extracted automatically",
        "Confidence score shown per criterion before generation",
      ],
    },
    {
      number: "3",
      title: "Generate tailored documents",
      description:
        "Click Tailor CV. The extension reads the person specification and matches your profile to each criterion. It generates a full CV with STAR examples, cover letter, and supporting statement.",
      tag: "Under 45 minutes",
      tagColor: "bg-navy-subtle text-primary border-primary/20",
      details: [
        "Minimum 3 STAR-format clinical examples per criterion",
        "NHS/HEE-standard language and AfC-appropriate framing",
        "Clarifying question if confidence drops below 95%",
        "Download as PDF or .docx, ready to submit",
      ],
    },
    {
      number: "4",
      title: "Autofill the application form",
      description:
        "When you open the application form, NurseJobPilot reads the DOM and prefills every field. Review, make corrections, and submit yourself; the extension never submits on your behalf.",
      tag: "You stay in control",
      tagColor: "bg-teal-subtle text-accent border-accent/20",
      details: [
        "AI interprets form fields: no hardcoded mappings",
        "Teal border on prefilled fields, amber on uncertain",
        "Existing values never silently overwritten",
        "Application tracked automatically after submission",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance leading-[1.2] mb-4">
            From job listing to submitted application. In one workflow.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            NurseJobPilot lives in your browser. It activates at the moment of
            intent: when you are looking at a role you want to apply for.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group grid md:grid-cols-[80px_1fr_1fr] gap-6 p-6 md:p-8 rounded-[10px] border border-border hover:border-accent/30 hover:bg-card transition-all duration-200"
            >
              {/* Step number */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className="w-10 h-10 rounded-[6px] bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block w-px h-full mt-3 bg-border ml-5" />
                )}
              </div>

              {/* Main content */}
              <div className="flex flex-col gap-3">
                <div>
                  <span
                    className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full border mb-3 ${step.tagColor}`}
                  >
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Detail bullets */}
              <div className="flex flex-col justify-center">
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
