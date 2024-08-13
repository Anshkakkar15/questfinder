import { ASSETS } from "@/assets";
import { GradientArrow } from "@/components/sidebar/icons";
import { rewards } from "@/mock/Quest";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="bg-[#090909]">
      <div className="container mx-auto max-w-4xl px-2 py-5 sm:px-3 sm:py-7 md:px-4 md:py-8 lg:max-w-6xl lg:px-5 lg:py-9 xl:max-w-[1500px] xl:py-10">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:gap-7">
          <CharacterAvatar />
          <CharacterDetails />
        </div>
      </div>
    </div>
  );
}

const CharacterAvatar = () => {
  return (
    <div className="relative mx-auto max-h-[575px] max-w-[400px] overflow-hidden rounded-2xl xl:max-h-[500px] xl:max-w-full 2xl:max-h-[650px] 3xl:max-h-[800px]">
      <Image
        src={ASSETS.MONSTER_IMG}
        alt="monster"
        className="h-full w-full object-cover"
      />
      <div className="gradient-border !absolute bottom-4 right-4 h-12 min-w-min !rounded-full xl:h-14">
        <button className="gradient-button !rounded-full !bg-white px-4 text-sm font-bold text-black md:px-6 xl:text-[15px] 2xl:text-base">
          Edit your Character
        </button>
      </div>
    </div>
  );
};

const CharacterDetails = () => {
  return (
    <div className="scroll_bar xl:max-h-screen xl:overflow-y-auto">
      <div className="w-full rounded-2xl border-2 border-[#2B2B2D] bg-[#0F0F13] p-3 sm:p-4 lg:p-5 2xl:p-7">
        <div className="flex items-start justify-between">
          <h3 className="flex items-center gap-2 text-base font-semibold text-white md:text-lg 2xl:text-xl">
            1 Level
            <span className="gradient-text">
              <GradientArrow />
            </span>
          </h3>
          <div className="">
            <XP />
            <p className="gradient-text mt-1 flex items-center gap-2 text-[15px] font-semibold md:text-base 2xl:text-lg">
              1.5x Booster{" "}
              <span className="gradient-text">
                <GradientArrow />
              </span>
            </p>
          </div>
        </div>
        {/* progressbar */}
        <div className="mt-4 h-4 w-full rounded-full bg-[#515151] lg:mt-6 2xl:mt-8">
          <div
            className="gradient-background h-4 rounded-full"
            style={{ width: "15%" }}
          />
        </div>
        <div className="flex justify-end">
          <p className="mt-3 text-sm font-semibold md:text-base 2xl:text-lg">
            <span className="text-white">990 </span>
            <span className="text-[#AEAEB2]"> / 1,000 XP</span>
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="w-full rounded-2xl border-2 border-[#2B2B2D] bg-[#0F0F13] p-3 sm:p-4 lg:p-5 2xl:p-6">
          <h3 className="text-center text-xl font-bold text-white md:text-2xl 2xl:text-3xl">
            1
          </h3>
          <p className="text-center text-[15px] text-[#AEAEB2] sm:text-base md:mt-2 md:text-lg 2xl:text-xl">
            Completed Quests
          </p>
        </div>
        <div className="w-full rounded-2xl border-2 border-[#2B2B2D] bg-[#0F0F13] p-3 sm:p-4 lg:p-5 2xl:p-6">
          <h3 className="text-center text-xl font-bold text-white md:text-2xl 2xl:text-3xl">
            3
          </h3>
          <p className="text-center text-[15px] text-[#AEAEB2] sm:text-base md:mt-2 md:text-lg 2xl:text-xl">
            Reffered
          </p>
        </div>
      </div>
      <div className="mt-4 xl:mt-6">
        <div className="w-full rounded-2xl border-2 border-[#2B2B2D] bg-[#0F0F13] p-3 sm:p-4 lg:p-5 2xl:p-7">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
            Rewards
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {rewards?.map((reward) => {
              return (
                <div
                  key={reward.id}
                  className="mx-auto w-full rounded-2xl border-2 border-[#2B2B2D] bg-black p-5"
                >
                  <Image
                    src={reward.img}
                    alt="reward_1"
                    className="mx-auto h-full w-full max-w-16 object-contain xl:max-w-20"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4 xl:mt-6">
        <div className="w-full rounded-2xl border-2 border-[#2B2B2D] bg-[#0F0F13] p-3 sm:p-4 lg:p-5 2xl:p-7">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-base font-semibold text-white md:text-lg 2xl:text-xl">
              Player #1132
            </h3>
            <div className="gradient-border h-10 min-w-min !rounded-full md:h-12">
              <button className="gradient-button flex items-center justify-between gap-3 !rounded-full px-2 text-sm text-white md:px-4 lg:text-base">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-y-3 md:mt-5 xl:mt-7 xl:gap-y-4">
            {new Array(5).fill(true).map((_, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between rounded-2xl border-2 border-[#2B2B2D] p-3 transition-all duration-300 hover:bg-black md:p-4 xl:p-5"
                >
                  <div className="flex items-center gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
                    <h3 className="text-base font-semibold text-white 2xl:text-lg">
                      Twitter
                    </h3>
                    <XP />
                  </div>
                  <button className="rounded-full border-2 border-white px-3 py-2 text-sm text-white transition-all duration-300 hover:bg-white hover:text-black md:px-5 lg:text-base">
                    Connect
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const XP = () => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center justify-between">
        <div className="relative z-10">
          <Image src={ASSETS.STAR_ICON} className="w-8 md:w-9" alt="star" />
        </div>
        <span className="relative right-1 rounded-e-xl bg-[#002542] px-2 text-[13px] font-medium text-white sm:right-2 md:px-3 md:text-sm xl:px-4 xl:text-[15px]">
          10 xp
        </span>
      </div>
    </div>
  );
};
