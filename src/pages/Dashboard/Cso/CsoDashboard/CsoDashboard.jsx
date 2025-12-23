import { StateDataContext } from "@/App";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { AddAdminSidebar } from "@/components/PageComponents/Dashboard/AddAdminSidebar";
import { CreateTokenSidebar } from "@/components/PageComponents/Dashboard/CreateTokenSidebar";
import { TokenRequestDetails } from "@/components/PageComponents/Dashboard/TokenRequestDetails";
import {
  ActiveIcon,
  CsoVector1,
  CsoVector2,
  DefaultAvatar,
  PendingIcon,
  SuspendIcon,
} from "@/data";
import {
  ArrowUpDownFillIcon,
  DotsVerticalIcon,
  FilterIcon,
  IconWrapper,
  ShareIcon,
} from "@/data/Icons";
import {
  Plus,
  DotSquare,
  ChevronRight,
  Search,
  ArrowRight,
  MoveRight,
  Calendar,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

const admins = [
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "New request",
    status: "Active",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "New request",
    status: "Suspended",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "New request",
    status: "Pending",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "New request",
    status: "Active",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "Replace token",
    status: "Pending",
  },
  {
    name: "Jeje Matins",
    email: "jejemartins@gmail.com",
    lastLogin: "2024-07-28 10:30 AM",
    role: "New request",
    status: "Active",
  },
];

const statusIcon = {
  Active: ActiveIcon,
  Suspended: SuspendIcon,
  Pending: PendingIcon,
};

export const CsoDashboard = () => {
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

  const openCreateTokenSidebar = () => {
    const next = structuredClone(stateData);
    next.dashboard.cso.createTokenSidebar = true;
    setStateData(next);
  };

  const openTokenRequestDetailsSidebar = (admin) => {
    const next = structuredClone(stateData);
    if (!next.dashboard.cso) next.dashboard.cso = {};

    next.dashboard.cso.tokenRequestDetailsSidebar = true;
    next.dashboard.cso.selectedRequest = admin;

    setStateData(next);
  };

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
                Initiate a token fast
              </h2>
              <span className="text-sm text-[#5C5C5C]">
                Create token request as a CSO
              </span>
            </div>
            <div className="">
              <button
                onClick={openCreateTokenSidebar}
                className="p-2.5 gap-x-2 flex items-center bg-[#E2A919] text-white text-sm rounded-xl"
              >
                <IconWrapper>
                  <Plus className="w-4 h-4" />
                </IconWrapper>
                Create token request
              </button>
            </div>
          </header>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-y-4 gap-x-4 md:flex-row">
            <div className="flex-1 bg-[#E03AA7] relative overflow-hidden rounded-lg">
              <div className="relative z-10 flex items-center justify-between p-4 py-5">
                <div className="flex flex-col">
                  <span className="text-[#FCEBF6] text-sm font-medium">
                    Pending request
                  </span>
                  <span className="text-[#FCEBF6] text-2xl font-black">24</span>
                </div>
                <div className="">
                  <Link className="">
                    <div className="absolute inset-0"></div>
                    <IconWrapper className="p-2 bg-white rounded-full">
                      <MoveRight className="text-[#E03AA7] w-4 h-4" />
                    </IconWrapper>
                  </Link>
                </div>
              </div>
              <figure className="absolute bottom-0 right-0 -z-1">
                <img src={CsoVector1} alt="" />
              </figure>
            </div>
            <div className="border-r hidden md:flex border-[#EBEBEB]" />
            <div className="flex-1 relative overflow-hidden bg-[#EAF9F2] rounded-lg">
              <div className="relative z-10 flex items-center justify-between p-4 py-5">
                <div className="flex flex-col">
                  <span className="text-[#5C5C5C] text-sm font-medium">
                    Completed request
                  </span>
                  <span className="text-[#171717] text-2xl font-black">12</span>
                </div>
                <div className="">
                  <Link className="">
                    <div className="absolute inset-0"></div>
                    <IconWrapper className="p-2 bg-white rounded-full">
                      <MoveRight className="text-[#28C581] w-4 h-4" />
                    </IconWrapper>
                  </Link>
                </div>
              </div>
              <figure className="absolute bottom-0 right-20 z-1">
                <img src={CsoVector2} alt="" />
              </figure>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center gap-y-4 gap-x-4">
              <div className="relative w-full lg:w-[50%] min-w-40">
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
                <IconWrapper>
                  <Calendar className="w-5 h-5" />
                </IconWrapper>
                Feb 04 - Feb 11, 2024
              </button>
              <button className="border text-[#5C5C5C] min-h-[2.55rem] justify-center text-sm rounded-xl border-[#EBEBEB] p-2 py-2.5 flex items-center gap-x-1">
                All Status
                <IconWrapper>
                  <ChevronRight className="w-5 h-5" />
                </IconWrapper>
              </button>
              <button className="border text-[#5C5C5C] min-h-[2.55rem] justify-center text-sm rounded-xl border-[#EBEBEB] p-2 py-2.5 flex items-center gap-x-1">
                <IconWrapper>
                  <FilterIcon className="w-5 h-5" />
                </IconWrapper>
                Filter
              </button>
              <button className="border text-[#5C5C5C] min-h-[2.55rem] justify-center text-sm rounded-xl border-[#EBEBEB] p-2 py-2.5 flex items-center gap-x-1">
                <IconWrapper>
                  <ShareIcon className="w-5 h-5" />
                </IconWrapper>
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7]">
                <tr>
                  {[
                    "Customer name",
                    "Customer email",
                    "Date",
                    "Type of request",
                    "Status",
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
                  <tr
                    key={idx}
                    onClick={() => openTokenRequestDetailsSidebar(admin)}
                    className="cursor-pointer"
                  >
                    <td className="flex items-center gap-2 px-6 py-4">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <CreateTokenSidebar />
      <TokenRequestDetails />
    </div>
  );
};
