import { StateDataContext } from "@/App";
import { FormControl, SelectBox } from "@/components/BaseComponents/FormInputs";
import { AuditDetailsModal } from "@/components/LayoutComponents/AllModals";
import { AddAdminSidebar } from "@/components/PageComponents/Dashboard/AddAdminSidebar";
import { ActiveIcon, DefaultAvatar, PendingIcon, SuspendIcon } from "@/data";
import {
  ArrowUpDownFillIcon,
  DotsVerticalIcon,
  IconWrapper,
} from "@/data/Icons";
import { Plus, DotSquare, ChevronRight, Search, Filter } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

const admins = [
  {
    name: "Jeje Matins",
    action: "Place request",
    stamp: "Created token request...",
    lastLogin: "2024-07-28 10:30 AM",
    role: "CSO",
    address: "192.168.1.100",
  },
  {
    name: "Jeje Matins",
    action: "Approve request",
    stamp: "Approve request",
    lastLogin: "2024-07-28 10:30 AM",
    role: "CSO",
    address: "192.168.1.100",
  },
  {
    name: "Jeje Matins",
    action: "Place request",
    stamp: "Created token request...",
    lastLogin: "2024-07-28 10:30 AM",
    role: "BSO",
    address: "192.168.1.100",
  },
  {
    name: "Jeje Matins",
    action: "Place request",
    stamp: "Approve request",
    lastLogin: "2024-07-28 10:30 AM",
    role: "CSO",
    address: "192.168.1.100",
  },
];

const adminOptions = [
  { label: "All Administrators", value: "all" },
  { label: "Admin 1", value: "admin1" },
  { label: "Admin 2", value: "admin2" },
];

const moduleOptions = [
  { label: "All Modules", value: "all" },
  { label: "Users", value: "users" },
  { label: "Roles", value: "roles" },
];
const actionOptions = [
  { label: "All Actions", value: "all" },
  { label: "Create", value: "create" },
  { label: "Update", value: "update" },
  { label: "Delete", value: "delete" },
];

export const AuditLog = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (type, value) => {
    switch (type) {
      case "AUDIT_DETAILS":
        setIsModalOpen(value);
        break;

      default:
        break;
    }
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
              <div className="flex items-center gap-x-2">
                <IconWrapper>
                  <Filter className="w-5 h-5" />
                </IconWrapper>
                <h2 className="text-lg text-[#171717] font-medium">
                  Filter Audit Events
                </h2>
              </div>
              <span className="text-sm text-[#5C5C5C]">
                Refine your audit log view by specific criteria.
              </span>
            </div>
          </header>
        </section>

        <section className="space-y-5">
          <div className="">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* Administrator */}
              <SelectBox
                label="Administrator"
                placeholder="All Administrators"
                options={adminOptions}
              />

              {/* Module */}
              <SelectBox
                label="Module"
                placeholder="All Modules"
                options={moduleOptions}
              />

              {/* Action Performed */}
              <SelectBox
                label="Action Performed"
                placeholder="All Actions"
                options={actionOptions}
              />

              {/* IP Address */}
              <FormControl
                type="text"
                label={{
                  exist: true,
                  text: "IP Address",
                }}
                placeholder="Search IP Address..."
                style="border border-[#CECECE] min-h-[2.55rem]"
                floatEle={{
                  exist: true,
                  position: "left",
                  children: <Search className="w-4 h-4 text-[#9CA3AF]" />,
                }}
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                className="p-2.5 rounded-xl border border-[#E2A919] text-sm text-[#E2A919] font-medium transition"
              >
                Clear Filters
              </button>

              <button
                type="button"
                className="p-2.5 rounded-xl bg-[#E2A919] text-white text-sm font-medium transition"
              >
                Apply Filters
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h3>Audit Events</h3>

            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F7F7F7]">
                  <tr>
                    {[
                      "Admin",
                      "Role",
                      "Action",
                      "After State",
                      "Timestamp",
                      "IP Address",
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
                        <span className="text-[#171717] text-sm">
                          {admin.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                        {admin.role}
                      </td>
                      <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                        {admin.action}
                      </td>
                      <td className="px-6 py-4 text-[#171717] text-sm whitespace-nowrap">
                        {admin.stamp}
                      </td>
                      <td className="px-6 py-4  text-sm text-[#565D6D]">
                        {admin.lastLogin}
                      </td>
                      <td className="px-6 py-4 text-sm text-start">
                        {admin.address}
                      </td>
                      <td className="relative px-6 py-4 text-center">
                        <button onClick={() => toggleDropdown(idx)}>
                          <IconWrapper>
                            <DotsVerticalIcon className="w-5 h-5 text-[#171717]" />
                          </IconWrapper>
                        </button>

                        {/* Dropdown */}
                        {openDropdown === idx && (
                          <div className="absolute z-10 w-40 bg-white border border-gray-200 rounded-md shadow-lg right-6 top-10">
                            <button
                              onClick={() => toggleModal("AUDIT_DETAILS", true)}
                              className="w-full px-4 py-2 text-sm text-left whitespace-nowrap hover:bg-gray-100"
                            >
                              View
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <AuditDetailsModal
        open={isModalOpen}
        modalData={{ toggleModal }}
        action={() => toggleModal("AUDIT_DETAILS", false)}
      />
    </div>
  );
};
