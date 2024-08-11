"use client";

import { ASSETS } from "@/assets";
import { Banner, XpCards } from "@/components";
import { CardData, LockedCardData } from "@/mock/Quest";

export default function Home() {
  return (
    <div className="bg-[#090909]">
      <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8">
        <Banner
          background={ASSETS.HERO_IMG.src}
          levelIndex="Level 1 -"
          heading="Join our Family"
          level="0/1"
          isLocked={false}
        />
      </div>
      <div className="container mx-auto max-w-4xl px-2 py-5 sm:px-3 sm:py-7 md:px-4 md:py-8 lg:max-w-6xl lg:px-5 lg:py-9 xl:max-w-[1500px] xl:py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
          {CardData?.length >= 1 &&
            CardData?.map((elm) => <XpCards key={elm?.id} details={elm} />)}
        </div>
      </div>
      <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8">
        <Banner
          background={ASSETS.HERO_2_IMG.src}
          levelIndex="Level 2 -"
          heading="Daily Tasks"
          level="0/1"
          isLocked={true}
        />
      </div>
      <div className="container mx-auto max-w-4xl px-2 py-5 sm:px-3 sm:py-7 md:px-4 md:py-8 lg:max-w-6xl lg:px-5 lg:py-9 xl:max-w-[1500px] xl:py-10">
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
          {LockedCardData?.length >= 1 &&
            LockedCardData?.map((elm) => (
              <XpCards key={elm?.id} details={elm} />
            ))}
        </div>
      </div>
    </div>
  );
}
