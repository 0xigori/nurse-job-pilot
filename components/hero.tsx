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
        <div id="demo" className="relative max-w-4xl mx-auto pt-16 md:pt-20">
          {/* Demo */}
          <div
            style={{ position: "relative", boxSizing: "content-box", maxHeight: "80vh", width: "100%", aspectRatio: "1.71", padding: "40px 0 40px 0" }}>
            <iframe
              src="https://app.supademo.com/embed/cms91p3zd185vqm68ru4t9b5j?embed_v=2&utm_source=embed"
              loading="lazy"
              title="Join the Nurse Job Pilot Waitlist"
              allow="clipboard-write"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}>
            </iframe>
          </div>

          {/* Floating badge overlays */}
          <div className="absolute -bottom-4 left-4 md:left-8 hidden sm:flex items-center gap-2 bg-card border border-border shadow-lg rounded-[8px] px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-foreground">Documents tailored in less than 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
