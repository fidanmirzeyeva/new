import React, { useEffect, useState } from "react";
import './AdminTable.scss'
import { Link } from "react-router-dom";


function AdminTable() {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    showTable();
    
  }, []);
  async function showTable() {
    const res = await fetch("http://localhost:5000/fa");
    const data = await res.json();
    setAdmin(data);
  }
  async function deleteAdmin(id) {
    const res = await fetch("http://localhost:5000/fa/"+id,{method:"delete"});
      const data = await res.json()
      showTable()
    



    
  }
 

  return (
<>
    <table>
      <thead>
      <tr>
        <th>name</th>
        <th>price</th>
        <th>image</th>
        <th>options</th>
      </tr>
      </thead>
     
     <tbody>
    {admin.map((x)=>(
      <tr key={x._id}>
        <td>{x.name}</td>
        <td>{x.price}</td>
        <td><img src={x.image} alt="" /></td>
        <td>
          <button onClick={()=>deleteAdmin(x._id)}>Delete</button>
         
          <button><Link to={`/admin/update/${x._id}`}>Update</Link>  </button>
        </td>


      </tr>
    )
    
    )}
       
      
     </tbody>
     
     
    </table>

    </>
  );
}

export default AdminTable;
