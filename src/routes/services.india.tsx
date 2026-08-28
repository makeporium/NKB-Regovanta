import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/india')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesIndiaLayout,
})

function ServicesIndiaLayout() {
  return <Outlet />
}
