import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id} = useParams()

    useEffect(() => {
      
    
      showDetail()
    }, [])

    const [detail, setDetail] = useState([])
    async  function showDetail() {
        const res = await fetch(`http://localhost:5000/fa/${id}`)
        const data = await res.json()
        setDetail(data)
    }
    
  return (
    <>
    <img src={detail.image} alt="" style={{width:"200px"}} />
    <div>{detail.name}</div>
    <div>{detail.price}</div>
    </>
  ) 
}

export default Detail
