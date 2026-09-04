import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/brazil')({
  head: () => ({
    meta: [
      { title: "ANVISA Brazil Medical Device Regulatory Consultant | NKB | NKB Regovanta" },
      { name: "description", content: "ANVISA regulatory consulting for medical device Notificação and Registro in Brazil. Complete ANVISA submission support, BPF compliance, and post-market technovigilance services." },
      { property: "og:title", content: "ANVISA Brazil Medical Device Regulatory Consultant | NKB" },
      { property: "og:description", content: "ANVISA regulatory consulting for medical device Notificação and Registro in Brazil. Complete ANVISA submission support, BPF compliance, and post-market technovigilance services." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/brazil" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ANVISA Brazil Medical Device Regulatory Consultant | NKB" },
      { name: "twitter:description", content: "ANVISA regulatory consulting for medical device Notificação and Registro in Brazil. Complete ANVISA submission support, BPF compliance, and post-market technovigilance services." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "ANVISA Brazil Medical Device Regulatory Consultant, NKB, services brazil, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil" }],
  }),

  component: ServicesBrazilLayout,
})

function ServicesBrazilLayout() {
  return <Outlet />
}
