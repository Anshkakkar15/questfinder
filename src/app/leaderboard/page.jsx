import { ASSETS } from "@/assets";
import { AddStars } from "@/components";
import { UserCircle } from "lucide-react";
import Image from "next/image";

export default function LeaderBoard() {
  return (
    <div className="bg-[#090909]">
      <div className="pt-3 sm:pt-4 md:pt-5">
        <AddStars />
      </div>
      <div className="mx-auto my-5 w-full max-w-[500px] rounded-2xl bg-[#0F0F13] p-4 sm:max-w-[650px] sm:p-5 md:my-7 md:max-w-[768px] md:p-6 lg:my-8 lg:max-w-[670px] lg:p-8 xl:my-10 xl:max-w-[800px] xl:p-9 2xl:max-w-[1000px] 2xl:p-10">
        <div className="flex items-center justify-between gap-y-4">
          <h1 className="text-base font-semibold text-white md:text-lg lg:text-xl">
            Leaderboard
          </h1>
          <div className="gradient-border h-10 min-w-min !rounded-md md:h-12">
            <button className="gradient-button flex items-center justify-between gap-3 !rounded-md px-2 text-sm font-bold text-white md:px-4 lg:text-base 2xl:text-lg">
              <UserCircle /> 52,392 Participants
            </button>
          </div>
        </div>
        <div className="pt-4">
          {new Array(15).fill(true)?.map((_, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between border-b-[1px] border-[#1E1E24] py-2 sm:py-3 md:py-4 lg:py-5"
              >
                <div className="flex items-center justify-between gap-x-4 sm:gap-x-7 lg:gap-x-9">
                  <p className="text-sm text-[#8A8A98]">
                    {`${i + 1 < 10 ? "0" : ""}${i + 1}`}.
                  </p>
                  <div className="overflow-hidden">
                    <Image
                      src={ASSETS.USER}
                      alt="user"
                      className="h-auto w-12 rounded-md"
                    />
                  </div>
                  <p className="text-[15px] font-medium text-white md:text-base xl:text-lg">
                    Presh5656
                  </p>
                </div>
                <p className="text-[15px] font-medium text-white md:text-base xl:text-lg">
                  84180 XP
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
