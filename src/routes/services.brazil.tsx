import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/brazil')({
  component: ServicesBrazilLayout,
})

function ServicesBrazilLayout() {
  return <Outlet />
}
