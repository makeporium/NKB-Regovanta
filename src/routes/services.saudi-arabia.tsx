import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/saudi-arabia')({
  head: () => ({
    meta: [
      { title: "SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB | NKB Regovanta" },
      { name: "description", content: "SFDA Saudi Arabia medical device regulatory consulting. SFDA MDMA registration, establishment licensing, Authorized Representative, and post-market compliance from NKB Regovanta." },
      { property: "og:title", content: "SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB" },
      { property: "og:description", content: "SFDA Saudi Arabia medical device regulatory consulting. SFDA MDMA registration, establishment licensing, Authorized Representative, and post-market compliance from NKB Regovanta." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB" },
      { name: "twitter:description", content: "SFDA Saudi Arabia medical device regulatory consulting. SFDA MDMA registration, establishment licensing, Authorized Representative, and post-market compliance from NKB Regovanta." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "SFDA Saudi Arabia Medical Device Regulatory Consultant, NKB, services saudi arabia, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia" }],
  }),

  component: ServicesSaudiArabiaLayout,
})

function ServicesSaudiArabiaLayout() {
  return <Outlet />
}
