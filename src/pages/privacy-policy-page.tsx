import { Link } from "react-router-dom"
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout"
import { useDocumentMeta } from "@/lib/use-document-meta"

const LAST_UPDATED = "31 July 2026"

export function PrivacyPolicyPage() {
  useDocumentMeta(
    "Privacy Policy | NurseJobPilot",
    "How NurseJobPilot collects, uses, and protects your personal data.",
    { url: `${import.meta.env.VITE_WEB_URL}/privacy-policy` }
  )

  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        NurseJobPilot ("NurseJobPilot", "we", "us", "our") is a browser extension and web
        service that helps nurses build a profile, generate tailored applications, and apply
        for UK nursing and care roles. This Privacy Policy explains what personal data we
        collect when you use our website, browser extension, and related services
        (together, the "Service"), why we collect it, who we share it with, and the choices
        and rights you have over it.
      </p>
      <p>
        NurseJobPilot is operated in partnership by <strong>Gammahill</strong> (company number
        16387770), registered office at Bartle House, Oxford Court, Manchester, England, M2
        3WQ, and <strong>Pinavel</strong> (company registration number 8578062), registered
        address 54b Adeniyi Jones, Oba Akran, Ikeja 101233, Lagos, Nigeria. For UK GDPR
        purposes, Gammahill acts as the data controller for personal data collected through
        the Service. See our <Link to="/uk-gdpr">UK GDPR page</Link> for details on your
        rights and our legal bases for processing.
      </p>

      <LegalSection id="information-we-collect" title="1. Information we collect">
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account information:</strong> your email address, password (stored as a
            salted hash, never in plain text), and, if you sign in with Google, your Google
            account identifier.
          </li>
          <li>
            <strong>Profile and career information:</strong> details you add to build your
            application profile, which may include your full name, contact details (email,
            phone, address), NMC PIN, right-to-work status, target role and pay band,
            professional summary, work experience, education, certifications, clinical
            skills, and other information relevant to nursing job applications.
          </li>
          <li>
            <strong>Job and application data:</strong> job specifications you save or match
            against, the tailored CVs, supporting statements, and other application content
            we generate for you, records of applications you track through the Service, and
            messages you exchange with our in-product AI assistant.
          </li>
          <li>
            <strong>Billing information:</strong> your subscription plan and billing history.
            Card and payment details are collected and processed directly by our payment
            processor, Stripe — we do not store your full card number.
          </li>
          <li>
            <strong>Usage and technical information:</strong> pages visited, features used,
            approximate location (from IP address), device and browser type, and similar
            diagnostic data, collected via Google Analytics where you have consented to
            analytics cookies. See our <Link to="/cookie-policy">Cookie Policy</Link> for
            details.
          </li>
        </ul>
        <p>
          We do not knowingly collect special category data (such as health data) beyond
          what you voluntarily include in free-text fields (for example, a professional
          summary). Please avoid including sensitive health information about yourself or
          others that is not necessary for your job applications.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use-information" title="2. How we use your information">
        <ul>
          <li>To create and maintain your account and authenticate you (including via Google Sign-In).</li>
          <li>To generate tailored CVs, supporting statements, and other application content based on your profile and the job you are applying to.</li>
          <li>To autofill application forms on supported job sites when you use the extension.</li>
          <li>To track your applications and help you manage your job search.</li>
          <li>To process subscription payments and manage your billing relationship with us.</li>
          <li>To send you service emails, such as email verification and password reset messages.</li>
          <li>To understand how the Service is used and to improve it, where you have consented to analytics.</li>
          <li>To detect, prevent, and address fraud, abuse, or security issues.</li>
          <li>To comply with our legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ai-processing" title="3. AI-generated content">
        <p>
          To generate tailored CVs, supporting statements, and chat responses, we send the
          relevant profile and job information to our AI provider, Anthropic (Claude), which
          processes it to produce the generated content. Anthropic processes this data as our
          service provider and does not use it to train its models. You remain responsible
          for reviewing any AI-generated content before submitting it as part of a real job
          application.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="4. Who we share your information with">
        <p>We do not sell your personal data. We share information with:</p>
        <ul>
          <li><strong>Anthropic</strong> — to generate tailored application content and power the in-app AI assistant.</li>
          <li><strong>Stripe</strong> — to process subscription payments.</li>
          <li><strong>Google</strong> — to offer Google Sign-In and, where you consent, to provide website analytics via Google Analytics.</li>
          <li><strong>Contentful</strong> — our content management system for blog content; it does not receive your personal data.</li>
          <li><strong>Hosting and infrastructure providers</strong> — who store and process data on our behalf under contract.</li>
          <li>
            <strong>Job sites and employers</strong> — only when you choose to submit an
            application through them using our autofill feature. We do not send your data to
            these sites unless you initiate the application.
          </li>
          <li>Professional advisors, regulators, or law enforcement, where required by law.</li>
          <li>A buyer or successor, in the event of a merger, acquisition, or sale of assets.</li>
        </ul>
      </LegalSection>

      <LegalSection id="international-transfers" title="5. International transfers">
        <p>
          Because NurseJobPilot is operated in partnership with Pinavel in Nigeria, and
          because some of our service providers (including Anthropic, Stripe, and Google)
          are based outside the UK, your personal data may be transferred to and processed in
          countries outside the UK. Where this happens, we rely on appropriate safeguards
          recognised under UK data protection law, such as the UK International Data
          Transfer Agreement or adequacy regulations, to ensure your data continues to
          receive an equivalent level of protection.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="6. Data retention">
        <p>
          We retain your account and profile data for as long as your account remains active,
          and for a reasonable period afterwards to allow you to reactivate your account,
          resolve disputes, and meet our legal and accounting obligations. You can request
          deletion of your account and associated data at any time — see{" "}
          <Link to="/uk-gdpr">your rights under UK GDPR</Link>.
        </p>
      </LegalSection>

      <LegalSection id="security" title="7. How we protect your data">
        <p>
          We use technical and organisational measures appropriate to the sensitivity of the
          data we hold, including encryption in transit, hashed passwords and session tokens,
          and access controls limiting who can view your data. No method of transmission or
          storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="extension-permissions" title="8. Browser extension permissions">
        <p>
          The NurseJobPilot browser extension requests permissions necessary to operate: to
          store your session and profile locally on your device, to sign you in with Google,
          and to read and autofill forms on the specific NHS and care employer job sites it
          supports. The extension does not read or collect data from any other websites you
          visit.
        </p>
      </LegalSection>

      <LegalSection id="childrens-privacy" title="9. Children's privacy">
        <p>
          The Service is intended for adults seeking nursing and care employment and is not
          directed at children. We do not knowingly collect personal data from anyone under
          18.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="10. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. If we make material changes,
          we will notify you by email or through the Service before the changes take effect.
          The "Last updated" date at the top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="11. Contact us">
        <p>
          If you have questions about this Privacy Policy or how we handle your personal
          data, contact us at{" "}
          <a href="mailto:hello@nursejobpilot.com">hello@nursejobpilot.com</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
