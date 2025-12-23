import { IconWrapper } from "@/data/Icons";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Check, ChevronDownIcon, DownloadIcon } from "lucide-react";
import React, { useRef, useState } from "react";

export const FormControl = ({
  type = "text",
  label = {},
  style = "",
  icon = {},
  floatEle,
  ...others
}) => {
  const isRequired = others?.required;

  return (
    <div className="relative">
      {label?.exist && (
        <label
          htmlFor={label.id ?? ""}
          className={`${
            label?.style ?? ""
          } block mb-1 font-medium text-sm text-[#171717]`}
        >
          {label?.text ?? ""}{" "}
          {isRequired && <span className="mr-1 text-[#E2A919]">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={type}
          {...others}
          id={label.id ?? ""}
          className={`${style}
            ${
              floatEle?.exist &&
              (["right", "r"].includes(floatEle?.position) ? "pr-28" : "pl-8")
            }
            ${icon?.exist ? "pr-12" : ""}
            placeholder:text-sm text-base px-3.5 py-2 min-h-[3rem] w-full rounded
            text-[#000000] dark:text-white
            bg-transparent dark:bg-[#1F1F1F]
            transition-all duration-300 ease-in-out
          `}
        />

        {icon?.exist && (
          <button
            onClick={icon?.action}
            type="button"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 bg-transparent hover:bg-slate-200 dark:hover:bg-white/10 rounded-full text-slate-500"
          >
            <IconWrapper className="pointer-events-none">
              {React.createElement(icon?.element, { className: "w-5 h-5" })}
            </IconWrapper>
          </button>
        )}

        {floatEle?.exist && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-500 dark:text-gray-400 text-sm ${
              ["right", "r"].includes(floatEle?.position?.toLowerCase())
                ? "right-3"
                : "left-3"
            } ${floatEle.style || ""}`}
          >
            {floatEle.children}
          </div>
        )}
      </div>
    </div>
  );
};

export const RadioInput = ({ className = "", ...others }) => (
  <input
    type="radio"
    className={`${className} accent-main w-4 h-4 border cursor-pointer transition duration-300 focus:!shadow-none dark:border-white/20`}
    {...others}
  />
);

export const SwitchInput = ({ className = "", isOn, ...others }) => (
  <button
    type="button"
    {...others}
    className={`relative inline-flex items-center h-[20px] w-[40px] rounded-full transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${
      isOn ? "bg-green-600" : "bg-gray-300 dark:bg-gray-600"
    }`}
  >
    <span
      className={`inline-block w-[16px] h-[16px] bg-white rounded-full shadow-md transform transition-transform ${
        isOn ? "translate-x-[22px]" : "translate-x-[2px]"
      }`}
    />
  </button>
);

export const CheckBox = ({ className = "", ...others }) => (
  <input
    type="checkbox"
    className={`${className} w-[1.15rem] h-[1.15rem] border-1 border-solid border-[#EBEBEB] shadow-[0px_2px_2px_0px_#1B1C1D1F] checked:accent-[#E2A919] rounded-lg cursor-pointer transition-all duration-300`}
    {...others}
  />
);

export const FileUpload = ({ id, label }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <div className="p-3 bg-[#F8F9FD] dark:bg-[#1F1F1F] border-2 border-dashed border-gray-300 dark:border-white/20 rounded-lg cursor-pointer hover:bg-[#eff1f7] dark:hover:bg-[#2A2A2A] transition-colors">
      <div className="flex items-center space-x-3">
        <IconWrapper>
          <DownloadIcon className="w-5 h-5 text-gray-700 dark:text-white" />
        </IconWrapper>
        <span className="text-base text-gray-700 dark:text-white">{label}</span>
      </div>
      <input type="file" id={id} className="hidden" />
    </div>
  </div>
);

export const SelectBox = ({
  label,
  placeholder = "Select an option",
  options = [],
  onChange,
  required = false,
  boxClassName = "", // 👈 add this
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => setIsOpen(false), isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative w-full" ref={boxRef}>
      {label && (
        <label className="block mb-1 text-sm text-[#171717] font-medium">
          {label}
          {required && <span className="ml-1 text-[#E2A919]">*</span>}
        </label>
      )}

      <div
        className={`
    flex items-center justify-between w-full px-3.5 py-2 min-h-[3rem]
    bg-transparent
    border border-[#CECECE] dark:border-white/20
    rounded cursor-pointer
    ${boxClassName}
  `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`block truncate text-sm ${
            selected ? "text-gray-800 dark:text-white" : "text-gray-400"
          }`}
        >
          {selected?.label || placeholder}
        </span>

        <IconWrapper>
          <ChevronDownIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" />
        </IconWrapper>
      </div>

      {isOpen && (
        <ul
          className="absolute z-50 w-full mt-2 max-h-32 overflow-y-auto
          bg-white dark:bg-[#2A2A2A]
          border border-gray-200 dark:border-white/20
          rounded-lg shadow-sm"
        >
          {options.map((opt, index) => (
            <li
              key={index}
              onClick={() => handleSelect(opt)}
              className="flex justify-between px-4 py-2 text-sm text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {opt.label}
              {selected?.value === opt.value && (
                <IconWrapper>
                  <Check className="w-5 h-5 text-[#16404D]" />
                </IconWrapper>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const TextareaControl = ({ label = {}, style = "", ...others }) => (
  <div className="relative">
    {label?.exist && (
      <label
        htmlFor={label.id ?? ""}
        className={`${label?.style ?? ""} text-[.94rem] dark:text-white`}
      >
        {label?.text ?? ""}
      </label>
    )}
    <textarea
      {...others}
      id={label.id ?? ""}
      className={`${style} placeholder:text-sm text-base text-[#000000] dark:text-white px-3.5 py-3 min-h-[6rem] transition-all duration-300 ease-in-out bg-[#F8F9FD] dark:bg-[#1F1F1F] focus:bg-[#eff1f7] dark:focus:bg-[#2A2A2A] rounded-lg w-full resize-none`}
    />
  </div>
);
