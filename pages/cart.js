import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Store } from "../context/ProductContext";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const cart = () => {
  const Router = useRouter();
  const [Quantity, setQuantity] = useState();
  const inputChangedHandler = (event) => {
    const updatedKeyword = event.tagert.value;
    // if we don't use this we see warning
  };

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const removeAllItem = (allItem) => {
    dispatch({ type: "CART_CLEAR_ITEMS" });
  };
  console.log(state);
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="lg:max-w-7xl lg:px-0 px-5 mx-auto lg:py-20 py-10 flex">
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-1 w-full">
            <div className="col-span-2">
              <div className="flex justify-between lg:pb-8 pb-5">
                <h1 className="font-semibold text-3xl">Shopping Bag</h1>
                <h2 className="font-semibold text-2xl lg:mr-12">
                  {cartItems.length} pcs
                </h2>
              </div>
              <div className="w-full sm:px-10 px-0">
                <div className="flex sm:mt-10 pb-5 border-b">
                  <h3 className="font-semibold text-gray-500 text-xs uppercase w-2/5 sm:block hidden">
                    Product Detail
                  </h3>
                  <h3 className="font-semibold text-gray-500 text-xs uppercase w-1/5 text-center sm:block hidden">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-gray-500 text-xs uppercase w-1/5 text-center sm:block hidden">
                    Price
                  </h3>
                  <h3 className="font-semibold text-gray-500 text-xs uppercase w-1/5 text-center sm:block hidden">
                    Total
                  </h3>
                </div>
                {cartItems.map((Item, index) => {
                  return (
                    <div
                      className="flex items-center md:hover:bg-gray-100 sm:-mx-8 mx-0 sm:px-6 px-0 py-5 flex-wrap border-b"
                      key={index}
                    >
                      <div className="flex md:w-2/5 w-full">
                        {/* product */}
                        <div className="w-full">
                          <img className="h-24" src={Item.images} alt="" />
                        </div>
                        <div className="flex flex-col justify-center ml-4 flex-grow">
                          <span className="font-bold text-sm">
                            {Item.title}
                          </span>
                          <span className="text-sm text-gray-700">
                            {Item.description}
                          </span>
                          <button
                            onClick={() => removeItem(Item)}
                            className="font-semibold mt-3 hover:text-[#a54201] text-gray-400 text-sm cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-center sm:w-1/5 w-2/5 md:mt-0 mt-12">
                        <svg
                          onClick={() => {
                            if (Quantity <= 1) {
                              setQuantity(1);
                            } else {
                              setQuantity(Quantity - 1);
                            }
                          }}
                          className="fill-current text-gray-600 w-3 cursor-pointer"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                        <input
                          className="mx-2 border text-center w-8"
                          type="text"
                          value={Item.Quantity}
                          onChange={(event) => inputChangedHandler(event)}
                        />
                        <svg
                          className="fill-current text-gray-600 w-3 cursor-pointer"
                          onClick={() => {
                            setQuantity(Quantity + 1);
                          }}
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </div>
                      <span className="text-center sm:w-1/5 w-2/5 font-semibold text-sm md:mt-0 mt-12">
                        ${Item.price}.00
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm md:mt-0 mt-12">
                        ${Item.price * Item.Quantity}.00
                      </span>
                    </div>
                  );
                })}
                <div className="lg:block hidden">
                  <Link
                    href="/"
                    className="flex hover:text-[#FFD2B1] text-[#266958] text-md mt-10"
                  >
                    <svg
                      className="fill-current mr-2 mt-1 hover:text-[#FFD2B1] text-[#266958] w-4"
                      viewBox="0 0 448 512"
                    >
                      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full sm:px-8 px-2 sm:py-10 py-3 lg:mt-[108px] mt-6 lg:border border-gray-300">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>

                <div className="flex justify-between mt-4 pb-4 border-b">
                  <span className="font-semibold text-sm uppercase">
                    Total Discount
                  </span>
                  <span className="font-semibold text-sm text-gray-500 sm:pl-7">
                    {/* ( %
                            {(
                              ((CartItems.data.cartTotal.toplamIndirimsizTutar -
                                CartItems.data.cartTotal.toplamTutar) /
                                CartItems.data.cartTotal
                                  .toplamIndirimsizTutar) *
                              100
                            ).toFixed(2)}
                            ) {GetKur(CartItems.data.cartTotal.toplamIndirim)} */}
                  </span>
                </div>
                <div className="flex justify-between mt-4 pb-4 border-b">
                  <span className="font-semibold text-sm uppercase">
                    Subtotal
                  </span>
                  <span className="font-semibold text-sm text-gray-500">
                    {/* {GetKur(
                              CartItems.data.cartTotal.toplamTutar -
                                (CartItems.data.cartTotal.toplamTutar *
                                  (1 + 18 / 100) -
                                  CartItems.data.cartTotal.toplamTutar)
                            )} */}
                  </span>
                </div>
                <div className="flex font-semibold justify-between py-4 text-sm uppercase">
                  <span>Total Quantity</span>
                  <span className="text-gray-500">{cartItems.price}</span>
                </div>
                <div className="flex font-semibold justify-between text-sm uppercase pt-5 border-t border-black">
                  <span>Total Amount</span>
                  <span className="text-gray-500">
                    {/* {GetKur(SepetToplami)} */}
                  </span>
                </div>
                <button className="mt-5 font-semibold bg-[#266958] hover:bg-[#FFD2B1] pt-3 pb-4 text-sm text-white hover:text-black uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(cart), { ssr: false });
