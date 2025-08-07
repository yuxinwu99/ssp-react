import { createFileRoute } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export const Route = createFileRoute("/orr")({
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
    <div className="p-4">
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
