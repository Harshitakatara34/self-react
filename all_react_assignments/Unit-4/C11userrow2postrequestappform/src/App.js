import { useState } from "react";
import { useReducer } from "react";
import "./App.css";
// 1. import `ChakraProvider` component
import {  Box, Button, Center, Checkbox, FormControl, Heading, FormLabel, Input, Select } from '@chakra-ui/react'


import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { UserRow } from "./Component/UserRow";
 
const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};


//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
      switch(action.type){
         case "name" : {
           return {
            ...state,
            name : action.payload
           }
         }
         case "gender" : {
           return {
            ...state,
            gender : action.payload
           }
         }
         case "role" : {
           return {
            ...state,
            role : action.payload
           }
         }
         case "maritalStatus" : {
           return {
            ...state,
            maritalStatus : action.payload
           }
         }


         case "reset" : {
           return initialState
         }


         default : {
          return state
         }
      }
};


function App() {
  const [state, dispatch] = useReducer(reducer,  initialState)
 
  // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;


  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
 
   const handleSubmit=(e)=>{
    e.preventDefault();


     setSubmittedData([...submittedData, state ]);
     console.log(state);
     dispatch({type : "reset"})
    }
    console.log(submittedData)
  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
           {/* name */}
            <Input type="text" name="name" value={state.name}   placeholder ="name enter"
            onChange={(e)=> dispatch({type : "name" , payload : e.target.value})}/>
            {/* gender */}
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select"
            value={state.gender}  
            onChange={(e)=> dispatch({type : "gender" ,  payload : e.target.value})}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer Not to Say">Prefer Not to Say</option>
            </Select>
            {/* role */}
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select"
            value={state.role}
            onChange={(e)=> dispatch({type : "role" , payload : e.target.value})}
            >
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
              <option value="FullStack Developer">FullStack Developer</option>
            </Select>
            {/* maritalstatus */}
            <Checkbox name="maritalStatus" isChecked={state.maritalStatus}
              onChange={(e)=> dispatch({type : "maritalStatus", payload :
            e.target.checked })}
             >Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      {
        submittedData.length ?  <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>USERS</Th>
              <Th>GENDER</Th>
              <Th>ROLE</Th>
              <Th>MARITAL STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
             {
              submittedData.map((item, i )=>(
                 <UserRow  key={Date.now()+ i }  id={i+1} {...item}/>
              ))
             }
          </Tbody>
        </Table>
      </TableContainer> :
      <Heading data-testid="no-user-container">no users found</Heading>
      }


    </div>
  );
}


// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
