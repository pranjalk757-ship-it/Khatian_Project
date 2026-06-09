import React, { useState } from "react";
import DetailCard from "./detailcard";

const CitizenDetails = () => {
  const [UserData, setUserData] = useState([
    { Name: "Arup Debnath" },
    { "Email ID": ": arupdn0@gmail.com" },
    { Mobile: ": XXXXXX3801" },
    { District: ": Khowai" },
    { "Sub-Division": ": Teliamura" },
    { "BAC/Block/MC/NP/AMC": ": Teliamura" },
    { "VC/GP/Ward": ": Ward No.4" },
    { "Police Station": ": Teliamura" },
    { Pincode: ": 799205" },
  ]);
  return (
    <div className="border border-blue-100 rounded-t">
      <h2 className="text-xl font-bold bg-steal-blue px-5 py-2 text-white">Citizen Details</h2>

      <div className="grid grid-cols-3 gap-x-4 gap-y-2 p-4 text-sm text-gray-600">
        <DetailCard label="Name" value=": Mr. Arup Debnath" />
        <DetailCard label="Email ID" value=": arup@gmail.com" />
        <DetailCard label="Mobile" value=": XXXXXX3801" />

        <DetailCard label="District" value=": Khowai" />
        <DetailCard label="Sub-Division" value=": Teliamura" />
        <DetailCard label="BAC/Block/MC/NP/AMC" value=": Teliamura" />

        <DetailCard label="VC/GP/Ward" value=": Ward No.4" />
        <DetailCard label="Police Station" value=": Teliamura" />
        <DetailCard label="Pincode" value=": 799205" />
      </div>
    </div>
  );
};

export default CitizenDetails;
