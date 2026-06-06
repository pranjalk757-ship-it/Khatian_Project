import React from 'react'
import Sidebar from '../Sidebar/page'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='flex flex-row bg-white'>
        <div className='h-[calc(100vh-5rem)] bg-richblue-300 w-[15rem]'>
            <Sidebar></Sidebar>
        </div>
        <div className=''>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard