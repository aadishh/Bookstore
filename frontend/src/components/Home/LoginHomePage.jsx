import React, { useEffect, useState } from "react";
import HomeAudioBook from "../HomeAudioBook";
import HomeBooks from "../HomeBooks";
import Home from "../Home";
import { getBooks } from "../../services/service";
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";

const LoginHomePage = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="px-[10%]">
      <div>
        <div className="flex flex-row justify-between gap-x-12 pt-[10%]">
          <div className="flex flex-col flex-wrap items-start gap-y-10 max-w-[500px] py-4">
            <span className="text-indigo uppercase text-sm ">New Release</span>
            <span className="text-7xl flex flex-wrap items-start py-10 font-garamond">
              The Sons of the <br /> <span className="text-7xl">Empire</span>{" "}
            </span>
            <span className="text-left py-10">
              Justo habitant at augue ac sed proin consectetur ac urna nisl elit
              nulla facilisis viverra dolor sagittis nisi risus egestas
              adipiscing nibh euismod.
            </span>
            <div className="flex flex-row gap-4">
              <CustomButton
                title="Buy Now"
                backgroundColor="bg-indigo"
                textColor="text-white"
                myOnClick={() => {window.location.href = '/login'}}
                borderClass="border-indigo"
              />
              <CustomButton
                title="Read Sample"
                backgroundColor="bg-white"
                textColor="text-indigo"
                myOnClick={() => {window.location.href = '/login'}}
                hoverclass={`hover:bg-indigo hover:text-white`}
                borderClass={`border-indigo`}
              />
            </div>
          </div>
          <div>
            <CustomImage name="bookMainPage" />
          </div>
        </div>
      </div>
      <div className="my-[20%]">
        <HomeBooks title={"Best Selling Books"} data={books} />
      </div>
      <div>
        <HomeAudioBook />
      </div>
    </div>
  );
};

LoginHomePage.propTypes = {};

export default LoginHomePage;
