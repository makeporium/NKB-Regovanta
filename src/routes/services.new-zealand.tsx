import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/new-zealand')({
  head: () => ({
    meta: [
      { title: "Medsafe New Zealand Medical Device Regulatory Consultant | NKB | NKB Regovanta" },
      { name: "description", content: "Medsafe medical device regulatory consulting for New Zealand WAND notification, classification, labelling, post-market surveillance, and ARTG-linked pathways from NKB Regovanta." },
      { property: "og:title", content: "Medsafe New Zealand Medical Device Regulatory Consultant | NKB" },
      { property: "og:description", content: "Medsafe medical device regulatory consulting for New Zealand WAND notification, classification, labelling, post-market surveillance, and ARTG-linked pathways from NKB Regovanta." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/new-zealand" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medsafe New Zealand Medical Device Regulatory Consultant | NKB" },
      { name: "twitter:description", content: "Medsafe medical device regulatory consulting for New Zealand WAND notification, classification, labelling, post-market surveillance, and ARTG-linked pathways from NKB Regovanta." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "Medsafe New Zealand Medical Device Regulatory Consultant, NKB, services new zealand, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand" }],
  }),

  component: ServicesNZLayout,
})

function ServicesNZLayout() {
  return <Outlet />
}
