import React, { useState } from "react";
import { CheckBox, FormControl } from "@/components/BaseComponents/FormInputs";
import { StateDataContext } from "@/App";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { Mail, User } from "lucide-react";
import { IconWrapper } from "@/data/Icons";

export default function AdminVerifyOtp() {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="bg-white rounded-[1rem] rounded-bl-none py-[2.6rem]">
        <form action="" className="v-form">
          <div className="mx-auto bg-[linear-gradient(180deg,rgba(113,119,132,0.1)_0%,rgba(113,119,132,0)_100%)] w-fit p-4 rounded-full">
            <IconWrapper className="bg-white border p-4 rounded-full border-[#EBEBEB]">
              <User className="text-[#5C5C5C]" />
            </IconWrapper>
          </div>
          <header className="flex flex-col items-center mx-auto text-center gap-y-1 v-form-header w-[83.333%]">
            <h3>
              <b className="text-[#171717] text-2xl md:text-3xl tracking-[-1.5px] font-medium leading-none">
                Verify OTP
              </b>
            </h3>
            <span className="text-sm text-[#5C5C5C]">
              A one-time password has been sent to your registered email
              address. Please enter it below to proceed.
            </span>
          </header>
          <div className="flex flex-col w-full mt-5 gap-y-6 align-items-stretch">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col w-full gap-y-1">
                <FormControl
                  type="text"
                  required
                  style="border !rounded-xl border-[#EBEBEB]"
                  label={{
                    exist: true,
                    id: "text",
                    text: "Enter OTP",
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
            <div className="space-y-2">
              <button
                onClick={() => navigate(routes.DASHBOARD.ADMIN.users.abs)}
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
                <span>Verify OTP</span>
              </button>
              <button
                type="button"
                className="
    w-full py-3.5 rounded-[0.8rem]
    shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#0E121B1F]
    font-medium text-[#5C5C5C] text-sm transition-colors duration-300 ease-in-out
  "
              >
                <span>Resend OTP</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
