import { LogoFullDarkVariant } from "@/data";
import { IconWrapper } from "@/data/Icons";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function LandingPageFooter() {

  return (
    <>
      <footer className="relative py-10 bg-[#333333] overflow-hidden w-full">
        <div className="v-about-inner w-full space-y-10 lg:w-11/12 xl:w-9/12 px-4 lg:px-0 mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-y-3">
              <figure>
                <img src={LogoFullDarkVariant} alt="" style={{ maxWidth: "10rem" }} />
              </figure>
              <span className="text-white text-[.9rem]">
                Transforming restaurant loyalty programs for the digital age. Create engaging customer experiences with QR code menus and rewards.
              </span>
            </div>
            <div className="flex flex-col gap-y-3">
              <h4 className="text-white font-semibold text-lg">Products</h4>
              <ul className="flex flex-col gap-y-2">
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Features</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Pricing</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Careers</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Case Studies</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Documentation</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <h4 className="text-white font-semibold text-lg">Company</h4>
              <ul className="flex flex-col gap-y-2">
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">About Us</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Clients</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Blog</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Careers</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Contact</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <h4 className="text-white font-semibold text-lg">Legal</h4>
              <ul className="flex flex-col gap-y-2">
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Privacy Policy</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Terms of Service</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Cookie Policy</Link></li>
                <li><Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-white/20 flex-col md:flex-row gap-y-4">
            <span className="text-[#ffffffa3] text-sm">&copy; {new Date().getFullYear()} Menulla. All rights reserved.</span>

            <ul className="flex gap-x-4">
              <li>
                <Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">
                  <IconWrapper>
                    <Facebook className="w-5 h-5" />
                  </IconWrapper>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">
                  <IconWrapper>
                    <Instagram className="w-5 h-5" />
                  </IconWrapper>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">
                  <IconWrapper>
                    <Twitter className="w-5 h-5" />
                  </IconWrapper>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">
                  <IconWrapper>
                    <Linkedin className="w-5 h-5" />
                  </IconWrapper>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#ffffffa3] hover:text-white hover:underline underline-offset-2 text-[.86rem]">
                  <IconWrapper>
                    <Github className="w-5 h-5" />
                  </IconWrapper>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
