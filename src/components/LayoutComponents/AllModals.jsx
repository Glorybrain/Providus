import { ArrowRight, CalendarDays, Icon, X } from "lucide-react";
import { FormControl, SelectBox } from "../BaseComponents/FormInputs";
import { Modal } from "../BaseComponents/Modal";
import { IconWrapper } from "@/data/Icons";

export const AuditDetailsModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const statusOptions = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
    { label: "Failed", value: "failed" },
  ];

  const fromOptions = [
    { label: "All", value: "all" },
    { label: "Wallet", value: "wallet" },
    { label: "Bank", value: "bank" },
    { label: "Crypto", value: "crypto" },
  ];

  const toOptions = [
    { label: "All", value: "all" },
    { label: "Wallet", value: "wallet" },
    { label: "Bank", value: "bank" },
    { label: "Crypto", value: "crypto" },
  ];

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("AUDIT_DETAILS", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Audit Details",
        modalSubTitle: "Side-by-side comparison of the configuration changes.",
        style: "border-b",
        textStyle: "text-[#171A1F]",
        textAlign: "text-center",
      }}
      maxWidth="md:max-w-[900px]"
    >
      <div className="flex flex-col w-full px-4 py-6 pb-2 mx-auto md:px-6 gap-y-4 sm:w-12/12">
        <div className="flex flex-col gap-y-8">
          <div className="max-h-[40vh] grid grid-cols-1 md:grid-cols-2 overflow-y-auto gap-x-4 gap-y-4">
            <div className="bg-[#DEE1E6] space-y-3 p-4 rounded-[6px] border-white border shadow-[0px_0px_1px_0px_#171A1F12,_0px_0px_2px_0px_#171A1F1F]">
              <header>
                <h3 className="text-lg text-[#171A1F] font-medium">
                  Before State
                </h3>
              </header>

              <ul className="flex flex-col gap-y-4">
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    featureFlagA:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    true
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    maxUsers:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    100
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    rolePermissions:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">{`{"admin": ["read", "write"], "user": ["read"]}`}</div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    apiEndpoint:
                  </span>
                  <div className="text-sm w-[50%] whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    https://api.old.example.com/v1
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    status:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    active
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    threshold:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    0.8
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    loggingLevel:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    INFO
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    allowedOrigins:
                  </span>
                  <div className="text-sm w-[50%] py-1 px-2 whitespace-normal break-words break-all rounded text-end text-[#565D6D]">
                    app.example.com,admin.example.com
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-3 p-4 rounded-[6px] border-white border shadow-[0px_0px_1px_0px_#171A1F12,_0px_0px_2px_0px_#171A1F1F]">
              <header>
                <h3 className="text-lg text-[#171A1F] font-medium">
                  After State
                </h3>
              </header>

              <ul className="flex flex-col gap-y-4">
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    featureFlagA:
                  </span>
                  <div className="text-sm w-[50%] rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    true
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    maxUsers:
                  </span>
                  <div className="text-sm w-[50%] rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    100
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    rolePermissions:
                  </span>
                  <div className="text-sm w-[50%] rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">{`{"admin": ["read", "write"], "user": ["read"]}`}</div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    apiEndpoint:
                  </span>
                  <div className="text-sm w-[50%] whitespace-normal break-words break-all rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    https://api.old.example.com/v1
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    status:
                  </span>
                  <div className="text-sm w-[50%] rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    active
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    threshold:
                  </span>
                  <div className="text-sm w-[50%] rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    0.8
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    loggingLevel:
                  </span>
                  <div className="text-sm w-[50%] rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    INFO
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-sm font-medium text-[#171A1F]">
                    allowedOrigins:
                  </span>
                  <div className="text-sm w-[50%] whitespace-normal break-words break-all rounded py-1 px-2 text-end text-[#565D6D] bg-[#636AE81A]">
                    app.example.com,admin.example.com
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col pt-5 justify-end md:flex-row border-t border-[#DEE1E6] md:items-center gap-y-3 gap-x-2">
            <button
              onClick={action}
              className="flex items-center justify-center w-fit border border-[#DEE1E6] px-4 py-2.5 text-sm font-bold bg-transparent bg-white text-[#171A1F] rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
