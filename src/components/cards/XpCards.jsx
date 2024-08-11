import Image from "next/image";
import { ASSETS } from "@/assets";
import { LockKeyhole } from "lucide-react";

export const XpCards = ({ details }) => {
  return (
    <div
      className={`relative rounded-xl border-2 border-[#1A1B1C] bg-[#131415] p-2 sm:p-3 md:p-4 lg:p-5`}
      style={{
        mixBlendMode: details?.isLocked && "exclusion",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div
          className="relative flex w-full items-center justify-between gap-1 rounded-xl px-4 py-3 text-base font-semibold text-white sm:px-5 md:rounded-2xl md:text-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(30,32,141,1) 0%, rgba(180,52,165,1) 100%)",
          }}
        >
          <Image src={ASSETS.XP} alt="xp" /> 1000
          <div
            className={`absolute -right-3 -top-3 rounded-full bg-[#0F0F13] p-2`}
          >
            <Image src={ASSETS.GLOBE_IMG} alt="globe" />
          </div>
        </div>
        <div className="py-3 lg:py-4 2xl:py-5">
          <h4
            className={`text-sm font-semibold md:text-base lg:text-lg 2xl:text-xl ${details?.isLocked ? "text-[#8F8F8F]" : "text-white"}`}
          >
            {details?.heading}
          </h4>
        </div>
        <div className={`flex flex-wrap gap-2 ${details?.isLocked && "pb-9"}`}>
          {details?.isLocked && (
            <>
              <a
                href={details?.twitchUrl}
                className="rounded-full bg-[#090909] p-2 no-underline"
              >
                <Image
                  src={ASSETS.ATTACH}
                  alt="twitch"
                  className="w-4 sm:w-6"
                />
              </a>
              <a
                href={details?.instagramUrl}
                className="rounded-full bg-[#090909] px-5 py-1 no-underline"
              >
                <div className="relative top-1/2 flex -translate-y-1/2 items-center gap-3">
                  <Image
                    src={ASSETS.HOURS}
                    alt="twitch"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                  />
                  <span className="text-[#8F8F8F]">Daily</span>
                </div>
              </a>
            </>
          )}
        </div>
      </div>
      {details?.isLocked && (
        <div className="absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 transform">
          <button className="text-md flex items-center justify-between gap-2 rounded-full bg-[#090909] px-4 py-2 font-semibold text-[#8F8F8F]">
            <LockKeyhole /> Locked
          </button>
        </div>
      )}
    </div>
  );
};
