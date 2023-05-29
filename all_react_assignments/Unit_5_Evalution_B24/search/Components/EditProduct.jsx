import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditAction, productAction } from "../Redux/ProductReducer/action";

const initial = {
  image: "",
  price: "",
  category: "",
  title: "",
};

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [val, setVal] = useState(initial);
  const product = useSelector((state) => state.ProductReducer.product);
  const [data, setData] = useState("");
  const [success,setSuccess]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setVal({ ...val, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(EditAction(id, val)).then(()=>setSuccess(true))
  };

  useEffect(() => {
    const data= product.find((el) => el.id === Number(id));
    setData( data);
  }, []);

 
  return (
    <div>
      <h1>ID or Product {id}</h1>
      <h2>{success &&"product added successfuuly" }</h2>
      <div
        style={{
          width: "30%",
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <input
          type="url"
          placeholder="Image"
          onChange={handleChange}
          name="image"
         
        />
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
         
        />
        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="men">Male</option>
          <option value="women">Women</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EditProduct;
