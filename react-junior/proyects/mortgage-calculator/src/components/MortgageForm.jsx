import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";

function MortgageForm() {
  return (
    <div className="p-5 font-principal flex flex-col gap-8 w-full">
      <div>
        <h1 className="text-2xl font-bold mb-2">Mortgage Calculator</h1>
        <p className="text-gray-400 underline decoration-gray-400 underline-offset-4 text-sm">
          Clear All
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <span>Mortgage Amount</span>
          <div className="flex w-full mt-3">
            <div className="bg-blue-sky w-15 h-12 flex justify-center items-center  border-black border border-r-0 rounded-l-md">
              <FaDollarSign />
            </div>
            <input
              type="text"
              className="outline-none appearance-none border border-black w-full pl-5 font-bold rounded-r-md"
            />
          </div>
        </div>

        <div>
          <span>Mortgage Term</span>
          <div className="flex w-full mt-3">
            <input
              type="text"
              className="outline-none appearance-none border border-black w-full pl-5 font-bold rounded-l-md"
            />
            <div className="bg-blue-sky  h-12 flex justify-center items-center  border-black border border-l-0 rounded-r-md">
              <span className="font-bold px-3">years</span>
            </div>
          </div>
        </div>

        <div>
          <span>Interest Rate</span>
          <div className="flex w-full mt-3">
            <input
              type="text"
              className="outline-none appearance-none border border-black w-full pl-5 font-bold rounded-l-md"
            />
            <div className="bg-blue-sky w-15 h-12 flex justify-center items-center  border-black border border-l-0 rounded-r-md">
              <FaPercent />
            </div>
          </div>
        </div>

        <div className="mt-2">
          <span>Mortgage Type</span>
          <div className="flex w-full mt-3">
            <div className="flex flex-col w-full">
              <label className=" mb-2 w-full border border-black p-2 px-5 rounded-lg has-checked:bg-[#FAFAE0] has-checked:border-pickle cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  className="mr-5 w-3 h-3 rounded-full border-white checked:border-[#FAFAE0] border ring-1 ring-gray-500 checked:ring-pickle ring-offset-1 checked:bg-pickle appearance-none"
                />
                <span className="font-bold ">Repayment</span>
              </label>

              <label className="w-full border border-black p-2 px-5 rounded-lg has-checked:bg-[#FAFAE0] has-checked:border-pickle cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  className="mr-5 w-3 h-3 rounded-full border-white checked:border-[#FAFAE0] border ring-1 ring-gray-500 checked:ring-pickle ring-offset-1 checked:bg-pickle appearance-none"
                />
                <span className="font-bold ">Interest Only</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center w-full rounded-full bg-pickle">
        <div className="flex items-center justify-center p-3 cursor-pointer">
          {" "}
          <FaCalculator />
          <span className="ml-2">Calculate</span>
        </div>
      </button>
    </div>
  );
}

export default MortgageForm;
