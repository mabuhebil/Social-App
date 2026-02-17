import React from 'react'
import NavBar from '../../componets/Layout/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
