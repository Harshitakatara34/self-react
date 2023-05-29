import axios from "axios";
import React from "react";
import { ProductCard } from "./ProductCard";

interface List {
  id:number;
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
}

const ProductList = () => {
  const [products, setProducts] = React.useState<List[]>([]);
  const port = process.env.REACT_APP_JSON_SERVER_PORT;

  function getData() {
    axios.get(`http://localhost:${port}/products`).then((res) => {
      setProducts(res.data);
    });
  }

  React.useEffect(() => {
    getData();
  }, [products]);

  return (
    <div
      className={`product-list`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem",
        padding: "1rem",
      }}
    >
      {/* Add all product cards here in grid format  */}

      {products.map((product, id) => {
        return <ProductCard key={id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
