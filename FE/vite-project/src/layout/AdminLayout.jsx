import React from 'react'
import NavAdmin from './NavAdmin/NavAdmin'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
   <>
   <NavAdmin></NavAdmin>
   <Outlet></Outlet>
   </>
  )
}

export default AdminLayout
