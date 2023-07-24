import React, { useContext, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Store } from "../../context/ProductContext";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductDetails = ({ Products }) => {
  const Router = useRouter();
  const [Quantity, setQuantity] = useState(1);
  //There isn't any stock in APİ, and for this reason I used rate value
  const StockQuantity = 5;

  const { state, dispatch } = useContext(Store);

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // if we don't use this we see warning
  };

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.id === Products.id);
    setQuantity(existItem ? existItem.Quantity + 1 : 1);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...Products, Quantity } });
    setQuantity(1);
    // Router.push(
    //   {
    //     pathname: Router.pathname,
    //     query: {
    //       id: Router.query.id,
    //       ok: 1,
    //     },
    //   },
    //   undefined,
    //   { shallow: true }
    // );
  };

  console.log(state);

  return (
    <div className="w-full">
      <div className="container lg:flex m-auto lg:p-36 p-6 gap-12">
        <div className="lg:w-1/2 w-full text-center">
          <div className="">Ürün fotoğrafları</div>
          <div>
            <Swiper
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper product-detail-slider"
            >
              {Products.images.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={item}
                      width={650}
                      height={650}
                      alt="Product Photos"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="lg:text-2xl text-xl uppercase font-bold lg:pb-6 pb-4 lg:pt-0 pt-3">
            {Products.title}
          </h2>
          <p className="">
            <strong>Product Detail: </strong>
            {Products.description}
          </p>
          <p className="font-bold lg:pt-10 pt-6 text-end text-xl underline">
            ${Products.price}.00
          </p>
          <div className="w-full flex justify-between lg:mt-20 mt-10 lg:gap-10 gap-5">
            <div className="flex py-1 px-4 border border-[#266958]">
              <svg
                className="fill-current text-[#266958] hover:text-[#FFD2B1] w-4 cursor-pointer"
                viewBox="0 0 448 512"
                onClick={() => {
                  if (Quantity <= 1) {
                    setQuantity(1);
                  } else {
                    setQuantity(Quantity - 1);
                  }
                }}
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 text-center items-center text-[#141414] w-12"
                type="text"
                value={Quantity}
                onChange={(event) => inputChangedHandler(event)}
              />
              <svg
                className="fill-current text-[#266958] hover:text-[#FFD2B1] w-4 cursor-pointer"
                viewBox="0 0 448 512"
                onClick={() => {
                  if (Quantity >= StockQuantity) {
                    toast("No More Product");
                  } else {
                    setQuantity(Quantity + 1);
                  }
                }}
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <button
              className="w-full uppercase px-8 pb-3 pt-2 text-sm bg-[#266958] text-white hover:text-black hover:bg-[#FFD2B1] duration-300 transition-all ease-in-out"
              onClick={() => {
                addToCartHandler();
                toast("Added to bag");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
