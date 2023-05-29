import styled from "styled-components";
import {useSearchParams} from "react-router-dom"
import { useEffect, useState } from "react";
export const Sidebar = () => {
  const [searchparams,setSearchparams]=useSearchParams()
  const initialCategory=searchparams.get("batch")
  const [batch,setBatch]=useState(initialCategory||[])
  const [page, setPage] = useState(1);
const handlePage=(val)=>{
  setPage(val+1)
}
  useEffect(()=>{
    let params={
      batch,
      page
    }
    setSearchparams(params)
  },[batch,page])
  
const handleCategory=(e)=>{
  const {value}=e.target
  let newBatch=[...batch]
  if(newBatch.includes(value)){
    newBatch=newBatch.filter((el)=>el!=value)
  }else{
    newBatch.push(value)
  }
setBatch(newBatch)
}

  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101" type="checkbox" name="WEB101" value={"WEB101"} onChange={handleCategory}
        defaultChecked={batch.includes("WEB101")}/>
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" type="checkbox"   name="JS201" value={"JS201"} onChange={handleCategory}
         defaultChecked={batch.includes("JS201")} />
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" type="checkbox" 
          name="RCT101" value={"RCT101"} onChange={handleCategory}
          defaultChecked={batch.includes("RCT101")} />
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" type="checkbox" 
          name="RCT211" value={"RCT211"} onChange={handleCategory}
          defaultChecked={batch.includes("RCT211")} />
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" type="checkbox" 
          name="NXM101" value={"NXM101"} onChange={handleCategory}
          defaultChecked={batch.includes("NXM101")} />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev"
        disabled={page==1} onClick={()=>handlePage(-1)}>Previous</button>
        <button data-testid="page-next" onClick={()=>handlePage(1)}>Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
