import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  head: () => ({
    meta: [
      { title: "Medical Device Regulatory Case Studies | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "Real-world medical device regulatory case studies from NKB Regovanta. FDA 510(k) deficiency resolutions, EU MDR technical documentation remediation, TGA ARTG inclusions, and multi-market test strategy wins." },
      { property: "og:title", content: "Medical Device Regulatory Case Studies | NKB Regovanta" },
      { property: "og:description", content: "Real-world medical device regulatory case studies from NKB Regovanta. FDA 510(k) deficiency resolutions, EU MDR technical documentation remediation, TGA ARTG inclusions, and multi-market test strategy wins." },
      { property: "og:url", content: "https://www.nkbregovanta.com/case-studies" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device Regulatory Case Studies | NKB Regovanta" },
      { name: "twitter:description", content: "Real-world medical device regulatory case studies from NKB Regovanta. FDA 510(k) deficiency resolutions, EU MDR technical documentation remediation, TGA ARTG inclusions, and multi-market test strategy wins." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "Medical Device Regulatory Case Studies, NKB Regovanta, case studies, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/case-studies" }],
  }),

  component: CaseStudiesLayout,
})

function CaseStudiesLayout() {
  return <Outlet />
}
