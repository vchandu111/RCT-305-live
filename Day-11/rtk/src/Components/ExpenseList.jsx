import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/expenseList.css'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../RTK/ExpenseSlice'
const ExpenseList = () => {
    const dispatch = useDispatch()
    const expenses = useSelector(state => state.expenses)
    console.log(expenses)

    const handleDelete=(id)=>{
        dispatch(deleteExpense(id)) 
    }
  return (
    <div className="expense-list">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.des}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button onClick={()=>handleDelete(expense.id)}  className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}

export default ExpenseList