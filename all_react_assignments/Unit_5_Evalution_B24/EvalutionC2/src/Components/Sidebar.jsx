import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getProducts } from "../Redux/ProductReducer/action";

export const Sidebar = () => {
  const [order,setOrder]=useState("")

  const handlesort=(e)=>{
    const value=e.target.value
    setOrder(value)
  }
  const dispatch=useDispatch()

  useEffect(()=>{
    const paramObj={
      params:{
        _sort:"discountPercentage",
        _order:order,
      }
    }
    dispatch(getProducts(order&&paramObj))
  },[order])
  return (
    <DIV>
      <h3>Sort By Discount</h3>
      <div onChange={handlesort}>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"}
        defaultChecked={order==="asc"} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order==="desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
