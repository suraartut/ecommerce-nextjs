import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [category, setCategory] = useState([]);

  const Router = useRouter();
  const searchRef = useRef();
  const searchInputRef = useRef();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);

  useEffect(() => {
    searchInputRef.current.focus();
    searchInputRef.current.value = "";
  }, [openSearch]);

  useEffect(() => {
    setOpenSearch(false);
  }, [Router]);

  return (
    <header className="w-full h-auto z-[100] bg-white relative">
      <div className="flex px-20 py-5 w-full m-auto justify-between items-center uppercase text-[#141414]">
        <div className="flex w-1/3 justify-around">
          {category?.map((item, index) => {
            if (index < 5) {
              return (
                <div key={item.id}>
                  <Link href="/">
                    <div className="hover:text-gray-400 duration-300 transition-all ease-in-out">
                      {item.name}
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <div className="logo absolute left-[47%]">
          <Link href="/">
            <Image src="/logo.svg" width={112} height={21} alt="Company Logo" />
          </Link>
        </div>
        <div className="flex gap-5">
          <div>
            <div
              onClick={() => {
                if (openSearch == false) {
                  setOpenSearch(true);
                }
              }}
            >
              <ImSearch className="text-xl hover:text-gray-400 cursor-pointer" />
            </div>
            <div className={openSearch == false ? "hidden" : "search-modal-bg"}>
              <div
                className={
                  openSearch == false
                    ? "hidden"
                    : "flex flex-col items-start searchopen z-[100]"
                }
              >
                <span
                  className="relative w-full md:px-16 px-5 search-form"
                  ref={searchRef}
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      Router.push({
                        pathname: "/search",
                        query: {
                          searchText: searchText,
                        },
                      });
                    }}
                    className="search-form flex justify-center items-center py-5"
                  >
                    <div className="flex w-full justify-center">
                      <div className="relative md:w-2/3 w-full">
                        <span className="uppercase block my-5 text-sm">
                          WHAT ARE YOU LOOKING FOR?
                        </span>
                        <input
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                          className="search-form search-input w-full py-5 focus:outline-none border-b"
                          placeholder="Search products..."
                          ref={searchInputRef}
                        />
                        <button className="search-form absolute w-6 h-6 right-0 top-20">
                          <ImSearch className="search-form" />
                        </button>
                      </div>
                    </div>
                    <span
                      onClick={() => {
                        if (openSearch == true) {
                          setOpenSearch(false);
                        }
                      }}
                      className="cursor-pointer absolute right-20 top-10 md:px-0 px-5"
                    >
                      <GrClose />
                    </span>
                  </form>
                </span>
              </div>
            </div>
          </div>
          <HiOutlineShoppingBag className="text-2xl hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
