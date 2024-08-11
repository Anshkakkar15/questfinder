import { LockKeyhole } from "lucide-react";

export const Banner = (props) => {
  return (
    <div
      className="relative flex h-52 w-full items-center overflow-hidden rounded-2xl bg-cover bg-right-top bg-no-repeat md:h-56 xl:h-60"
      style={{
        backgroundImage: `linear-gradient(#000,#000),url(${props?.background})`,
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="mix z-10 mx-auto flex w-[90%] flex-col gap-3">
        <h3 className="text-base text-white md:text-lg xl:text-xl">
          {props?.levelIndex}
        </h3>
        <h1 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl">
          {props?.heading}
        </h1>
        <div className="flex flex-col gap-1 xl:gap-2 2xl:gap-3">
          <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg xl:text-xl">
            {props?.level}
          </h3>
          {props?.level && (
            <div
              className={`relative h-[2px] w-full bg-[#ffffff47] before:absolute before:start-0 before:h-[3px] before:w-[200px] before:bg-white before:content-[''] xl:w-[800px]`}
            />
          )}
        </div>
        {props?.isLocked && (
          <div className="relative flex items-center sm:absolute sm:bottom-2 sm:right-10 sm:top-1/2 sm:z-30 sm:-translate-y-1/2 2xl:bottom-5 2xl:right-10">
            <button className="mt-2 flex items-center justify-between gap-2 rounded-full bg-[#09090985] px-5 py-2 text-sm font-semibold text-white md:text-base xl:text-lg 2xl:px-7 2xl:py-3">
              <LockKeyhole /> Locked Modules
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
