import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import tripuraData from '../../data'
function Khatian_search() {
    const {register,setValue,getValues,watch,formState:{errors},handleSubmit} = useForm();
    const [district,setDistrict] = useState("");
    const [subDivision,setSubDivision] = useState("");
    const [revenueCircle,setRevenueCircle] = useState("");
    const [tehsil,setTehsil] = useState("");
    const [mouja,setMouja] = useState("");
    const selectedDistrict = watch("district")
    const selectedSubdivision = watch("subdivision")
    const selectedRevenueCircle = watch("revenueCircle")
    const selectedTehsil = watch("tehsil");
    const selectedInput = watch("inputType")
    const searchby = [
        {
            id:1,
            name:"Khatian No.",
            placevalue:"Search by Khatian Number"
        },
        {
            id:2,
            name:"Plot No.",
            placevalue:"Search by Plot Number"
        },
        {
            id:3,
            name:"Name",
            placevalue:"Search by Name"
        },
    ]
    const submitHandler = (data)=>{
        console.log("Ye raha data",data)
    }
  return (
    <div className=''>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='grid grid-cols-3 bg-richblue-100  ml-10 mt-20 py-10 px-10 gap-y-20'>

                <div className=''>
                    <label htmlFor="district" className='text-white font-semibold p-2'>District:</label>
                    <select
                    name="district" 
                    id="district"
                    {...register('district',{required:true})}

                    >
                        <option value="" >District</option>
                        {
                            Object.keys(tripuraData).map((district)=>(
                                <option
                                    key={district}
                                    value={district}
                                >
                                    {district}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="subdivision" className='text-white font-semibold p-2'>Sub Division:</label>
                    <select
                    name="subdivision" 
                    id="subdivision"
                    {...register('subdivision',{required:true})}

                    >
                        <option value="" >Sub Division</option>
                        {selectedDistrict &&
                            Object.keys(tripuraData?.[selectedDistrict] || [])?.map((subdivision)=>(
                                <option
                                    key={subdivision}
                                    value={subdivision}
                                >
                                    {subdivision}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="revenueCircle" className='text-white font-semibold p-2'>Revenue Circle:</label>
                    <select
                    name="revenueCircle" 
                    id="revenueCircle"
                    {...register('revenueCircle',{required:true})}

                    >
                        <option value="" >Revenue Circle</option>
                        {selectedSubdivision &&
                            Object.keys(tripuraData?.[selectedDistrict]?.[selectedSubdivision] || [])?.map((revenueCircle)=>(
                                <option
                                    key={revenueCircle}
                                    value={revenueCircle}
                                >
                                    {revenueCircle}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="tehsil" className='text-white font-semibold p-2'>Tehsil:</label>
                    <select
                    name="tehsil" 
                    id="tehsil"
                    {...register('tehsil',{required:true})}

                    >
                        <option value="" >Tehsil</option>
                        {selectedRevenueCircle &&
                            Object.keys(tripuraData?.[selectedDistrict]?.[selectedSubdivision]?.[selectedRevenueCircle] || [])?.map((tehsil)=>(
                                <option
                                    key={tehsil}
                                    value={tehsil}
                                >
                                    {tehsil}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="mouja" className='text-white font-semibold p-2'>Mouja:</label>
                    <select
                    name="mouja" 
                    id="mouja"
                    {...register('mouja',{required:true})}

                    >
                        <option value="" >Mouja</option>
                        {selectedTehsil &&
                            (tripuraData?.[selectedDistrict]?.[selectedSubdivision]?.[selectedRevenueCircle]?.[selectedTehsil] || [])?.map((mouja)=>(
                                <option
                                    key={mouja}
                                    value={mouja}
                                >
                                    {mouja}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className='bg-richblue-100 flex flex-col items-center ml-10  p-10 mt-10'>
             <div className=''>
                <label htmlFor="inputType" className="text-white font-semibold p-2">
                    Search By:
                </label>

                <select
                    id="inputType"
                    {...register("inputType", { required: true })}
                >
                    <option value="">Search By</option>

                    {searchby.map((element) => (
                        <option
                            key={element.id}
                            value={element.name}
                        >
                            {element.name}
                        </option>
                    ))}
                </select>
            </div>

                <div className='p-5 flex flex-col  items-center'>
                    <label htmlFor="inputText" className='font-bold text-white'>Enter Detail </label>
                    <input
                        type="text"
                        id="inputText"
                        placeholder="Enter Details"
                        {...register("inputText", { required: true })}
                        className='py-1 mt-2 rounded-md px-4'
                    />

                </div>
            </div>
            <div className='bg-blue-600 text-white text-black font-bold text-md w-fit py-1 px-4 ml-10 mt-10 rounded-md'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Khatian_search