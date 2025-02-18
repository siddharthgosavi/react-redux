import React from "react";
import { useSelector } from "react-redux";
import RowItem from "./RowItem";

function Total() {
  const totalExpense = useSelector((store) => store.EXPENSE.totalExpense);
  const income = useSelector((store) => store.EXPENSE.income);
  return (
    <div className="flex mt-6 text-lg font-semibold w-full md:w-[700px] mx-auto flex-col gap-2 bg-black/15 rounded-lg">
      <RowItem hover={false} name={"Total"} price={totalExpense} />
      <RowItem
        hover={false}
        name={"Remaining Money"}
        price={income - totalExpense}
      />
    </div>
  );
}

export default Total;
