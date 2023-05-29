import React from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
type Todo = {
  id?: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
};
const HomePage = () => {
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    getProducts().then((res) => setData(res.data));

 
  }, []);
  return (
    <div>
      <Navbar />
      <ProductList data1={data} setData={setData} />
    </div>
  );
};
export default HomePage;
