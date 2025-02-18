import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addExpenseAction, incrementActionPerformed, setIncomeAction } from "../store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    // predicate : (action)=>{
    //     return action.type === "expenseSlice/addExpenseAction"
    // },
    // predicate and matcher currently working same
    matcher : isAnyOf(addExpenseAction),
    effect: async (action, listnerAPI)=> {
        listnerAPI.dispatch(incrementActionPerformed())
        console.log("Action",action);
        console.log("New Store value",listnerAPI.getState());
    }
})