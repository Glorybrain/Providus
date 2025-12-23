import React from "react";
import { Link } from "react-router";
import { LogoFullDarkVariant, LogoFullWhiteVariant } from "@/data";
import { HeadPhoneIcon, IconWrapper } from "@/data/Icons";
import { HelpCircle, X } from "lucide-react";

export const CsoAuthFooter = () => {
  return (
    <footer className="md:py-3 md:pt-4 border-t-8 border-[#E4AF28] relative z-20 bg-[#2F444E] py-3">
      <div className="mx-auto text-center">
        <span className="text-[#E3AC21]">ProvidusBank 2025</span>
      </div>
    </footer>
  );
};
