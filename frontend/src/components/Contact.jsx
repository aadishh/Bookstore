import React from "react";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";

const Contact = (props) => {
  return (
    <div className="my-[4%] mx-[10%]">
      <div className="flex flex-col items-center gap-10">
        <span className="text-7xl">Contact</span>
        <div className="w-[70%] text-santas-gray">
          Get in Touch for Books and AudioBooks! 📚
        </div>
        <div className="flex flex-row items-start justify-between w-full gap-6 mt-24 mb-10 ">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-1 text-abbey">
              <div className="w-5 h-5">
                <CustomImage name="Imail" />
              </div>
              <span className="font-bold capitalize">Mail Me</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-sm text-santas-gray">
              <div className="w-5 h-5"></div>
              <span>adishbhat234@gmail.com</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-sm text-santas-gray">
              <div className="w-5 h-5"></div>
              <span>aadishbhat4@gmail.com</span>
            </div>
          </div>

          {/* Send Message  */}
          <div className="flex flex-col gap-3 px-5 font-garamond">
            <div className="flex flex-col text-start gap-8">
              <span className="text-4xl font-semibold"> Send a Message</span>
              <span className="flex text-santas-gray w-[90%]">
                Looking for a specific book or need more details about our
                collection? Whether it’s bulk orders, availability, pricing, or
                custom recommendations, we’re here to help!
              </span>
            </div>
            <div className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Full Name"
                onChange={() => {}}
                className=" px-3 text-black py-4 border border-gray-300 focus:outline-1 focus:outline-gray-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                onChange={() => {}}
                className=" px-3 text-black py-4 border border-gray-300 focus:outline-1 focus:outline-gray-300"
              />
              <input
                type="text"
                placeholder="Subject"
                onChange={() => {}}
                className=" px-3 text-black py-4 border border-gray-300 focus:outline-1 focus:outline-gray-300"
              />
              <input
                type="text"
                placeholder="Your Message"
                onChange={() => {}}
                className=" px-3 text-black py-4 border border-gray-300 focus:outline-1 focus:outline-gray-300"
              />
            </div>
            <div className="mt-5">
              <CustomButton
                title="Send Message"
                backgroundColor="bg-indigo"
                textColor="text-white"
                borderClass={`border-indigo`}
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-5 px-5">
            <div className="h-5 w-5">
              <CustomImage name="indigoInsta" />
            </div>
            <div className="h-5 w-5">
              <CustomImage name="indigotwitter" />
            </div>
            <div className="h-5 w-5">
              <CustomImage name="indigoFB" />
            </div>
            <div className="h-5 w-5">
              <CustomImage name="indigomedium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
