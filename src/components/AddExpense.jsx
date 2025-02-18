"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenseAction,
  setTotalAction,
} from "../../lib/store/expense/expense-slice";
import { toast } from "react-toastify";

const AddExpense = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", price: "" });
  const [error, setError] = useState({ name: false, price: false });
  const totalExpense = useSelector((store) => store.EXPENSE.totalExpense);
  const income = useSelector((store) => store.EXPENSE.income);

  const handleAddExpense = () => {
    if (formData.name.length === 0 || formData.price <= 0) {
      toast.error("Name and Price is required!");
      setError({ ...error, name: true, price: true });
    } else {
      if (totalExpense + parseInt(formData.price) > income) {
        const excced =
          totalExpense + parseInt(formData.price) - parseInt(income);
        toast.error(`Income execced by ${excced} !`);
      } else {
        dispatch(addExpenseAction(formData));
        dispatch(setTotalAction(formData.price));
        setFormData({ name: "", price: "" });
        toast.success("Expense added!");
        setError({ ...error, name: false, price: false });
      }
    }
  };

  return (
    <div className="p-4 flex justify-center items-center w-full mx-auto">
      <div className="max-w-2xl w-full justify-between items-center flex flex-row  gap-4 mx-auto">
        <div className="flex md:flex-row flex-col gap-4">
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: 'Apple'"
            className={`${
              error.name && "ring-1 ring-red-600 "
            } outline-green-600 bg-white rounded-full p-2 text-black shadow-lg`}
          />
          <input
            min={0}
            required
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            type="number"
            placeholder="Ex: ₹ '40'"
            className={`${
              error.price && "ring-1 ring-red-600 "
            } outline-green-600 bg-white rounded-full p-2 text-black shadow-lg`}
          />
        </div>
        <button
          onClick={handleAddExpense}
          className="bg-pink-500 focus:bg-violet-800 w-1/3 rounded-full p-2 hover:bg-pink-600 shadow-lg outline-none hover:outline-black"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
