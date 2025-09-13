import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import CustomImage from "./CustomImage";
import NavabarDropdown from "./Dropdowns/NavabarDropdown";
import SearchBar from "./SearchBar.comonent";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row px-[10%] py-6 w-full justify-between items-center  border-b border">
      <div className="flex">
        <Link to="/">
          <span className="text-2xl text-indigo italic cursor-pointer font-bold font-arial">
            BookStore
          </span>
        </Link>
      </div>
      <div className="flex gap-x-6 pl-28">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm  ${
              isActive
                ? "text-indigo font-bold hover:underline"
                : "hover:text-indigo hover:underline"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `text-sm  ${
              isActive
                ? "text-indigo font-bold hover:underline"
                : "hover:text-indigo hover:underline"
            }`
          }
        >
          {" "}
          Books
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-sm  ${
              isActive
                ? "text-indigo font-bold hover:underline"
                : "hover:text-indigo hover:underline"
            }`
          }
        >
          Contact{" "}
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `text-sm  ${
              isActive
                ? "text-indigo font-bold hover:underline"
                : "hover:text-indigo hover:underline"
            }`
          }
        >
          Admin{" "}
        </NavLink>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <SearchBar inputChange={() => {}}/>
        <NavabarDropdown
          onclick={() => navigate("/profile")}
          onLogout={() => {
            navigate("/");
            localStorage.removeItem("token");
            window.location.reload();
          }}
        />
        <div className="flex p-2 rounded-full cursor-pointer hover:bg-white ">
          <div className="w-5 h-5">
            <Link to="/cart">
              <CustomImage name="cartIcon" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
