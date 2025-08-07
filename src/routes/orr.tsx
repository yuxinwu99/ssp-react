import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orr')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/orr"!</div>
}
