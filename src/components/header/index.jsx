"use client";
import { ASSETS } from "@/assets";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Header = ({ sidebarActive, setSidebarActive }) => {
  return (
    <div className="relative bg-[#1D1E20] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="">
          <Image src={ASSETS.HEADER_LOGO} alt="header_logo" />
        </div>
        <div className="">
          <h3 className="mt-2 text-sm font-semibold text-[#67A3D2] md:mt-0 lg:mr-0 xl:text-base 2xl:text-lg">
            Join the Cipherem community to start completing quests and claiming
            rewards.
          </h3>
        </div>
        <div className="flex items-center pr-5 lg:gap-2 xl:gap-5">
          <div className="hidden items-center justify-between lg:flex">
            <div className="relative z-10">
              <Image
                src={ASSETS.STAR_ICON}
                className="w-7 xl:w-10"
                alt="star"
              />
            </div>
            <span className="relative right-1 rounded-full bg-[#002542] px-5 text-sm font-medium text-white sm:right-2 xl:text-base">
              250
            </span>
          </div>
          <div className="gradient-border hidden h-12 w-52 lg:block">
            <button className="gradient-button px-2 text-sm font-bold text-white lg:text-base 2xl:text-lg">
              Connect Wallet
            </button>
          </div>
        </div>
        <div
          onClick={() => setSidebarActive(!sidebarActive)}
          className="absolute right-2 top-[18px] cursor-pointer text-white md:top-auto lg:hidden"
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};
