import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductState } from "../types/types";

const initialState: ProductState = {
  products: [],
  status: "loading",
  error: null,
};

//fetchProducts
//createAsyncThunk -> automatically create three action types
//fetchProducts/pending -> dispatched wjen rquest starts
//fetchProducts/fullfilled -> dispatched when rquest success
//fetchProducts/rejected -> dispatched when rquest fails

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch data";
    });
  },
});

export default productsSlice.reducer;
