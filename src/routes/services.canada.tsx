import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/canada')({
  head: () => ({
    meta: [
      { title: "Health Canada Medical Device Licence Consultant | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "Health Canada medical device regulatory consulting. MDL Class II–IV licences, MDEL establishment licensing, MDSAP audit support, and Canadian regulatory strategy from NKB Regovanta." },
      { property: "og:title", content: "Health Canada Medical Device Licence Consultant | NKB Regovanta" },
      { property: "og:description", content: "Health Canada medical device regulatory consulting. MDL Class II–IV licences, MDEL establishment licensing, MDSAP audit support, and Canadian regulatory strategy from NKB Regovanta." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Health Canada Medical Device Licence Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "Health Canada medical device regulatory consulting. MDL Class II–IV licences, MDEL establishment licensing, MDSAP audit support, and Canadian regulatory strategy from NKB Regovanta." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "Health Canada Medical Device Licence Consultant, NKB Regovanta, services canada, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada" }],
  }),

  component: ServicesCanadaLayout,
})

function ServicesCanadaLayout() {
  return <Outlet />
}
