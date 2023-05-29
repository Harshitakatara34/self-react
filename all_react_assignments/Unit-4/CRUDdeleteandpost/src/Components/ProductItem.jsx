const ProductItem=({id,title,imageUrl,price,handledelete,handlePatch})=>{
    return(
        <>
        <h6>{title}</h6>
        <h6>{imageUrl}</h6>
        <h6>{price}</h6>
        <button onClick={()=>handledelete(id)}>delete</button>
        <button onClick={()=>handlePatch(id)}>Patch data</button>
        <br/>
        <br/>
        <br/>
        <br/>
      
        </>
    )

}
export default ProductItem