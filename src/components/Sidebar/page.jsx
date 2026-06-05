import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'

// Internal Component: SidebarLinks
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

// Main Component: Sidebar
function Sidebar() {
    const sideLinks = [
        {
            id: 1,
            name: "Search by Khatian/Plot",
            path: "/dashboard/khatian-search",
        },
        {
            id: 2,
            name: "Know Mutation Status",
            path: "/dashboard/mutation-status",
        },
        {
            id: 3,
            name: "View Map",
            path: "/dashboard/view-map",
        },
        {
            id: 4,
            name: "Plot Unit Conversion",
            path: "/dashboard/unit-conversion",
        },
        {
            id: 5,
            name: "Tehsil List",
            path: "/dashboard/tehsil-list",
        },
        {
            id: 6,
            name: "Mouja List",
            path: "/dashboard/mouja-list",
        },
        {
            id: 7,
            name: "User Registration/Login",
            path: "/login",
        },
        {
            id: 8,
            name: "Payment",
            path: "/dashboard/payment",
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