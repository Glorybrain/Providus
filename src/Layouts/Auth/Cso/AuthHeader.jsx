import React from "react";
import { Link } from "react-router";
import { LogoFullDarkVariant, LogoFullWhiteVariant } from "@/data";
import { HeadPhoneIcon, IconWrapper } from "@/data/Icons";
import { HelpCircle, X } from "lucide-react";

export const CsoAuthHeader = () => {
  return (
    <header className="md:py-6 py-4 border-b border-[#EBEBEB]">
      <div className="px-4 mx-auto md:px-0 md:w-11/12 xl:w-10/12">
        <nav className="flex items-center justify-between">
          <figure>
            <img src={LogoFullWhiteVariant} alt="" />
          </figure>

          <div className="flex items-center gap-x-4">
            <Link className="text-[#5C5C5C] text-sm">
              <IconWrapper className="sm:hidden">
                <HelpCircle />
              </IconWrapper>
              <span className="hidden sm:flex">Need help?</span>
            </Link>
            <Link className="border flex items-center gap-x-1 text-sm font-medium text-[#5C5C5C] border-[#EBEBEB] p-[10px] rounded-lg">
              <IconWrapper>
                <HeadPhoneIcon />
              </IconWrapper>
              <span className="hidden sm:flex">Contact Us</span>
            </Link>
            <button>
              <IconWrapper>
                <X className="text-[#5C5C5C] w-5 h-5" />
              </IconWrapper>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
