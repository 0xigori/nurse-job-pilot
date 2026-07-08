// Sample content — mirrors the CMS content model (Blog Post, Author, Category, Tag, Featured Post).

export interface Author {
  name: string
  slug: string
  bio: string
  initials: string
}

export interface Category {
  name: string
  slug: string
  description?: string
}

export interface Tag {
  name: string
  slug: string
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  /** Paragraphs separated by a blank line — stands in for the rich text field. */
  body: string
  /** Featured image asset path. */
  image: string
  author: Author
  categories: Category[]
  tags: Tag[]
  publishedDate: string // ISO 8601
  readingTime?: number
  seoTitle?: string
  seoDescription?: string
}

export const authors: Record<string, Author> = {
  priya: {
    name: "Priya Nair",
    slug: "priya-nair",
    bio: "Immigration and visa specialist who spent six years advising internationally trained nurses on UK relocation.",
    initials: "PN",
  },
  daniel: {
    name: "Daniel Okafor",
    slug: "daniel-okafor",
    bio: "Careers editor and former NHS recruitment lead, focused on helping candidates navigate Trust hiring processes.",
    initials: "DO",
  },
  amara: {
    name: "Amara Chen",
    slug: "amara-chen",
    bio: "Registered nurse and clinical content lead, writing on NHS applications, values-based recruitment, and career progression.",
    initials: "AC",
  },
}

export const categories: Record<string, Category> = {
  industryNews: { name: "Industry News", slug: "industry-news", description: "Updates on UK healthcare hiring and policy." },
  visa: { name: "Visa & Relocation", slug: "visa-relocation", description: "Guidance for internationally trained nurses moving to the UK." },
  interview: { name: "Interview Tips", slug: "interview-tips", description: "Preparing for and passing NHS interviews." },
  applications: { name: "CV & Applications", slug: "cv-applications", description: "Writing CVs and supporting statements that get shortlisted." },
  career: { name: "Career Guidance", slug: "career-guidance", description: "Pay, bands, and progressing an NHS nursing career." },
}

export const tags: Record<string, Tag> = {
  nhs: { name: "NHS", slug: "nhs" },
  visa: { name: "Visa", slug: "visa" },
  interview: { name: "Interview", slug: "interview" },
  cv: { name: "CV", slug: "cv" },
  payBands: { name: "Pay & Bands", slug: "pay-bands" },
  internationalNurses: { name: "International Nurses", slug: "international-nurses" },
  supportingStatement: { name: "Supporting Statement", slug: "supporting-statement" },
  recruitment: { name: "Recruitment", slug: "recruitment" },
}

