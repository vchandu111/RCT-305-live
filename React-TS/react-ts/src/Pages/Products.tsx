import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/productSlice";
import { AppDispatch } from "../store";
import { RootState } from "../store";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <div>Products</div>;
};

export default Products;
