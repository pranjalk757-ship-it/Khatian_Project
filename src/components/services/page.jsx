import React from 'react'
import ServiceCard from './ServiceCard/card'


const AvailableServices = () => {
    const servicesData = [
        {
            id:1,
            color1:'bg-neon-cyan',
            color2:'hover:bg-neon-cyan',
            title:'Search by Khatian',
            description:'Search by khatian',
            path:'/dashboard/khatian-search'
        },
        {
            id:2,
            color1:'bg-ufo-green',
            color2:'hover:bg-ufo-green',
            title:'Payment of Land Revenue',
            description:'Online Payment of Land Revenue',
            path:'disabled'
        },
        {
            id:3,
            color1:'bg-mountain-meadow',
            color2:'hover:bg-mountain-meadow',
            title:'Certified Copy of ROR',
            description:'Certified Copy of ROR',
            path:'disabled'
        },
        {
            id:4,
            color1:'bg-gamboge',
            color2:'hover:bg-gamboge',
            title:'Land Map Preview',
            description:'This service is for getting certified copy of digitally signed Land Map on payment basis.',
            path:'disabled'
        },
        {
            id:5,
            color1:'bg-carmine-pink',
            color2:'hover:bg-carmine-pink',
            title:'RCCMS',
            description:'Revenue Court Case',
            path:'disabled'
        },
        
    ]
  return (
    <>
        <div className='p-3'>
            <h6 className='text-xl font-medium text-gray-800'>Available Services:</h6>
            <div className='my-5 mx-10 flex gap-5 flex-wrap'>  

                {servicesData.map((service) =>(
                    <ServiceCard 
                        key={service.id}
                        bgcolor={service.color1}
                        hovercolor={service.color2}
                        title={service.title}
                        description={service.description}
                        path={service.path}
                    />
                ) )}
            </div>
        </div>
    </>
  )
}

export default AvailableServices
