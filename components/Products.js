import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories/2/products")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto lg:py-16 py-10 lg:px-10 px-5">
      <div className="mb-9 text-center">
        <Link href="/" className="text-[18px] text-[#858585] hover:text-black">
          OUR CURRENT FAVORITES
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-5 lg:mb-[30px] mb-2">
        {product?.map((item, index) => {
          if (index < 6) {
            return (
              <div key={index}>
                <div>
                  <img src={item.images[1]} alt={item.title} />
                </div>
                <div className="mt-[15px]">
                  <div className="text-sm">{item.title}</div>
                  <div className="mb-3">${item.price}.00</div>
                  <div className="w-full flex deneme">
                    <button
                      type="submit"
                      className="add-to-cart-button flex gap-6 uppercase px-8 pb-3 pt-2 text-sm bg-[#266958] text-white hover:text-black hover:bg-[#FFD2B1] duration-300 transition-all ease-in-out"
                    >
                      ADD TO CART
                      <HiOutlineShoppingBag className="add-to-cart items-center text-center text-xl " />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Products;
