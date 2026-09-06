import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/services/saudi-arabia')({
  component: ServicesSaudiArabiaLayout,
})

function ServicesSaudiArabiaLayout() {
  return <Outlet />
}
