import React from "react";

const LeftContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold uppercase text-9xl">
        your feet <br /> deserve <br /> the best
      </p>
      <p className="uppercase text-gray-600 font-semibold">
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
        HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
        THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
        SHOES.
      </p>

      <div className="flex gap-10">
        <button className="bg-red-600 text-white px-3 py-1 font-semibold">
          Shop Now
        </button>
        <button className="border border-gray-700 px-3 py-1 text-gray-700 font-semibold">Category</button>
      </div>
      <p className="text-gray-600">Also available on</p>
      <div className="flex gap-5">
        <img className="hover:cursor-pointer" src="/images/amazon.png" alt="amazon-logo" />
        <img className="hover:cursor-pointer" src="/images/flipkart.png" alt="flipkart-logo" />
      </div>
    </div>
  );
};

export default LeftContent;
