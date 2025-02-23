import React, { useEffect, useState } from "react";
import CustomImage from "../CustomImage";
import { useNavigate } from "react-router-dom";
import Home from "../Home";

const Books = () => {
  const [mybooks, setMyBooks] = useState([]);
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate("/myBook", { state: { book } });
  };

  useEffect(() => {
    fetch("http://localhost:2000/books")
      .then((response) => response.json())
      .then((data) => {
        setMyBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mx-[10%]">
      <div className="flex items-center flex-col justify-center pt-[4%] pb-[10%] gap-8 my-6 border-b border-indigo">
        <div className="text-5xl font-bold ">Books</div>
        <div className="w-[60%]">
          "Books are gateways to knowledge, imagination, and new perspectives. A
          single book can inspire, change a mindset, or spark creativity, making
          reading a lifelong treasure."
        </div>
      </div>
      <div>
        <Home />
      </div>
      <div className="">
        <div className="flex items-start mt-[5%] text-3xl font-semibold">
          More Books
        </div>
        <div className="grid grid-cols-4 gap-2">
          {mybooks?.map((book, index) => (
            <div key={book?.id || index}>
              <div className="relative flex flex-col my-6 bg-white hover:border hover:border-gray-100 shadow-md rounded-lg font-garamond">
                <div
                  className="cursor-pointer"
                  onClick={() => handleBookClick(book)}
                >
                  <CustomImage name="book2" />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-left flex flex-col gap-1 p-4">
                    <span className="pt-2 text-abbey">{book?.type}</span>
                    <span>{book?.name}</span>
                    <span>${book?.price}</span>
                  </div>
                  <div
                    className="absolute bg-gray-200 hover:bg-white hover:cursor-pointer top-0 
                    right-0 mt-2 mr-1 p-2 rounded-full"
                  >
                    <div className="w-5 h-5">
                      {showIcon ? (
                        <div onClick={() => setShowIcon(true)}>
                          <CustomImage name="tickIcon" />
                        </div>
                      ) : (
                        <div>
                          <CustomImage name="cartIcon" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