export const posts: BlogPost[] = [
  {
    title: "Is the UK Still Hiring International Nurses in 2026?",
    slug: "is-the-uk-still-hiring-international-nurses",
    excerpt:
      "Visa rules and Trust hiring budgets have shifted since the pandemic-era boom. Here's what the current data actually says about international nurse recruitment.",
    body: `The headlines have swung from "NHS recruitment crisis" to "visa crackdown" more than once in the last few years, and it's left a lot of internationally trained nurses unsure whether it's still worth applying. The short answer is yes, but the shape of the opportunity has changed.

NHS Trusts are still sponsoring Health and Care Worker visas for registered nurses, particularly in adult and mental health nursing, where vacancy rates remain above the wider workforce average. What has changed is the mix: fewer large-batch overseas recruitment drives, more steady, role-by-role hiring through individual Trust job boards and NHS Jobs.

That means the process looks less like a single recruitment campaign and more like a standard competitive application: person specification, supporting statement, shortlisting, interview. Candidates who treat it that way, matching their experience explicitly to each essential criterion, are still getting offers at a healthy rate.

The practical takeaway: international nurses shouldn't wait for a big sponsored intake. Registering with the NMC, keeping OET or IELTS scores current, and applying directly to Trust vacancies remains the most reliable path in 2026.`,
    image: "/blog/is-the-uk-still-hiring-international-nurses.svg",
    author: authors.priya,
    categories: [categories.industryNews, categories.visa],
    tags: [tags.nhs, tags.visa, tags.internationalNurses],
    publishedDate: "2026-06-02T09:00:00Z",
    readingTime: 6,
    seoTitle: "Is the UK Still Hiring International Nurses in 2026? | NurseJobPilot",
    seoDescription:
      "A clear look at current NHS visa sponsorship and hiring patterns for internationally trained nurses applying to UK Trusts in 2026.",
  },
  {
    title: "How to Pass an NHS Job Interview",
    slug: "how-to-pass-an-nhs-job-interview",
    excerpt:
      "NHS interviews are built around the person specification and NHS values. Here's how to prepare answers that actually map to what panels are scoring.",
    body: `Most NHS interview panels aren't looking for a polished performance; they're working through a scoring matrix tied directly to the person specification and the seven NHS values. If your answers don't map cleanly onto those criteria, even strong clinical experience can score poorly.

Start by pulling the essential and desirable criteria from the job description and person specification, and prepare one STAR-format example (Situation, Task, Action, Result) for each. Panels consistently mark down answers that describe a situation in general terms but never state a measurable result, so end every answer with what actually changed.

Values-based questions ("Tell us about a time you demonstrated compassion") are scored just as heavily as clinical competency questions. Prepare two or three examples that show judgement under pressure, not just technical skill, and reuse them across different values prompts.

Finally, ask about the ward or service before the interview if you can: a short conversation with current staff often reveals what the panel is actually worried about, which lets you address it directly in your answers rather than guessing.`,
    image: "/blog/how-to-pass-an-nhs-job-interview.svg",
    author: authors.daniel,
    categories: [categories.interview],
    tags: [tags.nhs, tags.interview, tags.recruitment],
    publishedDate: "2026-05-20T09:00:00Z",
    readingTime: 7,
    seoTitle: "How to Pass an NHS Job Interview | NurseJobPilot",
    seoDescription:
      "A practical guide to preparing for NHS nursing interviews, from mapping STAR examples to the person specification to answering values-based questions.",
  },
  {
    title: "NHS Band 5 vs Band 6: What's the Real Difference?",
    slug: "nhs-band-5-vs-band-6-difference",
    excerpt:
      "Pay is only part of the story. Here's what actually changes in responsibility, autonomy, and expectations moving from Band 5 to Band 6.",
    body: `The pay difference between Band 5 and Band 6 is well documented, but the responsibility gap is what actually determines whether you're ready to apply, and what panels probe for in interview.

Band 5 roles are typically supervised registered nurse positions: delivering direct care, following established care plans, escalating to senior staff when a patient's condition changes. Band 6 roles expect you to hold that judgement yourself: leading a shift, making independent clinical decisions, and often supervising Band 5 and support staff.

The most common reason strong Band 5 candidates are rejected for Band 6 roles isn't clinical competence; it's that their supporting statement doesn't demonstrate leadership or decision-making examples, only direct care examples. If you're applying up a band, make sure at least half your STAR examples show you making a call, not just executing one.`,
    image: "/blog/nhs-band-5-vs-band-6-difference.svg",
    author: authors.amara,
    categories: [categories.career],
    tags: [tags.payBands, tags.nhs],
    publishedDate: "2026-05-08T09:00:00Z",
    readingTime: 5,
  },
  {
    title: "Health and Care Worker Visa: A Nurse's Step-by-Step Guide",
    slug: "health-and-care-worker-visa-guide",
    excerpt:
      "From Certificate of Sponsorship to biometric residence, here's the sequence of steps most internationally trained nurses go through.",
    body: `The Health and Care Worker visa route is the one most internationally trained nurses use to work in the NHS, and while the paperwork can feel daunting, the sequence is fairly consistent across Trusts.

It starts with an NMC registration decision, followed by a job offer from a licensed sponsor (almost all NHS Trusts hold a sponsor licence). The Trust then issues a Certificate of Sponsorship, which you use to submit your visa application along with your Tuberculosis test certificate if you're arriving from a listed country.

Processing times vary, but most applicants hear back within three weeks. Once approved, you'll typically get a short-validity visa vignette to travel and collect a Biometric Residence Permit after arrival, or an eVisa depending on current Home Office rollout status.

The detail that catches people out most often: your Certificate of Sponsorship has a use-by date, and the job details on it must match your actual role exactly, including salary and working hours. Any mismatch is the single most common cause of avoidable delays.`,
    image: "/blog/health-and-care-worker-visa-guide.svg",
    author: authors.priya,
    categories: [categories.visa],
    tags: [tags.visa, tags.internationalNurses, tags.nhs],
    publishedDate: "2026-04-29T09:00:00Z",
    readingTime: 8,
  },
  {
    title: "Writing a Winning NHS Supporting Statement",
    slug: "writing-a-winning-nhs-supporting-statement",
    excerpt:
      "The supporting statement is scored against the person specification line by line. Structure it that way and you'll score higher.",
    body: `Shortlisting panels score supporting statements against the person specification criterion by criterion, which means a well-written statement that skips a criterion will often score lower than a plainer one that addresses every point.

Work through the essential criteria first, in the order they appear in the person specification, and give each one its own short section with a clear STAR example. Desirable criteria can follow in a shorter closing section.

Avoid restating your CV. Panels have already read it; the supporting statement exists specifically to provide evidence, not a summary. If a criterion says "experience managing conflicting priorities," describe one specific shift where that happened and what you did, not a general statement that you're "good at multitasking."

Keep it tight. Most Trusts read dozens of these per shortlisting round, and a statement that clearly maps to each criterion in two or three sentences will outperform a long, unstructured one every time.`,
    image: "/blog/writing-a-winning-nhs-supporting-statement.svg",
    author: authors.daniel,
    categories: [categories.applications],
    tags: [tags.supportingStatement, tags.cv, tags.nhs],
    publishedDate: "2026-04-15T09:00:00Z",
    readingTime: 6,
  },
  {
    title: "Common CV Mistakes That Cost Nurses Interviews",
    slug: "common-cv-mistakes-nurses",
    excerpt:
      "Most rejected NHS CVs aren't missing experience; they're missing the structure recruiters are scanning for.",
    body: `Recruiters scanning dozens of applications aren't reading top to bottom; they're scanning for specific signals, and CVs that bury them get passed over even when the underlying experience is strong.

The most common mistake is listing duties instead of outcomes. "Responsible for medication administration" tells a panel nothing they don't already assume from your job title. "Reduced medication errors on the ward by introducing a double-check protocol" gives them something to score.

The second is a mismatched structure: CVs organised purely by employer and date, with no clear link back to the specific job's person specification. Reordering or annotating your experience to foreground what's relevant to the role you're applying for consistently improves shortlisting rates.

Finally, keep NMC PIN, revalidation date, and right-to-work status clearly visible near the top. These are often the first things an NHS recruiter checks, and burying them near the bottom of a two-page CV creates unnecessary friction.`,
    image: "/blog/common-cv-mistakes-nurses.svg",
    author: authors.amara,
    categories: [categories.applications],
    tags: [tags.cv, tags.recruitment],
    publishedDate: "2026-04-02T09:00:00Z",
    readingTime: 5,
  },
  {
    title: "Relocating to the UK: A Nurse's Moving Checklist",
    slug: "relocating-to-the-uk-nurse-checklist",
    excerpt:
      "Beyond the visa, there's a practical sequence to moving: bank account, National Insurance, accommodation, and your first NHS payslip.",
    body: `Getting your visa approved is only the first half of relocating. The practical steps that follow determine how smooth your first few months in the UK actually feel.

Before you travel, arrange proof of accommodation for at least your first few weeks; many Trusts offer short-term relocation packages or can point you to nurse accommodation schemes, so it's worth asking your recruitment contact directly.

On arrival, register for a National Insurance number as early as possible, since it affects when you can be paid correctly through payroll. Most banks now allow international nurses to open an account before a fixed UK address is confirmed, using an employer reference letter instead.

Register with a GP and, if applicable, arrange your Occupational Health check with your Trust before your start date; most Trusts require this cleared before you can begin clinical shifts. Building in two to three weeks between arrival and start date, if your visa timing allows it, removes most of the last-minute pressure.`,
    image: "/blog/relocating-to-the-uk-nurse-checklist.svg",
    author: authors.priya,
    categories: [categories.visa, categories.career],
    tags: [tags.internationalNurses, tags.visa],
    publishedDate: "2026-03-18T09:00:00Z",
    readingTime: 6,
  },
  {
    title: "Understanding the NHS Values-Based Recruitment Framework",
    slug: "nhs-values-based-recruitment-framework",
    excerpt:
      "Clinical skill gets you shortlisted. Values-based recruitment is often what actually decides who gets the offer.",
    body: `Values-based recruitment is built into nearly every NHS interview, but it's rarely explained clearly to candidates before they walk in, which means many strong clinicians underprepare for it.

The framework centres on the NHS Constitution's values: working together for patients, respect and dignity, commitment to quality of care, compassion, improving lives, and everyone counts. Interview questions built around these tend to ask about a specific past situation rather than a hypothetical, precisely so panels can score real evidence rather than a rehearsed ideal.

The preparation that pays off most is choosing examples where the "right" action wasn't obvious (a time you had to balance compassion against a service constraint, for instance) rather than examples where the values-aligned choice was easy. Panels are specifically trained to probe generic answers, so specificity is what separates a strong score from an average one.`,
    image: "/blog/nhs-values-based-recruitment-framework.svg",
    author: authors.amara,
    categories: [categories.interview, categories.career],
    tags: [tags.nhs, tags.interview, tags.recruitment],
    publishedDate: "2026-03-05T09:00:00Z",
    readingTime: 5,
  },
  {
    title: "Top 10 Interview Questions NHS Recruiters Actually Ask",
    slug: "top-10-nhs-interview-questions",
    excerpt:
      "A recurring set of questions shows up across Trusts. Here's the shortlist worth preparing for specifically.",
    body: `While every Trust writes its own interview questions, a recurring set shows up often enough across job boards and candidate reports that it's worth preparing for by name.

Expect at least one clinical scenario question testing prioritisation under pressure, one values-based question drawn from the NHS Constitution, and one question specifically about handling conflict with a colleague or patient's family. Most panels also ask directly about revalidation and continuing professional development, so keep your most recent examples current.

A question that catches many candidates off guard: "Tell us about a time you made a mistake." Panels aren't looking for a story with no mistake in it; they're scoring honesty, what you did to correct it, and what changed afterward. A polished non-answer here scores worse than an honest, specific one.

Finally, almost every Trust asks some version of "why this Trust, why this ward." A generic answer here is one of the most common reasons otherwise strong candidates lose points: a specific reference to the ward's recent CQC rating, a service change, or something from your pre-interview conversation with staff goes a long way.`,
    image: "/blog/top-10-nhs-interview-questions.svg",
    author: authors.daniel,
    categories: [categories.interview],
    tags: [tags.interview, tags.nhs],
    publishedDate: "2026-02-19T09:00:00Z",
    readingTime: 6,
  },
  {
    title: "How Trusts Score Your Application Against the Person Specification",
    slug: "how-trusts-score-against-person-specification",
    excerpt:
      "Shortlisting is a scoring exercise, not a read for general impressions. Understanding the matrix changes how you should write.",
    body: `It's easy to assume shortlisting is a holistic read of your CV and statement. In practice, most Trusts use a scoring matrix built directly from the person specification, with each essential and desirable criterion marked independently.

That means an application can lose marks on a single unaddressed criterion even if the overall impression is strong. Reviewers are typically working through dozens of applications against the same matrix, so anything that isn't explicitly evidenced against a specific line often isn't credited, even if it's implied elsewhere in the document.

The practical implication: structure your supporting statement so each criterion is unmistakably addressed, ideally in the same order as the person specification. It reads less "creatively," but it scores measurably better, because it matches exactly how the person reading it is working.`,
    image: "/blog/how-trusts-score-against-person-specification.svg",
    author: authors.daniel,
    categories: [categories.applications, categories.career],
    tags: [tags.recruitment, tags.supportingStatement],
    publishedDate: "2026-02-04T09:00:00Z",
    readingTime: 5,
  },
]

export const featuredPostSlug = "is-the-uk-still-hiring-international-nurses"

export function getFeaturedPost(): BlogPost {
  const post = posts.find((p) => p.slug === featuredPostSlug)
  if (!post) throw new Error(`Featured post "${featuredPostSlug}" not found`)
  return post
}

export function getListPosts(): BlogPost[] {
  return posts.filter((p) => p.slug !== featuredPostSlug)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
