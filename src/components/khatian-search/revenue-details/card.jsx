import React from "react";

const RevenueDetails = () => {
  return (
    <div className="border border-blue-100 rounded-t">
      <h2 className="text-xl font-bold bg-steal-blue px-5 py-2 text-white">
        Revenue Details
      </h2>
      <div className="flex p-2 flex-col justify-center gap-5">
        <div className="flex flex-col">
          <div className="grid grid-cols-5 text-sm text-gray-600 bg-platinum">
            <div className="col-span-1 flex flex-col items-center justify-center font-bold border border-r-richblack-200">
              <h1>Serial Number</h1>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center font-bold border-b border-r border-t border-r-richblack-200">
              <h1>Khatian Number</h1>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center font-bold border-b border-r border-t border-r-richblack-200">
              <h1>Financial Year wise Revenue payable</h1>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center font-bold border-b border-r border-t border-r-richblack-200">
              <h1>Delete</h1>
            </div>
          </div>
          <div className="grid grid-cols-5 text-sm text-gray-600 bg-munsell">
            <div className="col-span-1 flex flex-col items-center justify-center border-l border-b border-r border-richblack-200">
              <div>
                <h1>1</h1>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center border-b border-r border-richblack-200">
              <div>
                <h1>1000</h1>
              </div>
            </div>
            <div className="col-span-2 flex flex-col w-full">
              <div className="grid grid-cols-2 font-bold ">
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  FY
                </h1>
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  Amount (₹)
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  2021-2022
                </h1>
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  1.00
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  2022-2023
                </h1>
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  1.00
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  2023-2024
                </h1>
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  1.00
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  2024-2025
                </h1>
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  1.00
                </h1>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  2025-2026
                </h1>
                <h1 className="flex justify-center border-b border-r border-richblack-200 w-full">
                  1.00
                </h1>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center border-b border-r border-richblack-200">
              <h1 className="w-7 h-7 m-2 cursor-pointer active:scale-95">
                <img src="/delete.png" alt="" />
              </h1>
            </div>
          </div>
        </div>
        <div className="border border-blue-50 p-5">
          <div>
            <div className="font-bold">Total Amount Payable ₹0</div>
          </div>
          <div className="flex gap-5 h-10 items-center my-10">
            <div className="font-bold">Choose Payment Option:</div>
            <select
              name=""
              id=""
              className="border border-blue-50 flex justify-center items-center h-10 px-10 focus:outline-none"
            >
              <option value="">--select--</option>
              <option value="">Net Banking</option>
              <option value="">Credit Card</option>
              <option value="">Debit Card</option>
              <option value="">UPI</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center m-5">
          <button className="bg-ufo-green text-white px-3 py-1 rounded">
            Save & Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueDetails;
