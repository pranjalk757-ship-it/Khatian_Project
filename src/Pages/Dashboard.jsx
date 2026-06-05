import React from 'react'
import Sidebar from '../Sidebar Components/Sidebar'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='flex flex-row bg-white'>
        <div className='h-[calc(100vh-5rem)] bg-richblue-300 w-[20rem]'>
            <Sidebar></Sidebar>
        </div>
        <div className=''>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard