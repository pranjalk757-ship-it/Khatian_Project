import React from 'react'
import SidebarLinks from './SidebarLinks'
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
        name: "User Registration",
        path: "/dashboard/user-registration",
        },
    ]
  return (
    <div>
        {
            sideLinks.map((element)=>(
               <div key={element.id}>
                    <SidebarLinks element={element} key={element.id}></SidebarLinks>
                </div> 
            ))
        }
    </div>
  )
}

export default Sidebar