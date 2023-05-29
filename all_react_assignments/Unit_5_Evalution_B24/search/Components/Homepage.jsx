import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { productAction } from "../Redux/ProductReducer/action";
import FilterAndSort from "./FilterAndSort";
const Homepage = () => {
  const dispatch = useDispatch();
  const [search] = useSearchParams();
  const location = useLocation();

  const { loading, error, product } = useSelector(
    (state) => state.ProductReducer
  );

  let obj = {
    params: {
      gender: search.getAll("category"),
      _sort: "price",
      _order: search.get("order"),
      q: search.get("inputSearch"),
    },
  };

  useEffect(() => {
    dispatch(productAction(obj));
  }, [location.search]);

  return (
    <div>
      {loading && <h1>Loading......</h1>}

      {error && <h1>Error.....</h1>}

      <div style={{ display: "flex" }}>
        <div>
          <FilterAndSort />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "40px",
          }}
        >
          {product?.map((el) => {
            return (
              <div
                key={el.id}
                style={{
                  border: "1px solid black",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <img
                  src={el.image}
                  alt={el.title}
                  width={"200px"}
                  height={"200px"}
                />
                <p>{el.title}</p>
                <p>{el.price}</p>
                <p>{el.category}</p>
                <Link to={`/products/${el.id}`}>
                  <button>view</button>
                </Link>
                <Link to={`/products/${el.id}/edit`}>
                  <button>Edit </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
