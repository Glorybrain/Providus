import React from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { ArrowUpDownIcon, MenuIcon } from "lucide-react";
import { IconWrapper } from "@/data/Icons";
import { StateDataContext } from "@/App";
import { DefaultAvatar, LogoFullWhiteVariant } from "@/data";

export const CsoHeader = () => {
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
        <div className="flex items-center gap-x-2">
          <figure className="lg:w-14 bg-[#FFECC0] rounded-full w-10 h-10 lg:h-14">
            <img src={DefaultAvatar} alt="" className="w-full h-full" />
          </figure>
          <div className="flex-col hidden md:flex">
            <span className="text-lg text-[#171717] font-medium">
              Chima Kenny
            </span>
            <span className="text-sm text-[#5C5C5C]">Welcome CSO</span>
          </div>
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
