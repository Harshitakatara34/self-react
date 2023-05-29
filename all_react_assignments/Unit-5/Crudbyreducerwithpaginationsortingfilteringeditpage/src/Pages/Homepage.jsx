import React from 'react'
import styled from 'styled-components'
import ProductList from '../Components/ProductList'
import Sidebar from '../Components/Sidebar'
import Pagination from '../Components/Pagination'
const Homepage = () => {
  return (
    <DIV>
  
     <div className='sidebar'>
     <Sidebar/>
     </div>
     <div className='productlist'>
    <ProductList/>
   
    </div>
    </DIV>
  )
}

export default Homepage

const DIV=styled.div`
display:flex;

.sidebar {
  width:15%;
  border:1px solid gray;
}
.productlist{
  width:85%
}


`