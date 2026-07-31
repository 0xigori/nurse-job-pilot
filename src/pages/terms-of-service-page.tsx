import { LegalLayout, LegalSection } from "@/components/legal/legal-layout"
import { useDocumentMeta } from "@/lib/use-document-meta"

const LAST_UPDATED = "31 July 2026"

export function TermsOfServicePage() {
  useDocumentMeta(
    "Terms of Service | NurseJobPilot",
    "The terms that govern your use of NurseJobPilot.",
    { url: `${import.meta.env.VITE_WEB_URL}/terms-of-service` }
  )

  return (
    <LegalLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms of Service ("Terms") govern your access to and use of the NurseJobPilot
        website, browser extension, and related services (together, the "Service"),
        operated in partnership by <strong>Gammahill</strong> (company number 16387770,
        registered office at Bartle House, Oxford Court, Manchester, England, M2 3WQ) and{" "}
        <strong>Pinavel</strong> (company registration number 8578062, registered address 54b
        Adeniyi Jones, Oba Akran, Ikeja 101233, Lagos, Nigeria) ("NurseJobPilot", "we", "us",
        "our"). By creating an account or using the Service, you agree to these Terms. If you
        do not agree, do not use the Service.
      </p>

      <LegalSection id="the-service" title="1. The Service">
        <p>
          NurseJobPilot is a browser extension and web application that helps nurses build a
          professional profile and generates tailored CVs, supporting statements, and other
          application content for nursing and care roles, and can autofill application forms
          on supported job sites. NurseJobPilot is not affiliated with, endorsed by, or
          acting on behalf of NHS England, NHSBSA, any NHS trust, or any employer or job site
          referenced or supported by the Service.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="2. Eligibility and your account">
        <p>
          You must be at least 18 years old and legally capable of entering into a binding
          contract to use the Service. You are responsible for maintaining the
          confidentiality of your account credentials and for all activity under your
          account. You must provide accurate information, including professional details
          such as your NMC PIN and right-to-work status, and keep your profile up to date.
          You are solely responsible for the accuracy of any information you submit to
          employers through the Service.
        </p>
      </LegalSection>

      <LegalSection id="subscriptions" title="3. Plans, billing, and cancellation">
        <ul>
          <li>
            We offer a free tier that lets you generate one tailored application before
            deciding whether to subscribe, and paid subscription plans billed weekly or
            monthly as displayed on our pricing page.
          </li>
          <li>Prices and features may change; we will give you reasonable notice of any change that affects your subscription.</li>
          <li>Subscriptions are billed in advance and renew automatically until cancelled. Payments are processed by Stripe.</li>
          <li>You can cancel your subscription at any time through your account settings; cancellation takes effect at the end of your current billing period.</li>
          <li>
            Except where required by law, fees already paid are non-refundable. If you
            believe you have been billed in error, contact us at{" "}
            <a href="mailto:hello@nursejobpilot.com">hello@nursejobpilot.com</a>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="acceptable-use" title="4. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service to submit false, misleading, or fraudulent information in a job application.</li>
          <li>Use the Service on behalf of someone else without their knowledge and consent.</li>
          <li>Attempt to access another user's account or data, or interfere with the security of the Service.</li>
          <li>Reverse engineer, scrape, or misuse the Service beyond ordinary use as a nurse applying for jobs.</li>
          <li>Use the Service in a way that violates the terms of use of any third-party job site it interacts with.</li>
          <li>Use the Service for any unlawful purpose.</li>
        </ul>
        <p>We may suspend or terminate accounts that violate these Terms.</p>
      </LegalSection>

      <LegalSection id="ai-content" title="5. AI-generated content">
        <p>
          The Service uses artificial intelligence to help draft CVs, supporting statements,
          and chat responses based on the information you provide. AI-generated content may
          contain errors or inaccuracies. NurseJobPilot does not guarantee the accuracy,
          completeness, or suitability of any generated content, and does not guarantee that
          using the Service will result in a job offer or interview. You are responsible for
          reviewing, editing, and verifying any content before submitting it to an employer.
          The Service does not provide legal, immigration, or career advice, and generated
          content should not be relied upon as such.
        </p>
      </LegalSection>

      <LegalSection id="third-party-sites" title="6. Third-party job sites">
        <p>
          The autofill and application features of the Service interact with third-party job
          sites and employer platforms that we do not control and are not responsible for.
          Your use of those sites is subject to their own terms and privacy policies. We do
          not guarantee that autofill will work correctly on every site or every form, and
          you should always review a form before submitting it.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="7. Intellectual property">
        <p>
          We own all rights, title, and interest in the Service, including its software,
          design, and content, excluding information you submit. You retain ownership of the
          information and content you provide, and you grant us a licence to use it to
          operate and provide the Service to you, including sending it to our AI provider to
          generate application content on your behalf.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="8. Termination">
        <p>
          You may stop using the Service and delete your account at any time. We may suspend
          or terminate your access to the Service if you breach these Terms, if required by
          law, or if we discontinue the Service, in which case we will provide reasonable
          notice where practicable.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers-liability" title="9. Disclaimers and limitation of liability">
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind,
          express or implied. To the fullest extent permitted by law, NurseJobPilot will not
          be liable for any indirect, incidental, or consequential loss, or for any loss of
          income, employment opportunity, or data, arising from your use of the Service.
          Nothing in these Terms limits our liability for death or personal injury caused by
          negligence, fraud, or any other liability that cannot be limited or excluded under
          English law.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="10. Governing law">
        <p>
          These Terms are governed by the laws of England and Wales, and the courts of
          England and Wales will have exclusive jurisdiction over any dispute arising from
          them, without prejudice to any mandatory consumer protection rights you have in
          your country of residence.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If we make material changes, we will
          notify you by email or through the Service before the changes take effect.
          Continuing to use the Service after changes take effect means you accept the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:hello@nursejobpilot.com">hello@nursejobpilot.com</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
