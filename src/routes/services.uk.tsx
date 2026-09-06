import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/uk')({
  component: ServicesUkLayout,
})

function ServicesUkLayout() {
  return <Outlet />
}
