import React from 'react'
import NavClient from './NavClient/NavClient'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
   <>
   <NavClient></NavClient>
   <Outlet></Outlet>
   </>
  )
}

export default MainLayout
