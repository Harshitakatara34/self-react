import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [text, setText] = useState({});

  const getSingle = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/products/${id}`);
      let val = res.data;
      setText({ ...text, val });
    } catch (err) {}
  };
  useEffect(() => {
    getSingle();
  }, []);
  console.log("text", text);
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <h2>{text.id}</h2>
      <img src={text.val.image} alt={text.val.title} />
      <p>{text.val.title}</p>
      <p>{text.val.price}</p>
      <p>{text.val.category}</p>
    </div>
  );
};

export default SingleProduct;
