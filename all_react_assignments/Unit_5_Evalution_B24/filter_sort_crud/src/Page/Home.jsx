import React from 'react'
import { Productlist } from '../Component/Productlist'
import { SideBar } from '../Component/SideBar'
import styled from 'styled-components'

export const Home = () => {
  return (
    <DIV>
      <SideBar className="sidebar"/>
      <Productlist className="productlist"/>
    </DIV>
  )
}
const DIV=styled.div`
   display: flex;
  .sidebar{
    width: 15%;
  }
  .productlist{
    width: 85%;
  }
`