import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  TableContainer,
} from '@chakra-ui/react';
import {useState,useEffect} from "react" ;
import axios from "axios";
export default function Dashboard() {
 const [data, setData] = useState([]);
 const [order, setOrder] = useState("")
 const [searchQuery, setSearchQuery] = useState("")
  // TODO: Remove below const and instead import them from chakra
  //get request ${process.env.REACT_APP_JSON_SERVER_PORT}
  const getHouses = (searchQuery)=>{
    const params = searchQuery ? { q : searchQuery} : {};
    return axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,{
        params,
      })
    .then((res)=> setData(res.data))
    .catch((err)=> console.log(err))
  }
  
  console.log(process.env.REACT_APP_JSON_SERVER_PORT)
 // onLoading getRequest will be done
 useEffect(() => {
  getHouses(searchQuery);
  }, [searchQuery])
   
 useEffect(() => {
    if(order){
       if(order==="asc"){
        const arr= [...data].sort((a,b)=> a.rent-b.rent)
        setData([...arr])
       }else if (order==="desc"){
        const arr=[...data].sort((a,b)=> b.rent-a.rent)
        setData([...arr])
       }
    }
 }, [ order])


 const handleDelete=async (id)=>{
   return axios({
    method : "delete",
    url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
    }).then(()=>  getHouses(searchQuery))
 }
 




 
  return (
    <div>
        <div className="sortingButtons">
          <Button className = "sortByRentAsc"  
          onClick={()=> setOrder("asc")}>  Sort by Asc </Button>


          <Button className = "sortByRentDesc"
          onClick={()=> setOrder("desc")}> Sort by Desc </Button>
        </div>


        <Input className = "searchAddress"  
          placeholder = "Search Data"
           value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}/>




        <TableContainer>
          <Table className="table">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Owner's Name</Th>
                <Th>Address</Th>
                <Th>Area Code</Th>
                <Th>Rent</Th>
                <Th>Bachelor Tenants Allowed</Th>
                <Th>Married Tenants Allowed</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Map the below container against your data */}
              {data.map((item)=> (  
              <Tr className = "houseDetails"  key={item.id}>
                  <Td className = "name" >{item.name}</Td>
                  <Td className = "ownersName" >{item.ownerName}</Td>
                  <Td className = "address" >{item.address}</Td>
                  <Td className = "areaCode" >{item.areaCode}</Td>
                  <Td className = "rent" >{item.rent}</Td>
                  <Td className = "isBachelorAllowed" >{item.isBachelorAllowed ? "Yes" : "No"}</Td>
                  <Td className = "isMarriedAllowed" >{item.isMarriedAllowed ? "Yes" : "No"}</Td>
                  <Td className = "delete" onClick={()=>handleDelete(item.id)} > Delete </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}
