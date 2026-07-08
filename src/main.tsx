import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "@/components/theme-provider"
import { BlogPage } from "./pages/blog-page"
import { BlogPostPage } from "./pages/blog-post-page"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
      {import.meta.env.PROD && <Analytics />}
    </ThemeProvider>
  </StrictMode>
)
