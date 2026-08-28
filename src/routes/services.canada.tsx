import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/canada')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesCanadaLayout,
})

function ServicesCanadaLayout() {
  return <Outlet />
}
