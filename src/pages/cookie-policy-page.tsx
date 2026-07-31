import * as CookieConsent from "vanilla-cookieconsent"
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout"
import { useDocumentMeta } from "@/lib/use-document-meta"

const LAST_UPDATED = "31 July 2026"

export function CookiePolicyPage() {
  useDocumentMeta(
    "Cookie Policy | NurseJobPilot",
    "How NurseJobPilot uses cookies on nursejobpilot.com.",
    { url: `${import.meta.env.VITE_WEB_URL}/cookie-policy` }
  )

  return (
    <LegalLayout title="Cookie Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Cookie Policy explains how NurseJobPilot uses cookies and similar technologies
        on nursejobpilot.com. It should be read alongside our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <LegalSection id="what-are-cookies" title="1. What are cookies">
        <p>
          Cookies are small text files placed on your device when you visit a website. They
          are widely used to make websites work, work more efficiently, and to provide
          information to the website owner.
        </p>
      </LegalSection>

      <LegalSection id="cookies-we-use" title="2. Cookies we use">
        <p>We use two categories of cookies on nursejobpilot.com:</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Purpose</th>
              <th>Can be disabled?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strictly necessary</td>
              <td>
                Remembers your cookie consent choice (<code>njp_cookie_consent</code>) so we
                don't ask again unnecessarily. The site cannot function correctly without
                this cookie.
              </td>
              <td>No</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>
                Google Analytics, loaded through Google Tag Manager, helps us understand how
                visitors use the site (pages viewed, approximate location, device type) so we
                can improve it.
              </td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <p>
          We do not currently use advertising or marketing cookies. Analytics cookies are
          only set if you accept them; until you make a choice, Google's Consent Mode keeps
          analytics storage denied by default.
        </p>
      </LegalSection>

      <LegalSection id="managing-preferences" title="3. Managing your preferences">
        <p>
          You can change your cookie preferences at any time using the button below, or by
          clearing cookies in your browser settings and revisiting the site.
        </p>
        <button
          type="button"
          onClick={() => CookieConsent.showPreferences()}
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Manage cookie preferences
        </button>
      </LegalSection>

      <LegalSection id="extension" title="4. The browser extension">
        <p>
          The NurseJobPilot browser extension does not use cookies. It stores your session
          and profile information locally on your device using your browser's extension
          storage, which is not accessible to nursejobpilot.com or other websites.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="5. Changes to this policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the
          cookies we use. The "Last updated" date at the top of this page reflects the most
          recent revision.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="6. Contact us">
        <p>
          Questions about this Cookie Policy can be sent to{" "}
          <a href="mailto:hello@nursejobpilot.com">hello@nursejobpilot.com</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
