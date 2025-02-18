const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
    totalExpense: 0,
    countActionPerfomed: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    setTotalAction: (currentSlice, action) => {
      currentSlice.totalExpense += parseInt(action.payload);
    },
    incrementActionPerformed: (currentSlice) => {
      currentSlice.countActionPerfomed++;
    },
  },
});

export const {
  addExpenseAction,
  setIncomeAction,
  setTotalAction,
  incrementActionPerformed,
} = expenseSlice.actions;
