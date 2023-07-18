import React from "react";
import { FooterData } from "@/collections/FooterData";
import Link from "next/link";
import { ImTwitter } from "react-icons/im";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#266958]">
      <div className="px-20 flex flex-col w-full m-auto justify-center text-center items-center text-white border-b border-gray-400 py-12">
        <h2 className="w-full text-center uppercase text-white">
          NEWSLETTER SUBSCRIPTION
        </h2>
        <p className="w-1/3 h-auto text-center text-white text-sm my-3">
          Sign up for Company updates to receive information about new arrivals,
          future events and specials.
        </p>
        <div>
          <form className="h-9 flex w-full mt-2">
            <input
              type="email"
              placeholder="Enter Your Email Adress"
              className="w-96 px-4 text-gray-900 outline-none text-sm"
            />
            <button className="ml-2 px-5 text-black items-center text-sm uppercase bg-[#FFD2B1] hover:bg-[#266958] hover:text-white duration-300 transition-all ease-in-out">
              SUBSCRIBE!
            </button>
          </form>
        </div>
      </div>
      <div className="px-20 w-full m-auto justify-start items-center text-white pt-12 pb-8 grid grid-cols-4">
        <div className="col-span-2 grid grid-cols-2">
          {FooterData?.map((item) => {
            return (
              <Link
                href="/"
                key={item.id}
                className="pb-4 hover:text-green-300 duration-300 transition-all ease-in-out"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="">
          <div className="font-bold pb-4">Call Us</div>
          <Link
            href="/"
            className="block pb-4 hover:text-green-300 duration-300 transition-all ease-in-out"
          >
            +(999) 999-99-99
          </Link>
          <Link
            href="mailto:info@gmail.com"
            className="pb-4 hover:text-green-300 duration-300 transition-all ease-in-out"
          >
            info@gmail.com
          </Link>
        </div>
        <div className="">
          <div className="font-bold pb-4">Follow Us</div>
          <div className="flex w-full gap-6">
            <Link
              href="/"
              className="pb-4 text-2xl hover:text-green-300 duration-300 transition-all ease-in-out"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="pb-4 text-2xl hover:text-green-300 duration-300 transition-all ease-in-out"
            >
              <BsInstagram />
            </Link>
            <Link
              href="/"
              className="pb-4 text-2xl hover:text-green-300 duration-300 transition-all ease-in-out"
            >
              <ImTwitter />
            </Link>
            <Link
              href="/"
              className="pb-4 text-2xl hover:text-green-300 duration-300 transition-all ease-in-out"
            >
              <BsPinterest />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
