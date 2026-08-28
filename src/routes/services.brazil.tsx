import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/brazil')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesBrazilLayout,
})

function ServicesBrazilLayout() {
  return <Outlet />
}
