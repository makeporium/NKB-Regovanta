import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/usa')({
  head: () => ({
    meta: [
      { title: "US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "US FDA medical device regulatory consulting. FDA 510(k) clearance, De Novo classification, PMA, eSTAR submissions, US Agent services, and establishment registration from NKB Regovanta." },
      { property: "og:title", content: "US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta" },
      { property: "og:description", content: "US FDA medical device regulatory consulting. FDA 510(k) clearance, De Novo classification, PMA, eSTAR submissions, US Agent services, and establishment registration from NKB Regovanta." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta" },
      { name: "twitter:description", content: "US FDA medical device regulatory consulting. FDA 510(k) clearance, De Novo classification, PMA, eSTAR submissions, US Agent services, and establishment registration from NKB Regovanta." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "US FDA Medical Device Regulatory Consultant, 510(k), NKB Regovanta, services usa, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa" }],
  }),

  component: ServicesUsaLayout,
})

function ServicesUsaLayout() {
  return <Outlet />
}
