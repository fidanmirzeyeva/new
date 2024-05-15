import React from 'react'
import { Link } from 'react-router-dom'

function NavAdmin() {
  return (
    <>
    <div className="navAdmin">
        <div className="navAdmin_text">
            <p>Admin Page</p>
        </div>
        <div className="navAdmin_list">
            <ul>
                <Link to={"/admin"}>Home</Link>
                <Link to={"/admin/add"}>Add</Link>
                <Link to={"/admin/table"}>Admin Table</Link>
              
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavAdmin
