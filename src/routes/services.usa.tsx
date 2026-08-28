import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/usa')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesUsaLayout,
})

function ServicesUsaLayout() {
  return <Outlet />
}
