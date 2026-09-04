import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/india')({
  head: () => ({
    meta: [
      { title: "CDSCO Medical Device Consultant India | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "India's expert CDSCO medical device regulatory consulting firm. Import licences (MD-14/15), manufacturing licences (MD-3 to MD-9), loan licences, and SUGAM portal support." },
      { property: "og:title", content: "CDSCO Medical Device Consultant India | NKB Regovanta" },
      { property: "og:description", content: "India's expert CDSCO medical device regulatory consulting firm. Import licences (MD-14/15), manufacturing licences (MD-3 to MD-9), loan licences, and SUGAM portal support." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/india" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CDSCO Medical Device Consultant India | NKB Regovanta" },
      { name: "twitter:description", content: "India's expert CDSCO medical device regulatory consulting firm. Import licences (MD-14/15), manufacturing licences (MD-3 to MD-9), loan licences, and SUGAM portal support." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "CDSCO Medical Device Consultant India, NKB Regovanta, services india, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/india" }],
  }),

  component: ServicesIndiaLayout,
})

function ServicesIndiaLayout() {
  return <Outlet />
}
