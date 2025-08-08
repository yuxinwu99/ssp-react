import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/orr/")({
  component: RouteComponent,
});

type ORR = {
  id: string;
  active: boolean;
  status: "active" | "inactive" | "pending";
  region: string;
  LOBT: string;
  appCode: string;
  submittedAt: string;
  updatedAt: string;
};

function RouteComponent() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Link
        to="/orr/form"
        className="text-blue-500 hover:underline mb-4 bg-red-300 p-3 rounded-md w-fit"
      >
        create new ORR
      </Link>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Active</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>LOBT</TableHead>
            <TableHead>App Code</TableHead>
            <TableHead>Submitted At</TableHead>
            <TableHead>Updated At</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
