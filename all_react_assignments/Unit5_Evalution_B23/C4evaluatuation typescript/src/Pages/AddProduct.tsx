import axios from "axios";
import React from "react";
import { Navbar } from "../Components/Navbar";

export const AddProduct = () => {
  const port = process.env.REACT_APP_JSON_SERVER_PORT;
  const name = React.useRef<HTMLInputElement>(null);
  const image = React.useRef<HTMLInputElement>(null);
  const brand = React.useRef<HTMLInputElement>(null);
  const price = React.useRef<HTMLInputElement>(null);

  function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post(`http://localhost:${port}/products`, {
        name: name.current?.value,
        brand: brand.current?.value,
        price: price.current?.value,
        image: image.current?.value,
        like: 0,
        dislike: 0,
      })
      .then((res) => {
        console.log(res.data);
      });

    name.current!.value = "";
    image.current!.value = "";
    brand.current!.value = "";
    price.current!.value = "";
    
  }

  return (
    <div>
      <Navbar pageName={"Add Product Page"} />
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          className="product-name"
          placeholder="productname"
          ref={name}
        />
        <input
          type="text"
          className="product-image"
          placeholder="image"
          ref={image}
        />
        <input
          type="text"
          className="product-brand"
          placeholder="brand"
          ref={brand}
        />
        <input
          type="text"
          className="product-price"
          placeholder="price"
          ref={price}
        />

        <button className="submit-form" type="submit">Add Product</button>
      </form>
    </div>
  );
};
