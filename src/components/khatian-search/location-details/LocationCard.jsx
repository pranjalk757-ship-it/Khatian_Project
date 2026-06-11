import React, { useEffect, useState } from "react";

const LocationCard = ({
  register,
  tripuraData,
  selectedDistrict,
  selectedSubdivision,
  selectedRevenueCircle,
  selectedTehsil,
  reset,
  setReset,
  setShowSearch,
  handleReset,
}) => {
  const [districtList, setDistrictList] = useState([]);
  const [subDivisionList, setSubDivisionList] = useState([]);
  const [circleList, setCircleList] = useState([]);
  const [tehsilList, setTehsilList] = useState([]);
  const [villageList, setVillageList] = useState([]);
  const getLocation = async ({ lgd_name, lgd_code, request_for_value }) => {
    try {
      const postData = { [lgd_name]: lgd_code, request_for: request_for_value };
      // console.log(postData);
      const response = await fetch(
        "http://localhost:8081/jamipariseva/api/location",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        },
      );
      const data = await response.json();
      // console.log(data.data);
      return data.data || [];
    } catch (error) {
      // console.error("API Error : ", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchInitialDistricts = async () => {
      const Newlist = await getLocation({
        lgd_name: "lgd_district_code",
        lgd_code: "",
        request_for_value: "district",
      });
      setDistrictList(Newlist);
    };
    fetchInitialDistricts();
  }, []);

  const handleDistrictChange = async (e) => {
    const selectedDistrictCode = e.target.value;

    if (!selectedDistrictCode) return;

    setSubDivisionList([]);
    setCircleList([]);
    setTehsilList([]);
    setVillageList([]);

    const NewList = await getLocation({
      lgd_name: "lgd_dist_code",
      lgd_code: selectedDistrictCode,
      request_for_value: "subdivision",
    });
    setSubDivisionList(NewList);
    // console.log(NewList);
  };
  const handleSubDivisionChange = async (e) => {
    const selectedSubDivisionCode = e.target.value;
    if (!selectedSubDivisionCode) return;
    setCircleList([]);
    setTehsilList([]);
    setVillageList([]);
    const NewList = await getLocation({
      lgd_name: "lgd_subdiv_code",
      lgd_code: selectedSubDivisionCode,
      request_for_value: "circle",
    });
    setCircleList(NewList);
    // console.log(NewList);
  };
  const handleCircleChange = async (e) => {
    const selectedCircleCode = e.target.value;
    if (!selectedCircleCode) return;
    setTehsilList([]);
    setVillageList([]);

    const NewList = await getLocation({
      lgd_name: "lgd_circle_code",
      lgd_code: selectedCircleCode,
      request_for_value: "tehsil",
    });
    setTehsilList(NewList);
    // console.log(NewList);
  };
  const handleTehsilChange = async (e) => {
    const selectedTehsilCode = e.target.value;
    if (!selectedTehsilCode) return;
    setVillageList([]);
    const NewList = await getLocation({
      lgd_name: "lgd_tehsil_code",
      lgd_code: selectedTehsilCode,
      request_for_value: "village",
    });
    setVillageList(NewList);
    // console.log(NewList);
  };

  return (
    <div>
      <div className="bg-steal-blue px-6 rounded-t-[4px] py-3 text-white font-bold text-xl">
        Location Details
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
            onChange={(e) => {
              handleDistrictChange(e);
            }}
            className="bg-richblack-25 px-4 py-2 rounded-md text-richblack-300"
          >
            {districtList.length > 0 && <option value="">--select--</option>}
            {districtList.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name_eng}
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
            onChange={(e) => {
              handleSubDivisionChange(e);
            }}
          >
            {(subDivisionList.length > 0) && (
              <option value="">--select--</option>
            )}
            {subDivisionList.map((sub) => (
              <option key={sub.code} value={sub.code}>
                {sub.name_eng}
              </option>
            ))}
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
            onChange={(e) => {
              handleCircleChange(e);
            }}
          >
            {circleList.length > 0 && <option value="">--select--</option>}
            {circleList.map((circle) => (
              <option key={circle.code} value={circle.code}>
                {circle.name_eng}
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
            onChange={(e) => {
              handleTehsilChange(e);
            }}
          >
            {tehsilList.length > 0 && <option value="">--select--</option>}
            {tehsilList.map((tehsil) => (
              <option key={tehsil.code} value={tehsil.code}>
                {tehsil.name_eng}
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
          >
            {villageList.length > 0 && <option value="">--select--</option>}
            {villageList.map((village) => (
              <option key={village.code} value={village.code}>
                {village.name_eng}
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
              onClick={handleReset}
              className="bg-steal-blue  w-fit px-4 flex flex-row justify-center items-center rounded-md font-bold text-white active:scale-95"
            >
              RESET
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
