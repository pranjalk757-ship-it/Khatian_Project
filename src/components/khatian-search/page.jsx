
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import tripuraData from '../../data'
import CitizenDetails from './citizen-details/page';
import toast from 'react-hot-toast';
function Khatian_search() {
    const {register,setValue,getValues,watch,formState:{errors},handleSubmit} = useForm();
    const [district,setDistrict] = useState("");
    const [subDivision,setSubDivision] = useState("");
    const [revenueCircle,setRevenueCircle] = useState("");
    const [tehsil,setTehsil] = useState("");
    const [mouja,setMouja] = useState("");
    const [showSearch,setShowSearch] = useState(false);
    const [showKhatianDetails,setShowKhatianDetails] = useState(false);
    const selectedDistrict = watch("district")
    const selectedSubdivision = watch("subdivision")
    const selectedRevenueCircle = watch("revenueCircle")
    const selectedTehsil = watch("tehsil");
    const selectedInput = watch("inputType")
    const verifyHandler = ()=>{
        toast.success("Khatian Verified Successfully")
    }
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

>>>>>>> 787255b (Updated khatian search and services page)
  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <CitizenDetails />
      </div>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="border border-blue-100 rounded-t">
          <div className="text-xl font-bold bg-steal-blue px-5 py-2 text-white">
            Location Details
          </div>
          <div className="grid grid-cols-3 gap-y-2 p-4">
            <div className="grid grid-cols-2 gap-5">
              <label
                htmlFor="district"
                className="justify-self-end font-semibold p-2"
              >
                District
              </label>
              <select
                name="district"
                id="district"
                className="border-b focus:outline-none rounded border-[1px]"
                {...register("district", { required: true })}
              >
                <option value="">--select--</option>
                {Object.keys(tripuraData).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <label
                htmlFor="district"
                className="justify-self-end font-semibold p-2"
              >
                Sub Division
              </label>
              <select
                name="subdivision"
                className="border-b focus:outline-none rounded border-[1px]"
                id="subdivision"
                {...register("subdivision", { required: true })}
              >
                <option value="">--select--</option>
                {selectedDistrict &&
                  Object.keys(tripuraData?.[selectedDistrict] || [])?.map(
                    (subdivision) => (
                      <option key={subdivision} value={subdivision}>
                        {subdivision}
                      </option>
                    ),
                  )}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <label
                htmlFor="district"
                className="justify-self-end font-semibold p-2"
              >
                Revenue Circle
              </label>
              <select
                name="revenueCircle"
                className="border-b focus:outline-none rounded border-[1px]"
                id="revenueCircle"
                {...register("revenueCircle", { required: true })}
              >
                <option value="">--select--</option>
                {selectedSubdivision &&
                  Object.keys(
                    tripuraData?.[selectedDistrict]?.[selectedSubdivision] ||
                      [],
                  )?.map((revenueCircle) => (
                    <option key={revenueCircle} value={revenueCircle}>
                      {revenueCircle}
                    </option>
                  ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <label
                htmlFor="district"
                className="justify-self-end font-semibold p-2"
              >
                Revenue Tehsil
              </label>
              <select
                name="tehsil"
                className="border-b focus:outline-none rounded border-[1px]"
                id="tehsil"
                {...register("tehsil", { required: true })}
              >
                <option value="">--select--</option>
                {selectedRevenueCircle &&
                  Object.keys(
                    tripuraData?.[selectedDistrict]?.[selectedSubdivision]?.[
                      selectedRevenueCircle
                    ] || [],
                  )?.map((tehsil) => (
                    <option key={tehsil} value={tehsil}>
                      {tehsil}
                    </option>
                  ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <label
                htmlFor="district"
                className="justify-self-end font-semibold p-2"
              >
                Revenue Mouja
              </label>
              <select
                name="mouja"
                id="mouja"
                className="border-b focus:outline-none rounded border-[1px]"
                {...register("mouja", { required: true })}
              >
                <option value="">--select--</option>
                {selectedTehsil &&
                  (
                    tripuraData?.[selectedDistrict]?.[selectedSubdivision]?.[
                      selectedRevenueCircle
                    ]?.[selectedTehsil] || []
                  )?.map((mouja) => (
                    <option key={mouja} value={mouja}>
                      {mouja}
                    </option>
                  ))}
              </select>
            </div>
            <div className="justify-self-center">
                <button className="bg-steal-blue px-5 py-2 rounded flex items-center active:scale-95 justify-center text-white font-bold">Go</button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="border border-blue-100 rounded-t">
          <div className="text-xl font-bold bg-steal-blue px-5 py-2 text-white">
            ROR / Khatian   Verification
          </div>
          <div className="flex p-2">
            <div className="flex items-center p-2 w-2/5 flex-col">
              <label
                htmlFor="inputType"
                className="bg-pure-greys-25 font-semibold w-full flex justify-center"
              >
                Search By
              </label>

              <div className="w-full">
                <select
                  id="inputType"
                  className="w-full border p-2 border-blue-25 focus:outline-none"
                  {...register("inputType", { required: true })}
                >
                  <option value="" className="w-full">
                    Search By
                  </option>

                  {searchby.map((element) => (
                    <option
                      className="bg-white"
                      key={element.id}
                      value={element.name}
                    >
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col p-2 items-center w-2/5 justify-center">
              <label
                htmlFor="inputText"
                className="bg-pure-greys-25 font-semibold w-full flex justify-center"
              >
                Enter Detail{" "}
              </label>
              <input
                type="text"
                id="inputText"
                placeholder="Enter Details"
                {...register("inputText", { required: true })}
                className="p-2 border border-blue-25 mx-2 w-full focus:outline-none"
              />
            </div>
            <div className="w-1/5 flex">
              <div className="w-1/2 justify-center items-center flex">
                <button className="bg-steal-blue px-4 py-1 text-white cursor-pointer active:scale-95 rounded">
                  Verify
                </button>
              </div>
              <div className="w-1/2 justify-center items-center flex">
                <button className="bg-ufo-green px-4 py-1 text-white cursor-pointer active:scale-95 rounded">
                  Save
                </button>
              </div>
=======
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='mt-10 bg-steal-blue px-6 rounded-t-[4px] py-3 text-white font-bold text-xl'>Requesting   ROR / Khatian   Location</div>
            <div className='grid grid-cols-3 bg-white border border-steal-blue  py-10 px-10 gap-y-10'>
                <div className=''>
                    <label htmlFor="district" className='text-richblack-900 text-sm  font-semibold p-2'>District:</label>
                    <select
                    name="district" 
                    id="district"
                    className='bg-richblack-25 px-4 py-2 rounded-md text-richblack-300'
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
                    <label htmlFor="subdivision" className='text-richblack-900 text-sm font-semibold p-2'>Sub Division:</label>
                    <select
                    name="subdivision" 
                    id="subdivision"
                    className='bg-richblack-25 px-4 py-2 rounded-md text-richblack-300'
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
                    <label htmlFor="revenueCircle" className='text-richblack-900 text-sm font-semibold p-2'>Revenue Circle:</label>
                    <select
                    name="revenueCircle" 
                    id="revenueCircle"
                    className='bg-richblack-25 px-4 py-2 rounded-md text-richblack-300'
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
                    <label htmlFor="tehsil" className='text-richblack-900 text-sm font-semibold p-2'>Tehsil:</label>
                    <select
                    name="tehsil" 
                    id="tehsil"
                    className='bg-richblack-25 px-4 py-2 rounded-md text-richblack-300'
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
                    <label htmlFor="mouja" className='text-richblack-900 text-sm font-semibold p-2'>Mouja:</label>
                    <select
                    name="mouja" 
                    id="mouja"
                    className='bg-richblack-25 px-4 py-2 rounded-md text-richblack-300'
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
                <div 
                onClick={()=>setShowSearch(true)}
                className='bg-steal-blue w-fit px-4 flex flex-row justify-center items-center rounded-md font-bold text-white'
                >GO</div>
            </div>
            {
                showSearch && 
                <div>
                    <div className='mt-10 bg-steal-blue px-6 rounded-t-[4px] py-3 text-white font-bold text-xl'>Requesting   ROR / Khatian   Location</div>
                    <div className='bg-white border border-steal-blue grid grid-cols-5 pt-5 pb-5'>
                        
                    <div className='flex flex-col items-center justify-between gap-y-5 border-r-richblack-200 border pb-2'>
                        <label htmlFor="inputType" className="text-center font-semibold bg-richblack-600 w-full text-white">
                            Search By:
                        </label>

                        <select
                            id="inputType"
                            className='w-fit bg-richblack-25 py-2 px-4 rounded-md'
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

                    <div className='flex flex-col  items-center gap-y-5 border-r-richblack-200 border pb-2'>
                        <label htmlFor="inputText" className="text-center font-semibold bg-richblack-600 w-full text-white">Khatian Number</label>
                        <input
                            type="text"
                            id="inputText"
                            placeholder="100, 6/5 , 100/5 etc..."
                            {...register("inputText", { required: true })}
                            className='w-fit bg-richblack-25 py-2 px-4 rounded-md'
                        />

                    </div>

                    <div className='flex flex-col   items-center gap-y-5 border-r-richblack-200 border pb-2'>
                        <label htmlFor="agree" className="text-center font-semibold bg-richblack-600 w-full text-white">Khatian Copy</label>
                        <input
                            type="checkbox"
                            id="agree"
                            className='mt-5'
                            {...register("agree")}
                        />

                    </div>

                    <div className='flex flex-col items-center justify-between gap-y-5 border-r-richblack-200 border pb-2'>
                        <div className="text-center font-semibold bg-richblack-600 w-full text-white">Verify Khatian</div>
                        <button 
                            onClick={verifyHandler}
                            className='bg-ufo-green px-4 py-2 text-sm rounded-md text-white font-bold'
                        >
                            Verify
                        </button>
                    </div>

                    <div className='flex flex-col items-center justify-between gap-y-5 border-r-richblack-200 border pb-2'>
                        <div className="text-center font-semibold bg-richblack-600 w-full text-white">Save</div>
                        <div
                            onClick={()=>setShowKhatianDetails(true)}
                            className='bg-neon-cyan px-4 py-2 text-sm rounded-md text-white font-bold'
                        >
                            Save
                        </div>
                    </div>
                    </div>

                </div>
            }
            <div className='bg-caribbeangreen-200 text-white font-bold text-md w-fit py-1 px-4 ml-10 mt-10 rounded-md'>
                <button type='submit'>Submit</button>
>>>>>>> 787255b (Updated khatian search and services page)
            </div>
          </div>
        </div>
        {/* <div className="bg-caribbeangreen-200 text-white font-bold text-md w-fit py-1 px-4 ml-10 mt-10 rounded-md">
          <button type="submit">Submit</button>
        </div> */}
      </form>
      <div>
        <RrevenueDetails/>
      </div>
    </div>
  );
}

export default Khatian_search;
