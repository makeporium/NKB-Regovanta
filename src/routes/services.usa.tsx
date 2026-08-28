import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/usa')({
  component: ServicesUsaLayout,
})

function ServicesUsaLayout() {
  return <Outlet />
}
