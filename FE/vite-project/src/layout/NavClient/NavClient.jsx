import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'

function NavClient() {
  const {basket}=useContext(MainContext)
  return (
    <>
    <div className="navClient">
        <div className="navClient_text">
            <p>Home Page</p>
        </div>
        <div className="navClient_list">
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/basket"}>Basket{basket.length}</Link>
                <Link to={"/wishlist"}>WishList</Link>
                <Link to={"/products"}>Products</Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavClient
