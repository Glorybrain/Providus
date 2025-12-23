import React from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { ArrowUpDownIcon, MenuIcon } from "lucide-react";
import { IconWrapper } from "@/data/Icons";
import { StateDataContext } from "@/App";
import { LogoFullWhiteVariant } from "@/data";

export const AdminHeader = () => {
  const navigate = useNavigate();
  const { stateData, setStateData } = React.useContext(StateDataContext);

  const toggleSidebar = () => {
    const newState = structuredClone(stateData);
    newState.dashboard.sidebar = !newState.dashboard.sidebar;
    setStateData(newState);
  };

  return (
    <header className="w-full px-4 py-5 mx-auto lg:6">
      <div className="flex items-center justify-between">
        <header className="flex items-center justify-between flex-1 lg:hidden gap-x-1">
          <div className="flex items-center gap-x-1.5">
            <figure>
              <img src={LogoFullWhiteVariant} alt="" />
            </figure>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-medium text-[#171717]">
                Providus Bank
              </h1>
            </div>
          </div>
        </header>

        <button className="lg:hidden">
          <IconWrapper>
            <MenuIcon />
          </IconWrapper>
        </button>

        <div className="flex-col hidden lg:flex">
          <span className="text-lg text-[#171717] font-medium">Admin</span>
          <span className="text-sm text-[#5C5C5C]">Welcome back Chima</span>
        </div>
      </div>
    </header>
  );
};
