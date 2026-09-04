import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/australia')({
  head: () => ({
    meta: [
      { title: "Australia TGA ARTG Consultant | Medical Device Registration | NKB Regovanta" },
      { name: "description", content: "TGA regulatory consulting for ARTG inclusion, Australian Sponsor services, conformity assessment, post-market surveillance, and full medical device lifecycle management in Australia." },
      { property: "og:title", content: "Australia TGA ARTG Consultant | Medical Device Registration" },
      { property: "og:description", content: "TGA regulatory consulting for ARTG inclusion, Australian Sponsor services, conformity assessment, post-market surveillance, and full medical device lifecycle management in Australia." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/australia" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Australia TGA ARTG Consultant | Medical Device Registration" },
      { name: "twitter:description", content: "TGA regulatory consulting for ARTG inclusion, Australian Sponsor services, conformity assessment, post-market surveillance, and full medical device lifecycle management in Australia." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "Australia TGA ARTG Consultant, Medical Device Registration, services australia, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia" }],
  }),

  component: ServicesAustraliaLayout,
})

function ServicesAustraliaLayout() {
  return <Outlet />
}
