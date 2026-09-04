import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/uk')({
  head: () => ({
    meta: [
      { title: "MHRA UK Medical Device Regulatory Consultant | UKRP | NKB | NKB Regovanta" },
      { name: "description", content: "MHRA UK medical device regulatory consulting. UKCA marking, DORS registration, UK Responsible Person (UKRP), MHRA liaison, and post-market vigilance services from NKB Regovanta." },
      { property: "og:title", content: "MHRA UK Medical Device Regulatory Consultant | UKRP | NKB" },
      { property: "og:description", content: "MHRA UK medical device regulatory consulting. UKCA marking, DORS registration, UK Responsible Person (UKRP), MHRA liaison, and post-market vigilance services from NKB Regovanta." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MHRA UK Medical Device Regulatory Consultant | UKRP | NKB" },
      { name: "twitter:description", content: "MHRA UK medical device regulatory consulting. UKCA marking, DORS registration, UK Responsible Person (UKRP), MHRA liaison, and post-market vigilance services from NKB Regovanta." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "MHRA UK Medical Device Regulatory Consultant, UKRP, NKB, services uk, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk" }],
  }),

  component: ServicesUkLayout,
})

function ServicesUkLayout() {
  return <Outlet />
}
