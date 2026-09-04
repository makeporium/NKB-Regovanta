import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/eu')({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta | NKB Regovanta" },
      { name: "description", content: "Expert EU MDR 2017/745 and EU IVDR 2017/746 regulatory consulting. CE marking, technical documentation, clinical evaluation, Notified Body strategy, EUDAMED, and PMS compliance." },
      { property: "og:title", content: "EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta" },
      { property: "og:description", content: "Expert EU MDR 2017/745 and EU IVDR 2017/746 regulatory consulting. CE marking, technical documentation, clinical evaluation, Notified Body strategy, EUDAMED, and PMS compliance." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta" },
      { name: "twitter:description", content: "Expert EU MDR 2017/745 and EU IVDR 2017/746 regulatory consulting. CE marking, technical documentation, clinical evaluation, Notified Body strategy, EUDAMED, and PMS compliance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "keywords", content: "EU MDR & IVDR Regulatory Consultant, CE Marking, NKB Regovanta, services eu, NKB Regovanta, regulatory consultant, medical device" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu" }],
  }),

  component: ServicesEuLayout,
})

function ServicesEuLayout() {
  return <Outlet />
}
