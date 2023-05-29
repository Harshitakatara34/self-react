import {
  FormControl,
  Input,
  FormLabel,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import {useState} from "react";
import axios from "axios";
const initState={
  "name": "",
  "ownerName": "",
  "address": "",
  "areaCode": "",
  "rent": "",
  "isBachelorAllowed": false,
  "isMarriedAllowed":  false,
}
 
export default function Form() {
   const [formData, setFormData] = useState(initState)
 
   const handleChange=(e)=>{
    const { name , value , type ,checked}=e.target;
    console.log(name , value , type ,checked)
    const val = type === "number" ? Number(value) : type ==="checkbox" ? checked :
     value;
   
     setFormData({...formData, [name] : val })
   }


   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);


    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`, {
      ...formData
    }).then((res)=> console.log(res))
   }
 
 const { name ,
 ownerName ,
 address,
 areaCode ,
 rent ,
 isBachelorAllowed ,
 isMarriedAllowed }=formData;


  return (
      <div className = "addHouseContainer" >
        <form className = "form" onSubmit={handleSubmit}>
          <FormControl>
              <Input className = "name" type="text" placeholder = "Name"   name="name" value={name} onChange={  handleChange }/>
              {/* name */}


              <Input className = "ownerName"  type="text" placeholder = "Owners name" name="ownerName"
              value={ownerName}  onChange={handleChange }/>
              {/* ownerName */}


              <Input className = "address" type="text"  placeholder = "Address"  name="address" value={address}  onChange={ handleChange } />
              {/* address */}


              <Input className = "areaCode" type="number"  placeholder = "Area code"  name="areaCode" value={areaCode}   onChange={  handleChange } />
              {/* areaCode */}
              <Input className = "rent" placeholder = "Rent" type="number"  name="rent" value={ rent}  onChange={  handleChange } />
              {/* rent */}


              <Checkbox className = "married"  name="isMarriedAllowed"    
              type="checkbox"  checked={isMarriedAllowed}
              onChange={  handleChange } >
                <FormLabel>Married Tenants Allowed</FormLabel>
              </Checkbox>
              {/* isBachelorAllowed */}
              <br />
              <Checkbox  className = "bachelor"    name="isBachelorAllowed"
                 type="checkbox"  checked={isBachelorAllowed}
                onChange={  handleChange } >
                <FormLabel>Bachelor Tenants Allowed</FormLabel>
              </Checkbox>
              {/* isMarried Allowed */}
              <br />
              <Button className = "submitBtn" type="submit"> Submit</Button>
          </FormControl>
        </form>
      </div>
  )
}
