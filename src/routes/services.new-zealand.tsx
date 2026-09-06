import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/new-zealand')({
  component: ServicesNZLayout,
})

function ServicesNZLayout() {
  return <Outlet />
}
