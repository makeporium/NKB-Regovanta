import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/australia')({
  component: ServicesAustraliaLayout,
})

function ServicesAustraliaLayout() {
  return <Outlet />
}
