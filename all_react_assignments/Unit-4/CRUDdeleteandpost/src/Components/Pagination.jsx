const Pagination=({page,handlePage})=>{
    return(
        <>
       <button disabled={page=1}onClick={()=>handlePage(-1)}>prev</button>
       <button>{page}</button>
       <button onClick={()=>handlePage(1)}>next</button>
        </>
    )
}
export default Pagination