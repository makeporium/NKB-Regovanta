import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/australia')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesAustraliaLayout,
})

function ServicesAustraliaLayout() {
  return <Outlet />
}
