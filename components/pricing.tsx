"use client"

import { useState } from "react"
import Link from "next/link"

export function Pricing() {
  const [billing, setBilling] = useState<"weekly" | "monthly">("monthly")

  const plans = [
    {
      name: "Free",
      price: "£0",
      period: "",
      description: "One complete application to see the difference for yourself.",
      cta: "Get started free",
      ctaStyle: "border",
      highlight: false,
      features: [
        "1 full CV generation cycle",
        "Profile builder (unlimited updates)",
        "Job site navigation",
        "Application tracker",
        "Includes cover letter & supporting statement",
        "No credit card required",
      ],
      note: "Start with one application — no commitment.",
    },
    {
      name: "Pro",
      price: billing === "weekly" ? "£4.99" : "£14.99",
      period: billing === "weekly" ? "/ week" : "/ month",
      description: "Unlimited applications for nurses applying at volume.",
      cta: "Start Pro",
      ctaStyle: "primary",
      highlight: true,
      features: [
        "Unlimited CV, cover letter & supporting statement generation",
        "AI-driven form autofill on all supported sites",
        "Contextual job chat per listing",
        "Application tracking with status history",
        "Document re-generation on demand",
        "Profile stored & synced across devices",
        "Priority generation — under 60 seconds",
        "PDF and .docx download",
      ],
      note: billing === "monthly" ? "Save vs. weekly. Cancel any time." : "Flexible — pause or cancel any time.",
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4 leading-[1.2]">
            Start free. Upgrade when you need more.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            One free application to experience the full workflow. Subscribe for unlimited applications — cancel any time.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center bg-muted rounded-[6px] p-1 gap-1">
            <button
              onClick={() => setBilling("weekly")}
              className={`px-4 py-2 text-sm font-medium rounded-[4px] transition-all ${
                billing === "weekly"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-[4px] transition-all flex items-center gap-2 ${
                billing === "monthly"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
              <span className="text-[10px] font-semibold text-accent bg-teal-subtle border border-accent/20 px-1.5 py-0.5 rounded-full">
                Best value
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[10px] p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-2 border-primary shadow-xl"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full text-accent-foreground"
                    style={{ background: "#0F766E" }}
                  >
                    Most popular
                  </span>
                </div>
              )}

              <div>
                <div className="text-sm font-semibold mb-2 opacity-70">{plan.name}</div>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm opacity-60 mb-1.5">{plan.period}</span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <Link
                href="#"
                className={`flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-[6px] transition-colors ${
                  plan.ctaStyle === "primary"
                    ? "text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground/60"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8.5 4.5L11 7l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-primary-foreground/70" : "text-accent"}`}
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
                    <span className={`text-sm leading-relaxed ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className={`text-xs ${plan.highlight ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Value call-out */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            A single NHS interview callback is worth more than the cost of a month&apos;s subscription.
          </p>
        </div>
      </div>
    </section>
  )
}
