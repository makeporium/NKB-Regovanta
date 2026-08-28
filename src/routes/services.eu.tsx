import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/eu')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesEuLayout,
})

function ServicesEuLayout() {
  return <Outlet />
}
