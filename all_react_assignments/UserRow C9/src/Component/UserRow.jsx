import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  console.log(maritalStatus)
  return <>
   <table>
         <tbody>
           <tr>
            <td>{id+1}</td>
             <td>{name}</td>
             <td>{gender}</td>
             <td>{role}</td>
             <td>{maritalStatus?"married":"unmarried"}</td>
           </tr>
         </tbody>
         </table>
  </>;
};
export { UserRow };
