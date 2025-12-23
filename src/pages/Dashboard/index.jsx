import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { DashboardHeader } from "@/Layouts/Dashboard/DashboardHeader";
import { DashboardSidebar } from "@/Layouts/Dashboard/DashboardSidebar";
import { StateDataContext } from "../../App";

export const DashboardIndex = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const { pathname } = useLocation();
  const location = useLocation();

  const hiddenSidebarRoutePrefixes = [];
  const shouldHideSidebar = hiddenSidebarRoutePrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      {!shouldHideSidebar && (
        <>
          {/* Mobile sidebar (slides over content) */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-full sm:w-64 bg-white shadow-lg transform transition-transform duration-300
            lg:hidden
            ${
              stateData.dashboard.sidebar
                ? "translate-x-0"
                : "-translate-x-full"
            }`}
          >
            <DashboardSidebar />
          </div>

          {/* Mobile overlay */}
          {stateData.dashboard.sidebar && (
            <div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => {
                const next = structuredClone(stateData);
                next.dashboard.sidebar = false;
                setStateData(next);
              }}
            />
          )}

          {/* Desktop sidebar (takes space in layout) */}
          <aside className="relative hidden lg:block shrink-0 lg:w-52 xl:w-[272px] 2xl:w-1/6">
            <DashboardSidebar />
          </aside>
        </>
      )}

      {/* Main area */}
      <main className="relative flex flex-col flex-1 min-w-0 mb-10">
        <div className="sticky top-0 z-20 bg-white shadow-sm">
          <DashboardHeader />
        </div>

        <section className="w-full flex-shrink-1">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
