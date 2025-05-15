import React from "react";
import CustomInputFeild from "../CustomInputFeild";
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";
import DropdownSingleSelect from "../Dropdowns/DropdownSingleSelect";

const ProfilePage = () => {
  const [editState, setEditState] = React.useState(false);
  const [userData, setUserData] = React.useState({
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

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full items-start ">
        <div className="w-full ">
          <img src={`/images/banner.jpg`} className="w-full object-cover"/>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full ">
        <div className="bg-white flex items-center justify-center rounded-full w-[150px] h-[150px] absolute top-[-50px]">
          <div className="h-[50%] w-[50%] ">
            <CustomImage name="userIcon" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-start mt-[10%] mb-[4%] mx-[10%]">
        <div className="w-full grid grid-cols-2 gap-5">
          <CustomInputFeild
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={userData.firstName}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
            disabled={!editState}
          />
          <CustomInputFeild
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={userData.lastName}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
            disabled={!editState}
          />
          <CustomInputFeild
            type="email"
            placeholder="Enter your email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            disabled={!editState}
          />
          <CustomInputFeild
            type="password"
            placeholder="Enter your password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            disabled={!editState}
          />
          <CustomInputFeild
            type="text"
            placeholder="Enter your Address"
            name="address"
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
            disabled={!editState}
          />
          <CustomInputFeild
            type="number"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
            disabled={!editState}
          />
          <CustomInputFeild
            type="text"
            placeholder="Enter your city"
            name="phoneNumber"
            value={userData.city}
            onChange={(e) =>
              setUserData({ ...userData, city: e.target.value })
            }
            disabled={!editState}
          />
          <DropdownSingleSelect
            data={["India", "USA", "UK", "Canada"]}
            value={userData.country}
            placeHolder="Select your country"
            onClick={(item) => setUserData({ ...userData, country: item})}
            disabled={!editState}
          />
          <DropdownSingleSelect
            data={["India", "USA", "UK", "Canada"]}
            value={userData.state}
            placeHolder="Select your state"
            onClick={(item) => setUserData({ ...userData, state: item})}
            disabled={!editState}
          />
          <CustomInputFeild
            type="number"
            placeholder="Enter your pincode"
            name="pincode"
            value={userData.pincode}
            onChange={(e) =>
              setUserData({ ...userData, pincode: e.target.value })
            }
            disabled={!editState}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full my-[2%]">
        <CustomButton
          title={editState ? "Save" : "Edit"}
          backgroundColor="bg-indigo"
          PaddingX="px-20"
          PaddingY="py-5"
          textColor="text-white"
          myOnClick={() => setEditState((prev) => !prev)}
          borderClass="border-indigo"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
