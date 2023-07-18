import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerTop = () => {
  return (
    <div className="w-full grid grid-cols-2 h-[695px] bg-[#266958]">
      <div className="h-[695px] relative">
        <Image
          src="/Images/banner_top.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Banner Photo"
        />
      </div>
      <div className="flex flex-col justify-center text-center items-center">
        <div className="text-white text-2xl">
          WE ARE PASSIONATE <br />
          ABOUT NATURE
        </div>
        <Link
          href="/"
          className="uppercase text-[#141414] text-sm items-center hover:text-white bg-[#FFD2B1] hover:bg-[#266958] duration-300 transition-all ease-in-out  block mt-6 px-12 pt-2 pb-3"
        >
          ABOUT US
        </Link>
      </div>
    </div>
  );
};

export default BannerTop;
