import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'

function SidebarLinks({element}) {
    const location = useLocation();
    const matchRoute = (route)=>{
        console.log("location ",matchPath({path:route},location.pathname))
        return matchPath({path:route},location.pathname)
    }
  return (
    <Link to={element.path}>
        <div className='relative h-10 bg-white flex flex-row my-2 items-center' >
            {
                matchRoute(element.path) &&
                <span className='h-10 w-2 bg-pink-300 absolute'></span>
            }
            <div className='text-md font-bold pl-4'>{element.name}</div>

        </div>
    </Link>
  )
}

export default SidebarLinks