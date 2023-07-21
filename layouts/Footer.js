import React from "react";
import { FooterData } from "@/collections/FooterData";
import Link from "next/link";
import { ImTwitter } from "react-icons/im";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#266958]">
      <div className="lg:px-20 px-5 flex flex-col w-full m-auto justify-center text-center items-center text-white border-b border-gray-400 lg:py-12 py-9">
        <h2 className="w-full text-center uppercase text-white">
          NEWSLETTER SUBSCRIPTION
        </h2>
        <p className="lg:w-1/3 w-full h-auto text-center text-white text-sm my-3">
          Sign up for Company updates to receive information about new arrivals,
          future events and specials.
        </p>
        <div>
          <form className="lg:h-9 h-auto lg:flex block w-full mt-2">
            <input
              type="email"
              placeholder="Enter Your Email Adress"
              className="lg:w-96 w-80 lg:py-0 py-3 px-4 text-gray-900 outline-none text-sm lg:mb-0 mb-3"
            />
            <button className="ml-2 px-5 lg:py-0 py-3 text-black items-center text-sm uppercase bg-[#FFD2B1] hover:bg-[#266958] hover:text-white duration-300 transition-all ease-in-out">
              SUBSCRIBE!
            </button>
          </form>
        </div>
      </div>
      <div className="container lg:px-20 px-6 w-full mx-auto justify-start items-center text-white lg:pt-12 pt-8 lg:pb-8 pb-10 grid lg:grid-cols-4">
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
        <div className="lg:flex grid lg:justify-between lg:grid-cols-1 grid-cols-2">
          <div>
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
                className="pb-4 text-2xl hover:text-blue-600 duration-300 transition-all ease-in-out"
              >
                <FaFacebookF className="social-media-icon" />
              </Link>
              <Link
                href="/"
                className="pb-4 text-2xl hover:text-[#e11d74] duration-300 transition-all ease-in-out"
              >
                <BsInstagram className="social-media-icon" />
              </Link>
              <Link
                href="/"
                className="pb-4 text-2xl hover:text-[#00adb5] duration-300 transition-all ease-in-out"
              >
                <ImTwitter className="social-media-icon" />
              </Link>
              <Link
                href="/"
                className="pb-4 text-2xl hover:text-red-600 duration-300 transition-all ease-in-out"
              >
                <BsPinterest className="social-media-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
