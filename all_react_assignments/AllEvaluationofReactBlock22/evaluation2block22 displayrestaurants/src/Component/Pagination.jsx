function Pagination({current,onChange,total}) {
  let btnArr=new Array(total).fill(0)
  return (
  <div data-testid = "page-container">
  {btnArr.map((ele,index)=>{
    return(
      <>
      <button Key={index+Math.random()}
      onClick={()=>{onChange(index+1)}}
      style={{borderColor:current===index+1&&"red"}}>
        {index+1}
      </button>
      </>
    )
  })}
  </div>
 
  );
}

export default Pagination;