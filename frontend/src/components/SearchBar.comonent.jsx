import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomImage from "./CustomImage";

const SearchBar = ({
    inputChange,
}) => {
  const [openBar, setOpenBar] = useState(false);
  
  return (
    <div className="flex ">
      <div className="flex justify-between items-center bg-white rounded-full px-3 py-2  hover:cursor-pointer">
        {openBar && (
          <div>
            <input type="text" placeholder="Search for books" className="outline-none px-2" onChange={inputChange}/>
          </div>
        )}

        <div className="w-5 h-5" onClick={() => setOpenBar((prev) => (!prev))}>
          <CustomImage name="searchIcon" />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
    inputChange : PropTypes.func.isRequired
};

export default SearchBar;