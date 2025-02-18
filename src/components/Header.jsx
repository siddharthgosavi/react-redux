import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../lib/store/expense/expense-slice";

const Header = () => {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col w-full md:1/2 mx-auto md:items-start items-center text-center">
        <h1 className="text-4xl font-bold">iSpent</h1>
        <h4 className="text-xl font-semibold">Track you expenses</h4>
      </div>
      <div className="flex mt-6 md:mt-0 w-full h-full md:1/2 justify-end items-center gap-3 ">
        <label className="w-1/4 text-end text-lg">Income</label>
        <input
          required
          onChange={(e) => {
            dispatch(setIncomeAction(e.target.value));
          }}
          value={income}
          type={"number"}
          max={999999}
          min={99}
          placeholder="₹ 1000"
          className="bg-white rounded-full p-2 text-black shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;
