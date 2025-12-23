import { CsoAuthHeader } from "@/Layouts/Auth/Cso/AuthHeader";
import React from "react";
import { Outlet } from "react-router";

export const CsoAuthPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CsoAuthHeader />
      <main className="flex-grow relative z-10 w-full px-4 pb-12 mx-auto max-w-[29rem]">
        <Outlet />
      </main>
    </div>
  );
};
