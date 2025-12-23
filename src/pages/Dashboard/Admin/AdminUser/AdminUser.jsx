import { StateDataContext } from "@/App";
import { FormControl } from "@/components/BaseComponents/FormInputs";
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
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "CSO",
    status: "Active",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "CSO",
    status: "Suspended",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "BSO",
    status: "Pending",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "CSO",
    status: "Active",
  },
];

const statusIcon = {
  Active: ActiveIcon,
  Suspended: SuspendIcon,
  Pending: PendingIcon,
};

export const AdminUser = () => {
  const { stateData, setStateData } = useContext(StateDataContext);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleAction = (action, admin) => {
    console.log(`${action} clicked for ${admin.name}`);
    setOpenDropdown(null); // close dropdown after click
  };

  const openAddAdminSidebar = () => {
    const next = structuredClone(stateData);
    next.dashboard.admin.addAdminSidebar = true;
    setStateData(next);
  };

  return (
    <div className="p-4 md:p-6">
      <main className="space-y-6">
        <section className="space-y-5">
          <header className="flex flex-col lg:border-b border-[#EBEBEB] pb-4 justify-between gap-y-4 md:flex-row md:items-center">
            <div className="flex flex-col">
              <h2 className="text-lg text-[#171717] font-medium">
                Current Administrators
              </h2>
              <span className="text-sm text-[#5C5C5C]">
                Manage roles, statuses, and access for all system
                administrators.
              </span>
            </div>
            <div className="">
              <button
                onClick={openAddAdminSidebar}
                className="p-2.5 gap-x-2 flex items-center bg-[#E2A919] text-white text-sm rounded-xl"
              >
                <IconWrapper>
                  <Plus className="w-4 h-4" />
                </IconWrapper>
                Invite/create new administrator
              </button>
            </div>
          </header>
        </section>

        <section className="space-y-5">
          <div className="lg:w-9/12">
            <div className="flex items-center gap-x-4">
              <div className="relative flex-1 w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </span>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full py-2.5 min-h-[2.55rem] pl-10 pr-3 text-sm border border-[#EBEBEB] rounded-xl"
                />
              </div>
              <button className="border text-[#5C5C5C] min-h-[2.55rem] justify-center text-sm rounded-xl border-[#EBEBEB] p-2 py-2.5 flex items-center gap-x-1">
                All Status
                <IconWrapper>
                  <ChevronRight className="w-4 h-4" />
                </IconWrapper>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7]">
                <tr>
                  {[
                    "Administrator name",
                    "Email Address",
                    "Last Login",
                    "Role",
                    "Status",
                    "Action",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-4 text-sm font-normal text-left text-[#5C5C5C] capitalize whitespace-nowrap"
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
                    <td className="flex items-center gap-2 px-6 py-4">
                      <img
                        src={DefaultAvatar}
                        alt={admin.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-[#171717] text-sm">
                        {admin.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                      {admin.email}
                    </td>
                    <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                      {admin.lastLogin}
                    </td>
                    <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                      {admin.role}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 inline-flex gap-x-1 items-center whitespace-nowrap text-[#5C5C5C] border-[#EBEBEB] border text-xs font-medium rounded-[6px]`}
                      >
                        <img
                          src={statusIcon[admin.status]}
                          alt={admin.status}
                          className="w-4 h-4"
                        />
                        {admin.status}
                      </span>
                    </td>
                    <td className="relative px-6 py-4 text-center">
                      <button onClick={() => toggleDropdown(idx)}>
                        <IconWrapper>
                          <DotsVerticalIcon className="w-5 h-5 text-[#171717]" />
                        </IconWrapper>
                      </button>

                      {/* Dropdown */}
                      {openDropdown === idx && (
                        <div className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-lg w-fit right-6 top-10">
                          <button
                            onClick={() => handleAction("Suspend Admin", admin)}
                            className="w-full px-4 py-2 text-sm text-left whitespace-nowrap hover:bg-gray-100"
                          >
                            Suspend Admin
                          </button>
                          <button
                            onClick={() =>
                              handleAction("Deactivate Admin", admin)
                            }
                            className="w-full px-4 py-2 text-sm text-left whitespace-nowrap hover:bg-gray-100"
                          >
                            Deactivate Admin
                          </button>
                        </div>
                      )}
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
