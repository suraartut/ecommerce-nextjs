import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryProducts = ({ Categories }) => {
  const Router = useRouter();

  const [more, setMore] = useState(8);

  const loadProducts = () => {
    setMore(more + 8);
  };

  useEffect(() => {
    setMore(8);
  }, [Router]);

  const TitleName = Router.query.id;

  const CategorySlice = Categories.slice(0, more);

  return (
    <section className="w-full m-auto md:px-5 lg:py-28 py-10">
      {/* <Breadcrumb /> */}
      <div className="w-full text-center">
        <h1 className="lg:text-4xl text-3xl uppercase underline">
          {Categories[0].category.name}
        </h1>
      </div>
      <div className="container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-3 py-10 px-5 text-center">
        {CategorySlice?.map((item, index) => {
          return (
            <div key={index} className="border border-gray-300">
              <Link href="/">
                <Image
                  placeholder="blur"
                  blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
                  src={item.images[0]}
                  width={370}
                  height={360}
                  alt={item.title}
                />
                <div className="py-3 px-1">{item.title}</div>
                <div className="pb-3 font-bold">${item.price}.00</div>
              </Link>
            </div>
          );
        })}
      </div>
      {CategorySlice.length >= Categories.length ? (
        ""
      ) : (
        <div className="w-full text-center">
          <button
            className="bg-[#266958] text-white hover:text-black hover:bg-[#FFD2B1] px-5 pt-2 pb-3"
            onClick={() => loadProducts()}
          >
            See More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoryProducts;
