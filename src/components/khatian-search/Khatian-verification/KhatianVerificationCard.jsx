import React from "react";

const KhatianVerification = ({
  register,
  handleSearchBy,
  searchByOptions,
  searchBy,
  handleSearchByValue,
  verifyHandler,
  saveHandler,
}) => {
  return (
    <div>
      <div className="mt-10 bg-steal-blue px-6 rounded-t-[4px] py-3 text-white font-bold text-xl">
        ROR / Khatian Verification
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
            onChange={handleSearchBy} // Moved below register to overwrite it
          >
            <option value="">--select--</option>
            {searchByOptions.map((element) => (
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
            Enter {searchBy}
          </label>
          <input
            type="text"
            id="inputText"
            placeholder="100, 6/5 , 100/5 etc..."
            {...register("inputText", { required: true })}
            onChange={handleSearchByValue}
            className="w-fit bg-richblack-25 py-2 m-2 px-4 rounded-md"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-y-2 border-r-richblack-200 border pb-2">
          <div className="text-center font-semibold bg-richblack-600 w-full text-white">
            Verify {searchBy}
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
  );
};

export default KhatianVerification;
