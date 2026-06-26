export function Problem() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-6 leading-[1.15]">
            Every NHS application takes{" "}
            <span className="text-accent" style={{ color: "#2DD4BF" }}>
              3 to 5 hours.
            </span>{" "}
            That is not sustainable.
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed text-pretty">
            UK nurses applying for NHS roles face the same painful cycle on every
            application — and most applicants experience significant burnout
            before even getting to interview.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-[10px] overflow-hidden">
          {[
            {
              step: "01",
              title: "Read the job description",
              body: "Parse the role requirements, person specification, and essential criteria. Cross-reference against your own experience. For international nurses, decipher NHS-specific language like STAR format, AfC banding, and NHS Values.",
            },
            {
              step: "02",
              title: "Write tailored content",
              body: "Draft a CV with STAR-format clinical examples for every essential criterion. Write a supporting statement. Write a cover letter aligned to this specific trust. Each from a blank document, every single time.",
            },
            {
              step: "03",
              title: "Re-enter everything manually",
              body: "Open the application form. Re-type your personal details, NMC number, work history, education, and generated content — into a different form structure for every single NHS Trust.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-primary p-8 flex flex-col gap-4"
            >
              <span className="text-xs font-bold text-primary-foreground/40 tracking-widest">{item.step}</span>
              <h3 className="text-base font-semibold text-primary-foreground leading-snug">{item.title}</h3>
              <p className="text-sm text-primary-foreground/65 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-foreground/70 text-sm md:text-base">
            Result: good nurses withdraw from roles, applications arrive late,
            and submitted work under-represents the candidate&apos;s actual capability.
          </p>
        </div>
      </div>
    </section>
  )
}
