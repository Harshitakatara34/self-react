import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
export const ProductList = () => {
  const list=useSelector((state)=>state.productReducer.products)
  console.log(list);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts)

  },[])
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
       {
        list.map((ele)=>
        <div data-testid = "product-list" key={ele.id}>
             <ProductCard  {...ele}/>
        </div>
        )
       }
    </div>
  );
};
