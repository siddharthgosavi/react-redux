import React from "react";
import { useSelector } from "react-redux";
import RowItem from "./RowItem";

const Expenses = () => {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const custome_scroll = ` [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-indigo-500`

  return (
    <div className={`flex mt-4 w-full max-h-[500px] overflow-y-auto md:w-[700px] mx-auto flex-col gap-2 bg-black/15 rounded-lg custom-scroll ${custome_scroll}`}>
      {expenseList &&
        expenseList.map((item, index) => (
          <RowItem key={index} name={item.name} price={item.price} />
        ))}
    </div>
  );
};

export default Expenses;
