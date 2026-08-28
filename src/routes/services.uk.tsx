import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/uk')({
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
  component: ServicesUkLayout,
})

function ServicesUkLayout() {
  return <Outlet />
}
