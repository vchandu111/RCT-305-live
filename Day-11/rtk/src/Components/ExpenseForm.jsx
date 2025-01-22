import React, { useState } from "react";
import "../styles/expenseForm.css";
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addExpense } from "../RTK/ExpenseSlice";

const ExpenseForm = () => {
    const dispatch = useDispatch()
  const [des, setDes] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("other");

  const handleSubmit = (e) => {
    e.preventDefault();

      const expense = {
        id:uuidv4(),
      des: des,
      amount: amount,
      category: category,
    };
    console.log(des, amount, category);
      dispatch(addExpense(expense)); 
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter description"
        onChange={(e) => setDes(e.target.value)}
      />
      <input
        type="number"
        placeholder="enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="other">Other</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

//module.css, styled components
