import { useState } from "react"

const faqs = [
  {
    question: "Do I need to understand NHS application format to use this?",
    answer:
      "No. NurseJobPilot is specifically built for nurses who are unfamiliar with NHS person specifications, STAR-format supporting statements, AfC banding, and NHS values framing. The extension explains what each section requires and builds the content from your clinical experience.",
  },
  {
    question: "Does it work for international nurses?",
    answer:
      "Yes, this is the primary use case. International nurses with strong clinical experience from the Philippines, India, Nigeria, and other countries are structurally disadvantaged by NHS application format alone. NurseJobPilot translates your experience into the exact structure UK NHS hiring panels expect.",
  },
  {
    question: "Will my profile data be stored securely?",
    answer:
      "Your profile is stored server-side and encrypted in transit and at rest. Sensitive fields like your NMC registration number and right-to-work status are encrypted with AES-256-GCM. UK GDPR compliant. You can request deletion of all your data at any time from your account settings.",
  },
  {
    question: "Does it submit my application automatically?",
    answer:
      "No, and this is by design. NurseJobPilot prefills the form fields and highlights what it has filled. You review every field before submitting manually. The extension never auto-submits, and it never silently overwrites a field you have already filled yourself.",
  },
  {
    question: "What happens if the extension cannot find the person specification?",
    answer:
      "The extension tells you clearly and does not attempt to generate documents without it. If the person specification is behind a login, it prompts you to authenticate first. If it is a PDF attachment, it asks for your permission before downloading. It does not guess or proceed without the required input.",
  },
  {
    question: "How is this different from ChatGPT or a generic CV builder?",
    answer:
      "Generic AI tools do not know what NHS person specifications are, how STAR format works in a clinical context, what AfC band language sounds like, or how NHS Trust application forms are structured. NurseJobPilot is built specifically for this workflow: it reads the live job page, maps your clinical experience, and handles the autofill. No copy-pasting, no rephrasing prompts.",
  },
  {
    question: "Which browsers and job sites are supported?",
    answer:
      "Chrome only at launch (Edge and Firefox are planned post-launch). Supported job sites include NHS Jobs, TRAC Jobs, HealthJobsUK, NursingNetUK, Nurses.co.uk, HealthJobs.co.uk, SocialCare.co.uk, Bupa Care Homes, Barchester Healthcare, and individual NHS Trust career pages running Trac-hosted systems.",
  },
  {
    question: "Can I use my documents across multiple devices?",
    answer:
      "Yes. Your profile and all generated document metadata are stored server-side. Log in on any device with Chrome installed and your profile and application history are available immediately, no re-import or re-entry required.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[280px_1fr] gap-12">
          {/* Left column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-balance leading-[1.2] mb-4">
              Questions from nurses
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Anything else on your mind? The contextual chat inside the extension can answer questions about specific roles, NHS terminology, and your application approach.
            </p>
          </div>

          {/* Right column — accordion */}
          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b border-border last:border-b-0">
                <button
                  className="flex items-start justify-between gap-4 w-full py-4 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-relaxed">
                    {faq.question}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`flex-shrink-0 mt-0.5 text-muted-foreground transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
