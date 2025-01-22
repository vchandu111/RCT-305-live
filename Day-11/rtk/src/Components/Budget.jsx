import React from "react";
import '../styles/budget.css'
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { setBudget } from "../RTK/ExpenseSlice";
const Budget = () => {
    const dispatch = useDispatch() 
    const budget = useSelector((state) => state.budget)
    const expenses = useSelector(state => state.expenses)
    console.log(expenses)
    const totalExpenses = expenses.reduce((acc,cv)=>acc+Number(cv.amount),0)
    console.log(budget, "budget")
    const remaining = budget-totalExpenses
    const [newBudget, setNewBudget] = useState("")
    const handleSubmit = () => {
        console.log(newBudget)
        dispatch(setBudget(newBudget))
    }
  return (
    <div className="budget-container">
      <div className="budget-input">
        <input value={newBudget} onChange={(e)=>setNewBudget(e.target.value)} type="number" />
        <button onClick={handleSubmit}>Set Budget</button>
      </div>
      <div className="budget-stats">
        <div className="stat-box">
          <h3>Total Budget</h3>
        <p className="amount">{ budget}</p>
        </div>
        <div className="stat-box">
          <h3>Total Expenses</h3>
                  <p className="amount">{ totalExpenses}</p>
        </div>
        <div className="stat-box">
          <h3>Remaining</h3>
                  <p className="amount">{ remaining}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
