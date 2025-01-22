import { configureStore } from "@reduxjs/toolkit"; 
import expenseReducer from './ExpenseSlice'; // Import your reducer

export const storeRTK = configureStore({
    reducer: {
      expenses: expenseReducer  // Add reducer to store
    }
});
  
