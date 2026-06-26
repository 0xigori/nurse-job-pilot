const JOB_SITE_LOGOS = [
  { badge: "NHS", badgeClass: "badge-nhs", name: "NHS Jobs", img: "/logos/nhs-jobs.png" },
  { badge: "trac", badgeClass: "badge-trac", name: "Trac Jobs", img: "/logos/trac-jobs.png" },
  { badge: "HJ", badgeClass: "badge-hj-co", name: "HealthJobs.co.uk", img: "/logos/healthjobs-co-uk.png" },
  { badge: "HJ", badgeClass: "badge-hj-uk", name: "HealthJobsUK", img: "/logos/healthjobs-uk.png" },
  { badge: "NN", badgeClass: "badge-nn", name: "NursingNetUK", img: "/logos/nursingnet-uk.png" },
  { badge: "N", badgeClass: "badge-nurses", name: "Nurses.co.uk", img: "/logos/nurses-co-uk.png" },
  { badge: "bupa", badgeClass: "badge-bupa", name: "Care Homes", img: "/logos/bupa.png" },
]

export function JobSites() {
  return (
    <section id="job-sites" className="bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Supported sites marquee */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance leading-[1.2] mb-4">
            Supported job sites
          </h2>
          <div className="relative overflow-hidden rounded-lg  py-4">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 marquee-fade-left" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 marquee-fade-right" />
            <div className="flex h-24 w-max animate-marquee hover:paused">
              {[...JOB_SITE_LOGOS, ...JOB_SITE_LOGOS].map((site, idx) => (
                <div key={idx} className="flex items-center gap-2.5 px-8 shrink-0">
                  <img src={site.img} alt={site.name} className="h-12 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
