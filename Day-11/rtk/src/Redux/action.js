import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET } from "./actionTypes";

export const setBudget = (amount) => {
    console.log(amount)
    return{
        type: SET_BUDGET,
        payload:amount
    }
}

export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload:expense
})

export const deleteExpense = (id) => ({
    type: DELETE_EXPENSE, 
    payload: id
  });