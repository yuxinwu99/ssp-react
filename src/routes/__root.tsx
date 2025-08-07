import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";

import { AppSidebar } from "@/components/app-sidebar.tsx";
import TopNavBar from "@/components/top-nav.tsx";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <div className="flex w-full h-screen flex-col">
        <TopNavBar />
        <div className="flex flex-col overflow-hidden">
          <Outlet />
        </div>
        {/* <TanStackRouterDevtools />
        <TanStackQueryLayout /> */}
      </div>
    </SidebarProvider>
  ),
});
