import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compliance")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/compliance"!</div>;
}
