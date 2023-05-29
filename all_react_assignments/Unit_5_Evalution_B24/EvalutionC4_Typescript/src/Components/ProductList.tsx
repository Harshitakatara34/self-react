import React from "react";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct, updateLike, updateDisLike } from "../api";
import { ProductCard } from "./ProductCard";

type Todo = {
  id?: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  key?: number;
};

interface proptyp {
  data1: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ProductList = ({ data1, setData }: proptyp) => {
  const deletehandler = (id: number) => {
    deleteProduct(id).then(() =>
      setData((prevData) => prevData.filter((item) => item.id !== id))
    );
  };

  const likehandler = (id: number) => {

    // console.log(id);
    
    updateLike(id).then(() =>
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, like: item.like + 1 } : item
        )
      )
    );
  };

  const disLikehandler = (id: number) => {
    updateDisLike(id).then(() =>
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, dislike: item.dislike + 1 } : item
        )
      )
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
      }}
      className={`product-list`}
    >
      {data1.length > 0 &&
        data1.map(({ id, name, brand, price, image, like, dislike }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              name={name}
              brand={brand}
              price={price}
              image={image}
              like={like}
              dislike={dislike}
              deletehandler={deletehandler}
              likehandler={likehandler}
              disLikehandler={disLikehandler}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
