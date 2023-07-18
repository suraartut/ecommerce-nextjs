import React from "react";
import Link from "next/link";
import Image from "next/image";

const BannerTwo = () => {
  return (
    <div className="w-full grid grid-cols-2 h-[695px] bg-[#FFD2B1]">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="text-[#141414] text-2xl">
          WE ARE PASSIONATE <br />
          ABOUT NATURE
        </div>
        <Link
          href="/"
          className="uppercase text-[#141414] bg-white text-sm items-center hover:text-white hover:bg-[#FFD2B1] duration-300 transition-all ease-in-out block mt-6 px-12 pt-2 pb-3"
        >
          ABOUT US
        </Link>
      </div>
      <div className="h-[695px] relative">
        <Image
          src="/Images/banner_2.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Banner Photo"
        />
      </div>
    </div>
  );
};

export default BannerTwo;
