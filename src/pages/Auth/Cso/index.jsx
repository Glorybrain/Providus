import { AuthBg } from "@/data";
import { CsoAuthFooter } from "@/Layouts/Auth/Cso/AuthFooter";
import { CsoAuthHeader } from "@/Layouts/Auth/Cso/AuthHeader";
import React from "react";
import { Outlet } from "react-router";

export const CsoAuthPage = () => {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
      <CsoAuthHeader />

      <main className="flex-grow flex-1 flex items-center justify-center relative z-10 w-full px-4 mx-auto max-w-[29rem]">
        <Outlet />
      </main>

      <CsoAuthFooter />
      <figure className="absolute inset-0">
        <img src={AuthBg} alt="" className="w-full h-full" />
      </figure>
    </div>
  );
};
