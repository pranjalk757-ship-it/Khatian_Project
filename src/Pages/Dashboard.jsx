import React from 'react'
import Sidebar from '../Sidebar Components/Sidebar'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='flex flex-row bg-richblack-800'>
        <div className='h-[calc(100vh-5rem)] bg-richblack-900 w-[20rem]'>
            <Sidebar></Sidebar>
        </div>
        <div className=''>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard