import React, { useEffect, useRef, useContext, useState } from "react";
import { StateDataContext } from "@/App";
import { CheckCheckIcon, X as CloseIcon } from "lucide-react";
import { FormControl, SelectBox } from "@/components/BaseComponents/FormInputs";
import { ActiveIcon, SuspendIcon } from "@/data";

export const CreateTokenSidebar = () => {
  const {
    stateData,
    stateData: {
      dashboard: { cso },
    },
    setStateData,
  } = useContext(StateDataContext);

  const isOpen = !!cso?.createTokenSidebar;

  const close = () => {
    const next = structuredClone(stateData);
    if (!next.dashboard.cso) next.dashboard.cso = {};
    next.dashboard.cso.createTokenSidebar = false;
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

  const [isKycValidated, setIsKycValidated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kycStatus, setKycStatus] = useState("idle");

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
                Create token request
              </h5>
              <p className="text-sm text-[#5C5C5C]">
                Create quick token request for customer
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
          <div className="pt-4 w-full overflow-auto max-h-[calc(100vh-100px)]">
            <div>
              {kycStatus === "idle" && (
                <div className="px-5">
                  <span className="text-lg tracking-tighter leading-none text-[#171717] font-medium">
                    Provide customer’s username to validate KYC
                  </span>

                  <div className="mt-5">
                    <FormControl
                      type="email"
                      required
                      style="border !rounded-xl border-[#EBEBEB]"
                      label={{
                        exist: true,
                        id: "email",
                        text: "Input Customer username",
                      }}
                      placeholder="Input customer name"
                    />
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => {
                        const validationPassed = false;

                        setKycStatus(validationPassed ? "success" : "failed");
                      }}
                      className="w-full py-3.5 rounded-[0.8rem] bg-[#E2A919] text-white"
                    >
                      Validate KYC
                    </button>
                  </div>
                </div>
              )}

              {kycStatus === "failed" && (
                <>
                  <div className="w-full space-y-4 p-5 bg-[#F7F7F7]">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex w-fit border border-[#EBEBEB] px-4 py-2 rounded-lg items-center gap-x-2">
                        <figure className="w-4 h-4">
                          <img
                            src={SuspendIcon}
                            alt=""
                            className="w-full h-full"
                          />
                        </figure>
                        <span className="text-[#5C5C5C] font-medium">
                          Customer KYC failed
                        </span>
                      </div>
                      <span className="text-xs text-[#5C5C5C] font-medium">
                        Kindly contact system admin
                      </span>
                    </div>
                  </div>

                  <div className="px-5 mt-5">
                    <button
                      type="button"
                      onClick={() => setKycStatus("idle")}
                      className="
          w-full py-3.5 rounded-[0.8rem] 
          border-[1px] border-transparent
          shadow-[0px_0px_0px_1px_#E2A919,0px_1px_2px_0px_#0E121B3D]
          [border-image:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_1]
          bg-[linear-gradient(0deg,#E2A919,#E2A919),linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)]
          font-medium text-white text-sm transition-colors duration-300 ease-in-out
        "
                    >
                      <span>Go Back</span>
                    </button>
                  </div>
                </>
              )}

              {kycStatus === "success" && (
                <>
                  <div className="w-full space-y-4 p-5 bg-[#F7F7F7]">
                    {/* Customer details */}
                    <div className="flex flex-col gap-y-2">
                      <div className="flex w-fit border border-[#EBEBEB] px-4 py-2 rounded-lg items-center gap-x-2">
                        <figure>
                          <img src={ActiveIcon} alt="" />
                        </figure>
                        <span className="text-[#5C5C5C] font-medium">
                          Grace Alpha
                        </span>
                      </div>
                      <span className="text-xs text-[#5C5C5C] font-medium">
                        Customer details exist on the platform.
                      </span>
                    </div>

                    <ul className="flex flex-col gap-y-2">
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
                      <li className="flex flex-col gap-y-0.5">
                        <span className="text-xs font-medium text-[#A3A3A3] uppercase">
                          Customer phone number
                        </span>
                        <span className="text-sm font-medium text-[#171717]">
                          0813 596 2940
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="px-5 mt-5">
                    <span className="text-lg tracking-tighter leading-none text-[#171717] font-medium">
                      Allocate Token to Customer
                    </span>

                    <div className="mt-3 space-y-4">
                      <SelectBox
                        label="Select user role"
                        required
                        placeholder="Select"
                        boxClassName="rounded-xl"
                        options={moduleOptions}
                      />

                      <FormControl
                        type="text"
                        required
                        style="border !rounded-xl border-[#EBEBEB]"
                        label={{
                          exist: true,
                          id: "number",
                          text: "Input hard token serial number",
                        }}
                        placeholder="Input serial number"
                      />
                    </div>

                    <div className="mt-8">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="
    w-full py-3.5 rounded-[0.8rem] 
    border-[1px] border-transparent
    shadow-[0px_0px_0px_1px_#E2A919,0px_1px_2px_0px_#0E121B3D]
    bg-[#E2A919]
    font-medium text-white text-sm
  "
                      >
                        Create Request
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-sm p-6 text-center bg-white shadow-lg rounded-2xl">
            <header className="pb-2 mb-4 border-b">
              <h2 className="text-lg font-medium">Token Request Created</h2>
            </header>

            <div className="flex flex-col items-center justify-center py-8 mb-6 border border-gray-300 border-dashed rounded-lg">
              <div className="p-4 mb-4 bg-[#F7F7F7] rounded-full">
                <CheckCheckIcon className="text-[#0B4627] w-14 h-14" />
              </div>
              <p className="text-sm text-gray-400">
                Token request with ID:567658 has been created and sent for
                approval
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3.5 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
