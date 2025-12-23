import { AdminAuthHeader } from "@/Layouts/Auth/Admin/AuthHeader";
import React from "react";
import { Outlet } from "react-router";

export const AdminAuthPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AdminAuthHeader />
      <main className="flex-grow relative z-10 w-full px-4 pb-12 mx-auto max-w-[29rem]">
        <Outlet />
      </main>
    </div>
  );
};
