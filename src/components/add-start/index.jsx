import { ASSETS } from "@/assets";
import Image from "next/image";

export const AddStars = () => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center justify-between">
        <div className="relative z-10">
          <Image
            src={ASSETS.STAR_ICON}
            className="w-8 sm:w-10 md:w-12"
            alt="star"
          />
        </div>
        <span className="relative right-1 bg-[#002542] px-7 text-sm font-medium text-white sm:right-2 sm:text-base lg:text-lg">
          250
        </span>
        <div className="relative right-4 z-10 cursor-pointer rounded-e-xl">
          <Image
            src={ASSETS.PLUS_BTN}
            className="w-6 sm:w-7 md:w-8"
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
};

// w-12

// w-8 +
