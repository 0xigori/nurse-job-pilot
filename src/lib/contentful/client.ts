import { createClient, type ContentfulClientApi } from "contentful"

let client: ContentfulClientApi<undefined> | undefined

// Lazily initialized so importing this module (e.g. via any page that pulls in
// the blog data layer) doesn't blow up pages that never fetch blog content.
export function getContentfulClient(): ContentfulClientApi<undefined> {
  if (client) return client

  const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master"

  if (!spaceId || !accessToken) {
    throw new Error(
      "Missing Contentful config: set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN (see .env.example)."
    )
  }

  client = createClient({ space: spaceId, accessToken, environment })
  return client
}
