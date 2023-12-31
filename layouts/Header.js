import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { Store } from "../context/ProductContext";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleClick = () => {
    setshowMenu((prev) => !prev);
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);

  // search modal
  const Router = useRouter();
  const searchRef = useRef();
  const searchInputRef = useRef();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchInputRef.current.focus();
    searchInputRef.current.value = "";
  }, [openSearch]);

  useEffect(() => {
    setOpenSearch(false);
  }, [Router]);

  // shopping cart
  const [IsOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.Quantity, 0));
  }, [cart.cartItems]);

  const removeItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  useEffect(() => {
    setIsOpen(false);
    if (Router.query.ok == 1) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  }, [Router]);

  return (
    <header className="w-full h-auto z-[100] bg-white relative">
      <div className="flex lg:px-20 px-6 py-5 w-full m-auto justify-between lg:items-center uppercase text-[#141414]">
        <div className="flex lg:hidden relative">
          <div className="flex">
            {!showMenu ? (
              <div className="space-y-1.5" onClick={handleClick}>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
              </div>
            ) : (
              <AiOutlineClose
                className="w-8 h-6 text-gray-600 animate-pulse"
                onClick={handleClick}
              />
            )}
          </div>
        </div>
        <div className="lg:flex hidden w-1/3 justify-around md:gap-5">
          {category?.map((item, index) => {
            if (index < 5) {
              return (
                <div key={item.id}>
                  <Link href={`/category/${item.id}`}>
                    <div className="hover:text-gray-400 duration-300 transition-all ease-in-out">
                      {item.name}
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <div className="logo absolute lg:left-[47%] left-[35%]">
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
          {/* shopping cart bag */}
          <div className="shopping-cart">
            <button
              className="flex"
              onClick={() => {
                setIsOpen(!IsOpen);
              }}
              // onMouseOver={() => {
              //   setIsOpen(true);
              // }}
              // onMouseLeave={() => {
              //   setIsOpen(false);
              // }}
            >
              <HiOutlineShoppingBag className="text-2xl hover:text-gray-400 cursor-pointer" />
              <div className="bg-[#FFD2B1] text-black text-xs items-center text-center h-1/2 relative bottom-2 right-2 px-2 py-1 rounded-full">
                {cartItemsCount > 0 ? (
                  <span>{cart.cartItems.length}</span>
                ) : (
                  <span>0</span>
                )}
              </div>
            </button>
            {IsOpen ? (
              <div className="lg:w-96 w-80 absolute lg:right-20 right-6 lg:top-16 top-14 bg-white pt-5 pb-7 px-5 text-[#141414] rounded-md border border-[#266958]">
                <button
                  className="lg:hidden block w-full text-right font-bold"
                  onClick={closeModal}
                >
                  X
                </button>
                <h3 className="font-bold pb-2 border-b border-black text-center capitalize">
                  Shopping Cart
                </h3>
                {cart.cartItems.map((item, index) => {
                  return (
                    <div key={index} className="border-b">
                      <div className="w-full my-3 grid grid-cols-4">
                        <div>
                          <Image
                            src={item.images[0]}
                            width={80}
                            height={80}
                            alt={item.title}
                            className=""
                          />
                        </div>
                        <div className="mx-4 text-sm col-span-2 capitalize">
                          <div className="mb-2">{item.title}</div>
                          <div>Quantity: {item.Quantity}</div>
                        </div>
                        <div className="text-right">
                          <div className="mb-8 text-sm">${item.price}.00</div>
                          <div
                            className="text-xs font-bold text-[#266958] hover:text-red-600 cursor-pointer capitalize"
                            onClick={() => removeItem(item)}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="my-3 font-bold capitalize">
                  Total Cart: $
                  {cart.cartItems
                    .reduce((a, c) => a + c.Quantity * c.price, 0)
                    .toFixed(2)}
                </div>
                <div className="bg-[#FFD2B1] hover:bg-[#266958] hover:text-white items-center text-center pt-1 pb-2">
                  <Link href="/cart">Complete</Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="hamburger-menu">
        {showMenu && (
          <div className="p-6">
            {category?.map((item, index) => {
              if (index < 5) {
                return (
                  <div key={item.id} className="p-3">
                    <Link href={`/category/${item.id}`}>
                      <div className="hover:text-gray-400 text-xl duration-300 transition-all ease-in-out">
                        {item.name}
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
