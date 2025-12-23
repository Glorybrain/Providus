import { StateDataContext } from "@/App";
import { CheckBox, FormControl } from "@/components/BaseComponents/FormInputs";
import { AddAdminSidebar } from "@/components/PageComponents/Dashboard/AddAdminSidebar";
import { ActiveIcon, DefaultAvatar, PendingIcon, SuspendIcon } from "@/data";
import {
  ArrowUpDownFillIcon,
  DotsVerticalIcon,
  IconWrapper,
} from "@/data/Icons";
import { Plus, DotSquare, ChevronRight, Search } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

const admins = [
  {
    stamp: "Created token request...",
    role: "CSO",
    address: "192.168.1.100",
  },
  {
    stamp: "Approve request",
    role: "BSM",
    address: "192.168.1.100",
  },
];

export const RolePermission = () => {
  const { stateData, setStateData } = useContext(StateDataContext);
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6">
      <main className="space-y-6">
        <section className="space-y-5">
          <div className="flex flex-col pb-4 border-b border-[#EBEBEB]  lg:hidden">
            <span className="text-lg text-[#171717] font-medium">Admin</span>
            <span className="text-sm text-[#5C5C5C]">Welcome back Chima</span>
          </div>
          <header className="flex flex-col lg:border-b border-[#EBEBEB] pb-4 justify-between gap-y-4 md:flex-row md:items-center">
            <div className="flex flex-col">
              <h2 className="text-lg text-[#171717] font-medium">
                Role Manager
              </h2>
              <span className="text-sm text-[#5C5C5C]">
                Configure granular access controls for each role
              </span>
            </div>
          </header>
        </section>

        <section className="space-y-5">
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7]">
                <tr>
                  {["Admin Role", "CSO", "BSM"].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-4 text-sm font-normal text-left text-[#5C5C5C] whitespace-nowrap"
                    >
                      <div className="flex items-center gap-1">
                        {head}
                        <IconWrapper>
                          <ArrowUpDownFillIcon className="w-4 h-4" />
                        </IconWrapper>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {admins.map((admin, idx) => (
                  <tr key={idx}>
                    {/* Admin Role */}
                    <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                      {admin.stamp}
                    </td>

                    {/* CSO */}
                    <td className="px-6 py-4">
                      <label className="flex items-center gap-2 text-sm text-[#5C5C5C] cursor-pointer">
                        <CheckBox
                          checked={admin.role === "CSO"}
                          onChange={() => {}}
                        />
                        Yes
                      </label>
                    </td>

                    {/* BSM */}
                    <td className="px-6 py-4">
                      <label className="flex items-center gap-2 text-sm text-[#5C5C5C] cursor-pointer">
                        <CheckBox
                          checked={admin.role === "BSM"}
                          onChange={() => {}}
                        />
                        Yes
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <AddAdminSidebar />
    </div>
  );
};
