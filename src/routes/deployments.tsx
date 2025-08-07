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
export const Route = createFileRoute("/deployments")({
  component: RouteComponent,
});

type Deployment = {
  prn: string;
  portfolio: string;
  module: string;
  app: string;
  branches: string[];
  builds: string[];
};

function RouteComponent() {
  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PRN</TableHead>
            <TableHead>Portfolio</TableHead>
            <TableHead>Module</TableHead>
            <TableHead>App</TableHead>
            <TableHead>Branches</TableHead>
            <TableHead>Builds</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
