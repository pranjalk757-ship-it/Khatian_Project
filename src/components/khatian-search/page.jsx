import React, { useState } from "react";
import { useForm } from "react-hook-form";
import tripuraData from "../../Locationdata";
import CitizenDetails from "./citizen-details/citizen";
import toast from "react-hot-toast";
import RevenueDetails from "./revenue-details/card";
import LocationCard from "./location-details/LocationCard";
import KhatianVerification from "./Khatian-verification/KhatianVerificationCard";

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
  const [searchBy, setSearchBy] = useState();
  const [searchByValue, setSearchByValue] = useState();
  const [verifiedKhatian, setVarifiedKhatian] = useState();
  const selectedDistrict = watch("district");
  const selectedSubdivision = watch("subdivision");
  const selectedRevenueCircle = watch("revenueCircle");
  const selectedTehsil = watch("tehsil");
  const selectedInput = watch("inputType");

  const verifyHandler = async () => {
    var searchkey = "";
    if (searchBy === "Khatian No.") {
      searchkey = "khatian";
    }
    if (searchBy === "Plot No.") {
      searchkey = "plot";
    }
    if (searchBy === "Owner Name") {
      searchkey = "owner";
    }
    const postData = {
      search_key: searchkey,
      search_value: searchByValue,
      lgd_village_code: "922855",
    };
    const response = await fetch(
      "http://localhost:8080/khatian_services/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      },
    );
    const data = await response.json();
    console.log("khatian Verify api response : ");
    console.log(data);
    if (data.success) {
      setIsVerified(true);
      setVarifiedKhatian(data.data.khatianNo);
      toast.success("Khatian Verified Successfully");
    } else {
      setIsVerified(false);
      toast.error("Khatian is Not Verified");
    }
  };
  const handleReset = () => {
    setReset(false);
    setShowSearch(false);
    setShowReveneuDetails(false);
    setDistrict("");
    setMouja("");
    setRevenueCircle("");
    setSubDivision("");
    setTehsil("");
  };
  const saveHandler = () => {
    if (!isVerified) {
      return toast.error("Khatian is Not Verified");
    }
    setShowReveneuDetails(true);
  };

  const handleSearchBy = (e) => {
    var newValue = e.target.value;
    setSearchBy(newValue);
  };
  const handleSearchByValue = (e) => {
    const newValue = e.target.value;
    setSearchByValue(newValue);
  };
  const searchByOptions = [
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
      name: "Owner Name",
      placevalue: "Search by Name",
    },
  ];
  const submitHandler = (data) => {
    // console.log("Ye raha data", data);
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <CitizenDetails />
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <LocationCard
          register={register}
          tripuraData={tripuraData}
          selectedDistrict={selectedDistrict}
          selectedSubdivision={selectedSubdivision}
          selectedRevenueCircle={selectedRevenueCircle}
          selectedTehsil={selectedTehsil}
          reset={reset}
          setReset={setReset}
          setShowSearch={setShowSearch}
          handleReset={handleReset}
        />
        {showSearch && (
          <KhatianVerification
            register={register}
            handleSearchBy={handleSearchBy}
            searchByOptions={searchByOptions}
            searchBy={searchBy}
            handleSearchByValue={handleSearchByValue}
            verifyHandler={verifyHandler}
            saveHandler={saveHandler}
          />
        )}
      </form>
      {showReveneuDetails && <RevenueDetails khatianNumber={verifiedKhatian} />}
    </div>
  );
}

export default Khatian_search;
