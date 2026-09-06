import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/uae')({
  component: ServicesUAELayout,
})

function ServicesUAELayout() {
  return <Outlet />
}
