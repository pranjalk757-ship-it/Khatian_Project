import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'


function SidebarLinks({ element }) {
    const location = useLocation();
    
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    return (
        <Link to={element.path}>
            <div className='relative h-10 bg-richblue-200 flex flex-row my-2 items-center'>
                {
                    matchRoute(element.path) &&
                    <span className='h-10 w-2 bg-pink-300 absolute'></span>
                }
                <div className='text-md font-bold pl-4 text-white'>{element.name}</div>
            </div>
        </Link>
    )
}


function Sidebar() {
    const sideLinks = [
        {
            id: 1,
            name: "Online Services",
            path: "/dashboard/services",
        },
        {
            id: 2,
            name: "Payment",
            path: "/dashboard/payment",
        },
        {
            id: 3,
            name: "Login/ Sign up",
            path: "/login",
        },
    ]

    return (
        <div>
            {
                sideLinks.map((element) => (
                    <div key={element.id}>
                        <SidebarLinks element={element} />
                    </div> 
                ))
            }
        </div>
    )
}

export default Sidebar