import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import TextField from "@mui/material/TextField";

export const Route = createFileRoute("/orr/form")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-5">
      <form>
        <div className="relative w-full max-w-md mx-auto mt-10">
          <div className="absolute left-3 -top-2 bg-white px-1 text-sm text-gray-600 z-10">
            Onboarding Details
          </div>
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-3 min-h-[40px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
            <span>Cloud Service Provider</span>
            <Button>Google Cloud Platform(GCP)</Button>
            <span>Cloud Provider Region</span>
            <Button>Singapore</Button>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto mt-10">
          <div className="absolute left-3 -top-2 bg-white px-1 text-sm text-gray-600 z-10">
            Application Level Details
          </div>
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-3 min-h-[40px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
            <span>Cloud App Code</span>
            <TextField required label="App Code" variant="outlined" />
          </div>
        </div>
      </form>
    </div>
  );
}
