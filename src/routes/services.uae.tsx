import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/uae')({
  head: () => ({
    meta: [
      { title: "MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "MoHAP UAE medical device regulatory consulting. MOHAP registration, eCAS system, local applicant services, QMS inspection, and post-market surveillance in the UAE." },
      { property: "og:title", content: "MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta" },
      { property: "og:description", content: "MoHAP UAE medical device regulatory consulting. MOHAP registration, eCAS system, local applicant services, QMS inspection, and post-market surveillance in the UAE." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "MoHAP UAE medical device regulatory consulting. MOHAP registration, eCAS system, local applicant services, QMS inspection, and post-market surveillance in the UAE." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "MoHAP UAE Medical Device Regulatory Consultant, NKB Regovanta, services uae, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae" }],
  }),

  component: ServicesUAELayout,
})

function ServicesUAELayout() {
  return <Outlet />
}
