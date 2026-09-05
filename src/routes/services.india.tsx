import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/india')({
  head: () => ({
    meta: [
      { title: "Medical Device Consultant & Regulatory Consultancy India | CDSCO | NKB Regovanta" },
      { name: "description", content: "Premier medical device consultant and regulatory consultancy in India. Expert CDSCO licensing, import permissions (MD-14/MD-15), manufacturing licenses (MD-3 to MD-9), Class A GSR 777(E), and Indian Authorized Agent (AIR) representation." },
      { property: "og:title", content: "Medical Device Consultant & Regulatory Consultancy India | NKB Regovanta" },
      { property: "og:description", content: "Premier medical device consultant and regulatory consultancy in India. Expert CDSCO licensing, import permissions (MD-14/MD-15), manufacturing licenses (MD-3 to MD-9), and Indian Authorized Agent (AIR) representation." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/india" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device Consultant & Regulatory Consultancy India | NKB Regovanta" },
      { name: "twitter:description", content: "Premier medical device consultant and regulatory consultancy in India. Expert CDSCO licensing, import permissions (MD-14/MD-15), and manufacturing licenses." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "medical device consultant, medical device consultancy, medical device consultant India, medical device consultancy India, CDSCO Medical Device Consultant, CDSCO regulatory consultancy, MD-14, MD-15, MD-3, MD-5, MD-9, NKB Regovanta" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/india" }],
  }),

  component: ServicesIndiaLayout,
})

function ServicesIndiaLayout() {
  return <Outlet />
}
