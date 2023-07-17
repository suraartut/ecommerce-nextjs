import React from "react";
import { FooterData } from "@/collections/FooterData";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#266958]">
      <div className="px-20 py-5 w-full m-auto justify-between items-center uppercase text-white border-b border-white">
        <h2 className="w-full justify-center text-center uppercase text-white">
          NEWSLETTER SUBSCRIPTION
        </h2>
        <p className="w-full justify-center text-center text-white">
          Sign up for Company updates to receive information about new arrivals,
          future events and specials.
        </p>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="px-20 py-5 w-full m-auto justify-between items-center uppercase text-white grid grid-cols-4"></div>
    </footer>
  );
};

export default Footer;
