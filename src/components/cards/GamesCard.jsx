import Image from "next/image";
import { MoveRight } from "lucide-react";
import { ASSETS } from "@/assets";

export const GamesCard = () => {
  return (
    <div className="rounded-xl border-2 border-[#1A1B1C] bg-[#131415] p-3 md:p-5 xl:p-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2AABEE] lg:h-12 lg:w-12">
        <Image src={ASSETS.Telegram} alt="telegram" />
      </div>
      <div className="mt-4 flex flex-col space-y-2 md:mt-7 md:space-y-3 xl:space-y-4">
        <h3 className="text-base text-white md:text-lg xl:text-xl 2xl:text-[22px]">
          Cipherem Decoder
        </h3>
        <p className="text-sm text-[#8F8F8F] md:text-base xl:text-lg">
          Decode with your chips to unlock new levels
        </p>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-white md:text-base xl:text-lg"
        >
          <span>Go</span>
          <span>
            <MoveRight />
          </span>
        </a>
      </div>
    </div>
  );
};
