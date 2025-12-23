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
    <header className="w-full px-4 py-4 mx-auto lg:py-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col lg:flex">
          <span className="text-lg text-[#171717] font-medium">Admin</span>
          <span className="text-sm text-[#5C5C5C]">Welcome back Chima</span>
        </div>

        <button onClick={toggleSidebar} className="lg:hidden">
          <IconWrapper>
            <MenuIcon className="w-6 h-6 text-[#1D2939]" />
          </IconWrapper>
        </button>
      </div>
    </header>
  );
};
