import React, { useEffect, useRef, useContext, useState } from "react";
import { StateDataContext } from "@/App";
import { X as CloseIcon, Mail, User } from "lucide-react";
import { FormControl, SelectBox } from "@/components/BaseComponents/FormInputs";
import {
  ActiveIcon,
  CsoVector1,
  CsoVector3,
  CsoVector4,
  CsoVector5,
  PendingIcon,
  SuccessIcon,
  SuspendIcon,
} from "@/data";

const STATUS_CONFIG = {
  Pending: {
    bg: "bg-[#FCF6E8]",
    text: "Waiting for approval",
    textColor: "text-[#E2A919]",
    icon: PendingIcon,
    vector: CsoVector3,
    iconSize: "w-7 h-7",
  },
  Active: {
    bg: "bg-[#1FC16B]",
    text: "Success",
    textColor: "text-white",
    icon: SuccessIcon,
    vector: CsoVector4,
    iconSize: "w-5 h-5",
  },
  Suspended: {
    bg: "bg-[#FB37481A]",
    text: "Declined",
    textColor: "text-[#FB3748]",
    icon: SuspendIcon,
    vector: CsoVector5,
    iconSize: "w-7 h-7",
  },
};

export const TokenRequestDetails = () => {
  const {
    stateData,
    stateData: {
      dashboard: { cso },
    },
    setStateData,
  } = useContext(StateDataContext);

  const status = cso?.selectedRequest?.status;

  const isOpen = !!cso?.tokenRequestDetailsSidebar;

  const close = () => {
    const next = structuredClone(stateData);
    if (!next.dashboard.cso) next.dashboard.cso = {};
    next.dashboard.cso.tokenRequestDetailsSidebar = false;
    setStateData(next);
  };

  // lock scroll + Esc to close
  useEffect(() => {
    if (isOpen) document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
    const onKey = (e) => e.key === "Escape" && isOpen && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const panelRef = useRef(null);

  const moduleOptions = [
    { label: "All Modules", value: "all" },
    { label: "Users", value: "users" },
    { label: "Roles", value: "roles" },
  ];

  return (
    <aside
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 ${
          isOpen ? "backdrop-blur-[2px]" : "backdrop-blur-0"
        }`}
        onMouseDown={close}
      />

      {/* Drawer */}
      <div className="absolute inset-0 flex justify-end" onMouseDown={close}>
        <div
          ref={panelRef}
          className={`relative h-[100dvh] max-h-[100dvh] w-full sm:w-[60%] md:w-[450px] lg:w-[420px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
          role="dialog"
          aria-modal="true"
          aria-label="Add New Ayah"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header className="sticky top-0 z-10 flex items-start justify-between px-5 pt-5 pb-3 bg-white border-b">
            <div>
              <h5 className="text-lg font-medium text-[#171717]">
                Request Details
              </h5>
            </div>
            <button
              onClick={close}
              type="button"
              className="p-1.5 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <CloseIcon className="w-[18px] h-[18px] text-[#111827]" />
            </button>
          </header>

          {/* Body */}
          <div className="w-full overflow-auto max-h-[calc(100vh-100px)] lg:h-[100vh]">
            <div className="space-y-4">
              <div className="">
                <div className="p-5 py-2 bg-[#F7F7F7]">
                  <span className="text-xs text-[#A3A3A3] uppercase font-medium">
                    TOKEN REQUEST STATUS
                  </span>
                </div>
                {status && STATUS_CONFIG[status] && (
                  <div
                    className={`flex-1 relative overflow-hidden ${STATUS_CONFIG[status].bg}`}
                  >
                    <div className="relative z-10 flex items-center justify-between p-4 py-6">
                      <div className="flex items-center gap-x-1.5">
                        <figure className={STATUS_CONFIG[status].iconSize}>
                          <img
                            src={STATUS_CONFIG[status].icon}
                            alt={status}
                            className="w-full h-full"
                          />
                        </figure>
                        <span
                          className={`text-base font-medium ${STATUS_CONFIG[status].textColor}`}
                        >
                          {STATUS_CONFIG[status].text}
                        </span>
                      </div>
                    </div>

                    <figure className="absolute bottom-0 right-0 -z-1">
                      <img src={STATUS_CONFIG[status].vector} alt="" />
                    </figure>
                  </div>
                )}

                <div className="p-5 py-2 bg-[#F7F7F7]">
                  <span className="text-xs text-[#A3A3A3] uppercase font-medium">
                    Customer info
                  </span>
                </div>
              </div>

              <div className="w-full p-5 py-2">
                <div className="flex flex-col gap-x-2">
                  <span className="text-lg text-[#171717] font-medium">
                    Matthew Johnson
                  </span>
                  <span className="text-[#5C5C5C] font-normal text-sm">
                    C-ID: 45TY687
                  </span>
                </div>
              </div>

              <div className="p-5 py-2 bg-[#F7F7F7]">
                <span className="text-xs text-[#A3A3A3] uppercase font-medium">
                  Other info
                </span>
              </div>

              <div className="w-full p-5 py-0">
                <ul className="flex flex-col gap-y-2.5">
                  <li className="flex flex-col border-b border-[#EBEBEB] pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Account number
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      8834789840
                    </span>
                  </li>
                  <li className="flex flex-col border-b border-[#EBEBEB] pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Customer email
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      matthwejohnson@gmail.com
                    </span>
                  </li>
                  <li className="flex flex-col border-b border-[#EBEBEB] pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Customer phone number
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      0813 596 2940
                    </span>
                  </li>
                  <li className="flex flex-col border-b border-[#EBEBEB] pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Request Type
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      New hardware token
                    </span>
                  </li>
                  <li className="flex flex-col border-b border-[#EBEBEB] pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Date & time INITIATED
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      September 6, 2025 - 04:00PM
                    </span>
                  </li>
                  <li className="flex flex-col border-b border-[#EBEBEB] pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Initiated by
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      John Paul (RM)
                    </span>
                  </li>
                  <li className="flex flex-col pb-2 gap-y-0.5">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                      Token Assigned (SERIAL NO)
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      DSEC78YUI
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
