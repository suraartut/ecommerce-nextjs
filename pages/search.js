import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const search = ({ Data }) => {
  const Router = useRouter();

  let searchData = Data.filter((item) =>
    item.title.toLowerCase().includes(Router.query.searchText)
  );

  return (
    <section className="w-full m-auto md:px-5 lg:py-28 py-10">
      {/* <Breadcrumb /> */}
      {searchData.length == 0 ? (
        <div className="w-full text-center lg:text-4xl text-3xl mt-5 mb-6">
          No products found for your search criteria!
        </div>
      ) : (
        <div className="w-full text-center">
          <h1 className="lg:text-4xl text-3xl">
            {searchData.length} products found
          </h1>
          <div className="container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-3 py-10 px-5 text-center">
            {searchData?.map((searchItem, index) => {
              return (
                <div key={index} className="border border-gray-300">
                  <Link href={`/product/${searchItem.id}`}>
                    <Image
                      blurDataURL="/Images/blur.png"
                      placeholder="blur"
                      src={searchItem?.images[0]}
                      width={370}
                      height={360}
                      alt={searchItem.title}
                    />
                    <div className="py-3 px-1">{searchItem.title}</div>
                    <div className="pb-3 font-bold">${searchItem.price}.00</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export async function getServerSideProps({ query }) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return {
    props: {
      Data: data,
    },
  };
}

export default search;
