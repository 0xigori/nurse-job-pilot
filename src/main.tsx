import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "@/components/theme-provider"
import { ConsentProvider } from "@/components/consent-provider"
import { BlogPage } from "./pages/blog-page"
import { BlogPostPage } from "./pages/blog-post-page"
import { NotFoundPage } from "./pages/not-found-page"
import { VerifyEmailPage } from "./pages/verify-email-page"
import { ResetPasswordPage } from "./pages/reset-password-page"
import { PrivacyPolicyPage } from "./pages/privacy-policy-page"
import { TermsOfServicePage } from "./pages/terms-of-service-page"
import { CookiePolicyPage } from "./pages/cookie-policy-page"
import { UkGdprPage } from "./pages/uk-gdpr-page"
import { pushPageView } from "@/lib/analytics"

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}

function GtmPageView() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    pushPageView(pathname + search, document.title)
  }, [pathname, search])
  return null
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ConsentProvider>
        <BrowserRouter>
          <ScrollToTop />
          <GtmPageView />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
            <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/uk-gdpr" element={<UkGdprPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ConsentProvider>
    </ThemeProvider>
  </StrictMode>
)
