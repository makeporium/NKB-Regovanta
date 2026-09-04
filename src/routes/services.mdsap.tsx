import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/mdsap')({
  head: () => ({
    meta: [
      { title: "MDSAP Audit Readiness & Consulting | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "MDSAP audit readiness consulting covering US FDA, Health Canada, ANVISA Brazil, MHLW Japan, and TGA Australia. Gap assessment, mock audits, and CAPA remediation." },
      { property: "og:title", content: "MDSAP Audit Readiness & Consulting | NKB Regovanta" },
      { property: "og:description", content: "MDSAP audit readiness consulting covering US FDA, Health Canada, ANVISA Brazil, MHLW Japan, and TGA Australia. Gap assessment, mock audits, and CAPA remediation." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/mdsap" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MDSAP Audit Readiness & Consulting | NKB Regovanta" },
      { name: "twitter:description", content: "MDSAP audit readiness consulting covering US FDA, Health Canada, ANVISA Brazil, MHLW Japan, and TGA Australia. Gap assessment, mock audits, and CAPA remediation." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "MDSAP Audit Readiness & Consulting, NKB Regovanta, services mdsap, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap" }],
  }),

  component: ServicesMdsapLayout,
})

function ServicesMdsapLayout() {
  return <Outlet />
}