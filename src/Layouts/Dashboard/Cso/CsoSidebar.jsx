import { Link, NavLink, useLocation, useNavigate } from "react-router";
import React, { useMemo, useState, useEffect } from "react";
import { routes } from "@/data/routes";
import { ArrowUpDown, ChevronRight, X } from "lucide-react";
import { StateDataContext } from "@/App";
import {
  AdminUserIcon,
  ArrowUpDownIcon,
  AuditLogIcon,
  IconWrapper,
  RolePermissionIcon,
} from "@/data/Icons";
import { DefaultAvatar, LogoFullWhiteVariant, VerifiedFill } from "@/data";

const navItems = [
  {
    name: "Dashboard",
    icon: <AdminUserIcon />,
    route: routes.DASHBOARD.CSO.abs,
  },
  {
    name: "Request History",
    icon: <AuditLogIcon />,
    route: routes.DASHBOARD.CSO.request.abs,
  },
  {
    name: "Create Token Request",
    icon: <RolePermissionIcon />,
    route: routes.DASHBOARD.CSO,
  },
  {
    name: "Manage Token",
    icon: <RolePermissionIcon />,
    route: routes.DASHBOARD.CSO,
  },
];

export const CsoSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { stateData, setStateData } = React.useContext(StateDataContext);

  const closeSideBar = () => {
    const newState = structuredClone(stateData);
    newState.dashboard.sidebar = false;
    setStateData(newState);
  };

  return (
    <div className="h-full relative border-r border-[#EBEBEB] bg-white shadow-[33px_0px_13px_0px_#00000003,52px_0px_15px_0px_#00000000] transition-colors duration-300">
      <div className="sticky top-0 pt-6 h-dvh">
        <div className="flex flex-col h-full gap-y-5">
          <div className="px-4">
            <div className="flex border-b border-[#EBEBEB] pb-3 items-center  justify-between gap-x-2">
              <header className="flex items-center justify-between flex-1 gap-x-1">
                <div className="flex items-center gap-x-1.5">
                  <figure>
                    <img src={LogoFullWhiteVariant} alt="" />
                  </figure>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-sm font-medium text-[#171717]">
                      Providus Bank
                    </h1>
                    <span className="text-xs text-[#5C5C5C] font-regular">
                      Token Management
                    </span>
                  </div>
                </div>
                <div className="">
                  <IconWrapper className="shadow-[0_1px_2px_0_#0A0D1408] rounded-[6px] border p-1 border-[#EBEBEB]">
                    <ArrowUpDownIcon />
                  </IconWrapper>
                </div>
              </header>

              <button
                type="button"
                onClick={closeSideBar}
                className="flex md:hidden"
              >
                <IconWrapper>
                  <X />
                </IconWrapper>
              </button>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="relative flex flex-col justify-between h-full mb-4 gap-y-3">
            <ul className="flex flex-col h-full px-4 gap-y-1 md:mt-0 md:flex">
              <li className="p-1.5 mb-2">
                <span className="text-xs text-[#A3A3A3] font-medium uppercase">
                  Main
                </span>
              </li>

              {navItems.map((item) => {
                const isActive = location.pathname === item.route;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.route)}
                      className={`flex items-center justify-between rounded-[8px] py-2.5 px-3 w-full ${
                        isActive
                          ? "bg-[#F7F7F7] before:absolute before:left-0 before:rounded-br-lg before:rounded-tr-lg before:w-1 before:h-5 before:bg-[#E2A919]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-x-1.5">
                        <IconWrapper
                          className={
                            isActive
                              ? "text-[#E2A919] w-7 h-7"
                              : "text-[#5C5C5C] w-7 h-7"
                          }
                        >
                          {item.icon}
                        </IconWrapper>
                        <span
                          className={`text-sm font-medium ${
                            isActive ? "text-[#171717]" : "text-[#5C5C5C]"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                      {isActive && (
                        <IconWrapper>
                          <ChevronRight className="text-[#5C5C5C] w-5 h-5" />
                        </IconWrapper>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="px-4">
              <div className="flex border-t border-[#EBEBEB] pt-3 items-center  justify-between gap-x-2">
                <footer className="flex items-center justify-between flex-1 gap-x-1">
                  <div className="flex items-center gap-x-1.5">
                    <figure className="w-10 bg-[#FFECC0] rounded-full h-10">
                      <img
                        src={DefaultAvatar}
                        alt=""
                        className="w-full h-full"
                      />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center">
                        <h1 className="text-sm font-medium text-[#171717]">
                          Chima Kenny
                        </h1>
                        <figure>
                          <img src={VerifiedFill} alt="" />
                        </figure>
                      </div>
                      <span className="text-xs text-[#5C5C5C] font-regular">
                        chima@providus.com
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <IconWrapper className="">
                      <ChevronRight />
                    </IconWrapper>
                  </div>
                </footer>

                <button
                  type="button"
                  onClick={closeSideBar}
                  className="flex md:hidden"
                >
                  <IconWrapper>
                    <X />
                  </IconWrapper>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
