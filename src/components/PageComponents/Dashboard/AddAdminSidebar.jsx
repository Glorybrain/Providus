import React, { useEffect, useRef, useContext, useState } from "react";
import { StateDataContext } from "@/App";
import { X as CloseIcon, Mail, User } from "lucide-react";
import { FormControl, SelectBox } from "@/components/BaseComponents/FormInputs";
import { ActiveIcon } from "@/data";

export const AddAdminSidebar = () => {
  const {
    stateData,
    stateData: {
      dashboard: { admin },
    },
    setStateData,
  } = useContext(StateDataContext);

  const isOpen = !!admin?.addAdminSidebar;

  const close = () => {
    const next = structuredClone(stateData);
    if (!next.dashboard.admin) next.dashboard.admin = {};
    next.dashboard.admin.addAdminSidebar = false;
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (type, value) => {
    switch (type) {
      case "RESEND_WEBHOOK":
        setIsModalOpen(value);
        break;

      default:
        break;
    }
  };

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
                Create new admin
              </h5>
              <p className="text-sm text-[#5C5C5C]">
                You have 3 new notifications
              </p>
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
          <div className="pt-4 w-full overflow-auto max-h-[calc(100vh-100px)] lg:h-[100vh]">
            <div className="space-y-4">
              <div className="px-5 space-y-4 ">
                <div className="">
                  <FormControl
                    type="text"
                    required
                    style="border !rounded-xl border-[#EBEBEB]"
                    label={{
                      exist: true,
                      id: "username",
                      text: "AD Username",
                    }}
                    floatEle={{
                      exist: true,
                      position: "left",
                      children: <User className="w-4 h-4 text-[#A3A3A3]" />,
                    }}
                    placeholder="Input username"
                  />
                </div>
                <div className="">
                  <FormControl
                    type="email"
                    required
                    style="border !rounded-xl border-[#EBEBEB]"
                    label={{
                      exist: true,
                      id: "email",
                      text: "AD Email Address",
                    }}
                    floatEle={{
                      exist: true,
                      position: "left",
                      children: <Mail className="w-4 h-4 text-[#A3A3A3]" />,
                    }}
                    placeholder="hello@alignui.com"
                  />
                </div>
              </div>

              <div className="w-full p-5 bg-[#EBEBEB]">
                <div className="flex items-center gap-x-2">
                  <figure>
                    <img src={ActiveIcon} alt="" />
                  </figure>
                  <span className="text-[#5C5C5C] font-medium">
                    Grace Alpha
                  </span>
                </div>
              </div>

              <div className="px-5 space-y-4 ">
                <SelectBox
                  label="Select user role"
                  required
                  placeholder="Select"
                  boxClassName="rounded-xl"
                  options={moduleOptions}
                />
                <button
                  type="button"
                  className="
                               w-full py-3.5 rounded-[0.8rem] 
                                border-[1px] border-transparent
                                shadow-[0px_0px_0px_1px_#E2A919,0px_1px_2px_0px_#0E121B3D]
                                [border-image:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_1]
                                bg-[linear-gradient(0deg,#E2A919,#E2A919),linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)]
                                font-medium text-white text-sm transition-colors duration-300 ease-in-out
                              "
                >
                  <span>Create Administrator</span>
                </button>
              </div>

              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
