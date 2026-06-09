import React, { useState } from "react";
import { useForm } from "react-hook-form";
import tripuraData from "../../Locationdata";
import CitizenDetails from "./citizen-details/citizen";
import toast from "react-hot-toast";
import RevenueDetails from "./revenue-details/card";
function Khatian_search() {
  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [district, setDistrict] = useState("");
  const [subDivision, setSubDivision] = useState("");
  const [revenueCircle, setRevenueCircle] = useState("");
  const [tehsil, setTehsil] = useState("");
  const [mouja, setMouja] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showReveneuDetails, setShowReveneuDetails] = useState(false);
  const [reset, setReset] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const selectedDistrict = watch("district");
  const selectedSubdivision = watch("subdivision");
  const selectedRevenueCircle = watch("revenueCircle");
  const selectedTehsil = watch("tehsil");
  const selectedInput = watch("inputType");

  const verifyHandler = () => {
    setIsVerified(true);
    toast.success("Khatian Verified Successfully");
  };
  const saveHandler = () => {
    if (!isVerified) {
      return toast.error("Khatian is Not Verified");
    }
    setShowReveneuDetails(true);
  };
  const searchby = [
    {
      id: 1,
      name: "Khatian No.",
      placevalue: "Search by Khatian Number",
    },
    {
      id: 2,
      name: "Plot No.",
      placevalue: "Search by Plot Number",
    },
    {
      id: 3,
      name: "Name",
      placevalue: "Search by Name",
    },
  ];
  const submitHandler = (data) => {
    console.log("Ye raha data", data);
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <CitizenDetails />
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="bg-steal-blue px-6 rounded-t-[4px] py-3 text-white font-bold text-xl">
          Requesting ROR / Khatian Location
        </div>
        <div className="grid grid-cols-3 bg-white border border-steal-blue  py-10 px-10 gap-y-10">
          <div className="grid grid-cols-2">
            <label
              htmlFor="district"
              className="text-richblack-900 text-sm justify-self-end font-semibold p-2"
            >
              District:
            </label>
            <select
              name="district"
              id="district"
              className="bg-richblack-25 px-4 py-2 rounded-md text-richblack-300"
              {...register("district", { required: true })}
            >
              <option value="">District</option>
              {Object.keys(tripuraData).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2">
            <label
              htmlFor="subdivision"
              className="text-richblack-900 text-sm font-semibold p-2 justify-self-end"
            >
              Sub Division:
            </label>
            <select
              name="subdivision"
              id="subdivision"
              className="bg-richblack-25 px-4 py-2 rounded-md text-richblack-300"
              {...register("subdivision", { required: true })}
            >
              <option value="">Sub Division</option>
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
          <div className="grid grid-cols-2">
            <label
              htmlFor="revenueCircle"
              className="text-richblack-900 text-sm font-semibold p-2 justify-self-end"
            >
              Revenue Circle:
            </label>
            <select
              name="revenueCircle"
              id="revenueCircle"
              className="bg-richblack-25 px-4 py-2 rounded-md text-richblack-300"
              {...register("revenueCircle", { required: true })}
            >
              <option value="">Revenue Circle</option>
              {selectedSubdivision &&
                Object.keys(
                  tripuraData?.[selectedDistrict]?.[selectedSubdivision] || [],
                )?.map((revenueCircle) => (
                  <option key={revenueCircle} value={revenueCircle}>
                    {revenueCircle}
                  </option>
                ))}
            </select>
          </div>
          <div className="grid grid-cols-2">
            <label
              htmlFor="tehsil"
              className="text-richblack-900 text-sm font-semibold p-2 justify-self-end"
            >
              Tehsil:
            </label>
            <select
              name="tehsil"
              id="tehsil"
              className="bg-richblack-25 px-4 py-2 rounded-md text-richblack-300"
              {...register("tehsil", { required: true })}
            >
              <option value="">Tehsil</option>
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
          <div className="grid grid-cols-2">
            <label
              htmlFor="mouja"
              className="text-richblack-900 text-sm font-semibold p-2 justify-self-end"
            >
              Mouja:
            </label>
            <select
              name="mouja"
              id="mouja"
              className="bg-richblack-25 px-4 py-2 rounded-md text-richblack-300"
              {...register("mouja", { required: true })}
            >
              <option value="">Mouja</option>
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
          {!reset && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setReset(true);
                  setShowSearch(true);
                }}
                className="bg-steal-blue  w-fit px-4 flex flex-row justify-center items-center rounded-md font-bold text-white active:scale-95"
              >
                GO
              </button>
            </div>
          )}
          {reset && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setReset(false);
                  setShowSearch(false);
                  setShowReveneuDetails(false);
                }}
                className="bg-steal-blue  w-fit px-4 flex flex-row justify-center items-center rounded-md font-bold text-white active:scale-95"
              >
                RESET
              </button>
            </div>
          )}
        </div>
        {showSearch && (
          <div>
            <div className="mt-10 bg-steal-blue px-6 rounded-t-[4px] py-3 text-white font-bold text-xl">
              Requesting ROR / Khatian Location
            </div>
            <div className="bg-white border border-steal-blue grid grid-cols-6 pt-5 pb-5">
              <div className="flex flex-col items-center justify-between gap-y-2 border-r-richblack-200 border pb-2 col-span-2">
                <label
                  htmlFor="inputType"
                  className="text-center font-semibold bg-richblack-600 w-full text-white"
                >
                  Search By:
                </label>

                <select
                  id="inputType"
                  className="w-fit bg-richblack-25 py-2 m-2 px-4 rounded-md"
                  {...register("inputType", { required: true })}
                >
                  <option value="">Search By</option>

                  {searchby.map((element) => (
                    <option key={element.id} value={element.name}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col  items-center gap-y-2 border-r-richblack-200 border pb-2 col-span-2">
                <label
                  htmlFor="inputText"
                  className="text-center font-semibold bg-richblack-600 w-full text-white"
                >
                  Khatian Number
                </label>
                <input
                  type="text"
                  id="inputText"
                  placeholder="100, 6/5 , 100/5 etc..."
                  {...register("inputText", { required: true })}
                  className="w-fit bg-richblack-25 py-2 m-2 px-4 rounded-md"
                />
              </div>

              <div className="flex flex-col items-center justify-between gap-y-2 border-r-richblack-200 border pb-2">
                <div className="text-center font-semibold bg-richblack-600 w-full text-white">
                  Verify Khatian
                </div>
                <button
                  onClick={verifyHandler}
                  className="bg-ufo-green px-4 py-2 text-sm rounded-md m-2 text-white font-bold active:scale-95"
                >
                  Verify
                </button>
              </div>

              <div className="flex flex-col items-center justify-between gap-y-2 border-r-richblack-200 border pb-2">
                <div className="text-center font-semibold bg-richblack-600 w-full text-white">
                  Save
                </div>
                <button
                  onClick={saveHandler}
                  className="bg-neon-cyan px-4 py-2 text-sm rounded-md m-2 text-white font-bold active:scale-95"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <div className="bg-caribbeangreen-200 text-white font-bold text-md w-fit py-1 px-4 ml-10 mt-10 rounded-md">
          <button type="submit">Submit</button>
        </div> */}
      </form>
      {showReveneuDetails && <RevenueDetails />}
    </div>
  );
}

export default Khatian_search;
