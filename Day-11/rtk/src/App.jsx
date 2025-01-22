import React from 'react'
import Budget from './Components/Budget'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'

const App = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Budget />
      <ExpenseForm />
      <ExpenseList/>
    </div>
  )
}

export default App