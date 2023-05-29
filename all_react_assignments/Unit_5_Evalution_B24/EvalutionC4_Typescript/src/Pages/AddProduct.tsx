import React from "react";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { addProduct } from "../api";

type Todo = {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
};
export const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const Changehandlername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const Changehandlerimage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };
  const Changehandlerbrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };
  const Changehandlerprice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    setPrice(newPrice);
  };
  const Submithandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newObj:Todo = { name, price, brand, image, like: 0, dislike: 0 };
    console.log(newObj);
    addProduct(newObj);
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={Submithandler}>
        <input
          type="text"
          onChange={Changehandlername}
          className="product-name"
          placeholder="Product Name"
          value={name}
        />
        <input
          type="text"
          value={image}
          onChange={Changehandlerimage}
          className="product-image"
          placeholder="Product Image"
        />
        <input
          type="text"
          value={brand}
          onChange={Changehandlerbrand}
          className="product-brand"
          placeholder="Product Brand"
        />
        <input
          type="number"
          onChange={Changehandlerprice}
          className="product-price"
          placeholder="Product Price"
          value={price}
        />
        <button className="submit-form" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};
