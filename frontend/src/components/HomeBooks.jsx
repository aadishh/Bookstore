import React from "react";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const HomeBooks = ({ title, data, isLogin }) => {
  const getbooks = data?.slice(0, 4);
  const navigate = useNavigate();
  const handleBookClick = (book) => {
    {isLogin ? navigate("/myBook", { state: { book } }) : navigate("/login")}
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="font-garamond text-5xl py-[2%]">
        <span>{title}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {getbooks?.map((book, index) => (
          <div key={book?.id || index}>
            <div
              className="flex flex-col my-6 bg-white shadow-md hover:border hover:cursor-pointer 
                        hover:abbey rounded-lg  font-garamond"
              onClick={() => handleBookClick(book)}
            >
              <div className="w-[280px]">
                <CustomImage name="book2" />
              </div>
              <div className="text-left flex flex-col gap-1 p-4">
                <span className="pt-2 text-abbey">{book?.type}</span>
                <span>{book?.name}</span>
                <span>$ {book?.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {isLogin ? (
          <CustomButton
            title="Show More"
            backgroundColor="bg-white"
            textColor="text-indigo"
            hoverclass={`hover:bg-indigo hover:text-white`}
            borderClass={`border-indigo`}
            myOnClick={() => {
              window.location.href = "/books";
            }}
          />
        ) : (
          <CustomButton
            title="Show More"
            backgroundColor="bg-white"
            textColor="text-indigo"
            hoverclass={`hover:bg-indigo hover:text-white`}
            borderClass={`border-indigo`}
            myOnClick={() => {
              window.location.href = "/login";
            }}
          />
        )}
      </div>
    </div>
  );
};

HomeBooks.prototype = {
  title: String,
  data: Array,
  isLogin: Boolean,
};
export default HomeBooks;
