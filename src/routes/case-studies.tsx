import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesLayout,
})

function CaseStudiesLayout() {
  return <Outlet />
}
