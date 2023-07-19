import React from "react";
import CategoryProducts from "@/components/Category/CategoryProducts";

const Category = ({ categories }) => {
  return (
    <div>
      <CategoryProducts Categories={categories} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  let id = query.id;

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );

  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};

export default Category;
