import { Link } from "react-router-dom"
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout"
import { useDocumentMeta } from "@/lib/use-document-meta"

const LAST_UPDATED = "31 July 2026"

export function UkGdprPage() {
  useDocumentMeta(
    "UK GDPR | NurseJobPilot",
    "Your data protection rights under UK GDPR and how NurseJobPilot honours them.",
    { url: `${import.meta.env.VITE_WEB_URL}/uk-gdpr` }
  )

  return (
    <LegalLayout title="UK GDPR" lastUpdated={LAST_UPDATED}>
      <p>
        This page explains how NurseJobPilot complies with the UK General Data Protection
        Regulation (UK GDPR) and the Data Protection Act 2018, and sets out the rights you
        have over your personal data. It supplements our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>

      <LegalSection id="data-controller" title="1. Data controller">
        <p>
          For personal data processed in connection with the Service, the data controller
          is <strong>Gammahill</strong> (company number 16387770), registered office at
          Bartle House, Oxford Court, Manchester, England, M2 3WQ, operating NurseJobPilot in
          partnership with <strong>Pinavel</strong> (company registration number 8578062),
          registered address 54b Adeniyi Jones, Oba Akran, Ikeja 101233, Lagos, Nigeria.
        </p>
      </LegalSection>

      <LegalSection id="legal-bases" title="2. Legal bases we rely on">
        <ul>
          <li><strong>Contract:</strong> to create your account, build your profile, generate applications, and provide the subscription you sign up for.</li>
          <li><strong>Consent:</strong> for analytics cookies, and for any marketing communications you opt into.</li>
          <li><strong>Legitimate interests:</strong> to keep the Service secure, prevent fraud and abuse, and improve our product, balanced against your rights and interests.</li>
          <li><strong>Legal obligation:</strong> where we must retain or disclose information to comply with the law, such as tax and accounting records.</li>
        </ul>
      </LegalSection>

      <LegalSection id="your-rights" title="3. Your rights">
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you.</li>
          <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
          <li><strong>Erasure</strong> of your data ("right to be forgotten"), subject to certain exceptions (for example, records we must keep for legal or accounting reasons).</li>
          <li><strong>Restrict</strong> our processing of your data in certain circumstances.</li>
          <li><strong>Data portability</strong> — to receive your data in a structured, commonly used, machine-readable format, and to have it transferred to another provider.</li>
          <li><strong>Object</strong> to processing based on legitimate interests, and to opt out of analytics at any time.</li>
          <li><strong>Withdraw consent</strong> at any time, without affecting the lawfulness of processing before withdrawal.</li>
          <li>Not to be subject to a decision based solely on automated processing that produces legal or similarly significant effects on you.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ai-and-automated-decisions" title="4. AI and automated decision-making">
        <p>
          Our AI features draft CVs, supporting statements, and chat responses to assist
          you — they do not make employment decisions, screen candidates, or decide whether
          you are hired. Any decision about your job application is made by the employer you
          apply to, not by NurseJobPilot.
        </p>
      </LegalSection>

      <LegalSection id="how-to-exercise" title="5. How to exercise your rights">
        <p>
          You can update most of your profile information directly in your account. To
          request access, correction, deletion, or a copy of your data, or to raise any other
          request relating to your rights, email{" "}
          <a href="mailto:hello@nursejobpilot.com">hello@nursejobpilot.com</a>. We will
          respond within one month, as required by UK GDPR. We may ask you to verify your
          identity before actioning a request.
        </p>
      </LegalSection>

      <LegalSection id="international-transfers" title="6. International transfers">
        <p>
          Because NurseJobPilot operates in partnership with Pinavel in Nigeria, and uses
          service providers based outside the UK (including Anthropic, Stripe, and Google),
          your personal data may be transferred outside the UK. Where it is, we put
          appropriate safeguards in place, such as the UK International Data Transfer
          Agreement or reliance on UK adequacy regulations, so that your data continues to
          receive a level of protection equivalent to UK GDPR.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="7. Data retention">
        <p>
          We keep personal data only for as long as necessary for the purposes described in
          our <Link to="/privacy-policy">Privacy Policy</Link>, and delete or anonymise it
          once it is no longer needed, unless we are required to keep it for longer to meet a
          legal obligation.
        </p>
      </LegalSection>

      <LegalSection id="complaints" title="8. Complaints">
        <p>
          If you are unhappy with how we have handled your personal data, we would like the
          chance to put it right — contact us at{" "}
          <a href="mailto:hello@nursejobpilot.com">hello@nursejobpilot.com</a>. You also have
          the right to lodge a complaint with the UK's supervisory authority, the Information
          Commissioner's Office (ICO), at{" "}
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
            ico.org.uk/make-a-complaint
          </a>{" "}
          or by calling 0303 123 1113.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
