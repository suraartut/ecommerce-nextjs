import ProductDetails from "@/components/Product/ProductDetails";
import React from "react";

const Product = ({ products }) => {
  return (
    <div>
      <ProductDetails Products={products} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  let id = query.id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

export default Product;
