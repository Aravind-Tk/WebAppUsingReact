import React, { useState } from "react";
import Header from './Header/Header';


const Users = () => {
  const [users, setUsers] = useState([
    { name: "rahul", age: 24 },
    { name: "aravind", age: 25 },
    { name: "arun", age: 30 },
  ]);

  const editAge = (event, i) => {
    const larr = [...users];  //de-structuring
    larr[i].age = event.target.value;
    setUsers(larr);
  };

  console.log("users");
  return (
    <>
    <Header/>
      <div>Users</div>
      <table>
        <tr>
          <th> Name</th>
          <th> Age </th>
        </tr>

 {/*array method using map to iterate*/}
        {users.map((pobj, i) => (
          <tr>
            <td> 
                {pobj.name} 
            </td>
            <td>
              <input value={pobj.age} onChange={(event) => editAge(event, i)} />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Users;
