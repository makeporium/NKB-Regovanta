import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/canada')({
  component: ServicesCanadaLayout,
})

function ServicesCanadaLayout() {
  return <Outlet />
}
