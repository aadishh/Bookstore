import React, { useEffect, useRef, useState } from "react";
import CustomInputFeild from "../CustomInputFeild";
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";
import DropdownSingleSelect from "../Dropdowns/DropdownSingleSelect";
import { Countries } from "../../helper/helper";
import { getProfile, profileBuild } from "../../services/service";
import { useGlobalContext } from "../../context/GlobalContext";
import { useAuth } from "../../context/AuthContext";

const ProfilePage = () => {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    profilePicture: "",
  });

  const [statelist, setStateList] = useState([]);
  const { updateCustomToast } = useGlobalContext();
  const [ishovered, setIsHovered] = useState(false);
  const { userData } = useAuth();
  const fileInputRef = useRef(null);
  const countryList = Countries.map((item) => {
    return item.name;
  });

  const handleCountryChange = () => {
    const selectedCountry = Countries.find(
      (item) => item.name === data.country
    );

    const stateList = selectedCountry?.states || [];

    setStateList(stateList);
  };

  useEffect(() => {
    handleCountryChange();
  }, [data]);

  const handleSave = (username) => {
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      pinCode: data.pincode,
      state: data.state,
      country: data.country,
      city: data.city,
      phoneNumber: data.phoneNumber,
      profilePicture: data.profilePicture,
    };
    if (userData !== null) {
      profileBuild(username, payload).then((res) => {
        if (res.statusCode <= 201) {
          updateCustomToast("SUCCESS", "Profile updated Successfully");
          window.location.reload();
        } else {
          updateCustomToast("ERROR", "Not able to update details");
        }
      });
    }
  };

  useEffect(() => {
    getProfile(userData).then((res) => {
      if (res.statusCode <= 201) {
        setData({
          firstName: res?.data?.firstName ?? "",
          lastName: res?.data?.lastName ?? "",
          email: res?.data?.email ?? "",
          address: res?.data?.profile?.address ?? "",
          phoneNumber: res?.data?.profile?.phoneNumber ?? "",
          city: res?.data?.profile?.city ?? "",
          state: res?.data?.profile?.state ?? "",
          country: res?.data?.profile?.country ?? "",
          pincode: res?.data?.profile?.pinCode ?? "",
          profilePicture: res?.data?.profilePicture ?? "",
        });
      }
    });
  }, [userData]);

  const handleUploadClick = () => {
    fileInputRef.current.click(); // This opens the file dialog
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setData({ ...data, profilePicture: file});
      console.log("Selected file:", file);
      // Handle the file upload logic here (e.g., upload to server)
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full items-start ">
        <div className="w-full ">
          <img
            src={`/images/banner.jpg`}
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full ">
        <div
          className={`flex items-center justify-center rounded-full w-[150px] h-[150px] absolute top-[-50px] ${
            ishovered ? "bg-slate-200" : "bg-white"
          }`}
        >
          <div
            className="h-[50%] w-[50%] "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {ishovered ? (
              <button className="cursor-pointer" onClick={handleUploadClick}>
                <CustomImage name="uploadIcon" />
              </button>
            ) : (
              <CustomImage name="userIcon" />
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-start mt-[10%] mb-[4%] mx-[10%]">
        <div className="w-full grid grid-cols-2 gap-5">
          <CustomInputFeild
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            isEdit={true}
          />
          <CustomInputFeild
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
            isEdit={true}
          />
          <CustomInputFeild
            type="email"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            isEdit={true}
          />
          {/* <CustomInputFeild
            type="password"
            placeholder="Enter your password"
            name="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            isEdit={true}
          /> */}
          <CustomInputFeild
            type="text"
            placeholder="Enter your Address"
            name="address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            isEdit={true}
          />
          <CustomInputFeild
            type="number"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            isEdit={true}
          />
          <CustomInputFeild
            type="text"
            placeholder="Enter your city"
            name="phoneNumber"
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
            isEdit={true}
          />
          <DropdownSingleSelect
            data={countryList}
            value={data.country}
            placeHolder="Select your country"
            onClick={(item) => {
              setData({ ...data, country: item });
            }}
            handleChange={handleCountryChange}
            isEdit={true}
          />
          <DropdownSingleSelect
            data={statelist}
            value={data.state}
            placeHolder="Select your state"
            onClick={(item) => setData({ ...data, state: item })}
            isEdit={true}
          />
          <CustomInputFeild
            type="number"
            placeholder="Enter your pincode"
            name="pincode"
            value={data.pincode}
            onChange={(e) => setData({ ...data, pincode: e.target.value })}
            isEdit={true}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 items-end mb-[4%] mx-[10%]">
        <CustomButton
          title="Save"
          backgroundColor="bg-indigo"
          PaddingX="px-10"
          PaddingY="py-2"
          textColor="text-white"
          myOnClick={() => handleSave(userData)}
          borderClass="border-indigo"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
