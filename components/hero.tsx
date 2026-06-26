import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { WaitListForm } from "./waitlist-form";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, oklch(0.502 0.088 185.5 / 0.07), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mt-12 md:mt-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
            Your NHS job application,{" "}
            <span className="text-primary">done in minutes.</span>
          </h1>
          <p id="join" className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty mb-10">
            NurseJobPilot is a browser extension that reads the job listing, matches your experience to each
            essential criterion, and generates a tailored CV, supporting
            statement, and autofills the application form.
          </p>

          {/* Waitlist */}
          <WaitListForm />

          {/* Trust line */}
          <p className="mt-5 text-xs text-muted-foreground">
            Free to start · No credit card required · Works on NHS Jobs, TRAC Jobs &amp; more
          </p>
        </div>

        {/* Extension preview */}
        <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto">
          {/* Browser chrome wrapper */}
          <div className="rounded-lg border border-border shadow-2xl overflow-hidden bg-card">
            {/* Browser chrome bar */}
            <div className="h-10 bg-muted border-b border-border flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-5 bg-background rounded-sm flex items-center px-3">
                  <span className="text-[11px] text-muted-foreground truncate">
                    jobs.nhs.uk/vacancy/ICU-Staff-Nurse-Band-5
                  </span>
                </div>
              </div>
            </div>
            {/* Content area */}
            <div className="relative flex min-h-95 md:min-h-115">
              {/* Main page area (blurred/dimmed NHS Jobs page simulation) */}
              <div className="flex-1 bg-background p-6 hidden md:block">
                <div className="space-y-3 max-w-lg">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">NHS Jobs</div>
                  <div className="h-7 w-72 bg-muted rounded-sm" />
                  <div className="h-4 w-48 bg-muted/70 rounded-sm" />
                  <div className="h-px bg-border my-4" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-muted/50 rounded" />
                    <div className="h-3 w-5/6 bg-muted/50 rounded" />
                    <div className="h-3 w-4/6 bg-muted/50 rounded" />
                    <div className="h-3 w-full bg-muted/50 rounded" />
                    <div className="h-3 w-3/4 bg-muted/50 rounded" />
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="h-3 w-32 bg-muted/70 rounded font-semibold" />
                    <div className="space-y-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                          <div className="h-3 bg-muted/40 rounded" style={{ width: `${60 + i * 8}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* NurseJobPilot sidebar panel */}
              <div className="w-full md:w-80 shrink-0 bg-card border-l border-border flex flex-col overflow-hidden">
                {/* Sidebar header */}
                <div className="h-11 bg-primary flex items-center justify-between px-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-sm bg-primary-foreground/20 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M5.5 1L7 4H10L7.5 6.5L8.5 10L5.5 8L2.5 10L3.5 6.5L1 4H4L5.5 1Z" fill="white" />
                      </svg>
                    </div>
                    <span className="text-[12px] font-semibold text-primary-foreground">NurseJobPilot</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-primary-foreground">A</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-0.5 bg-muted relative">
                  <div className="absolute left-0 top-0 h-full bg-accent rounded-full" style={{ width: "72%" }} />
                </div>

                {/* Job header */}
                <div className="p-3 border-b border-border shrink-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-[13px] font-semibold text-foreground leading-tight">ICU Staff Nurse</h3>
                    <span className="shrink-0 text-[10px] font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Band 5</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">Barts Health NHS Trust · London</p>
                  <div className="flex items-center gap-3 mt-2 text-[10px] text-muted-foreground">
                    <span>£32,720–£39,769</span>
                    <span className="text-border">·</span>
                    <span>Apply by 25 Jul</span>
                  </div>
                </div>

                {/* Criteria summary */}
                <div className="px-3 py-2.5 border-b border-border shrink-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-foreground">12 essential criteria</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                      <span className="text-muted-foreground">10 high</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-muted-foreground">1 mid</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                      <span className="text-muted-foreground">1 needs input</span>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="p-3 grid grid-cols-2 gap-2 shrink-0">
                  {[
                    { label: "Tailor CV", primary: true },
                    { label: "Cover Letter", primary: false },
                    { label: "Supporting Statement", primary: false },
                    { label: "Chat", primary: false },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      className={`text-[11px] font-medium py-2 px-2 rounded-[6px] transition-colors text-center ${btn.primary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground border border-border hover:bg-muted"
                        }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Save role button */}
                <div className="px-3 pb-3 shrink-0">
                  <button className="w-full text-[11px] font-medium py-2 border border-border rounded-[6px] text-muted-foreground hover:bg-muted transition-colors">
                    Save role
                  </button>
                </div>

                {/* Criteria list preview */}
                <div className="flex-1 px-3 pb-3 overflow-hidden">
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-2">Criteria</p>
                  <div className="space-y-1.5">
                    {[
                      { text: "NMC registered adult nurse", conf: "high" },
                      { text: "ICU / critical care experience", conf: "high" },
                      { text: "Demonstrates NHS values", conf: "low" },
                    ].map((c) => (
                      <div key={c.text} className="flex items-center gap-2 py-1.5 px-2 rounded-sm bg-muted/50">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${c.conf === "high"
                            ? "bg-green-500"
                            : c.conf === "mid"
                              ? "bg-amber-500"
                              : "bg-red-500"
                            }`}
                        />
                        <span className="text-[10px] text-foreground leading-tight truncate">{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge overlays */}
          <div className="absolute -bottom-4 left-4 md:left-8 hidden sm:flex items-center gap-2 bg-card border border-border shadow-lg rounded-[8px] px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-foreground">CV tailored in 14 minutes</span>
          </div>
          <div className="absolute -top-3 right-4 md:right-8 hidden sm:flex items-center gap-2 bg-accent text-accent-foreground shadow-lg rounded-[8px] px-3 py-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-medium">NHS Jobs · TRAC · and more</span>
          </div>
        </div>
      </div>
    </section>
  )
}
