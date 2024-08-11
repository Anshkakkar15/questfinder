import { Banner, GamesCard } from "@/components";

import { ASSETS } from "@/assets";

export default function Games() {
  return (
    <div className="bg-[#090909]">
      <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8">
        <Banner background={ASSETS.HERO_IMG.src} heading="All Games" />
      </div>
      <div className="py-5 sm:py-7 md:py-8 lg:py-9 xl:py-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 3xl:grid-cols-4">
          <GamesCard />
        </div>
      </div>
    </div>
  );
}
