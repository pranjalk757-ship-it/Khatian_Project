import React from "react";

const RrevenueDetails = () => {
  return (
    <div className="border border-blue-100 rounded-t">
      <h2 className="text-xl font-bold bg-steal-blue px-5 py-2 text-white">
        Revenue Details
      </h2>

      <div className="m-2 flex flex-col gap-5">
        <div className="grid grid-cols-5 border border-blue-50 gap-x-4 gap-y-2 p-2 text-sm text-gray-600 bg-pure-greys-25">
          <div className="col-span-1 flex justify-center font-bold">
            Serial Number
          </div>
          <div className="col-span-1 flex justify-center font-bold">
            Serial Number
          </div>
          <div className="col-span-2 flex justify-center font-bold">
            Serial Number
          </div>
          <div className="col-span-1 flex justify-center font-bold">
            Serial Number
          </div>
        </div>

        <div className="border border-blue-50 p-5">
          <div>
            <div className="font-bold">Total Amount Payable ₹0</div>
          </div>
          <div className="flex gap-5 h-10 items-center my-10">
            <div className="font-bold">Select payment option:</div>
            <select name="" id="" className="border border-blue-50 flex justify-center items-center h-10 px-10 focus:outline-none">
              <option value="">--select--</option>
              <option value="">Net Banking</option>
              <option value="">Credit Card</option>
              <option value="">Debit Card</option>
              <option value="">UPI</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center m-5">
        <button className="bg-ufo-green text-white px-3 py-1 rounded">
          Save & Make Payment
        </button>
      </div>
    </div>
  );
};

export default RrevenueDetails;
