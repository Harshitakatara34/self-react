import "./App.css";
import {useState} from "react";
import data from "./db.json";
import Product from "./components/Product"
function App() {
  const[dataa,setdataa]=useState(data)
 const handleQty=(id,text)=>{
  const updateddata=dataa.map((ele)=>( ele.id === id ? { ...ele, quantity: ele.quantity + text} : ele))
  setdataa(updateddata)
}
let sum=0;
   dataa.forEach((item)=>{ 
    sum+= item.price*  item.quantity;
    return sum;
  })
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
      {dataa.map((ele)=>{
        return(
          <>
          <Product name={ele.name} price={ele.price} quantity={ele.quantity} id={ele.id} handleQty={handleQty} key={ele.id} />
          </>

        )
      })}
      
      
      
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
     Total:{sum}
      </h1>
    </div>
  );
}

export default App;
