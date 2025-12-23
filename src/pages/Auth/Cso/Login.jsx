import React from "react";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { CheckBox, FormControl } from "@/components/BaseComponents/FormInputs";
import { StateDataContext } from "@/App";
import { Eye, EyeIcon, EyeOffIcon, Lock, Mail, User } from "lucide-react";
import { IconWrapper } from "@/data/Icons";

const CsoLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="px-4 py-5 bg-white rounded-lg lg:px-6">
        <form action="" className="v-form">
          <div className="mx-auto bg-[linear-gradient(180deg,rgba(113,119,132,0.1)_0%,rgba(113,119,132,0)_100%)] w-fit p-4 rounded-full">
            <IconWrapper className="bg-white border p-4 rounded-full border-[#EBEBEB]">
              <User className="text-[#5C5C5C]" />
            </IconWrapper>
          </div>
          <header className="flex flex-col items-center mx-auto text-center gap-y-1 v-form-header w-[83.333%]">
            <h3>
              <b className="text-[#171717] text-2xl md:text-3xl tracking-[-1.5px] font-medium leading-none">
                Login to your account
              </b>
            </h3>
            <span className="text-sm text-[#5C5C5C]">
              Enter your credentials to secure access to the admin panel
            </span>
          </header>
          <div className="flex flex-col w-full mt-5 gap-y-6 align-items-stretch">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col w-full gap-y-1">
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
              <div className="flex flex-col w-full gap-y-1">
                <FormControl
                  type="password"
                  required
                  style="border !rounded-xl border-[#EBEBEB]"
                  label={{
                    exist: true,
                    id: "password",
                    text: "AD Password",
                  }}
                  floatEle={{
                    exist: true,
                    position: "left",
                    children: <Lock className="w-4 h-4 text-[#A3A3A3]" />,
                  }}
                  icon={{
                    exist: true,
                    element: Eye,
                    action: () => console.log("Icon clicked"),
                  }}
                  placeholder="hello@alignui.com"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between sm:flex-row gap-y-3 sm:gap-y-0">
              <div className="flex items-center gap-x-2">
                <CheckBox className="!w-4 !h-4" />
                <span className="text-sm text-[#171717]">
                  Keep me logged in
                </span>
              </div>
              <Link
                to={routes.AUTH}
                className="text-sm !hover:text-white hover:underline text-[#5C5C5C] underline-offset-2"
              >
                Forgotten Password?
              </Link>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => navigate(routes.DASHBOARD.CSO.abs)}
                className="
   w-full py-3.5 rounded-[0.8rem] 
    border-[1px] border-transparent
    shadow-[0px_0px_0px_1px_#E2A919,0px_1px_2px_0px_#0E121B3D]
    [border-image:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_1]
    bg-[linear-gradient(0deg,#E2A919,#E2A919),linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)]
    font-medium text-white text-sm transition-colors duration-300 ease-in-out
  "
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CsoLogin;
