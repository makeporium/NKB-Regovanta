import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: CaseStudiesLayout,
})

function CaseStudiesLayout() {
  return <Outlet />
}
