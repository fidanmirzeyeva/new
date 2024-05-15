import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'


function Products() {
  const{addBasket}=useContext(MainContext)

  const [products, setProducts] = useState([])
  useEffect(() => {
  getProducts()
    
  }, [])
  async function getProducts() {
    const res = await fetch("http://localhost:5000/fa")
    const data = await res.json()
    setProducts(data)
    
  }
  
  return (
    <>
    {products.map((x)=>
    <div key={x.id}>
      <img src={x.image} alt="" />
      <p>{x.name}</p>
      <p>{x.price}</p>
      <button onClick={()=>addBasket(x)}>add basket</button>
      <button><Link to={`/detail/${x._id}`}>Detail</Link></button>

    </div>
    )}

    </>
  )
}

export default Products
