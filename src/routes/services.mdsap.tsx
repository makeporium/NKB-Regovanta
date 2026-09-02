import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/mdsap')({
  component: ServicesMdsapLayout,
})

function ServicesMdsapLayout() {
  return <Outlet />
}