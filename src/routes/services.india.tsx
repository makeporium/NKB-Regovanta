import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/india')({
  component: ServicesIndiaLayout,
})

function ServicesIndiaLayout() {
  return <Outlet />
}
