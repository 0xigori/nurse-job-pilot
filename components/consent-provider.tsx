import { useEffect } from "react"
import * as CookieConsent from "vanilla-cookieconsent"
import "vanilla-cookieconsent/dist/cookieconsent.css"
import "@/src/consent-cookies.css"
import { updateConsent } from "@/lib/analytics"

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      cookie: {
        name: "njp_cookie_consent",
        expiresAfterDays: 182,
        sameSite: "Lax",
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: true,
          readOnly: false,
          services: {
            googleAnalytics: {
              label: "Google Analytics",
              onAccept: () => updateConsent(true),
              onReject: () => updateConsent(false),
            },
          },
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to understand how visitors use NurseJobPilot and to improve your experience. By clicking \"Accept all\", you consent to our use of cookies.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Cookie usage",
                  description:
                    "We use cookies to ensure basic functionality and to understand how you use NurseJobPilot.",
                },
                {
                  title: "Strictly necessary cookies",
                  description: "These cookies are essential for the site to function properly.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics cookies",
                  description: "These cookies help us understand how visitors interact with the site.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
    })
  }, [])

  return <>{children}</>
}
