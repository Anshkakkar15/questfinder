"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SidebarList } from "@/mock/Sidebar";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/assets";
import Image from "next/image";

export const Sidebar = ({ sidebarActive, setSidebarActive }) => {
  const pathname = usePathname();
  useEffect(() => {
    if (sidebarActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [sidebarActive]);
  return (
    <aside
      className={`fixed z-40 h-full min-h-screen w-72 -translate-x-full transition-transform lg:relative lg:translate-x-0 ${sidebarActive ? "translate-x-0" : ""}`}
    >
      <div className="h-full overflow-y-auto bg-[#1D1E20] px-3 py-3">
        <ul className="space-y-3 font-medium sm:space-y-4">
          {SidebarList?.map((menus) => {
            return (
              <li key={menus?.id} onClick={() => setSidebarActive(false)}>
                <Link
                  href={menus?.slug}
                  className={`group flex items-center rounded-lg p-2 text-sm text-white hover:bg-[#2B2B2D] sm:text-base lg:text-lg ${pathname === menus?.slug ? "bg-[#2B2B2D]" : "bg-none"} `}
                >
                  {menus?.icon}
                  <span className="ms-3">{menus?.pathname}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <div className="flex items-center lg:hidden">
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
          </li>
          <li>
            <div className="gradient-border h-10 w-40 sm:h-12 sm:w-44 lg:hidden">
              <button className="gradient-button px-2 text-sm font-bold text-white">
                Connect Wallet
              </button>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
